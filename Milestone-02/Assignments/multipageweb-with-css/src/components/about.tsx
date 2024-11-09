import Image from 'next/image'
import '../app/styles/about.css'
import { CiTwitter,CiFacebook,CiLinkedin } from "react-icons/ci";

export default function About() {
  return (
    <main id='about' className='about'>

      {/* Upper Section */}
      <div className='upper'>

        {/* Upper-Left */}
        <Image
        src={'/images/image2.jpg'}
        alt='about'
        width={1000}
        height={1000}
        className='upper-left'
        />

        {/* Upper-Right */}
        <div className='upper-right'>
          {/* Story */}
          <div className='story'>
            <h2>Our Story</h2>
            <h3>Kind Heart Charity, Non-Profit Organization</h3>
            <p>
              &quot;Join us in spreading hope and transforming lives. 
              Together, we can make a difference for those in need, one step at a time.&quot;
            </p>
          </div>
          
          {/* Mission */}
          <div className='mission-number'>
            {/* Mission */}
            <div className='mission'>
              <h2>Our Mission</h2>
              <p>
                Our mission is to empower communities by providing support, resources, and opportunities, 
                fostering a brighter and more sustainable future for all
              </p>
              <ul>
                <li>Charity</li>
                <li>Donation</li>
              </ul>
            </div>

            {/* Number */}
            <div className='number'>
              <h2>2009 <span>Founded</span></h2>
              <h2>120B <span>Donations</span></h2>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className='about-bottom'>

        {/* Bottom_left */}
        <Image
        src={'/images/image3.jpg'}
        alt='story'
        width={3000}
        height={3000}
        className='bottom-left'
        />

        {/* Bottom-right */}
        <div className='bottom-right'>
          <h1>Sandy Chan</h1>
          <h3>Co-Founding Partner</h3>
          <p>
          Sandy Chan, co-founding partner of Kind Heart Charity, is a visionary leader committed to driving 
          positive change in underserved communities.
          <br /><br />
          She actively collaborates with local leaders, donors, and volunteers, ensuring that every project aligns with the unique needs of the 
          communities served.
          </p>

          <div className='social'>
            <div><CiTwitter className='social-icon' /></div>
            <div><CiFacebook className='social-icon'/></div>
            <div><CiLinkedin className='social-icon'/></div>
          </div>
        </div>

      </div>

      <div className='impact'>
        <div className='impact-des'>
          Make an impact. <br />
          Save lives.
        </div>

        <div className='impact-don'>
          <p>Make a donation</p>
          <button>Become a volunteer</button>
        </div>
      </div>
    </main>
  )
}