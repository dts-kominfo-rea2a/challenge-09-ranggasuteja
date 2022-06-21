// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import ProfilCard from "./ProfilCard";

const Contact = (props) => {
  let { data } = props;
  return (
    <div className="card">
      <ProfilCard photo={data.photo} avatar={data.name} />
      <div className="card-body">
        <h3>{data.name}</h3>
        <span>{data.phone}</span>
        <span>{data.email}</span>
      </div>
    </div>
  );
};

export default Contact;
