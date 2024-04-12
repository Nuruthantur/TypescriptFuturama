import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function UpdateProfilePage() {
  //   const { loading } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        //    if (!email || !password) return alert("all fields must be included");
        console.log("submitting");
        //    submit;
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
      <button type="submit">Update</button>
      {/* <button type="submit">{loading ? "Loading..." : submit}</button> */}
    </form>
  );
}

export default UpdateProfilePage;
