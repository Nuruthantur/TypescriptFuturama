import { useContext } from "react";
import Counter from "../components/Counter";

const Homepage = () => {
  // const context = useContext(AuthContext);
  // console.log(context);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>This is the homepage</h1>
      <p>
        Welcome to my App! I have no idea about it's purpose yet. Stay tuned ^^
      </p>
      <Counter></Counter>
    </div>
  );
};

export default Homepage;
