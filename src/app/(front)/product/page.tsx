import FeaturesProduct from "@/components/features-product";
import prisma from "@/lib/prisma";
import { connection } from "next/server";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

// http://localhost:3000/product
export default async function ProductPage() {
  await connection(); // signals this is a dynamic route
  const products = await prisma.product.findMany({
    include: {
      product_images: true,
    },
  });
  
  // แปลงข้อมูลก่อนส่งให้ Client Component
  const serializedProducts = products.map((p) => ({
    ...p,
    price: Number(p.price || 0),
    picture: p.product_images[0]?.image_name || "",
  }))

  return (
    <main>
      {products.length > 0 ? (
        <FeaturesProduct products={serializedProducts} />
      ) : (
        <div className="flex h-[60vh] items-center justify-center text-gray-500">
          ไม่พบสินค้าในขณะนี้
        </div>
      )}
    </main>
  );
}