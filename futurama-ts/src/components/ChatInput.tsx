import { useState } from "react";

type Props = {
  handleSubmit: (
    userInput: string,
    setUserInput: React.Dispatch<React.SetStateAction<string>>
  ) => void;
};

export default function ChatInput({ handleSubmit }: Props) {
  const [userInput, setUserInput] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}>
      <textarea
        placeholder="Write your comment here...."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value.trim)}
      />
      <button onClick={() => handleSubmit(userInput, setUserInput)}>
        Submit
      </button>
    </div>
  );
}
