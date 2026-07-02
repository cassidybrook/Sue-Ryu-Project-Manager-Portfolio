import { education } from '../data/profile'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section
      aria-labelledby="education-heading"
      className="border-y border-border bg-white px-6 py-16"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          id="education"
          eyebrow="Qualifications"
          title="Education"
          description="Professional accounting pathway alongside tertiary study in commerce and arts."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <article
              key={item.id}
              className="flex flex-col rounded-xl border border-border bg-canvas p-6 transition-colors hover:border-accent/40"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                {item.period}
              </p>
              <h3 className="mt-3 text-base font-semibold text-ink">
                {item.credential}
              </h3>
              <p className="mt-1 text-sm text-muted">{item.institution}</p>
              {item.details.length > 0 && (
                <ul className="mt-4 space-y-2 border-t border-border pt-4 text-sm leading-relaxed text-muted">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
