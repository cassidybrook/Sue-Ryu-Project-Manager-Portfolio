import { experience } from '../data/profile'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section aria-labelledby="experience-heading" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          id="experience"
          eyebrow="Career"
          title="Work Experience"
          description="Project management and finance roles at Air New Zealand, alongside assurance experience at Ernst & Young."
        />

        <ol className="relative space-y-8 border-l border-border pl-8">
          {experience.map((role) => (
            <li key={role.id} className="relative">
              <span
                className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-accent ring-4 ring-accent-soft"
                aria-hidden="true"
              />
              <article className="rounded-xl border border-border bg-white p-6 transition-shadow hover:shadow-sm sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-ink">
                      {role.role}
                    </h3>
                    <p className="text-base text-accent">{role.company}</p>
                    {'location' in role && role.location && (
                      <p className="text-sm text-muted">{role.location}</p>
                    )}
                  </div>
                  <time
                    dateTime={role.period}
                    className="shrink-0 text-sm font-medium text-muted"
                  >
                    {role.period}
                  </time>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
                  {role.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
