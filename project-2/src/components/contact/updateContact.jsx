import React, { useState } from "react";

const UpdateContact = ({ contact, updateContact, setSelectId }) => {
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
      updateContact({ name, email, phone });
    }
  };

  const [error, setError] = useState("");
  const [name, setName] = useState(contact[0].name);
  const [phone, setPhone] = useState(contact[0].phone);
  const [email, setEmail] = useState(contact[0].email);

  return (
    <div className="d-flex flex-column py-4 px-3 w-100 gpa-4 border-gray">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h5 className="">Edit Contact</h5>
        <div className="d-flex gap-2">
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value.trim());
            }}
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
          value="Update"
          className="my-2 mx-1 btn btn-primary "
        />
        <button
          type="btn"
          className="btn btn-secondary"
          onClick={() => {
            setSelectId();
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateContact;
