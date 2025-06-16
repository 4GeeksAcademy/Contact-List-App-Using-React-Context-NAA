import React from "react";
import ContactsContainer from "../components/ContactsContainer";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div
        className="d-flex flex-column justify-content-center align-items-center text-white"
        style={{
          height: "50vh",
          backgroundImage: "url('https://images.unsplash.com/photo-1518609878373-06d740f60d8b')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
        }}
      >
        <h1 className="mb-4 display-3 text-center">Welcome to your Personal Agenda</h1>
        <Link to="/add-contact" className="btn btn-light">
          + New Contact
        </Link>
      </div>

      <div className="container my-5">
        <ContactsContainer />
      </div>
    </div>
  );
};