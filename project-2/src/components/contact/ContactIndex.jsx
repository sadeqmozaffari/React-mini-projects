import React, { useState } from "react";
import AddContact from "./AddContact";
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
    setContactList(new_update);
  };
  const deleteFun = (id) => {
    const new_update = contactList.filter((item) => {
      return item.id !== id && item;
    });
    setContactList(new_update);
  };
  const AddRandom = (NC) => {
  
    let lastId = 0;
    if (contactList.length === 0) {
      lastId = 1;
    } else {
      lastId = contactList.reverse()[0].id;
    }
    const newContact = { name:NC.name, email:NC.email, phone:NC.phone, isFavorite: false, id: lastId };
    setContactList(contactList.concat(newContact));
  
};
  return (
    <div className="container  box-content d-flex flex-column text-white">
      <div className="d-flex  gap-4 mb-3 w-100">
        <AddRandomContact AddRandom={AddRandom} />
        <RemoveAllContacts setContactList={setContactList} />
      </div>
      <AddContact contactList={contactList} setContactList={setContactList} />
      <div className="favorit d-flex flex-column w-100 p-4 border-gray mt-2 ">
        <h5 className="p2">Favorit Contacts</h5>
        <Contacts
          contacts={contactList.filter((item) => item.isFavorit === true)}
          setContactList={setContactList}
          ToggleFavorite={ToggleFavorite}
          deleteFun={deleteFun}
        />
      </div>
      <div className="favorit d-flex flex-column w-100 p-4 border-gray mt-2 ">
        <h5 className="p2">Favorit Contacts</h5>
        <Contacts
          contacts={contactList.filter((item) => item.isFavorit !== true)}
          setContactList={setContactList}
          ToggleFavorite={ToggleFavorite}
          deleteFun={deleteFun}
        />
      </div>
    </div>
  );
};

export default ContactIndex;
