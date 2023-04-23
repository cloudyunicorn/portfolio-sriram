import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { about } from '../../portfolio';
import './About.css';

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div id="home" className='about center'>
      {name && (
        <h1 className="about__intro">
          Hey there, I'm <span className='about__name'>{name}!</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {/* {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )} */}

        {social && (
          <>
            {/* {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )} */}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
            {social.email && (
              <a
                href={`mailto: ${social.email}`}
                aria-label='email'
                className='link link--icon'
              >
                <EmailIcon />
              </a>
            )}
            {social.instagram && (
              <a
                href={social.instagram}
                aria-label='instagram'
                className='link link--icon'
              >
                <InstagramIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
