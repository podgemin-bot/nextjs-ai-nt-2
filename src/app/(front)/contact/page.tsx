import Link from "next/link";
import { Mail, MapPin, Phone, Clock, Globe, AtSign, Send } from "lucide-react";
import ContactForm from "./contact-form";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

const contactInfo = [
  {
    icon: MapPin,
    title: "ที่อยู่",
    desc: "123 ถนนตัวอย่าง แขวงบางรัก เขตบางรัก กรุงเทพมหานคร 10500",
  },
  {
    icon: Mail,
    title: "อีเมล",
    desc: "contact@coscipay.com",
  },
  {
    icon: Phone,
    title: "โทรศัพท์",
    desc: "02-123-4567 0893001234",
  },
  {
    icon: Clock,
    title: "เวลาทำการ",
    desc: "จันทร์ - ศุกร์ 09:00 - 18:00 น.",
  },
];

const socialLinks = [
  { icon: Globe, label: "Facebook", href: "https://facebook.com" },
  { icon: AtSign, label: "Instagram", href: "https://instagram.com" },
  { icon: Send, label: "Line", href: "https://line.me" },
];

const faqs = [
  {
    q: "ใช้เวลานานแค่ไหนกว่าจะได้รับคำตอบ?",
    a: "เราจะตอบกลับภายใน 1-2 วันทำการ หลังได้รับข้อความของคุณ",
  },
  {
    q: "สามารถติดต่อผ่านช่องทางอื่นได้ไหม?",
    a: "ได้ครับ ท่านสามารถติดต่อผ่านอีเมล เบอร์โทร หรือโซเชียลมีเดียที่แสดงไว้ด้านซ้าย",
  },
  {
    q: "มีบริการให้คำปรึกษาฟรีหรือไม่?",
    a: "การสอบถามข้อมูลทั่วไปไม่มีค่าใช้จ่าย เรายินดีให้คำแนะนำเบื้องต้นเสมอ",
  },
];

// http://localhost:3000/contact
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl">
            ติดต่อเรา 24*7
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
            สอบถามข้อมูลเพิ่มเติมหรือติดต่อทีมงาน เราพร้อมให้บริการทุกวัน
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          {/* Left: contact info */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-gray-50 bg-white p-6 shadow-sm"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <c.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-navy">{c.title}</h3>
                  <p className="mt-2 text-gray-400">{c.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-lg font-semibold text-navy">ติดตามเรา</h2>
              <div className="mt-4 flex gap-3">
                {socialLinks.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-100 bg-white text-gray-500 transition-colors hover:border-blue-200 hover:text-blue-600"
                  >
                    <s.icon className="size-5" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-navy">คำถามที่พบบ่อย</h2>
              <div className="mt-4 space-y-4">
                {faqs.map((f) => (
                  <div
                    key={f.q}
                    className="rounded-xl border border-gray-50 bg-white p-5 shadow-sm"
                  >
                    <h3 className="font-medium text-navy">{f.q}</h3>
                    <p className="mt-1 text-gray-400">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-navy">ส่งข้อความถึงเรา</h2>
            <p className="mt-2 text-gray-400">
              กรอกแบบฟอร์มด้านล่าง เราจะติดต่อกลับโดยเร็วที่สุด
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-600 underline underline-offset-4 hover:text-blue-700">
            กลับหน้าหลัก
          </Link>
        </div>
      </section>
    </main>
  );
}