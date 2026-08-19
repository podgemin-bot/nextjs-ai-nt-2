"use client"

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useCartStore } from "@/lib/cart-store";
import { ShoppingCart, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CartList() {
  const router = useRouter();

  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalPrice = useCartStore((state) => state.totalPrice());

  if (items.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <ShoppingCart className="size-8" />
        </div>
        <h1 className="text-2xl font-bold text-navy">ตะกร้าสินค้าว่างเปล่า...</h1>
        <Button asChild className="rounded-full px-6 font-semibold">
          <Link href="/product">เลือกซื้อสินค้า</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="mb-8 text-3xl font-bold tracking-[-0.02em] text-navy">ตะกร้าสินค้า</h1>
      <div className="overflow-hidden rounded-xl border border-gray-50 bg-white shadow-sm">
      <Table>
        <TableHeader>
            <TableRow className="bg-gray-25 hover:bg-gray-25">
                <TableHead>รหัสสินค้า</TableHead>
                <TableHead>ชื่อสินค้า</TableHead>
                <TableHead>ราคา</TableHead>
                <TableHead>จำนวน</TableHead>
                <TableHead>รวม</TableHead>
                <TableHead>เครื่องมือ</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                items.map((i) => (
                    <TableRow key={i.productId}>
                        <TableCell className="font-medium">{i.productId}</TableCell>
                        <TableCell>{i.name}</TableCell>
                        <TableCell>฿ {i.price.toFixed(2)}</TableCell>
                        <TableCell>{i.qty}</TableCell>
                        <TableCell className="font-semibold text-green-600">฿ {(i.price * i.qty).toFixed(2)}</TableCell>
                        <TableCell>
                            <Button size="sm" variant="destructive" onClick={() => { removeItem(i.productId); } } >
                                <Trash />
                            </Button>    
                        </TableCell>  
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
      </div>

      <div className="mt-8 flex flex-col items-end gap-4">
          <div className="font-bold text-3xl text-navy">
               รวมทั้งหมด: <span className="text-green-600">฿ {totalPrice.toFixed(2)}</span>
          </div>  
          <div className="flex flex-wrap justify-end gap-3">
            <Button variant="outline" onClick={() => { clearCart(); } }>ลบสินค้าทั้งหมด</Button> 
            <Button variant="success" onClick={() => { 
                clearCart();
                router.replace('/product');
             } }>ยืนยันการสั่งซื้อ</Button>
          </div>
      </div>      

    </div>
  );
}