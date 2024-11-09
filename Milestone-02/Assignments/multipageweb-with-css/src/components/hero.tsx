'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '../app/styles/hero.css';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/hero1.jpg',
    '/images/hero2.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main id='hero' className='hero'>

      {/* Image Cover */}
      <div className='top'>
        <div className='slider'>
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                objectPosition='cover'
                className='slide-img'
                quality={100}
              />
            </div>
          ))}
        </div>
        <div className='banner'>
          <h1>be a Kind Heart</h1>
          <p>You can support us to grow more</p>
        </div>
      </div>

      {/* COVER */}
      <div className='bottom'>
        <h1>Welcome to Kind Heart Charity</h1>
        <div className='bottom-dis'>

          {/* Card */}
          <div className='card'>
            <Image
              src={'/images/grow1.png'}
              alt='image'
              height={130}
              width={130}
              className='card-image'
            />
            <h3 className='h3'>Become a <br /><span>volunteer</span></h3>
          </div>

          {/* Card */}
          <div className='card'>
            <Image
              src={'/images/grow2.png'}
              alt='image'
              height={130}
              width={130}
              className='card-image'
            />
            <h3 className='h3'><span>Caring </span> Earth</h3>
          </div>

          {/* Card */}
          <div className='card'>
            <Image
              src={'/images/grow3.png'}
              alt='image'
              height={130}
              width={130}
              className='card-image'
            />
            <h3 className='h3'>Make a <span>Donation</span></h3>
          </div>

          {/* Card */}
          <div className='card'>
            <Image
              src={'/images/grow4.png'}
              alt='image'
              height={130}
              width={130}
              className='card-image'
            />
            <h3 className='h3'><span>Scholarship</span><br /> Program</h3>
          </div>

        </div>
      </div>
    </main>
  );
}
