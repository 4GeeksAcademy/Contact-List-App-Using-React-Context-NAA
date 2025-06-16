import React, { useContext } from "react";
import { ContactsContext } from "../reactContext/context";
import ContactCard from "./ContactCard";

const ContactsContainer = () => {
  const { contacts, isLoading, deleteContacts } = useContext(ContactsContext);

  if (isLoading) return <p>Loading Agenda...</p>;

  return (
    <div className="container mt-4">
      <h1>My BFFs 👫🏻:</h1>
      {contacts.length === 0 ? (
        <p>No Friends :( — you poor lonely man, get some contacts.</p>
      ) : (
        contacts.map(contact => (
          <ContactCard key={contact.id} contact={contact} onDelete={deleteContacts} />
        ))
      )}
    </div>
  );
};

export default ContactsContainer;