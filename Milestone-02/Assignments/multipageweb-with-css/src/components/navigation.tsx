import Image from "next/image"
import Link from "next/link"
import "../app/styles/navigation.css"
import { CiLocationOn, CiMail } from "react-icons/ci"
import { IoCallOutline } from "react-icons/io5"

export default function Navigation() {
  return (
    <nav className="navi">

      {/* Upper SIde */}
      <div className="nav-top">

        <Image
        src={'/images/logo.png'}
        alt="Logo"
        width={100}
        height={100}
        className="nav-logo"
        />

        <div className="nav-links">
          <h2>Quick Links</h2>
          <Link className="nav-li" href={'#about'}>Our Story</Link>
          <Link className="nav-li" href={'#cause'}>Causes</Link>
          <Link className="nav-li" href={'#vol'}>Became a volounteer</Link>
        </div>

        <div className="nav-contact">
          <h2>Contact Information</h2>
          <p className='nav-address'><CiLocationOn className='contact-icon' />
            Akershusstranda 20, 0150 Oslo, Norway
          </p>
          <p className='nav-address'><IoCallOutline className='contact-icon' />
            120-240-9600
          </p>
          <p className='nav-address'><CiMail className='contact-icon' />
            donate@charity.org
          </p>
        </div>

      </div>

      {/* Bottom Side */}
      <div className="nav-bottom">
         Copyright © 2036 Kind Heart Charity Org. Design: TemplateMo
      </div>

    </nav>
  )
}