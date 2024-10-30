'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Projects() {
 
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
 
  return (
    <section className="text-gray-600 body-font bg-gradient-to-b from-gray-300 to-gray-50">
      <hr /> <hr /><hr /><hr />
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 data-aos='fade-up' data-aos-duration='2000' className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
      <p data-aos='fade-up' data-aos-duration='2000' className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Showcasing a collection of my recent work, highlighting diverse web development skills,
      from responsive design to interactive web applications. Each project reflects creativity,
      attention to detail, and a passion for coding.
      </p>
    </div>
    <div className="flex flex-wrap gap-y-8 md:gap-y-3 -m-8 px-5">
      {/* {PROJECTS} */}
      <div data-aos='flip-up' data-aos-duration='1000' className="lg:w-1/2 lg:gap-10 sm:w-1/2 p-4 drop-shadow-md hover:drop-shadow-lg  cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/projects/ableton.PNG"
            width={400}
            height={400}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-gradient-to-t from-black to-black/30 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Single Page HTML&CSS Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-400 mb-3">
              Ableton
            </h1>
            <p className=" text-gray-300 leading-relaxed mb-4 line-clamp-2">
            Built with HTML and CSS, featuring keyframe animations. 
            A design-focused recreation of Ableton, currently non-responsive.
            </p>
            <Link target="_blank" href={'https://ableton-clone-eight.vercel.app/'} className="text-blue-500 hover:underline">
              <p className="leading-relaxed">View Project &#x2192;</p>
            </Link>
          </div>
        </div>
      </div>
      {/* {PROJECTS} */}
      <div data-aos='flip-up' data-aos-duration='1000' className="lg:w-1/2 sm:w-1/2 p-4 drop-shadow-md hover:drop-shadow-lg cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center "
            src="/projects/pulse.PNG"
            width={400}
            height={400}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-gradient-to-t from-black to-black/30 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Responsive Multi Page Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-400 mb-3">
              Pulse
            </h1>
            <p className=" text-gray-300 leading-relaxed mb-4 line-clamp-2">
            Developed with Next.js, featuring smooth animations and a fully responsive design.
            </p>
            <Link target="_blank" href={'https://pulse-sepia-zeta.vercel.app/'} className="text-blue-500 hover:underline">
              <p className="leading-relaxed">View Project &#x2192;</p>
            </Link>
          </div>
        </div>
      </div>
      {/* {PROJECTS} */}
      <div data-aos='flip-up' data-aos-duration='1000' className="lg:w-1/2 sm:w-1/2 p-4 drop-shadow-md hover:drop-shadow-lg cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center "
            src="/projects/resume-builder.PNG"
            width={400}
            height={400}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-gradient-to-t from-black to-black/30 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Responsive Resume Builder HTML,CSS&Javascript
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-400 mb-3">
              Resume Builder
            </h1>
            <p className=" text-gray-300 leading-relaxed mb-4 line-clamp-2">
            Created with HTML, CSS, and JavaScript, this tool generates and edits resumes dynamically.
            </p>
            <Link target="_blank" href={'https://dynamic-hackaton-project.vercel.app/'} className="text-blue-500 hover:underline">
              <p className="leading-relaxed">View Project &#x2192;</p>
            </Link>
          </div>
        </div>
      </div>
      {/* {PROJECTS} */}
      <div data-aos='flip-up' data-aos-duration='1000' className="lg:w-1/2 sm:w-1/2 p-4 drop-shadow-md hover:drop-shadow-lg cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center "
            src="/projects/youtube.PNG"
            width={400}
            height={400}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-gradient-to-t from-black to-black/30 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              YOutube clone with HTML&CSS
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-400 mb-3">
              Youtube Clone
            </h1>
            <p className=" text-gray-300 leading-relaxed mb-4 line-clamp-2">
            A practice project built with HTML and CSS, focusing on mastering flexbox properties.
            </p>
            <Link target="_blank" href={'https://youtube-clone-gamma-mauve.vercel.app/'} className="text-blue-500 hover:underline">
              <p className="leading-relaxed">View Project &#x2192;</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}