# Handry — Personal Portfolio

Website portfolio pribadi untuk **Muhamad Handry Nur Haq**, Chief Operating Officer di Moorni Indonesia. Dibangun dengan Next.js 14 (App Router), TypeScript, dan Tailwind CSS dengan pendekatan desain editorial minimalis.

## ✨ Fitur

- **Hero** dengan typography oversized dan status "available"
- **Marquee** — keyword berjalan untuk skill highlights
- **About** — bio dan fokus profesional
- **Services** — 4 area keahlian dengan grid geometris
- **Projects** — showcase Meatguy, Moorni, Sinar Matahari Nasional
- **Experience** — timeline karir vertikal
- **Articles** — blog dengan listing page dan dynamic routes
- **Contact** — form interaktif dengan API route + social links
- **Responsive** — mobile-first, dengan mobile menu
- **Custom fonts** — Fraunces (display), Inter (body), JetBrains Mono (accent)

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Buka browser
open http://localhost:3000
```

## 📁 Struktur Project

```
handry-portfolio/
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts    # API untuk contact form
│   │   ├── blog/
│   │   │   ├── page.tsx             # Listing artikel
│   │   │   └── [slug]/page.tsx      # Detail artikel
│   │   ├── globals.css              # Styling global + animasi
│   │   ├── layout.tsx               # Root layout + fonts
│   │   └── page.tsx                 # Homepage
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Articles.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── data/
│       └── content.ts               # ⭐ SEMUA konten di sini
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## ✏️ Cara Edit Konten

Semua konten ada di **satu file**: `src/data/content.ts`

Anda dapat mengubah:
- Profile (nama, role, tagline, bio, email, social links)
- Projects (list brand yang Anda tangani)
- Experience (riwayat karir)
- Services (area keahlian)
- Articles (daftar blog post)

Tidak perlu sentuh komponen — cukup edit data, tampilan akan ikut update.

## 🎨 Kustomisasi Design

### Warna
Edit CSS variables di `tailwind.config.ts` → `theme.extend.colors`:
- `ink` — warna teks utama (hitam)
- `paper` — background (off-white)
- `accent` — warna aksen (orange burnt)

### Fonts
Font di-load di `src/app/layout.tsx`. Default:
- **Fraunces** — serif display untuk judul
- **Inter** — sans-serif untuk body
- **JetBrains Mono** — monospace untuk accent (labels, numbers)

Anda bisa ganti ke font lain dari [Google Fonts](https://fonts.google.com).

## 📧 Setup Contact Form

Secara default, form akan log pesan ke console. Untuk integrasi email:

### Opsi 1: Resend (direkomendasikan)

```bash
npm install resend
```

1. Daftar di [resend.com](https://resend.com) dan dapatkan API key
2. Copy `.env.example` ke `.env.local` dan isi `RESEND_API_KEY`
3. Edit `src/app/api/contact/route.ts` dan uncomment blok Resend

### Opsi 2: Formspree / Getform

Ubah `action` di form Contact menjadi endpoint Formspree.

## 🌐 Deployment

### Deploy ke Vercel (paling mudah)

```bash
npm install -g vercel
vercel
```

Atau push ke GitHub, lalu import di [vercel.com](https://vercel.com).

### Deploy ke platform lain

```bash
npm run build
npm start
```

Next.js kompatibel dengan Netlify, Railway, Cloudflare Pages, dll.

## 🔧 Tech Stack

| Tool | Kegunaan |
|------|----------|
| Next.js 14 | Framework React dengan App Router |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Lucide React | Icon library |
| Framer Motion | Animasi (siap dipakai untuk enhancement) |

## 📝 TODO untuk Anda

- [ ] Ganti semua placeholder konten di `src/data/content.ts`
- [ ] Update email & social links
- [ ] Tambahkan isi artikel di `src/app/blog/[slug]/page.tsx` (atau integrasikan MDX/CMS)
- [ ] Setup email provider untuk contact form
- [ ] Tambahkan favicon custom di `src/app/`
- [ ] Tambahkan OG image di `public/`
- [ ] Setup domain custom di Vercel

## 📄 Lisensi

Project ini dibuat khusus untuk Handry. Gunakan sesuai kebutuhan personal branding Anda.

---

**Dibangun dengan fokus pada:** typography yang karakter, whitespace yang disiplin, dan detail yang presisi.
