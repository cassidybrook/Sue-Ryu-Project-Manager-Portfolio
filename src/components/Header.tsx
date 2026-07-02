import { profile } from '../data/profile'

export function Header() {
  return (
    <header
      id="top"
      className="border-b border-border bg-white px-6 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Portfolio
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-lg text-muted sm:text-xl">{profile.title}</p>
        <p className="mt-2 text-sm text-muted">{profile.address}</p>
        <p className="mt-1 text-sm text-muted">{profile.location}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center rounded-full border border-border bg-canvas px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
          >
            {profile.phone}
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center rounded-full border border-border bg-canvas px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-border bg-canvas px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={profile.cvUrl}
            download={profile.cvFilename}
            className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  )
}
