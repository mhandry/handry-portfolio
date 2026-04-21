import { projects } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-40">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-ink-muted">
              03 / Projects
            </span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight tracking-tight max-w-3xl">
              Selected <span className="italic font-light">work.</span>
            </h2>
          </div>
          <p className="text-ink-muted max-w-md">
            Tiga brand yang saat ini saya tangani — mulai dari operasi
            perusahaan hingga konsultasi strategi digital.
          </p>
        </div>

        <div className="space-y-px">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className="group border-t border-ink/10 py-8 md:py-12 hover:bg-paper-warm transition-colors duration-500 cursor-pointer"
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
                <div className="md:col-span-1 font-mono text-sm text-ink-muted pt-2">
                  0{i + 1}
                </div>

                <div className="md:col-span-4">
                  <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-none">
                    {project.title}
                  </h3>
                  <div className="text-sm text-ink-muted mt-3 font-mono">
                    {project.period}
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="text-sm uppercase tracking-[0.15em] font-mono text-ink-muted mb-3">
                    {project.role}
                  </div>
                  <p className="text-ink-soft leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <ul className="space-y-1.5">
                    {project.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-sm text-ink-muted flex gap-3"
                      >
                        <span className="text-accent mt-2 shrink-0">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-2 flex flex-col gap-2 md:items-end">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono uppercase tracking-wider text-ink-muted px-3 py-1 border border-ink/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  <ArrowUpRight
                    size={24}
                    className="mt-4 text-ink-muted group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
