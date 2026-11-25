import { R, Row } from "@/components/ui";
import { journey, next } from "@/content/journey";

export default function FieldLog() {
  return (
    <Row id="journey" title="Journey" note="Newest first">
      <ol>
        <li data-reveal className="grid gap-1 pb-8 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
          <p className="flex items-center gap-2 text-small text-signal"><span aria-hidden="true" className="h-[7px] w-[7px] rounded-full bg-signal shadow-[0_0_10px_rgb(var(--signal))]" />Next</p>
          <p className="font-medium">{next}</p>
        </li>
        {journey.map((e, i) => (
          <li
            key={e.dates + e.place}
            data-reveal
            style={R(i % 3)}
            className="grid gap-1 border-t border-line/[0.08] py-8 sm:grid-cols-[8.5rem_1fr] sm:gap-6"
          >
            <p className="text-small text-muted tabular-nums sm:pt-0.5">{e.dates}</p>
            <div>
              <h3 className="font-semibold">
                {e.role} <span className="font-normal text-muted">· {e.short ?? e.place}</span>
              </h3>
              <div className="mt-2 grid gap-2 max-w-[42rem] text-muted">
                {e.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <ul className="mt-3 grid gap-1 text-small">
                {e.note ? (
                  <li>
                    <span className="text-muted">{e.note.label}: </span>
                    {e.note.text}
                  </li>
                ) : null}
                {e.award ? (
                  <li>
                    <span className="text-muted">Award: </span>
                    {e.award}
                  </li>
                ) : null}
                {e.tools ? <li className="text-muted">{e.tools}</li> : null}
              </ul>
              {e.link ? (
                <a
                  href={e.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-small font-medium underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
                >
                  {e.link.label} &#8599;<span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </Row>
  );
}
