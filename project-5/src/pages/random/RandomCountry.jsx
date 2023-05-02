import React from "react";
import { useGetRandomCountryQuery } from "../../api/RandomCountryAPI";
const RandomCountry = () => {
  const { data, isError, error, isLoading, isSuccess } =
    useGetRandomCountryQuery();
  let content;
  let loading;
  if (isLoading) {
    content = <p>Loading ...</p>;
  } else if (isSuccess) {
    console.log(data);
    content = data;
  }
  return (
    <div key={content.id} style={{ width: 1000 }}>
      <p>country: {content.country}</p>
      <p>city: {content.city}</p>
      {error}
    </div>
  );
};

export default RandomCountry;
