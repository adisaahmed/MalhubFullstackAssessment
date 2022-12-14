import React, { useContext } from "react";
import { GlobalContext } from "./GlobalStore";

const Logout = () => {
  const { updateInfo } = useContext(GlobalContext);

  const logoutnow = () => {
    const newmem = {
      userid: null,
      name: null,
      email: null,
      password: null,
      memtype: null,
    };
    updateInfo(newmem);
  };

  return (
    <>
      <h1>Please Logout</h1>

      <p>You have been log out</p>

      <button className="btn2" onClick={ () => logoutnow() }> Logout </button>
    </>
  );
};

export default Logout;
