'use client'
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <main className='hero'>
      {/* Left Section */}
      <div className='left'>
        <div className='intro'>
          Hi <br />
          <span className='intro-i'>I&apos;m</span> <span className='intro-name'>Muhammad Jawad </span> <br />
           a<Typewriter
          options={{
            strings: ['WEB DEVELOPER', 'UI/UX SPECIALIST' ,'SEO EXPERT'],
            autoStart: true,
            loop: true,
          }}
        />
        </div>
        <p className='dis'>
        &quot; Passionate Web Developer skilled in creating responsive, dynamic, and user-friendly websites. 
          With a strong foundation in HTML, CSS, JavaScript, and modern frameworks, I specialize in turning 
          creative ideas into functional, visually appealing web applications.&quot;
        </p>
          <button>Hire Me</button>
      </div>

      {/* Right Section */}
      <div className='right'>
        <Image 
        src={'/pictures/port.gif'}
        alt='profile'
        width={1000}
        height={1000}
        className='profile'
        />
      </div>
    </main>
  )
}