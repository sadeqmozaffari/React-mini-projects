import React, { useState } from "react";
import "./country.css";
import CountryList from "../../components/CountryList";
import {
  useGetAllCountryQuery,
  useAddCountryMutation,
  useUpdateCountryMutation,
  useDeleteCountryMutation,
} from "../../api/countryAPI";
const Country = () => {
  const [addCountry, result] = useAddCountryMutation();
  const { data, isError, error, isLoading, isSuccess } =
    useGetAllCountryQuery();
  const [editItem] = useUpdateCountryMutation();
  const [deleteFun] = useDeleteCountryMutation();
  const deleteItem = (id) => {
    deleteFun({ id });
  };

  let content;
  let loading;
  if (isLoading) {
    loading = <p>Loading ...</p>;
  } else if (isSuccess) {
    console.log(data);
    content = data;
  }
  const [country, setCountry] = useState();
  const [province, setProvince] = useState();
  const formSubmit = (e) => {
    e.preventDefault();
    addCountry({
      id: Math.random() * 100,
      country: country,
      province: province,
    });
    setCountry("");
    setProvince("");
  };
  return (
    <div className="flex-column">
      <h1>Country </h1>
      <form onSubmit={formSubmit}>
        <div className="d-flex-row">
          <div className="flex-column-form">
            <label htmlFor="country">country</label>
            <input
              className="input-form"
              type="text"
              id="country"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </div>
          <div className="flex-column-form">
            <label htmlFor="province">province</label>
            <input
              className="input-form"
              type="text"
              id="province"
              value={province}
              onChange={(e) => {
                setProvince(e.target.value);
              }}
            />
          </div>
          <div className="flex-btn">
            <button type="submit" className="btn-submit">
              Add
            </button>
          </div>
        </div>
        <hr className="mt-4" />
      </form>
      <CountryList
        content={content}
        loading={loading}
        editItem={editItem}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default Country;
