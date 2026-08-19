/* eslint-disable @typescript-eslint/no-explicit-any */
import CartButton from "@/app/(front)/components/CartButton";
import Image from "next/image";

type Props = {
  products: any[]
}

const FeaturesProduct = ({ products }: Props) => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col px-6 py-20">
      <h2 className="text-pretty text-center font-medium text-4xl tracking-[-0.04em] text-navy sm:text-[2.75rem]">
        สินค้าทั้งหมด
      </h2>
      <p className="mx-auto mt-3 text-pretty text-center text-lg text-gray-400 sm:text-xl">
        เลือกซื้อสินค้าดิจิทัลและบริการจาก COSCI Pay
      </p>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div className="overflow-hidden rounded-xl border border-gray-50 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md" key={product.id}>

            <div className="relative aspect-4/5 w-full overflow-hidden">
              <Image
                alt={product.name}
                className="size-full bg-muted object-cover"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                src={`/product-image/${product.picture}`}
                loading="eager"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-xs font-semibold text-blue-600">
                  {product.id}
                </span>
                <span className="text-xs text-gray-300">สินค้า</span>
              </div>
              <h3 className="mt-4 font-medium text-lg text-navy">
                {product.name}
              </h3>
              <p className="mt-2 text-xl font-bold text-green-600">
                ฿ {Number(product.price).toFixed(2)}
              </p>
              <div className="mt-5">
                  <CartButton product={product} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesProduct;
