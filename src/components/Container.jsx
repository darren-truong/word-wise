import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import {
  TWITTER_FREE_MAX_CHARACTERS,
  TWITTER_PAID_MAX_CHARACTERS,
} from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharacters: text.length,
    twitterFreeCharactersLeft: TWITTER_FREE_MAX_CHARACTERS - text.length,
    twitterPaidCharactersLeft: TWITTER_PAID_MAX_CHARACTERS - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
