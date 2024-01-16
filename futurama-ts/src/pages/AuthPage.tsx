import { useContext } from "react";
import AuthForm from "../components/AuthForm";
import { AuthContext } from "../context/AuthContext";

const AuthPage = () => {
  const { login, signup } = useContext(AuthContext);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        textAlign: "center",
      }}
    >
      <div>
        <h1>Login</h1>
        <AuthForm submitTitle="login" submit={login} />
      </div>
      <div>
        <h1>Sign up</h1>
        <AuthForm submitTitle="signup" submit={signup} />
      </div>
    </div>
  );
};

export default AuthPage;
