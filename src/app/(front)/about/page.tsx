import Link from "next/link";
import AppLoading from "../components/app-loading";
import { Suspense } from "react";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

async function ApiVersion() {
  const response = await fetch('https://api.codingthailand.com/api/version');
  const apiInfo = await response.json();

  return (
    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 border border-green-100">
      API Version: {apiInfo.data.version}
    </div>
  );
}

// http://localhost:3000/about
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-green-50">
      <section className="bg-gradient-to-b from-green-100 to-green-50 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
           <h1 className="text-4xl font-bold tracking-[-0.04em] text-blue-700 sm:text-5xl">
             เกี่ยวกับ COSCI Pay
           </h1>
           <p className="mx-auto mt-6 max-w-xl text-lg text-blue-600">
             เราพัฒนากระเป๋าเงินดิจิทัลที่ปลอดภัย ใช้งานง่าย และครอบคลุมทุกบริการ
             ทางการเงิน เพื่อยกระดับคุณภาพชีวิตคนไทย
           </p>
          <Suspense fallback={<AppLoading />}>
            <ApiVersion />
          </Suspense>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-4xl gap-6 px-4 sm:grid-cols-3 sm:px-6">
          {[
            { title: "พันธกิจ", desc: "ทำให้การเงินดิจิทัลเข้าถึงได้สำหรับทุกคน" },
            { title: "วิสัยทัศน์", desc: "เป็นแอปซูเปอร์แอปทางการเงินอันดับหนึ่งของไทย" },
            { title: "คุณค่า", desc: "ปลอดภัย โปร่งใส และน่าเชื่อถือเสมอ" },
          ].map((c) => (
             <div key={c.title} className="rounded-xl border border-gray-50 bg-white p-6 shadow-sm">
               <h3 className="text-lg font-semibold text-blue-700">{c.title}</h3>
               <p className="mt-2 text-blue-600">{c.desc}</p>
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