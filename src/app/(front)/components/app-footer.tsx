"use client";

import Link from "next/link";
import { Globe, Mail, MessageCircle, Send, Share2 } from "lucide-react";
import { Logo } from "@/components/logo";

const groups = [
  {
    title: "ผลิตภัณฑ์",
    links: ["สินค้า", "หลักสูตร", "ตะกร้าสินค้า", "โปรโมชัน"],
    hrefs: ["/product", "/course", "/cart", "/product"],
  },
  {
    title: "บริษัท",
    links: ["เกี่ยวกับเรา", "ติดต่อเรา", "ร่วมงานกับเรา", "ข่าวสาร"],
    hrefs: ["/about", "/contact", "/about", "/about"],
  },
  {
    title: "ช่วยเหลือ",
    links: ["ศูนย์ช่วยเหลือ", "คำถามที่พบบ่อย", "นโยบายความเป็นส่วนตัว", "ข้อกำหนดการใช้งาน"],
    hrefs: ["/contact", "/contact", "/about", "/about"],
  },
];

const socials = [MessageCircle, Globe, Share2, Send];

export default function AppFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 pt-14 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Logo className="[&>span:last-child]:text-white" />
            <p className="mt-4 max-w-xs text-sm text-blue-100/60">
              กระเป๋าเงินดิจิทัลที่ปลอดภัย ใช้งานง่าย
              ครอบคลุมทุกบริการทางการเงินในแอปเดียว
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-blue-500"
                  aria-label="social"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-sm font-semibold tracking-wide text-white">
                {g.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {g.links.map((link, i) => (
                  <li key={link}>
                    <Link
                      href={g.hrefs[i]}
                      className="text-sm text-blue-100/70 transition-colors hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-blue-100/60">
            <Mail className="size-4" /> support@coscipay.com
          </div>
          <p className="text-center text-sm text-blue-100/60">
            &copy; {new Date().getFullYear()} COSCI Pay. สงวนลิขสิทธิ์
          </p>
        </div>
      </div>
    </footer>
  );
}