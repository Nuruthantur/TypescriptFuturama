import { PropsWithChildren, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to={"/auth"} />;
  return children;
};

export default ProtectedRoute;
