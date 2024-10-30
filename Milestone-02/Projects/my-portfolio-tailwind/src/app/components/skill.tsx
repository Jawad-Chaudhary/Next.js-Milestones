'use client'
import Image from "next/image";
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Skill() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="text-gray-600 body-font bg-gradient-to-b from-slate-50 to-slate-300">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 data-aos={'zoom-in-up'} data-aos-duration='2000' className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
        Skills
      </h2>
      <h1 data-aos={'zoom-in-up'} data-aos-duration='2000' className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      {/* Skill */}
      <div data-aos='fade-right' className="p-4 w-1/2 md:w-1/3 drop-shadow-lg">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
          <Image 
            src={'/icons/html.png'}
            alt="html"
            className="w-[30px] mr-2"
            width={500}
            height={500}
          />
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-full bg-gray-300 rounded-2xl">
              <div className="absolute bg-blue-600 w-[80%] h-1 rounded-2xl"></div>
            </div>
            <p className="font-bold text-blue-600 text-right">80%</p>
          </div>
        </div>
      </div>
      {/* Skill */}
      <div data-aos='fade-right' className="p-4 w-1/2 md:w-1/3 drop-shadow-lg">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
          <Image 
            src={'/icons/css.png'}
            alt="html"
            className="w-[30px] mr-2"
            width={500}
            height={500}
          />
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-full bg-gray-300 rounded-2xl">
              <div className="absolute bg-blue-600 w-[75%] h-1 rounded-2xl"></div>
            </div>
            <p className="font-bold text-blue-600 text-right">75%</p>
          </div>
        </div>
      </div>
      {/* Skill */}
      <div data-aos='fade-right' className="p-4 w-1/2 md:w-1/3 drop-shadow-lg">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
          <Image 
            src={'/icons/typescript.png'}
            alt="typescript"
            className="w-[30px] mr-2"
            width={500}
            height={500}
          />
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Typescript
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-full bg-gray-300 rounded-2xl">
              <div className="absolute bg-blue-600 w-[85%] h-1 rounded-2xl"></div>
            </div>
            <p className="font-bold text-blue-600 text-right">85%</p>
          </div>
        </div>
      </div>
      {/* Skill */}
      <div data-aos='fade-right' className="p-4 w-1/2 md:w-1/3 drop-shadow-lg">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
          <Image 
            src={'/icons/java.png'}
            alt="html"
            className="w-[30px] mr-2"
            width={500}
            height={500}
          />
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Javascript
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-full bg-gray-300 rounded-2xl">
              <div className="absolute bg-blue-600 w-[90%] h-1 rounded-2xl"></div>
            </div>
            <p className="font-bold text-blue-600 text-right">90%</p>
          </div>
        </div>
      </div>
      {/* Skill */}
      <div data-aos='fade-right' className="p-4 w-1/2 md:w-1/3 drop-shadow-lg">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
          <Image 
            src={'/icons/next-js.svg'}
            alt="html"
            className="w-[30px] mr-2 border-solid bg-blend-screen"
            width={500}
            height={500}
          />
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Next.Js
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-full bg-gray-300 rounded-2xl">
              <div className="absolute bg-blue-600 w-[70%] h-1 rounded-2xl"></div>
            </div>
            <p className="font-bold text-blue-600 text-right">70%</p>
          </div>
        </div>
      </div>
      {/* Skill */}
      <div data-aos='fade-right' className="p-4 w-1/2 md:w-1/3 drop-shadow-lg">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
          <Image 
            src={'/icons/wordpress.png'}
            alt="html"
            className="w-[30px] mr-2"
            width={500}
            height={500}
          />
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Wordpress
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-full bg-gray-300 rounded-2xl">
              <div className="absolute bg-blue-600 w-[100%] h-1 rounded-2xl"></div>
            </div>
            <p className="font-bold text-blue-600 text-right">100%</p>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</section>

  )
}