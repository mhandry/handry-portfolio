import { services } from "@/data/content";
import { Target, Search, Film, TrendingUp, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Target,
  Search,
  Film,
  TrendingUp,
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-40 bg-paper-warm">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-ink-muted">
              02 / Services
            </span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight tracking-tight max-w-2xl">
              What I <span className="italic font-light">offer.</span>
            </h2>
          </div>
          <p className="text-ink-muted max-w-md">
            Empat area utama tempat saya menciptakan dampak untuk brand dan
            bisnis yang saya dukung.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={i}
                className="bg-paper-warm p-8 md:p-12 group hover:bg-paper transition-colors duration-500"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="font-mono text-xs text-ink-muted">
                    / 0{i + 1}
                  </span>
                  {Icon && (
                    <Icon
                      size={24}
                      className="text-ink group-hover:text-accent transition-colors duration-500"
                      strokeWidth={1.5}
                    />
                  )}
                </div>
                <h3 className="font-display text-2xl md:text-3xl mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-ink-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
