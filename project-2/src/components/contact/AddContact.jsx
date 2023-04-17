import React from "react";

const AddContact = () => {
  return (
    <div className="d-flex flex-column py-4 px-3 w-100 gpa-4 border-gray">
      <h5 className="">Add a new Contact</h5>
      <div className="d-flex gap-2">
        <input type="text" placeholder="Name" className="form-control" />
        <input type="email" placeholder="Email" className="form-control" />
        <input type="text" placeholder="Phone" className="form-control" />
      </div>
      <button className="btn btn-primary my-2" onClick={() => {}}>
        Create
      </button>
    </div>
  );
};

export default AddContact;
