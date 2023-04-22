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
        <span type='button' className='btn btn--outline about-button'>
          Contact Me
        </span>
      </a>
    </section>
  )
}

export default Contact
