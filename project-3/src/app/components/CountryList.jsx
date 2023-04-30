import React, { useState } from "react";
import { useSelector } from "react-redux";

const CountryList = () => {
  const [country, setCountry] = useState();
  const countries = useSelector((state) => state.countryStore.countries);
  console.log(countries);
  return (
    <div className="d-flex flex-column">
      {countries.map((item) => (
        <div
          className="container d-flex justify-content-between py-4"
          key={item.country}
        >
          <h4> {item.country}</h4>
          <div className="">
            <button
              className="btn btn-primary"
              onClick={() => {
                setCountry(item);
              }}
            >
              Details
            </button>
          </div>
        </div>
      ))}

      {country !== undefined && (
        <div className="container d-flex gap-2 ">
          <p>country Name :{country.country}</p>
          <p>country Population :{country.population}</p>
          <p>country Province :{country.province}</p>
          <p>country Info :{country.info}</p>
        </div>
      )}
    </div>
  );
};

export default CountryList;
