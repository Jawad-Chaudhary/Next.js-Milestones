import Image from "next/image"
import Link from "next/link";
import { FaWhatsapp,FaLinkedinIn,FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-blue-50">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src="/pictures/port.gif" width={50} height={50} alt="Portfolio" className="rounded-full object-cover" />
    <span className="ml-3 text-xl">Jawad.PORTFOLIO</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Jawad.Portfolio
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link href={'https://wa.me/+923172264452'} target="blank" className="text-gray-500 text-3xl hover:text-gray-400 mr-4">
      <FaWhatsapp/>
      </Link>
      <Link href={'https://www.facebook.com/profile.php?id=100013054509670'} target="blank" className="text-gray-500 hover:text-gray-400 text-3xl mr-4">
      <FaFacebook />
      </Link>
      <Link href={'https://www.linkedin.com/in/muhammad-jawad-ullah-12a679257/'} target="blank" className="text-gray-500 hover:text-gray-400 text-3xl">
      <FaLinkedinIn/>
      </Link>
    </span>
  </div>
</footer>

  )
}