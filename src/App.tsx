// src/App.tsx

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    id: 1,
    logo: '/path/to/logo1.png',
    name: 'Skill Swipe',
    description: 'Mobile app that connects UCLA recruiters and job seekers using a heuristic-based matchmaking algorithm.',
    techStack: 'React, MongoDB, Express, Node, AWS S3, Styled Components',
    demoLink: 'https://example.com/demo1',
    frontendLink: 'https://github.com/example/frontend1',
    backendLink: 'https://github.com/example/backend1'
    
  },
  {
    id: 2,
    logo: '/path/to/logo2.png',
    name: 'Clever Cloud',
    description: 'AI-driven file management platform integrating vector search with O(1) time complexity for content-based search and 3D visualization.',
    techStack: 'React, Flask, Python, Pinecone, MinIO',
    demoLink: 'https://example.com/demo1',
    frontendLink: 'https://github.com/example/frontend1',
    backendLink: 'https://github.com/example/backend1'
  },
  {
    id: 3,
    logo: '/path/to/logo3.png',
    name: 'Denote',
    description: 'An all-in-one note-taking app with AI-driven features, supporting dynamic educational tools with smart prompts and auto-complete notes.',
    techStack: 'React, Electron, Node.js, p5.js, Desmos API, OpenAI GPT API',
    demoLink: 'https://example.com/demo1',
    frontendLink: 'https://github.com/example/frontend1',
    backendLink: 'https://github.com/example/backend1'
  },
  {
    id: 4,
    logo: '/path/to/logo4.png',
    name: 'AI Finance Coach',
    description: 'Developed user and admin dashboards with AI-driven features to predict credit score trends and offer personalized financial advice.',
    techStack: 'React, Angular, FastAPI, Azure, OpenAI GPT API',
    demoLink: 'https://example.com/demo1',
    frontendLink: 'https://github.com/example/frontend1',
    backendLink: 'https://github.com/example/backend1'
  }, 
  {
    id: 5,
    logo: '/path/to/logo5.png',
    name: 'Sea of Prospects',
    description: 'Ocean simulation game with rigid body physics, cloth simulation, and boid system. Navigate and collect treasures while avoiding obstacles and sharks!',
    techStack: 'JavaScript, HTML, CSS, tiny-graphics.js, p5.js, Euler Integration',
    demoLink: 'https://example.com/demo1',
    frontendLink: 'https://github.com/example/frontend1',
    backendLink: 'https://github.com/example/backend1'
  },
  {
    id: 6,
    logo: '/path/to/logo5.png',
    name: 'Website URL Shortener',
    description: 'Web application that shortens URLs and allows users to customize the subdirectory of the shortened link.',
    techStack: 'HTML, CSS, JavaScript, Tailwind CSS, Flask, SQLAlchemy',
    demoLink: 'https://example.com/demo1',
    frontendLink: 'https://github.com/example/frontend1',
    backendLink: 'https://github.com/example/backend1'
  },  
  {
    id: 7,
    logo: '/path/to/logo6.png',
    name: 'Live Weather App',
    description: 'A weather app that retrieves data from the OpenWeatherAPI, with features like location-based search and time management.',
    techStack: 'React, Tailwind CSS, OpenWeatherAPI, Luxon',
    demoLink: 'https://example.com/demo1',
    frontendLink: 'https://github.com/example/frontend1',
    backendLink: 'https://github.com/example/backend1'
  },
  {
    id: 8,
    logo: '/path/to/logo7.png',
    name: 'Rope and Cloth Simulator',
    description: 'This program simulates rope and cloth physics using Euler integration for accurate physics simulation.',
    techStack: 'HTML, CSS, JavaScript, p5.js, Euler Integration',
    demoLink: 'https://example.com/demo1',
    frontendLink: 'https://github.com/example/frontend1',
    backendLink: 'https://github.com/example/backend1'
  },
];

const experiences = [
  {
    id: 1,
    logo: '/path/to/experience-logo1.png',
    title: 'Software Engineer Intern',
    company: 'Infosys',
    duration: 'June 2024 – Present',
    bullets: [
      'Transitioned LiDAR data into training datasets for self-driving cars, handling 270 million data points',
      'Developed a 3D map (React and Typescript), tracking 50+ self-driving cars on Infosys campuses using WebSocket',
      'Optimized PostgreSQL with PostGIS for spatial data, including GiST indexing and partitioning'
    ]
  },
  {
    id: 2,
    logo: '/path/to/experience-logo2.png',
    title: 'Software Engineer',
    company: 'California Transportation Commission',
    duration: 'March 2021 – Present',
    bullets: [
      'Developed a dynamic, interactive map to facilitate the analysis of commuter traffic patterns in local highways',
      'Used ReactJS with Mapbox for geospatial data visualization; Enhanced data retrieval speeds by 50% with Redis',
      'Engineered a system to provide users with real-time traffic updates, and notify accidents and road conditions',
      'Integrated WebSocket for live data streaming and used a REST API layer (Node.js) that interfaced with MongoDB',
      'Wrote unit and functional tests to increase code coverage from 65% to 90%, ensuring a scalable platform',
      'Used Git for version control, integrated CI/CD pipelines with Azure DevOps, reducing deployment times by 30%'
    ]
  },
  {
    id: 3,
    logo: '/path/to/experience-logo3.png',
    title: 'Technology Student Intern',
    company: 'Powerschool',
    duration: 'June 2019 – August 2019',
    bullets: [
      'Developed a platform for students to optimize school schedules via ML algorithms to match student needs',
      'Enhanced predictive model accuracy using Python and TensorFlow for efficient forecast of optimal schedules',
      'Developed API endpoints with Java and Spring Boot to provide student data for the ML algorithms'
    ]
  }
];


const education = [
  { id: 1, logo: '/path/to/education-logo1.png', degree: 'Bachelor of Science in Computer Science', institution: 'UCLA', duration: 'Sept 2016 - Jun 2020', bullets: ['Graduated with honors.', 'Specialized in software engineering and data structures.', 'Completed senior thesis on machine learning applications.'] },
  { id: 2, logo: '/path/to/education-logo2.png', degree: 'High School Diploma', institution: 'ABC High School', duration: 'Sept 2012 - Jun 2016', bullets: ['Valedictorian.', 'Captain of the coding club.', 'Participated in state-level programming competitions.'] },
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
          <div className="social-links">
            <a href="https://www.linkedin.com/in/anieerudh" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
            <a href="https://github.com/anieerudh" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            <a href="/path/to/resume.pdf" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faFileLines} /> Resume
            </a>
          </div>
        </div>
      </section>
      <section id="projects" className="projects-section">
        <h1>Projects</h1>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-item">
              {/* <img src={project.logo} alt={project.name} className="project-logo" /> */}
              <div className="project-details">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p><strong>Tech Used:</strong> {project.techStack}</p>
                <div className="project-links">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-demo-link">Demo</a>
                  <a href={project.frontendLink} target="_blank" rel="noopener noreferrer" className="project-link">Frontend</a>
                  <a href={project.backendLink} target="_blank" rel="noopener noreferrer" className="project-link">Backend</a>
                </div>
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
      <section id="education" className="education-section">
        <h1>Education</h1>
        <div className="education-grid">
          {education.map(edu => (
            <div key={edu.id} className="education-item">
              <img src={edu.logo} alt={edu.institution} className="education-logo" />
              <div className="education-details">
                <h3>{edu.degree}</h3>
                <p>{edu.institution}</p>
                <p>{edu.duration}</p>
                <ul>
                  {edu.bullets.map((bullet, index) => (
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
