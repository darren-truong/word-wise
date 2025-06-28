export default function Stats({
  stats: {
    numberOfWords,
    numberOfCharacters,
    twitterFreeCharactersLeft,
    twitterPaidCharactersLeft,
  },
}) {
  return (
    <section className="stats">
      <Stat number={numberOfWords} label="Words" />
      <Stat number={numberOfCharacters} label="Characters" />
      <Stat number={twitterFreeCharactersLeft} label="Twitter/X Free" />
      <Stat number={twitterPaidCharactersLeft} label="Twitter/X Paid" />
    </section>
  );
}

function Stat({ label, number }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2>{label}</h2>
    </section>
  );
}
