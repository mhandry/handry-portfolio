const keywords = [
  "Digital Marketing",
  "Operations",
  "Content Strategy",
  "SEO & GEO",
  "Sales Enablement",
  "Brand Building",
  "Growth",
  "Leadership",
];

export default function Marquee() {
  const doubled = [...keywords, ...keywords];

  return (
    <section className="border-y border-ink/10 py-6 overflow-hidden bg-paper-warm">
      <div className="marquee-track">
        {doubled.map((keyword, i) => (
          <div
            key={i}
            className="flex items-center gap-8 px-8 shrink-0"
          >
            <span className="font-display text-2xl md:text-3xl italic text-ink">
              {keyword}
            </span>
            <span className="w-2 h-2 rounded-full bg-accent" />
          </div>
        ))}
      </div>
    </section>
  );
}
