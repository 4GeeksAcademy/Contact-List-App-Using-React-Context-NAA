import React, { createContext, useEffect, useState } from "react";

const API_BASE = "https://playground.4geeks.com/contact/agendas";
const AGENDA_SLUG = "Nicksteel91";
const CONTACTS_URL = `${API_BASE}/${AGENDA_SLUG}/contacts`;

export const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const createAgenda = async () => {
    try {
      const res = await fetch(`${API_BASE}/${AGENDA_SLUG}`);
      if (res.ok) return true;
      if (res.status === 404) return false;
    } catch (err) {
      console.error("Agenda check failed:", err);
    }
    return false;
  };

  const fetchContacts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(CONTACTS_URL);
      const data = await res.json();
      setContacts(data.contacts || []);
    } catch (err) {
      console.error("Failed to fetch contacts:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const createContacts = async (contact) => {
    const payload = { ...contact, agenda_slug: AGENDA_SLUG };
    try {
      const res = await fetch(CONTACTS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) fetchContacts();
    } catch (err) {
      console.error("Create contact error:", err);
    }
  };

  const updateContacts = async (id, contact) => {
    const payload = { ...contact, agenda_slug: AGENDA_SLUG };
    try {
      const res = await fetch(`${CONTACTS_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) fetchContacts();
    } catch (err) {
      console.error("Update contact error:", err);
    }
  };

  const deleteContacts = async (id) => {
    try {
      const res = await fetch(`${CONTACTS_URL}/${id}`, { method: "DELETE" });
      if (res.ok) setContacts(prev => prev.filter(c => c.id !== id));
    } catch (err) {
      console.error("Delete contact error:", err);
    }
  };

  useEffect(() => {
    const init = async () => {
      await createAgenda();
      await fetchContacts();
    };
    init();
  }, []);

  return (
    <ContactsContext.Provider
      value={{ contacts, isLoading, createContacts, updateContacts, deleteContacts }}
    >
      {children}
    </ContactsContext.Provider>
  );
};