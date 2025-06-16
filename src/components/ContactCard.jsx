import React from "react";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, onDelete }) => (
  <div className="card mb-3 bg-info bg-opacity-10">
    <div className="card-body d-flex align-items-center justify-content-between">

      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Contact"
        className="rounded-circle me-3"
        style={{ width: "80px", height: "80px", objectFit: "cover" }}
      />

      <div className="flex-grow-1 ms-3">
        <h3 className="card-title fw-bold">{contact.name}</h3>
        <p className="card-text mb-1"><strong className="text-primary">Phone Number:</strong> {contact.phone}</p>
        <p className="card-text mb-1"><strong className="text-primary">Home Address:</strong> {contact.address}</p>
        <p className="card-text mb-1"><strong className="text-primary">Personal Email:</strong> {contact.email}</p>
      </div>

      <div className="d-flex flex-column align-items-end gap-2">
        <Link to={`/edit-contact/${contact.id}`} className="btn btn-light btn-sm">Edit</Link>
        <button className="btn btn-danger btn-sm" onClick={() => onDelete(contact.id)}>Delete</button>
      </div>
    </div>
  </div>
);

export default ContactCard;