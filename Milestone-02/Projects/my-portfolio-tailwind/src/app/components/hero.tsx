'use client'
import Image from "next/image";
import { GrContact } from "react-icons/gr";
import Typewriter from 'typewriter-effect';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Hero() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main>
      <section className="text-gray-600 body-font bg-gradient-to-b from-gray-50 to-gray-300 ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        data-aos='zoom-in-up'
        data-aos-duration="2000"
        className="object-cover object-center rounded mx-auto w-[20rem]"
        alt="hero"
        src="/pictures/profile.jpg"
        height={500}
        width={500}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 data-aos='fade-left' className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am
        <br className="hidden lg:inline-block" />
        <Typewriter
          options={{
            strings: ['WEB DEVELOPER', 'UI/UX SPECIALIST' ,'SEO EXPERT'],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <div className="w-[200px] bg-blue-200 h-[2px] rounded-full"> </div>
      <p data-aos='fade-up-left' className="mb-8 leading-relaxed italic">
      &quot; Passionate Web Developer skilled in creating responsive, dynamic, and user-friendly websites. 
      With a strong foundation in HTML, CSS, JavaScript, and modern frameworks, I specialize in turning 
      creative ideas into functional, visually appealing web applications. Dedicated to continuous learning, 
      I strive to deliver high-quality code and seamless user experiences.&quot;
      </p>
      <div className="flex justify-center">
        <button data-aos='zoom-in-up' data-aos-duration='2000' className="inline-flex text-white items-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Hire Me <GrContact className="ml-2"/>
        </button>
      </div>
    </div>
  </div>
</section>

    </main>
  )
}