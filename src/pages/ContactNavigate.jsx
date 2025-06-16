import React from "react";
import NewContactTemplate  from "../components/NewContactTemplate";

import { useNavigate } from "react-router-dom";

const ContactNavigate = () => {
    const navigate = useNavigate();
  return (
    <div>
      <NewContactTemplate />    
    </div>
  );
};

export default ContactNavigate;