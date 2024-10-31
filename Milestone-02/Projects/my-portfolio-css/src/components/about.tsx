'use client'
import Image from 'next/image';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import Typewriter from 'typewriter-effect';

export default function About() {
  return (
    <main id='about' className='about'>
      {/* Left Section */}
      <div className='about-right'>
        <Image 
        src={'/pictures/port.gif'}
        alt='profile'
        width={1000}
        height={1000}
        className='about-profile'
        />
      </div>

      {/* Right Section */}
      <div className='about-left'>
        <div className='about-intro'>
          <span className='about-intro-i'>About</span> <span className='about-intro-name'>Me </span> <br />
          <Typewriter
          options={{
            strings: ['WEB DEVELOPER', 'UI/UX SPECIALIST' ,'SEO EXPERT'],
            autoStart: true,
            loop: true,
          }}
        />
        </div>
        <p className='about-dis'>
        &quot; Passionate Web Developer skilled in creating responsive, dynamic, and user-friendly websites. 
          With a strong foundation in HTML, CSS, JavaScript, and modern frameworks, I specialize in turning 
          creative ideas into functional, visually appealing web applications.&quot;
        </p>
          <a href="/cv/CV.pdf">
            Download CV <IoCloudDownloadOutline className="icon" />
          </a>
      </div>

      
      
    </main>
  )
}