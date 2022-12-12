import React, { createContext, useState } from "react";
import Reducer from "./Reducer";

const initialInfo = {
  userid: null,
  name: null,
  email: null,
  password: null,
  memtype: null
};

export const GlobalContext = createContext( initialInfo );

export const GlobalStore = ( children ) => {
  const [info, setInfo] = useState( initialInfo )

  return (
    <GlobalContext.Provider value={{ info }}>
      {children}
    </GlobalContext.Provider>
  )
};
