import React from "react";
import axios from "axios";
const AddRandom = ({ AddRandom }) => {
  const add =async () => {
  await  axios
      .get("https://random-data-api.com/api/v2/users?size=2&is_xml=true", {
        headers: {},
        params: { size: 1 },
      })
      .then((res) => {
        AddRandom({
          phone: res.data.phone_number,
          name: res.data.first_name,
          email: res.data.email,
        });
      });
  };
  return (
    <button
      type="button"
      className="btn btn-success flex-fill"
      onClick={() => {
        add();
      }}
    >
      Add Random Contact
    </button>
  );
};

export default AddRandom;
