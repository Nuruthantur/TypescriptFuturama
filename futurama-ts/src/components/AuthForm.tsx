import React, { useState } from "react";

type Props = {
  submitTitle: string;
  submit: (email: string) => void;
};

const AuthForm = ({ submitTitle, submit }: Props) => {
  const [email, setEmail] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!email) return alert("email must be included");
        submit(email);
      }}
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">{submitTitle}</button>
    </form>
  );
};

export default AuthForm;
