import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Feel free to reach out.</h2>
      <p className="contact-desc">
        If you are interested in my work and would like to connect with me, feel free to reach out. I am a friendly and collaborative individual who enjoys engaging with others.
      </p>
      <a href={`mailto:${contact.email}`}>
        {/* <span type='button' className='btn about-button'>
          Contact Me
        </span> */}
        <button
              // href="#projects"
              className="casestudy--button about-button"
            >
              Contact me
            </button>
      </a>
    </section>
  )
}

export default Contact
