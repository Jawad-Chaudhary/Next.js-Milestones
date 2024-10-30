import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IoCloudDownloadOutline } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function Navbar() {
  return (
    <nav>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 justify-between px-7  flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src="/pictures/port.gif" width={50} height={50} alt="Portfolio" className="rounded-full object-cover" />
            <span className="ml-3 text-xl">Jawad.PORTFOLIO</span>
          </a>
          <nav className="md:mx-auto hidden  md:flex flex-wrap items-center text-base justify-center">
            <Link href={'/'} className="mr-5 hover:text-gray-900">Home</Link>
            <Link href={'/about'} className="mr-5 hover:text-gray-900">About</Link>
            <Link href={'/contact'} className="mr-5 hover:text-gray-900">Contact us</Link>
          </nav>
          <a className="hidden md:block" href="/cv/CV.pdf">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Download CV
              <IoCloudDownloadOutline className="text-lg ml-2" />
            </button>
          </a>

          
          <Sheet>
            <SheetTrigger>
            <Menu className="block md:hidden"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
            <nav className="flex flex-col gap-y-5 mt-10">
              <Link href={'/'} className="mr-5 hover:text-gray-900">Home</Link>
              <Link href={'/about'} className="mr-5 hover:text-gray-900">About</Link>
              <Link href={'/contact'} className="mr-5 hover:text-gray-900">Contact us</Link>
            </nav>
            <a className="block" href="/cv/CV.pdf">
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                Download CV
                <IoCloudDownloadOutline className="text-lg ml-2" />
              </button>
            </a>
            </SheetContent>
          </Sheet>

        </div>
      </header>
    </nav>
  );
}
