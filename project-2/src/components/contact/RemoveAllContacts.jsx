import React from "react";

const RemoveAllContacts = ({ setContactList }) => {
  return (
    <button
      type="button"
      className="btn btn-danger flex-fill"
      onClick={() => {
        setContactList([]);
      }}
    >
      Remove All Contacts
    </button>
  );
};

export default RemoveAllContacts;
