import React, { createContext } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  return (
    <>
      <MyContext.Provider
        value={{}}
      >
        {children}
      </MyContext.Provider>
    </>
  );
};