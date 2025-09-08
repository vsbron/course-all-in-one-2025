"use client";

import { useActionState } from "react";

import { createUser as createUserAction } from "@/utils/action";
import { formStyle, inputStyle } from "@/utils/styles";

import SubmitButton from "./SubmitButton";

function Form() {
  // Getting the message from form state hook
  const [message, formAction] = useActionState(createUserAction, null);

  // Returned JSX
  return (
    <form action={formAction} className={formStyle}>
      {message && <p>{message}</p>}
      <h2 className="text-2xl capitalize mb-4">create user</h2>
      <input
        type="text"
        name="firstName"
        defaultValue="Peter"
        required
        className={inputStyle}
      />
      <input
        type="text"
        name="lastName"
        defaultValue="Parker"
        required
        className={inputStyle}
      />
      <SubmitButton />
    </form>
  );
}

export default Form;
