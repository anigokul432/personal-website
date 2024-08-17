// src/App.tsx

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';

const projects = [
  { id: 1, logo: '/path/to/logo1.png', name: 'Project One', description: 'Description of project one.' },
  { id: 2, logo: '/path/to/logo2.png', name: 'Project Two', description: 'Description of project two.' },
  { id: 3, logo: '/path/to/logo3.png', name: 'Project Three', description: 'Description of project three.' },
  { id: 4, logo: '/path/to/logo4.png', name: 'Project Four', description: 'Description of project four.' },
  { id: 5, logo: '/path/to/logo5.png', name: 'Project Five', description: 'Description of project five.' },
  { id: 6, logo: '/path/to/logo6.png', name: 'Project Six', description: 'Description of project six.' },
  { id: 7, logo: '/path/to/logo7.png', name: 'Project Seven', description: 'Description of project seven.' },
  { id: 8, logo: '/path/to/logo8.png', name: 'Project Eight', description: 'Description of project eight.' },
];

const experiences = [
  { id: 1, logo: '/path/to/experience-logo1.png', title: 'Software Engineer', company: 'Company One', duration: 'Jan 2020 - Present', bullets: ['Developed web applications using React.', 'Led a team of 5 engineers.', 'Optimized database queries for better performance.'] },
  { id: 2, logo: '/path/to/experience-logo2.png', title: 'Frontend Developer', company: 'Company Two', duration: 'Jun 2018 - Dec 2019', bullets: ['Implemented UI components with Angular.', 'Collaborated with designers to improve UX.', 'Maintained project documentation.'] },
  { id: 3, logo: '/path/to/experience-logo3.png', title: 'Intern', company: 'Company Three', duration: 'Jan 2017 - May 2018', bullets: ['Assisted in the development of mobile applications.', 'Conducted code reviews and testing.', 'Contributed to open-source projects.'] },
];

const App: React.FC = () => {
  const [navbarOpaque, setNavbarOpaque] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarOpaque(true);
    } else {
      setNavbarOpaque(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar opaque={navbarOpaque} />
      <section id="home" className="home-section">
        <div className="home-content">
          <h1>
            <span className="highlight">Ani</span>
            <span className="fade">eerudh Gokulakrishnan</span>
          </h1>
          <h2>Software Engineer</h2>
          <p>
            I hold a BS in Computer Science from <strong>UCLA</strong> and currently work as a Software Engineer at the California Transportation Commission.
          </p>
        </div>
      </section>
      <section id="projects" className="projects-section">
        <h1>Projects</h1>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-item">
              <img src={project.logo} alt={project.name} className="project-logo" />
              <div className="project-details">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="experience" className="experience-section">
        <h1>Experience</h1>
        <div className="experience-grid">
          {experiences.map(exp => (
            <div key={exp.id} className="experience-item">
              <img src={exp.logo} alt={exp.company} className="experience-logo" />
              <div className="experience-details">
                <h3>{exp.title}</h3>
                <p>{exp.company}</p>
                <p>{exp.duration}</p>
                <ul>
                  {exp.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default App;
