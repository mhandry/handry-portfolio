import { articles } from "@/data/content";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Articles() {
  return (
    <section id="articles" className="py-24 md:py-40">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-ink-muted">
              05 / Writing
            </span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight tracking-tight max-w-3xl">
              Thoughts &amp; <span className="italic font-light">essays.</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm link-underline text-ink-muted hover:text-ink inline-flex items-center gap-2"
          >
            View all articles <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block"
            >
              <article className="h-full flex flex-col">
                <div className="aspect-[4/5] bg-gradient-to-br from-paper-warm to-paper-card border border-ink/10 mb-6 relative overflow-hidden group-hover:border-ink/20 transition-colors">
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-[8rem] italic text-ink/5 group-hover:text-accent/10 transition-colors duration-700">
                      {article.tag[0]}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 text-xs font-mono uppercase tracking-wider text-ink-muted">
                    {article.tag}
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <ArrowUpRight
                      size={20}
                      className="text-ink-muted group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-ink-muted mb-3">
                  <time>
                    {new Date(article.date).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <span>·</span>
                  <span>{article.readingTime}</span>
                </div>

                <h3 className="font-display text-xl md:text-2xl leading-tight tracking-tight mb-3 group-hover:text-accent transition-colors duration-500 text-balance">
                  {article.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {article.excerpt}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
