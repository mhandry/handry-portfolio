"use client";

import { useState } from "react";
import { profile } from "@/data/content";
import { Linkedin, Instagram, Mail, Send, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-ink text-paper">
      <div className="container-custom">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-paper/50">
              06 / Contact
            </span>
            <h2 className="font-display text-5xl md:text-7xl mt-4 leading-[0.95] tracking-tight">
              Let&apos;s build{" "}
              <span className="italic font-light">something.</span>
            </h2>
            <p className="mt-8 text-paper/70 leading-relaxed max-w-md">
              Tertarik untuk berkolaborasi, konsultasi, atau sekadar ngobrol
              soal strategi digital? Kirim pesan di sebelah — atau langsung
              hubungi saya.
            </p>

            <div className="mt-12 space-y-5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                  <Mail size={16} strokeWidth={1.5} />
                </div>
                <span className="link-underline">{profile.email}</span>
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                  <Linkedin size={16} strokeWidth={1.5} />
                </div>
                <span className="link-underline">LinkedIn</span>
              </a>
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                  <Instagram size={16} strokeWidth={1.5} />
                </div>
                <span className="link-underline">Instagram</span>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="md:col-span-6 md:col-start-7 space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-[0.15em] font-mono text-paper/50 mb-2"
              >
                Nama
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent border-b border-paper/30 py-3 focus:border-accent outline-none transition-colors text-lg"
                placeholder="Nama lengkap Anda"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-[0.15em] font-mono text-paper/50 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent border-b border-paper/30 py-3 focus:border-accent outline-none transition-colors text-lg"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-[0.15em] font-mono text-paper/50 mb-2"
              >
                Pesan
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-transparent border-b border-paper/30 py-3 focus:border-accent outline-none transition-colors text-lg resize-none"
                placeholder="Ceritakan project atau pertanyaan Anda..."
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="inline-flex items-center gap-3 px-8 py-4 bg-paper text-ink rounded-full font-medium hover:bg-accent hover:text-paper transition-colors disabled:opacity-60"
              >
                {status === "sent" ? (
                  <>
                    <Check size={16} />
                    Terkirim
                  </>
                ) : status === "sending" ? (
                  <>Mengirim...</>
                ) : status === "error" ? (
                  <>Gagal — coba lagi</>
                ) : (
                  <>
                    Kirim Pesan
                    <Send size={16} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
