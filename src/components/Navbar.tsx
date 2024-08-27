// src/components/Navbar.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

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
    <nav className={`fixed top-0 w-full z-50 flex justify-between items-center p-4 transition-all duration-300 ${opaque ? 'bg-slate-100 shadow-lg' : 'bg-transparent'} text-black`}>
      <div className="flex items-center cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Link to="home" smooth={true} duration={500} className="flex items-center">
          <img 
            src={process.env.PUBLIC_URL + '/' + "/assets/logo.png"} 
            alt="Logo" 
            className={`w-10 h-10 transition-all duration-300 invert`} 
          />
          <div className="flex items-center ml-2">
            <span className="text-xl whitespace-nowrap">{aniRevealedText}</span>
            <span className="text-xl ml-1 whitespace-nowrap">{gokulRevealedText}</span>
          </div>
        </Link>
      </div>
      <ul className="flex gap-5 pr-5">
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-20} className={`text-lg hover:text-blue-800 transition-colors cursor-pointer text-black`}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500} offset={-80} className={`text-lg hover:text-blue-800 transition-colors cursor-pointer text-black`}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="education" smooth={true} duration={500} offset={-10} className={`text-lg hover:text-blue-800 transition-colors cursor-pointer text-black`}>
            Education
          </Link>
        </li>
        <li>
          <a href="mailto:anigokul432@gmail.com" className={`text-lg border rounded transition-colors cursor-pointer px-4 py-2 text-black border-black hover:bg-blue-800 hover:text-white`}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
