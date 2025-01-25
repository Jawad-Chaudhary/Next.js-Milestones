"use client";

import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

export default function ClientProductDetails({ item }: { item: any }) {
  const [count, setCount] = useState(1);
  const { addToCart } = useCart();

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: count,
      img: item.img,
    });
  };

  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-3xl md:text-5xl tracking-wide">{item.name}</h1>
      <p className="text-xl md:text-2xl text-[#9F9F9F] tracking-wide">Rs. {item.price}</p>
      <p>{item.description}</p>
      <p className="text-[#9F9F9F]">Size</p>
      <div className="font-medium flex gap-x-4">
        <button className="px-4 py-2 bg-[#FBEBB5] rounded-md">L</button>
        <button className="px-4 py-2 bg-[#FAF4F4] rounded-md">XL</button>
        <button className="px-4 py-2 bg-[#FAF4F4] rounded-md">XS</button>
      </div>
      <p className="text-[#9F9F9F]">Color</p>
      <div className="flex gap-x-4">
        <div className="w-7 h-7 bg-[#816DFA] rounded-full"></div>
        <div className="w-7 h-7 bg-black rounded-full"></div>
        <div className="w-7 h-7 bg-[#CDBA7B] rounded-full"></div>
      </div>
      <div className="flex gap-x-5 items-center">
        <div className="flex items-center bg-slate-100 w-fit rounded-md">
          <button
            className="text-3xl px-4 py-2 hover:bg-slate-200"
            onClick={decrement}
          >
            -
          </button>
          <p className="px-4 py-2">{count}</p>
          <button
            className="text-xl px-4 py-2 hover:bg-slate-200"
            onClick={increment}
          >
            +
          </button>
        </div>
        <button
          className="px-9 py-2 border-[1px] border-black rounded-md hover:bg-black hover:text-white"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
