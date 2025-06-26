export default function Stats() {
  return (
    <section>
      <Stat number={0} label="Words" />
      <Stat number={0} label="Characters" />
      <Stat number={280} label="Twitter/X: Free User" />
      <Stat number={2200} label="Twitter/X: Paid User" />
    </section>
  );
}

function Stat({ label, number }) {
  return (
    <section>
      <span>{number}</span>
      <h2>{label}</h2>
    </section>
  );
}
