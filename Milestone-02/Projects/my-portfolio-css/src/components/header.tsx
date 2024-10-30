'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="header">
      {/* Left Section */}
      <div className="header-logo">
        <span>Ja</span>wad
      </div>

      {/* Middle Section */}
      <nav className={`header-nav ${navbar ? "active" : ""}`}>
        <ul className="nav-li">
          <Link className="nav" href="/">Portfolio</Link>
          <Link className="nav" href="#project">Projects</Link>
          <Link className="nav" href="#about">About</Link>
          <Link className="nav" href="#contact">Contact Us</Link>
        </ul>
      </nav>

      {/* Right Section */}
      <div className="button-cv">
        <button>
          <a className="button-link" href="/cv/CV.pdf">
            Download CV
          </a>
          <IoCloudDownloadOutline className="icon" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <button className="menu-toggle" onClick={() => setNavbar(!navbar)}>
          <Image
            src={navbar ? '/menu/close.png' : '/menu/menu.png'}
            alt="menu"
            width={30}
            height={30}
            className="menu-img"
          />
        </button>

        {/* Mobile Links */}
        {navbar && (
          <div className="mobile-links">
            <Link href="/" onClick={() => setNavbar(false)}>Portfolio</Link>
            <Link href="#project" onClick={() => setNavbar(false)}>Projects</Link>
            <Link href="#about" onClick={() => setNavbar(false)}>About</Link>
            <Link href="#contact" onClick={() => setNavbar(false)}>Contact Us</Link>
            <button className="button-mobile">
              <a className="button-link" href="/cv/CV.pdf">
                Download CV
              </a>
              <IoCloudDownloadOutline className="icon" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
