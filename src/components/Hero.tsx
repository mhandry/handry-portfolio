import { profile } from "@/data/content";
import { ArrowDownRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-16 overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Status pill */}
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-ink-muted font-mono">
            Available for collaboration
          </span>
        </div>

        {/* Name giant */}
        <h1 className="font-display text-[14vw] md:text-[11vw] leading-[0.9] tracking-[-0.03em] font-light text-balance">
          <span className="block">{profile.shortName}</span>
          <span className="block italic font-normal">Nur Haq.</span>
        </h1>

        <div className="mt-12 md:mt-20 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <p className="text-lg md:text-xl text-ink-muted leading-relaxed max-w-xl text-balance">
              {profile.tagline}
            </p>
          </div>

          <div className="md:col-span-5 md:text-right space-y-3">
            <div className="flex md:justify-end items-center gap-2 text-sm text-ink-muted font-mono">
              <MapPin size={14} />
              <span>{profile.location}</span>
            </div>
            <div className="text-sm font-mono">
              <span className="text-ink-muted">Role — </span>
              <span>
                {profile.role}, {profile.company}
              </span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 md:mt-32 flex items-center justify-between">
          <a
            href="#about"
            className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] font-mono text-ink-muted hover:text-ink transition-colors"
          >
            <span>Scroll</span>
            <ArrowDownRight
              size={16}
              className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"
            />
          </a>
          <div className="text-xs font-mono text-ink-muted">
            © 2026 / Portfolio
          </div>
        </div>
      </div>

      {/* Decorative diagonal line */}
      <div
        aria-hidden
        className="absolute top-1/3 right-0 w-1/3 h-px bg-ink/10 rotate-[-20deg] origin-right hidden md:block"
      />
    </section>
  );
}
