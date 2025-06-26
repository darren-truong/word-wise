import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");
  const [warningText, setwarningText] = useState("");

  const handleClick = (event) => {
    let userText = event.target.value;
    if (userText.includes("test")) {
      setwarningText(`The word "test" is not allowed!`);
      userText = userText.replace("test", "");
    } else {
      setwarningText("");
    }
    setText(userText);
  };

  return (
    <div>
      <textarea
        onChange={handleClick}
        placeholder="Enter your text"
        spellCheck="false"
        value={text}
      />
      {warningText ? <Warning warningText={warningText} /> : null}
    </div>
  );
}
