import './ProjectContainer.css';
import { Link } from 'react-router-dom';

const ProjectContainer = ({ project }) => {
  const goToTop = () => {
    window.scrollTo(0, 0,)
  }
  return (
  <div className="project">
    <div
      className="project__layout"
      style={
        project.layout === 'right'
          ? { flexDirection: 'row-reverse' }
          : { flexDirection: 'row' }
      }
    >
      <img src={project.image} alt="Product" className="project__image" />

      <div className="project__text">
        <div className="project-textbox">
          <p className="project-skill">{project.projectOverview.role}</p>
          <p className="project-name">{project.name}</p>
          <p className="project-intro">{project.brandDesc}</p>
        </div>
        <div className="link--casestudy">
          <Link to={{ pathname: '/caseStudy', state: { project } }}>
            <button
              // href="#projects"
              onClick={goToTop}
              className="casestudy--button"
            >
              View Case Study
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
)};

export default ProjectContainer;
