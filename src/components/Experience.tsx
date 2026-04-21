import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-40 bg-paper-warm">
      <div className="container-custom">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-ink-muted">
            04 / Experience
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight tracking-tight max-w-3xl">
            Career <span className="italic font-light">timeline.</span>
          </h2>
        </div>

        <div className="relative max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-[18%] top-0 bottom-0 w-px bg-ink/15" />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="grid md:grid-cols-12 gap-4 md:gap-8 items-start relative pl-6 md:pl-0"
              >
                {/* Dot */}
                <div className="absolute left-[-4px] md:left-[calc(18%-4px)] top-2 w-2 h-2 rounded-full bg-accent" />

                <div className="md:col-span-3 font-mono text-sm text-ink-muted pt-1">
                  {exp.year}
                </div>

                <div className="md:col-span-9 md:pl-8">
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight">
                    {exp.title}
                  </h3>
                  <div className="text-ink-muted mt-1 mb-3 font-mono text-sm">
                    {exp.company}
                  </div>
                  <p className="text-ink-soft leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
