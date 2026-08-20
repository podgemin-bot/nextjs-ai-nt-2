"use server";

import { Resend } from "resend";
import { contactSchema, type ContactFormValues } from "./form-schema";

export type ContactFormState =
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitContactForm(
  input: ContactFormValues
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse(input);

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "ข้อมูลไม่ถูกต้อง",
    };
  }

  const data = parsed.data;

  // Honeypot: if filled, pretend success but do not send.
  if (data.website) {
    return { status: "success" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    return { status: "error", message: "ระบบยังไม่พร้อมใช้งาน โปรดลองใหม่ในภายหลัง" };
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `[ติดต่อเว็บ] ${data.subject}`,
      text: `ชื่อ: ${data.name}\nอีเมล: ${data.email}\nหัวข้อ: ${data.subject}\n\nข้อความ:\n${data.message}`,
    });

    if (error) {
      console.error("Resend send error:", error);
      return { status: "error", message: "ส่งข้อความไม่สำเร็จ โปรดลองใหม่ภายหลัง" };
    }
  } catch (err) {
    console.error("Resend exception:", err);
    return { status: "error", message: "ส่งข้อความไม่สำเร็จ โปรดลองใหม่ภายหลัง" };
  }

  return { status: "success" };
}