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
  const ToggleFavorite = (id) => {
    const new_update = contactList.map((item) => {
      return item.id === id ? { ...item, isFavorit: !item.isFavorit } : item;
    });
    console.log(id);
    console.log(new_update);
    setContactList(new_update);
  };
  const deleteFun = (id) => {
    const new_update = contactList.filter((item) => {
      return item.id !== id && item;
    });
    setContactList(new_update);
  };
  return (
    <div className="container  box-content d-flex flex-column text-white">
      <div className="d-flex  gap-4 mb-3 w-100">
        <AddRandomContact />
        <RemoveAllContacts setContactList={setContactList} />
      </div>
      <AddContact contactList={contactList} setContactList={setContactList} />
      <FavoirtContact
        contacts={contactList.filter((item) => item.isFavorit === true)}
        setContactList={setContactList}
        ToggleFavorite={ToggleFavorite}
        deleteFun={deleteFun}
      />
      <Contacts
        contacts={contactList.filter((item) => item.isFavorit !== true)}
        setContactList={setContactList}
        ToggleFavorite={ToggleFavorite}
        deleteFun={deleteFun}
      />
    </div>
  );
};

export default ContactIndex;
