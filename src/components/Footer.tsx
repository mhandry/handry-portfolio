import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/70 border-t border-paper/10">
      <div className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <div className="font-display text-5xl md:text-7xl tracking-tight leading-none text-paper">
              {profile.shortName}
              <span className="text-accent">.</span>
            </div>
            <p className="mt-4 text-sm max-w-md">
              {profile.role} di {profile.company}. Berbasis di{" "}
              {profile.location}.
            </p>
          </div>

          <div className="md:col-span-4 md:text-right space-y-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="block link-underline"
            >
              {profile.email}
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block link-underline"
            >
              LinkedIn
            </a>
            <a
              href={profile.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block link-underline"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-paper/10 flex flex-col md:flex-row justify-between gap-4 text-xs font-mono uppercase tracking-wider">
          <div>© 2026 {profile.name}. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>Built with Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
