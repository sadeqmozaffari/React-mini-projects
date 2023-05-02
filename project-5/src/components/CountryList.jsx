import React, { useState } from "react";

const CountryList = ({ content, loading, deleteItem, editItem }) => {
  const [editId, setEditId] = useState();
  const [country, setCountry] = useState();
  const [province, setProvince] = useState();
  const handlerEdit = () => {
    editItem({
      id: editId,
      country: country,
      province: province,
    });
    setEditId();
    setCountry();
    setProvince();
  };
  return (
    <div>
      {loading
        ? loading
        : content.map((item) => (
            <div className="flex-row-info" key={item.id}>
              {editId !== item.id ? (
                <>
                  <p>{item.country}</p>
                  <p>{item.province}</p>
                  <div>
                    <button
                      onClick={() => {
                        setEditId(Number(item.id));
                      }}
                    >
                      edit
                    </button>
                    <button onClick={() => deleteItem(item.id)}>delete</button>
                  </div>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder={item.country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder={item.province}
                    onChange={(e) => setProvince(e.target.value)}
                  />

                  <div>
                    <button
                      onClick={() => {
                        setEditId();
                      }}
                    >
                      cancel
                    </button>
                    <button
                      onClick={() => {
                        handlerEdit();
                      }}
                    >
                      save
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
    </div>
  );
};

export default CountryList;
