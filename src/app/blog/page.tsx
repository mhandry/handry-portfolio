import Link from "next/link";
import { articles } from "@/data/content";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Articles — Handry",
  description: "Pemikiran dan esai seputar digital marketing, operasi, dan strategi konten.",
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 md:pb-40 min-h-screen">
      <div className="container-custom">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink mb-12 link-underline"
        >
          <ArrowLeft size={14} />
          Kembali ke beranda
        </Link>

        <div className="mb-16 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-ink-muted">
            Writing
          </span>
          <h1 className="font-display text-5xl md:text-7xl mt-4 leading-[0.95] tracking-tight">
            Articles &amp;{" "}
            <span className="italic font-light">essays.</span>
          </h1>
          <p className="mt-6 text-lg text-ink-muted max-w-xl leading-relaxed">
            Catatan tentang digital marketing, operasi perusahaan, dan hal-hal
            yang saya pelajari di persimpangan keduanya.
          </p>
        </div>

        <div className="space-y-px">
          {articles.map((article, i) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="block group border-t border-ink/10 py-8 md:py-10 hover:bg-paper-warm transition-colors duration-500"
            >
              <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-start">
                <div className="md:col-span-1 font-mono text-sm text-ink-muted">
                  0{i + 1}
                </div>

                <div className="md:col-span-2 font-mono text-sm text-ink-muted">
                  {new Date(article.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </div>

                <div className="md:col-span-7">
                  <div className="text-xs uppercase tracking-[0.15em] font-mono text-accent mb-2">
                    {article.tag}
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl leading-tight tracking-tight mb-3 text-balance">
                    {article.title}
                  </h2>
                  <p className="text-ink-muted leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="md:col-span-2 flex md:justify-end items-start gap-4">
                  <span className="text-xs font-mono text-ink-muted">
                    {article.readingTime}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-ink-muted group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
