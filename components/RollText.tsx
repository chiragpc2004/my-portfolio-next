/** Text whose letters roll up on hover of the parent link or button. */
export default function RollText({ children }: { children: string }) {
  const chars = Array.from(children);
  const row = (hidden: boolean) => (
    <span className="roll-row" aria-hidden={hidden || undefined}>
      {chars.map((c, i) => (
        <span key={i} className="roll-ch" style={{ ["--i" as string]: i }}>
          {c}
        </span>
      ))}
    </span>
  );
  return (
    <span className="roll">
      <span className="sr-only">{children}</span>
      <span aria-hidden="true" style={{ display: "contents" }}>
        {row(false)}
        {row(true)}
      </span>
    </span>
  );
}
