import { profile } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40">
      <div className="container-custom">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="sticky top-32">
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-ink-muted">
                01 / About
              </span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight tracking-tight">
                A brief{" "}
                <span className="italic font-light">introduction.</span>
              </h2>
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6 space-y-6">
            {profile.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-lg md:text-xl leading-relaxed text-ink-soft text-balance"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-8 mt-8 border-t border-ink/10 grid grid-cols-2 gap-8">
              <div>
                <div className="text-xs uppercase tracking-[0.15em] font-mono text-ink-muted mb-2">
                  Focus
                </div>
                <div className="font-display text-xl">
                  Digital Strategy &amp; Operations
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.15em] font-mono text-ink-muted mb-2">
                  Based in
                </div>
                <div className="font-display text-xl">Jakarta, Indonesia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
