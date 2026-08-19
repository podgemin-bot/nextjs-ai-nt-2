import Link from "next/link";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

const cards = [
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
    desc: "02-123-4567",
  },
  {
    icon: Clock,
    title: "เวลาทำการ",
    desc: "จันทร์ - ศุกร์ 09:00 - 18:00 น.",
  },
];

// http://localhost:3000/contact
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl">
            ติดต่อเรา
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
            สอบถามข้อมูลเพิ่มเติมหรือติดต่อทีมงาน เราพร้อมให้บริการทุกวัน
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-4xl gap-6 px-4 sm:grid-cols-2 sm:px-6">
          {cards.map((c) => (
            <div key={c.title} className="rounded-xl border border-gray-50 bg-white p-6 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <c.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-navy">{c.title}</h3>
              <p className="mt-2 text-gray-400">{c.desc}</p>
            </div>
          ))}
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