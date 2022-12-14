import React, { createContext, useState, useEffect } from "react";

const initialInfo = {
  userid: null,
  name: null,
  email: null,
  password: null,
  memtype: null
};

export const GlobalContext = createContext( initialInfo );

export const GlobalStore = ( { children } ) => {
  const [info, setInfo] = useState( initialInfo )

  const updateInfo = (newInfo) => {
    console.log('In Global', newInfo);
    setInfo( newInfo )
  }

  useEffect(() => {
    updateInfo( initialInfo )
  }, [])

  return (
    <GlobalContext.Provider value={{ info, updateInfo }}>
      {children}
    </GlobalContext.Provider>
  )
};
