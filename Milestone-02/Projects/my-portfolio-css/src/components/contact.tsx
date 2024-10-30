export default function Contact() {
  return (
    <main id="contact" className="contact">

      {/* Contact Heading */}
      <div className="contact-head">
        Contact <span>Me</span>
      </div>

      {/* input boxes */}
        <form className="contact-form">
          <input className="name-input" type="text" required placeholder="Full Name" />
          <input className="email-input" type="email" required placeholder="Email" />
          <input className="num-input" type="number" required placeholder="Phone Number" />
          <input className="sub-input" type="text" placeholder="Subject" />
          <textarea className="cmn-input" placeholder="Your Message" rows={10} cols={60} />
          <input className="contact-button" type="submit" value="Send Message" />
        </form>

    </main>
  )
}