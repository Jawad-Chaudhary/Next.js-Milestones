"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function HeaderPage() {
  const { cart, removeFromCart } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cartTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (!isMounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-between px-4 md:px-20 py-4 md:py-6 bg-white">
      <div></div>
      <div></div>
      {/* Middle - Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex md:gap-x-10 text-base font-medium">
          <li className="cursor-pointer transition-all duration-200 decoration-2 underline-offset-4 hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer transition-all duration-200 decoration-2 underline-offset-4 hover:underline">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="cursor-pointer transition-all duration-200 decoration-2 underline-offset-4 hover:underline">
            <Link href={'/blog'}>Blog</Link>
          </li>
          <li className="cursor-pointer transition-all duration-200 decoration-2 underline-offset-4 hover:underline">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger>
            <Image
              src="/header/menu.png"
              alt="menu"
              width={30}
              height={30}
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription className="flex flex-col gap-y-4 text-base font-medium">
                <Link href="/" className="cursor-pointer mt-9 hover:underline">
                  Home
                </Link>
                <Link href="/shop" className="cursor-pointer hover:underline">
                  Shop
                </Link>
                <Link href="/blog" className="cursor-pointer hover:underline">
                  Blog
                </Link>
                <Link href="/contact" className="cursor-pointer hover:underline">
                  Contact
                </Link>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-x-5 md:gap-x-10">
        <Link href="/account">
          <Image
            src="/header/account.svg"
            alt="Account"
            width={22}
            height={22}
            className="cursor-pointer transition-all duration-200 hover:scale-125"
          />
        </Link>
        <Image
          src="/header/search.svg"
          alt="Search"
          width={22}
          height={22}
          className="cursor-pointer transition-all duration-200 hover:scale-125"
        />
        <Image
          src="/header/fav.svg"
          alt="Fav"
          width={22}
          height={22}
          className="cursor-pointer transition-all duration-200 hover:scale-125"
        />

        {/* Cart Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="relative">
              <Image
                src="/header/cart.svg"
                alt="Cart"
                width={22}
                height={22}
                className="cursor-pointer transition-all duration-200 hover:scale-125"
              />
              {cartTotalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartTotalItems}
                </span>
              )}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-72 md:w-96 mt-8">
            <DropdownMenuLabel>Shopping Cart</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-2 hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded-lg"
                    />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        {item.quantity} x Rs. {item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1 hover:bg-gray-200 rounded-full"
                  >
                    <Image
                      src="/header/close.png"
                      alt="Remove"
                      width={16}
                      height={16}
                    />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center p-4 text-gray-500">Your cart is empty</p>
            )}

            <div className="p-4 border-t">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Subtotal:</span>
                <span className="font-medium text-yellow-600">
                  Rs. {subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/cart"
                  className="flex-1 text-center text-sm px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
                >
                  View Cart
                </Link>
                <Link
                  href="/checkout"
                  className="flex-1 text-center text-sm px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}