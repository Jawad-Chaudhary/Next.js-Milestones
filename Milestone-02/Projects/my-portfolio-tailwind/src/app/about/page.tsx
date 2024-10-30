"use client"
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function About() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="text-gray-600 body-font bg-gradient-to-t from-gray-500/45 to-slate-50">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex justify-between flex-wrap w-full">
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">

        <div data-aos='fade-right' data-aos-duration='1000' className="flex relative pb-12 ">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-folder-pen"><path d="M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"/><path d="M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
            <Typewriter
          options={{
            strings: ['Name:'],
            autoStart: true,
            loop: true,
          }}
        />
            </h2>
            <p className="leading-relaxed">
              Muhammad jawad
            </p>
          </div>
        </div>
        <div data-aos='fade-right' data-aos-duration='1500' className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
            <Typewriter
          options={{
            strings: ['Contact Info:'],
            autoStart: true,
            loop: true,
          }}
        />
            </h2>
            <div>
              <h3><span className='font-semibold'>Phone:</span> +92 3172264452</h3>
              <h3><span className='font-semibold'>Email:</span> jawadchaudhary00@gmail.com</h3>
            </div>
          </div>
        </div>
        <div data-aos='fade-right' data-aos-duration='2000' className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <circle cx={12} cy={5} r={3} />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
            <Typewriter
          options={{
            strings: ['Education'],
            autoStart: true,
            loop: true,
          }}
        />
            </h2>
            <ol className='list-disc'>
              <li>Currently enrolled in BSSE</li>
            </ol>
          </div>
        </div>
        
        <div data-aos='fade-right' data-aos-duration='2500' className="flex relative">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
            <Typewriter
              options={{
                strings: ['Lets Explore Together'],
                autoStart: true,
                loop: true,
              }}
            />
            </h2>
            
          </div>
        </div>
      </div>
      <Image
        data-aos="zoom-in-up"
        data-aos-duration='3000'
        className="lg:w-[40%] md:w-1/2 md:h-[500px] h-[350px] object-cover md:object-center object-right-top rounded-lg md:mt-0 mt-12"
        src="/pictures/profile.jpg"
        alt="Profile"
        width={500}
        height={500}

      />
    </div>
  </div>
</section>

  )
}