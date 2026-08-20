
import prisma from './src/lib/prisma';

async function main() {
  try {
    const products = await prisma.product.findMany({
      include: { product_images: true }
    });
    console.log('Total products:', products.length);
    if (products.length > 0) {
      console.log('First product:', JSON.stringify(products[0], null, 2));
    }
  } catch (e) {
    console.error('Error:', e);
  } finally {
    process.exit();
  }
}

main();
