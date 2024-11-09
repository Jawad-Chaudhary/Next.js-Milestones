import Image from 'next/image'
import '../app//styles/volunteer.css'
import { IoCloudUploadOutline } from "react-icons/io5";

export default function Volunteer() {
  return (
    <main id='vol' className='vol'>

      {/* Left-section */}
      <div className='vol-left'>

        <h1>Volunteer</h1>

        <form className='vol-form'>
          <h2>Become a volunteer today</h2>
          <input className='name-input' type="text" required placeholder='Full name' />
          <input className='email-input' type="email" required placeholder='E-mail' />
          <br />
          <input className='subj-input' type="text" required placeholder='Subject' />
          <input id='uploadBtn' type="file" required/>
          <label htmlFor="uploadBtn">Upload Your CV <IoCloudUploadOutline className='up-ic'/></label>
          <br />
          <textarea className="cmn-input" placeholder="Comment (Optional)" rows={6} cols={60} />
          <br />
          <input className='submit-input-button' type="submit" required placeholder='Submit' />
        </form>
      </div>

      {/* Right-sec */}
      <div className='vol-right'>
      <Image 
      src={'/images/vol.jpg'}
      alt='Volounteer'
      width={400}
      height={400}
      className='vol-img'
      />

      <div className='vol-img-dis'>
        <h2>About Volunteering</h2>
        <p>
          Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm 
          tokito Professional charity theme based
        </p>
      </div>
      </div>
    </main>
  )
}