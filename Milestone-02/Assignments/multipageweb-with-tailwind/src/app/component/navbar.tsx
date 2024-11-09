import Image from "next/image"

export default function Navbar() {
  return (
    <nav className=" md:h-[420px] h-auto py-8 md:py-0 bg-[#080c16] flex gap-y-11 md:gap-0 flex-col px-4 md:px-24 text-white">
      <div className="flex flex-col md:flex-row gap-y-5 md:gap-0 justify-between items-center h-[380px]">
        <div className="md:w-[40%] w-auto flex flex-col items-center md:flex-initial md:items-baseline">
          <Image src={'/images/pulse-logo.svg'} alt="Logo" width={150} height={150} />
          <button className="mt-12 text-nowrap text-[#080c16]   bg-gradient-to-r from-[#00ad6a] to-[#1fe374] 
          font-bold px-8 py-4 transition-all duration-[0.25s] hover:opacity-[0.6] ">Sign Up for a Free 30-Day Trial</button>
        </div>
        <div className="flex gap-x-12 md:gap-x-24 w-auto md:w-[60%] justify-center">
          <div className="text-lg leading-8 md:leading-[40px]">
            <h3 className="font-bold text-[] ">Product</h3>
            <p className="text-[#1fe374] cursor-pointer hover:text-white">Features</p>
            <p className="text-[#1fe374] cursor-pointer hover:text-white">Pricing</p>
            <p className="text-[#1fe374] cursor-pointer hover:text-white">Sign Up</p>
          </div>
          <div className="text-lg leading-8  md:leading-[40px]">
            <h3 className="font-bold text-[] ">Company</h3>
            <p className="text-[#1fe374] cursor-pointer hover:text-white">Customer Stories</p>
            <p className="text-[#1fe374] cursor-pointer hover:text-white">About</p>
            <p className="text-[#1fe374] cursor-pointer hover:text-white">Contact</p>
          </div>
          <div className="text-lg leading-8 md:leading-[40px]">
            <h3 className="font-bold text-[] ">Resources</h3>
            <p className="text-[#1fe374] cursor-pointer hover:text-white">Support</p>
            <p className="text-[#1fe374] cursor-pointer hover:text-white">Blog</p>
          </div>
          
        </div>
      </div>

      <div className="text-xs text-gray-500 leading-5  mb-2">
        <p>
        ©2019 Pulseapp.com, Inc. All Rights Reserved | <u className="cursor-pointer hover:text-gray-400 ">Terms of Use</u> | <u className="cursor-pointer hover:text-gray-400 ">Privacy Policy</u> | <u className="cursor-pointer hover:text-gray-400 ">EU Privacy</u>
        </p>
        <p>Pulse is made by <u className="cursor-pointer hover:text-gray-400 ">Simple Focus</u>. We also make <u className="cursor-pointer hover:text-gray-400 ">Ballpark</u>, <u className="cursor-pointer hover:text-gray-400 ">Sifter</u>, and <u className="cursor-pointer hover:text-gray-400 ">Curated</u></p>
      </div>
    </nav>
  )
}