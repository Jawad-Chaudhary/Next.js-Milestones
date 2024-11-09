"use client"
import Image from "next/image"
import "../app/styles/header.css"
import Link from "next/link"
import { useState } from "react"
import { IoCloudDownloadOutline } from "react-icons/io5"

export default function Header(){

  const [navbar, setNavbar] = useState(false);

  return (
    <header className="header">

      {/* Logo */}
      <div className="logo">
        <Image
        src={'/images/logo.png'}
        alt="Logo"
        width={500}
        height={500}
        className="logo-image"
        />
        <div className="logo-name">
          <h3>Kind Heart Charity</h3>
          <p>NON-PROFIT ORGANIZATION</p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="nav">
        <Link className="link" href={'/'}>Home</Link>
        <Link className="link" href={'#about'}>About</Link>
        <Link className="link" href={'#cause'}>Causes</Link>
        <Link className="link" href={'#vol'}>Volunteer</Link>
        <Link className="link" href={'#contact'}>Contact</Link>
        <Link className="link-button" href={'https://templatemo.com/live/templatemo_581_kind_heart_charity'}>Donate</Link>
      </nav>

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
            <Link href="/" onClick={() => setNavbar(false)}>Home</Link>
            <Link href="#about" onClick={() => setNavbar(false)}>About</Link>
            <Link href="#cause" onClick={() => setNavbar(false)}>Causes</Link>
            <Link href="#vol" onClick={() => setNavbar(false)}>Volunteer</Link>
            <Link href="#contact" onClick={() => setNavbar(false)}>Contact</Link>
            <Link className="mob-link-button" href="https://templatemo.com/live/templatemo_581_kind_heart_charity" onClick={() => setNavbar(false)}>Donate</Link>
          </div>
        )}
      </div>
    </header>
  );
}