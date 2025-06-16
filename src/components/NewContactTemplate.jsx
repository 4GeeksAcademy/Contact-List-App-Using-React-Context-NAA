import React, { useState, useEffect, useContext } from "react";
import { ContactsContext } from "../reactContext/context";
import { useNavigate } from "react-router-dom";

const NewContactTemplate = ({ currentContact }) => {
  const { createContacts, updateContacts } = useContext(ContactsContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: ""
  });

  useEffect(() => {
    setForm({
      name: currentContact?.name || "",
      email: currentContact?.email || "",
      phone: currentContact?.phone || "",
      address: currentContact?.address || "",
    });
  }, [currentContact]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    currentContact?.id
      ? await updateContacts(currentContact.id, form)
      : await createContacts(form);
    navigate("/");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
  <div className="card p-4 shadow" style={{ maxWidth: "600px", width: "100%" }}>
    <div className="text-center mb-4">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Contact Avatar"
        className="rounded-circle mb-2"
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
      />
      <h2 className="fw-bold">{currentContact ? "Edit Contact" : "Add New Contact"}</h2>
      <p className="text-muted">Keep your contacts organized</p>
    </div>

    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name and Last Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          placeholder="Donald Trump"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form-control"
          placeholder="+123 456 7890"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">Home Address</label>
        <input
          type="text"
          id="address"
          name="address"
          className="form-control"
          placeholder="1600 Pennsylvania Ave NW, Washington, DC 20500, USA"
          value={form.address}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="form-label">Personal Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          placeholder="us.president@airforceone.com"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        {currentContact ? "Update Contact" : "Save Contact"}
      </button>
    </form>
  </div>
</div>
  );
};

export default NewContactTemplate;