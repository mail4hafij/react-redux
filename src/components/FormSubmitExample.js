import React from "react";
import { useForm } from "react-hook-form";

export default function FormSubmitExample() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2>Form submit example using useForm!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        Email <br />
        <input
          type="text"
          name="email"
          ref={register({ required: "email required" })}
        />
        <br />
        Message <br />
        <textarea
          name="message"
          ref={register({ required: true, minLength: 20 })}
        ></textarea>
        <br />
        {errors.message && <p>Minimum characters 10</p>}
        <button type="submit">Contact us</button>
      </form>
    </div>
  );
}
