import { useState } from "react";
import Warning from "./Warning";
import { bannedWords } from "../lib/bannedWords";

export default function Textarea({ text, setText }) {
  const [warningText, setWarningText] = useState("");

  const handleChange = (event) => {
    const userText = event.target.value;
    const userTextLower = userText.toLowerCase();

    const matchedWord = bannedWords.find((bannedWord) =>
      userTextLower.includes(bannedWord.toLowerCase())
    );

    if (matchedWord) {
      setWarningText(`You typed a forbidden word: '${matchedWord}'`);
      const regex = new RegExp(matchedWord, "gi");
      const filteredText = userText.replace(regex, "");
      setText(filteredText);
    } else {
      setWarningText("");
      setText(userText);
    }
  };

  return (
    <div className="textarea">
      <textarea
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
        value={text}
      />
      {warningText && <Warning warningText={warningText} />}
    </div>
  );
}
