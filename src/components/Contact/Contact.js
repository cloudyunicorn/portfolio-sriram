import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Feel free to reach out.</h2>
      <p className="contact-desc">
        Looking for a designer to help you meet your uers' needs? Need help establishing good design and research practices within your organization? I can help.
      </p>
      <a href={`mailto:${contact.email}`}>
        {/* <span type='button' className='btn about-button'>
          Contact Me
        </span> */}
        <button
              // href="#projects"
              className="casestudy--button about-button"
            >
              contact me
            </button>
      </a>
    </section>
  )
}

export default Contact
