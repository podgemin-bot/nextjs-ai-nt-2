import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  CirclePlay,
  Gift,
  QrCode,
  Receipt,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Wallet,
    title: "กระเป๋าเงินดิจิทัล",
    desc: "เติมเงิน เก็บเงิน และใช้จ่ายได้ในที่เดียว ปลอดภัยด้วยมาตรฐานระดับแบงก์ชาติ",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: QrCode,
    title: "สแกนจ่าย QR",
    desc: "สแกนจ่ายค่าร้านค้าได้ทั่วประเทศในไม่กี่วินาที ไม่ต้องพกเงินสด",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Receipt,
    title: "ชำระบิล / ค่าโทรศัพท์",
    desc: "จ่ายบิล ค่าไฟ ค่าน้ำ โทรศัพท์ และอื่นๆ ครบทุกประเภทในแอปเดียว",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Gift,
    title: "สะสมแต้มรับส่วนลด",
    desc: "สะสมแต้มทุกการใช้จ่าย นำมาแลกส่วนลดและคูปองโปรโมชันได้จริง",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: ShieldCheck,
    title: "ความปลอดภัยชั้นสูง",
    desc: "ยืนยันตัวตนหลายชั้น พร้อมระบบตรวจจับธุรกรรมต้องสงสัยแบบเรียลไทม์",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Banknote,
    title: "ลงทุนและออมง่าย",
    desc: "ออมเงิน ลงทุนกองทุน และทำประกันดิจิทัล เริ่มต้นได้จาก 1 บาท",
    color: "bg-teal-50 text-teal-600",
  },
];

const promos = [
  {
    title: "แคมเปญปีใหม่",
    tag: "ส่วนลดสูงสุด 50%",
    icon: Gift,
    bg: "from-red-500 to-red-700",
  },
  {
    title: "รับเงินคืน",
    tag: "เงินคืน 20% ทุกการใช้จ่าย",
    icon: Sparkles,
    bg: "from-orange-500 to-orange-700",
  },
  {
    title: "แต้มแลกของรางวัล",
    tag: "สะสมแต้ม แลกสิทธิพิเศษ",
    icon: ArrowUpRight,
    bg: "from-blue-500 to-blue-700",
  },
];

const stats = [
  { value: "30 ล้าน+", label: "ผู้ใช้ทั่วประเทศ" },
  { value: "70,000+", label: "ร้านค้าและพันธมิตร" },
  { value: "2,000+", label: "บิลและบริการที่รองรับ" },
  { value: "99.9%", label: "อัปไทม์ที่เสถียร" },
];

export default function Hero() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="pointer-events-none absolute -top-24 right-0 size-96 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-24 size-80 rounded-full bg-green-100/50 blur-3xl" />

        <div className="mx-auto grid max-w-(--breakpoint-xl) items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28 lg:px-8">
          <div className="relative z-10">
            <Badge
              asChild
              variant="secondary"
              className="rounded-full border-blue-100 px-3 py-1"
            >
              <Link href="#features">
                ครบทุกบริการทางการเงินในแอปเดียว
                <ArrowUpRight className="ml-1 size-4" />
              </Link>
            </Badge>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.04em] text-navy sm:text-5xl md:text-6xl">
              จ่าย สแกน เก็บเงิน
              <br />
              ใน{" "}
              <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                COSCI Pay
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400 md:text-xl">
              กระเป๋าเงินดิจิทัลที่ตอบโจทย์การใช้ชีวิต ปลอดภัย ใช้งานง่าย
              ครอบคลุมทั้งการชำระเงิน โอนเงิน สะสมแต้ม และลงทุน
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full px-7 text-base font-semibold"
              >
                <Link href="/product">
                  เริ่มต้นใช้งาน <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-blue-200 bg-white px-7 text-base text-blue-600 shadow-none hover:bg-blue-50"
              >
                <Link href="/course">
                  <CirclePlay className="h-5 w-5" /> ดูสินค้าและหลักสูตร
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-gray-300">
              <ShieldCheck className="size-5 text-green-500" />
              ได้รับมาตรฐานความปลอดภัยข้อมูลระดับสากล
            </div>
          </div>

          {/* Phone mockup card */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-blue-500 to-blue-700 opacity-10 blur-2xl" />
            <div className="relative rounded-[2.5rem] border border-gray-50 bg-white p-5 shadow-lg">
              <div className="mb-5 flex items-center justify-between px-1">
                <div>
                  <p className="text-sm text-gray-300">ยอดเงินทั้งหมด</p>
                  <p className="text-3xl font-bold text-navy">฿ 25,480.50</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white">
                  <Wallet className="size-5" />
                </div>
              </div>

              <div className="mb-5 grid grid-cols-4 gap-3">
                {[
                  { label: "เติมเงิน", icon: Banknote, color: "bg-blue-50 text-blue-600" },
                  { label: "โอน", icon: ArrowUpRight, color: "bg-green-50 text-green-600" },
                  { label: "จ่ายบิล", icon: Receipt, color: "bg-orange-50 text-orange-600" },
                  { label: "สแกน", icon: QrCode, color: "bg-red-50 text-red-600" },
                ].map((a) => (
                  <div key={a.label} className="flex flex-col items-center gap-1.5">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${a.color}`}>
                      <a.icon className="size-5" />
                    </span>
                    <span className="text-xs font-medium text-gray-400">{a.label}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-red-500 to-red-700 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs opacity-90">คูปองส่วนลด</p>
                    <p className="text-lg font-bold">รับส่วนลดสูงสุด 50%</p>
                  </div>
                  <Gift className="size-8 opacity-90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────── */}
      <section id="features" className="bg-white py-20">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              บริการครบวงจร
            </Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-navy sm:text-4xl">
              ทุกธุรกรรมทางการเงิน ที่คุณต้องใช้
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              เราเชื่อว่าการจัดการเงินควรง่ายสำหรับทุกคน
              ไม่ว่าคุณจะอยู่ที่ไหน
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-gray-50 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${f.color}`}>
                  <f.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy">{f.title}</h3>
                <p className="mt-2 text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Promotions ───────────────────────── */}
      <section className="bg-gray-25 py-20">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-navy sm:text-4xl">
              โปรโมชัน & แต้มสมาชิก
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              โปรเด็ดและสิทธิพิเศษมากมาย รอคุณอยู่ทุกสัปดาห์
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {promos.map((p) => (
              <div
                key={p.title}
                className={`rounded-xl bg-gradient-to-br ${p.bg} p-6 text-white shadow-md transition-transform duration-200 hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between">
                  <p.icon className="size-8 opacity-90" />
                  <Badge className="border-white/20 bg-white/20 text-white">
                    ใหม่
                  </Badge>
                </div>
                <h3 className="mt-8 text-xl font-bold">{p.title}</h3>
                <p className="mt-1 opacity-90">{p.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────── */}
      <section className="bg-navy py-16 text-white">
        <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-2 gap-10 px-4 text-center sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold text-white">{s.value}</p>
              <p className="mt-2 text-blue-100/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Smartphone className="mx-auto size-10 text-blue-500" />
          <h2 className="mt-6 text-3xl font-bold tracking-[-0.04em] text-navy sm:text-4xl">
            พร้อมแล้วหรือยัง?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            สมัครใช้ COSCI Pay ฟรี ภายใน 3 นาที เริ่มต้นจัดการการเงินของคุณวันนี้
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 text-base font-semibold"
            >
              <Link href="/signup">สมัครสมาชิกฟรี</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-blue-200 px-8 text-base text-blue-600 shadow-none hover:bg-blue-50"
            >
              <Link href="/about">ติดต่อเรา</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}