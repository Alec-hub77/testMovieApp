import React, { createContext, useContext, useState } from "react";

const DataUserContext = createContext();

export const DataUserProvider = ({ children }) => {
  const [data, setData] = useState({});
  

  const setValues = (values) => {
    setData((prevData) => ({ ...prevData, ...values }));
  };

  return (
    <DataUserContext.Provider value={{ data, setValues }}>
      {children}
    </DataUserContext.Provider>
  );
};


export const useData = () => useContext(DataUserContext)