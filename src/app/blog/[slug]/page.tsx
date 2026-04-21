import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/data/content";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="pt-32 pb-24 md:pb-40 min-h-screen">
      <div className="container-custom max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink mb-12 link-underline"
        >
          <ArrowLeft size={14} />
          Semua artikel
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-3 text-xs font-mono text-ink-muted mb-6">
            <span className="uppercase tracking-[0.15em] text-accent">
              {article.tag}
            </span>
            <span>·</span>
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

          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance">
            {article.title}
          </h1>

          <p className="mt-6 text-xl text-ink-muted leading-relaxed text-balance">
            {article.excerpt}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-ink-soft leading-relaxed space-y-6">
          <p className="italic text-ink-muted">
            [Konten artikel belum tersedia. Tambahkan isi artikel di sini —
            atau integrasikan dengan CMS seperti Contentful, Sanity, atau MDX.]
          </p>
          <p>
            Ini adalah halaman template untuk artikel. Anda dapat mengisi
            konten lengkap di sini, atau mengubah implementasinya untuk membaca
            dari file Markdown/MDX di folder <code>src/content</code>.
          </p>
        </div>

        <div className="mt-20 pt-8 border-t border-ink/10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm link-underline"
          >
            <ArrowLeft size={14} />
            Kembali ke daftar artikel
          </Link>
        </div>
      </div>
    </article>
  );
}
