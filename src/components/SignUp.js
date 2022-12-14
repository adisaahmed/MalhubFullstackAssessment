import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log("In Sign Up", data);

  return (
    <>
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstname"
          {...register( "firstname", { required: true }) }
        />
        {errors.firstname ? (
          <span className="">First Name is required</span>
        ) : null}

        <label>Last Name</label>
        <input type="text" name="lastname" {...register( "lastname", { required: true })} />
        {errors.lastname ? (
          <span className="">Last Name is required</span>
        ) : null}

        <label>Email</label>
        <input type="text" name="email" {...register( "email", { required: true })} />
        {errors.email ? <span className="">Email is required</span> : null}

        <label>Password</label>
        <input type="text" name="password" {...register( "password", { required: true })} />
        {errors.password ? (
          <span className="">Password is required</span>
        ) : null}

        <button type="submit">Register</button>
      </div>
    </form>
  </>
  )
};

export default SignUp;
