import { header } from '../../portfolio';
import Navbar from '../Navbar/Navbar';
import { HashLink } from "react-router-hash-link";
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <HashLink
            to="/#home"
            className='link initials'>
            {title}
          </HashLink>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
