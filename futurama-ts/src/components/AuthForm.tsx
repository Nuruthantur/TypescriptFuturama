import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

type Props = {
  submitTitle: string;
  submit: (email: string, password: string) => void;
};

const AuthForm = ({ submitTitle, submit }: Props) => {
  const { loading } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!email || !password) return alert("all fields must be included");
        console.log("submitting");
        submit(email, password);
      }}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">{loading ? loading : submitTitle}</button>
    </form>
  );
};

export default AuthForm;
