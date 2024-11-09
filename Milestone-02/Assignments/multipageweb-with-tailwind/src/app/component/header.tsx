"use client"
import Image from "next/image"
import Link from "next/link"
import { useState,useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header() {
  const [navbar, setNavbar] = useState(false); // State for controlling the menu toggle

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <header className="z-50 flex justify-between items-center px-5 md:items-center bg-[#eafaf1] bg-opacity-[0.8] mx-auto fixed top-0 left-0 right-0 md:py-3 md:px-20">
      {/* Logo Section */}
      <div>
        <Image
          src="/images/pulse-logo.svg"
          alt="logo"
          width={110}
          height={110}
          className="md:w-[110px] w-[70px]"
        />
      </div>

      {/* Navigation */}
      <nav className="flex">
        {/* Desktop Menu */}
        <div
          className={`md:flex h-auto md:h-auto flex-1 text-l text-[#00ad6a] hidden items-center font-bold md:justify-between md:w-[400px] animate-fadeInUp `}
        >
          <div className="cursor-pointer transition-all duration-[0.25s] hover:text-black hover:tracking-wide hover:drop-shadow-md">
            <Link href="/">Home</Link>
          </div>
          <div className="cursor-pointer transition-all duration-[0.25s] hover:text-black hover:tracking-wide hover:drop-shadow-md">
            <Link href="/about">About</Link>
          </div>
          <div className="cursor-pointer transition-all duration-[0.25s] hover:text-black hover:tracking-wide hover:drop-shadow-md">
            <Link href="/pricing">Pricing</Link>
          </div>
          <button
            className="border-solid border-2 border-[#00ad6a] px-4 py-2 transition-all duration-[0.25s]
            hover:bg-[#00ad6a] hover:border-[#eafaf1] hover:text-white"
          >
            Sign-Up
          </button>
        </div>

        {/* Mobile Menu (Hamburger Menu) */}
        <div className="md:hidden">
          <button
            className="p-2 text-[#00ad6a] rounded-md outline-none focus:border-gray-300"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <Image
                src="/images/close-icon.png"
                alt="close-menu"
                height={30}
                width={30}
                className="z-50" // Ensure the close icon has a high z-index
              />
            ) : (
              <Image
                src="/images/menu-icon.png"
                alt="menu"
                height={30}
                width={30}
                className="focus:border-none active:border-none"
              />
            )}
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div
          className={`absolute left-0 top-0 z-40 w-full h-screen bg-[#eafaf1] flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
            navbar ? "translate-y-0" : "-translate-y-full"
          } md:hidden`}
          
        >
          <button
            className="absolute top-5 right-5" // Position close button in the top right corner
            onClick={() => setNavbar(false)}
          >
            <Image
              src="/images/close-icon.png"
              alt="close-menu"
              height={30}
              width={30}
            />
          </button>
          <div className="cursor-pointer  underline decoration-[4px] text-l text-[#00ad6a] font-extrabold transition-all duration-[0.25s] hover:text-black hover:tracking-wide hover:drop-shadow-md mb-5">
            <Link href="/" onClick={() => setNavbar(false)}>Home</Link>
          </div>
          <div className="cursor-pointer underline decoration-[4px] text-l text-[#00ad6a] font-extrabold transition-all duration-[0.25s] hover:text-black hover:tracking-wide hover:drop-shadow-md mb-5">
            <Link href="/about" onClick={() => setNavbar(false)}>About</Link>
          </div>
          <div className="cursor-pointer underline decoration-[4px] text-l text-[#00ad6a] font-extrabold transition-all duration-[0.25s] hover:text-black hover:tracking-wide hover:drop-shadow-md mb-5">
            <Link href="/pricing" onClick={() => setNavbar(false)}>Pricing</Link>
          </div>
          <button
            className="border-solid border-2 border-[#00ad6a] px-4 py-2 transition-all duration-[0.25s]
            hover:bg-[#00ad6a] hover:border-[#eafaf1] hover:text-white"
            onClick={() => setNavbar(false)}
          >
            Sign-Up
          </button>
        </div>
      </nav>
    </header>
  );
}
