import React, { useState } from "react";
import AddContact from "./AddContact";
import FavoirtContact from "./FavoirtContact";
import Contacts from "./Contacts";
import AddRandomContact from "./AddRandom";
import RemoveAllContacts from "./RemoveAllContacts";

const ContactIndex = () => {
  const [contactList, setContactList] = useState([
    {
      id: 1,
      name: "sadeq mozaffari",
      phone: "079912334",
      email: "sadeq@gmail.com",
      isFavorit: false,
    },
    {
      id: 2,
      name: "Mohamad mozaffari",
      phone: "079912334",
      email: "mohamad@gmail.com",
      isFavorit: true,
    },
    {
      id: 3,
      name: "Mohamad mozaffari",
      phone: "079912334",
      email: "mohamad@gmail.com",
      isFavorit: true,
    },
  ]);
  return (
    <div className="container  box-content d-flex flex-column text-white">
      <div className="d-flex  gap-4 mb-3 w-100">
        <AddRandomContact />
        <RemoveAllContacts />
      </div>
      <AddContact />
      <FavoirtContact
        contacts={contactList.filter((item) => item.isFavorit === true)}
        setContactList={setContactList}
      />
      <Contacts
        contacts={contactList.filter((item) => item.isFavorit !== true)}
        setContactList={setContactList}
      />
    </div>
  );
};

export default ContactIndex;
