import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  trans: [],
};

const GlobalContext = createContext(initialState);

const GlobalStore = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <GlobalContext.Provider value={{ trans: state.trans }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStore;
