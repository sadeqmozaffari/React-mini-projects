import React, { useState } from "react";

const AddContact = ({ contactList, setContactList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 1) {
      setError("name is required");
    } else if (email.length < 1) {
      setError("email is required");
    } else if (phone.length < 1) {
      setError("phone is required");
    } else if (email.length < 1) {
      setError("email is required");
    } else {
      setError("");
      let lastId = 0;
      if (contactList.length === 0) {
        lastId = 1;
      } else {
        lastId = contactList.reverse()[0].id;
      }
      const newContact = { name, email, phone, isFavorite: false, id: lastId };
      setContactList(contactList.concat(newContact));
    }
  };

  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="d-flex flex-column py-4 px-3 w-100 gpa-4 border-gray">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h5 className="">Add a new Contact</h5>
        <div className="d-flex gap-2">
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            onChange={(e) => {
              setName(e.target.value.trim());
            }}
            value={name}
          />
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            onChange={(e) => {
              setEmail(e.target.value.trim());
            }}
            value={email}
          />
          <input
            type="text"
            placeholder="Phone"
            className="form-control"
            onChange={(e) => {
              setPhone(e.target.value.trim());
            }}
            value={phone}
          />
        </div>
        {error.length > 3 && (
          <div className="text-danger p-4 text-center">{error}</div>
        )}

        <input
          type="submit"
          value="Create"
          className="form-control my-2 btn btn-primary "
        />
      </form>
    </div>
  );
};

export default AddContact;
