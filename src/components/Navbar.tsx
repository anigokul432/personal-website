// src/components/Navbar.tsx

import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

interface NavbarProps {
  opaque: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ opaque }) => {
  return (
    <nav className={`navbar ${opaque ? 'opaque' : 'transparent'}`}>
      <div className="logo">
        <a href="/">
          <img src={process.env.PUBLIC_URL + '/' + "/assets/logo.png"} alt="Logo" className="logo-image" />
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-20}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500} offset={-80}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="education" smooth={true} duration={500} offset={-10}>
            Education
          </Link>
        </li>
        <li>
          <a href="mailto:anigokul432@gmail.com">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
