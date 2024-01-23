import { useState } from "react"


type Props = {
    handleSubmit: (userInput: string) => void
  }

export default  function ChatInput({handleSubmit}: Props) {
        const [userInput, setUserInput] = useState("");

        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
              <textarea placeholder="Write your comment here...." value={userInput} onChange={(e) => setUserInput(e.target.value)} />
              <button onClick={() => handleSubmit(userInput)}>Submit</button>
            </div>
          )       
          
    }
  