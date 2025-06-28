import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({ text, setText }) {
  const [warningText, setwarningText] = useState("");

  const handleClick = (event) => {
    let userText = event.target.value;
    if (userText.includes("Angular")) {
      setwarningText(`The word "Angular" is not allowed!`);
      userText = userText.replace("Angular", "");
    } else {
      setwarningText("");
    }
    setText(userText);
  };

  return (
    <div className="textarea">
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
