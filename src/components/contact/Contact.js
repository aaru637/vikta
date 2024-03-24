import React from "react";
import contactDetails from "../../utils/contactUtils";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <div className="flex gap-8 flex-row flex-wrap justify-center items-center p-5">
      {contactDetails.map((data, index) => (
        <ContactCard key={index} data={data} />
      ))}
    </div>
  );
};

export default Contact;
