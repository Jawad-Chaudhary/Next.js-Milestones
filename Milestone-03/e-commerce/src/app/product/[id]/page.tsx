import HeaderPage from "@/components/header-page";
import ClientProductDetails from "@/components/shop/ClientProductDetails";
import Increment from "@/components/shop/ClientProductDetails";
import { asgaard } from "@/components/shop/item";
import { product } from "@/components/shop/product";
import Image from "next/image";
import Link from "next/link";

// Generate static paths dynamically
export async function generateStaticParams() {
  return product.map((item) => ({
    id: item.id.toString(),
  }));
}

// Product Page Component
export default function ProductPage({ params }: { params: { id: string } }) {
  const item = product.find((product) => product.id.toString() === params.id);

  if (!item) {
    return <div>Product not found</div>;
  }

  

  return (
    <main>
      <HeaderPage />
      <main className="mt-16 md:mt-20 px-6 md:px-28">
        {/* Breadcrumb */}
        <div className="flex py-10 items-center gap-x-7">
          <h3 className="text-base text-[#9F9F9F]">Home</h3>
          <p className="text-lg font-extrabold">&gt;</p>
          <h3 className="text-base text-[#9F9F9F]">Shop</h3>
          <p className="text-lg font-extrabold">&gt;</p>
          <h3 className="text-2xl font-light">|</h3>
          <p className="text-base">{item.name}</p>
        </div>

        {/* Product Details */}
        <div className="flex flex-col md:flex-row gap-x-40 py-10">
          {/* Product Image */}
          <div className="flex justify-center md:justify-start">
            <Image
                src={item.img || '/default-image.png'}
                alt={item.name}
                width={9000}
                height={9000}
                className="w-full h-auto md:w-[1800px] md:h-auto "
            />
          </div>

          {/* Product Info */}
          <ClientProductDetails item={item} />
        </div>
      </main>

      {/* Related Products */}
      <main className="py-10 px-6 md:px-28 flex flex-col gap-y-10 items-center">
        <h1 className="text-4xl font-medium">Related Product</h1>
        <div className="flex flex-wrap gap-10 mt-24 justify-center w-full">
          {asgaard.map((sale) => (
            <div
              key={sale.id}
              className="flex flex-col items-center justify-between w-full sm:w-56 md:w-52 h-56"
            >
              <Image src={sale.img} alt={sale.name} width={130} height={130} />
              <div className="w-full text-center">
                <h3 className="line-clamp-1 text-sm">{sale.name}</h3>
                <p className="mt-2 text-lg font-medium">Rs. {sale.price}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-lg cursor-pointer font-medium underline mt-14">
          <Link href="/shop">View More</Link>
        </p>
      </main>
    </main>
  );
}
