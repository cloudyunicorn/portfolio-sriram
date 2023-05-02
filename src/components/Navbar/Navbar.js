import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { projects, skills, contact } from '../../portfolio';
import './Navbar.css';
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import pdf from '../../assets/resume.pdf'

const Navbar = () => {
  // const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className="nav__list"
      >
        {/* <li className="nav__list-item">
          <HashLink
            to="/#home"
            // href="#home"
            onClick={toggleNavList}
            className="link link--nav"
          >
            Home
          </HashLink>
        </li> */}
        {projects.length ? (
          <li className="nav__list-item">
            <HashLink
              to="/#projects"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Portfolio
            </HashLink>
          </li>
        ) : null}

        
          {/* <li className="nav__list-item">
            <HashLink
              to="/#resume"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Resume
            </HashLink>
          </li> */}

          <li className="nav__list-item">
              <a
                href="https://drive.google.com/file/d/1mmT066-LDrzR1_vTwzd9CWVf-j1xt7c-/view?usp=share_link"
                // onClick={}
                className="link link--nav"
              >
                Resume
              </a>
          </li>
          {/* <li className="nav__list-item">
            <Link to={{ pathname: '/about' }}>
              <button
                // href="#projects"
                // onClick={}
                className="link link--nav"
              >
                About
              </button>
            </Link>
          </li> */}

        {contact.email ? (
          <li className="nav__list-item">
            <HashLink
              to="/#contact"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Contact
            </HashLink>
          </li>
        ) : null}
          
      </ul>

      <button
        type="button"
        // onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {/* {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />} */}
      </button>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon className="close-icon"/> : <MenuIcon className="menu-icon" />}
      </button>
    </nav>
  );
};

export default Navbar;
