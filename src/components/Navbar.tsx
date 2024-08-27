// src/components/Navbar.tsx

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

interface NavbarProps {
  opaque: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ opaque }) => {
  const [aniRevealedText, setAniRevealedText] = useState('Ani');
  const [gokulRevealedText, setGokulRevealedText] = useState('Gokul');
  const [revealIntervalId, setRevealIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (revealIntervalId) {
      clearInterval(revealIntervalId);
    }

    let aniCharIndex = 3; // Start after 'Ani'
    let gokulCharIndex = 5; // Start after 'Gokul'

    const aniText = 'Anieerudh';
    const gokulText = 'Gokulakrishnan';

    const intervalId = setInterval(() => {
      if (aniCharIndex <= aniText.length) {
        setAniRevealedText(aniText.slice(0, aniCharIndex));
        aniCharIndex += 1;
      }

      if (gokulCharIndex <= gokulText.length) {
        setGokulRevealedText(gokulText.slice(0, gokulCharIndex));
        gokulCharIndex += 1;
      }

      if (aniCharIndex > aniText.length && gokulCharIndex > gokulText.length) {
        clearInterval(intervalId);
        setRevealIntervalId(null);
      }
    }, 30); // Speed of text reveal can be adjusted by changing the interval

    setRevealIntervalId(intervalId);
  };

  const handleMouseLeave = () => {
    if (revealIntervalId) {
      clearInterval(revealIntervalId);
    }

    let aniCharIndex = aniRevealedText.length;
    let gokulCharIndex = gokulRevealedText.length;

    const aniText = 'Ani';
    const gokulText = 'Gokul';

    const intervalId = setInterval(() => {
      if (aniCharIndex >= 3) {
        setAniRevealedText(aniRevealedText.slice(0, aniCharIndex));
        aniCharIndex -= 1;
      }

      if (gokulCharIndex >= 5) {
        setGokulRevealedText(gokulRevealedText.slice(0, gokulCharIndex));
        gokulCharIndex -= 1;
      }

      if (aniCharIndex <= 3 && gokulCharIndex <= 4) {
        clearInterval(intervalId);
        setRevealIntervalId(null);
      }
    }, 30); // Speed of text reveal can be adjusted by changing the interval

    setRevealIntervalId(intervalId);
  };

  return (
    <nav className={`navbar ${opaque ? 'opaque' : 'transparent'}`}>
      <div className="logo-name" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          
          <Link to="home" smooth={true} duration={500} className="logo-link">
          <img src={process.env.PUBLIC_URL + '/' + "/assets/logo.png"} alt="Logo" className="logo-image" />
          <div className="name-container">
            <span className="logo-text ani">{aniRevealedText}</span>
            <span className="logo-text gokul">{gokulRevealedText}</span>
          </div>
          </Link>
      </div>
      <ul className="nav-links">
        <li>
          {/* <Link to="home" smooth={true} duration={500}>
            Home
          </Link> */}
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
