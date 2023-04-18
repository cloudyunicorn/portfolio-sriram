import uniqid from 'uniqid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import './ProjectContainer.css';

const ProjectContainer = ({ project }) => (
  <div className="project">
    <div className="project__layout" style={project.layout === 'right' ? {flexDirection: 'row-reverse'} : {flexDirection: 'row'}}>
      <h3 className="project__image">{project.name}</h3>
      <div className="project__text">
        <p className="project__description">{project.description}</p>
        <div className="link--casestudy">
        <p
            href="#projects"
            // onClick={}
            className="link link--nav casestudy--button"
          >
            Read Case Study
          </p>

        </div>
      </div>
    </div>
    {/* {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )} */}
  </div>
);

export default ProjectContainer;
