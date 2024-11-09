import Image from 'next/image'
import '../app/styles/contact.css'
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

export default function Contact() {
  return (
    <main id='contact' className='contac'>
      
      {/* Left Side */}
      <div className='contact-left'>
        <h1>Get in touch</h1>

        <div className='contact-hr'>
          <Image
          src={'/images/contact.jpg'}
          alt='contact'
          width={100}
          height={100}
          className='hr-img'
          />
          <div className='hr-dis'>
            <h3>Clara Barton</h3>
            <h2>HR & Office Manager</h2>
          </div>
        </div>

        <div className='contact-line'></div>

        <h3 className='contact-info-title'>Contact Information</h3>
        <p className='contact-address'><CiLocationOn className='contact-icon' />
          Akershusstranda 20, 0150 Oslo, Norway
        </p>
        <p className='contact-address'><IoCallOutline className='contact-icon' />
          120-240-9600
        </p>
        <p className='contact-address'><CiMail className='contact-icon' />
          donate@charity.org
        </p>

      </div>

      {/* Right Side */}
      <form className='contact-right'>
        <h1>Contact form</h1>
        <p>Or, you can just send an email: info@charity.org</p>
        <input className='contact-fname' required type="text" placeholder='First Name'/>
        <input className='contact-lname' required type="text" placeholder='Last Name'/>
        <br />
        <input className='contact-email' required type="email" placeholder='E-mail'/>
        <br />
        <textarea className="contact-cmn" placeholder="How can we help you?" rows={8} cols={48} />
        <br />
        <input className='contact-button' required type="submit" value='Send message'/>
        
      </form>
    </main>
  )
}