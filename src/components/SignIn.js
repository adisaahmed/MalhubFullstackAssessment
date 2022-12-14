import React, { useContext } from "react";
import { GlobalContext } from "./GlobalStore";

const Login = () => {
  const { updateInfo } = useContext(GlobalContext);

  const loginnow = () => {
    const newmem = {
      userid: 'ABC',
      name: 'Ahmed',
      email: 'ahmed@gmail.com',
      password: '0000',
      memtype: 'Basic',
    };
    updateInfo(newmem);
  };

  return (
    <>
      <h1>Please Login</h1>

      <p>Welcome to your dashboard</p>

      <button className="btn2" onClick={ () => loginnow() }> Login </button>
    </>
  );
};

export default Login;
