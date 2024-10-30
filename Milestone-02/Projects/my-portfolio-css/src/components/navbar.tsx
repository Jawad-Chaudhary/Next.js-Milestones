import Link from "next/link";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";


export default function Navbar() {
  return (
    <nav className="navbar">

      {/* Social Icons */}
      <div className="si-nav">
        <Link className="icon-si" target="_blank" href={"https://www.facebook.com/profile.php?id=100013054509670"}><FaFacebook /></Link>
        <Link className="icon-si" target="_blank" href={"https://api.whatsapp.com/send/?phone=%2B923172264452&text&type=phone_number&app_absent=0"}><FaWhatsapp /></Link>
        <Link className="icon-si" target="_blank" href={"https://www.linkedin.com/in/muhammad-jawad-ullah-12a679257/"}><FaLinkedin /></Link>
        <Link className="icon-si" href={""}><FaInstagram /></Link>
      </div>

      {/* Links */}
      <div className="li-nav">
        <Link className="link-li" href={'/'}>Portfolio</Link>
        <Link className="link-li" href={'#project'}>Projects</Link>
        <Link className="link-li" href={'#about'}>About</Link>
        <Link className="link-li" href={'#contact'}>Contact Us</Link>
      </div>

      {/* Copyright */}
      <div className="right-nav">
        &#169; 2024 Jawad| All Right Reserved 
      </div>
    </nav>
  )
}