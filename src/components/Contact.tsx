import { profile } from '../data/profile'

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-border bg-white px-6 py-16 scroll-mt-28"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Get in touch
        </p>
        <h2
          id="contact-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
        >
          Let&apos;s connect
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
          Open to conversations about project management, finance, and
          cross-functional roles.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={profile.cvUrl}
            download={profile.cvFilename}
            className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Download CV
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Email {profile.name.split(' ')[0]}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            {profile.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
