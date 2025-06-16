import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ContactsContext } from "../reactContext/context";
import NewContactTemplate from "../components/NewContactTemplate";

const EditContact = () => {
  const { contactId } = useParams();
  const { contacts } = useContext(ContactsContext);
  const navigate = useNavigate();
  const currentContact = contacts.find(c => c.id === Number(contactId));

  return (
    <div>
      <NewContactTemplate currentContact={currentContact} />
    </div>
  );
};

export default EditContact;