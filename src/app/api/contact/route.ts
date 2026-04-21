import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Semua field wajib diisi" },
        { status: 400 }
      );
    }

    // TODO: Integrasikan dengan layanan email seperti Resend, SendGrid, atau Nodemailer.
    // Contoh implementasi dengan Resend:
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "noreply@yourdomain.com",
    //   to: "handry@moorni.id",
    //   subject: `Pesan baru dari ${name}`,
    //   html: `<p><strong>Dari:</strong> ${name} (${email})</p><p>${message}</p>`,
    // });

    console.log("Pesan masuk:", { name, email, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server" },
      { status: 500 }
    );
  }
}
