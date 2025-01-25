'use client';
import { useEffect, useState } from 'react';
import HeaderPage from "@/components/header-page";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const calculateSubtotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (!isMounted) return null;

  return (
    <main>
      <HeaderPage />
      <div className="mt-16 py-6 md:py-2 md:mt-20 account w-full flex justify-center items-center h-auto md:h-[300px]">
        <div className="flex flex-col items-center">
          <Image src={"/shop/hero-logo.png"} alt="logo" width={77} height={77} />
          <h1 className="text-4xl font-medium">Cart</h1>
          <p className="font-medium text-base mt-4">Home &gt; Cart</p>
        </div>
      </div>

      <main className="flex flex-col md:flex-row justify-between gap-10 px-6 md:px-28 py-12">
        <div className="w-full flex flex-col md:w-[70%]">
          <div className="bg-[#FFF9E5] w-full flex justify-between font-semibold py-3 px-4">
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Subtotal</h3>
          </div>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex md:flex-row flex-col gap-y-4 justify-between items-center font-medium mt-10 text-sm text-gray-400"
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="bg-[#f3d266] rounded-lg"
                />
                <p>{item.name}</p>
                <p>Rs. {item.price.toLocaleString()}</p>
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 border-[1px] border-gray-400 rounded-l-md text-black"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <p className="px-3 py-1 border-t-[1px] border-b-[1px] border-gray-400 text-black">
                    {item.quantity}
                  </p>
                  <button
                    className="px-2 py-1 border-[1px] border-gray-400 rounded-r-md text-black"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <p className="text-black">
                  Rs. {(item.price * item.quantity).toLocaleString()}
                </p>
                <button onClick={() => removeFromCart(item.id)}>
                  <Image
                    src={"/header/bin.png"}
                    alt="delete"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px] object-cover"
                  />
                </button>
              </div>
            ))
          ) : (
            <p className="mt-10 text-center text-gray-500">
              Your cart is empty!
            </p>
          )}
        </div>

        <div className="w-full md:w-[30%] bg-[#FFF9E5] px-8 md:px-16 pt-3 pb-11 flex gap-y-7 flex-col items-center">
          <h2 className="text-2xl font-semibold">Cart Totals</h2>
          <div className="flex w-full justify-between items-center mt-7">
            <h3 className="text-sm font-medium">Subtotal</h3>
            <p className="text-sm font-medium text-gray-400">
              Rs. {calculateSubtotal().toLocaleString()}
            </p>
          </div>
          <div className="flex w-full justify-between items-center">
            <h4 className="text-sm font-medium">Total</h4>
            <p className="text-sm font-medium text-yellow-600">
              Rs. {calculateSubtotal().toLocaleString()}
            </p>
          </div>
          <button className="text-lg px-10 border-[1px] border-black py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-black hover:text-white active:opacity-80">
            <Link href={"/checkout"}>Checkout</Link>
          </button>
        </div>
      </main>

      <div className="bg-[#FAF4F4] px-6 md:px-28 py-16 flex flex-col md:flex-row justify-between">
        {[
          {
            title: "Free Delivery",
            description: "For all orders over $50, consectetur adipim scing elit.",
          },
          {
            title: "90 Days Return",
            description: "If goods have problems, consectetur adipim scing elit.",
          },
          {
            title: "Secure Payment",
            description: "100% secure payment, consectetur adipim scing elit.",
          },
        ].map((feature, index) => (
          <div key={index} className="mb-6 md:mb-0">
            <h3 className="font-medium text-3xl">{feature.title}</h3>
            <p className="text-[#9F9F9F] tracking-wide mt-3">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}