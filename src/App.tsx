// src/App.tsx

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileLines, faCircleDown, faCircleUp } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    id: 1,
    logo: '/assets/logo1.png', // Updated path
    name: 'Skill Swipe',
    description: 'Mobile app that connects UCLA recruiters and job seekers using a heuristic-based matchmaking algorithm.',
    techStack: 'React, MongoDB, Express, Node, AWS S3, Styled Components',
    demoLink:'https://docs.google.com/presentation/d/1040tB19Hv3Oax3SIPyWwWIa5_a-ZvlebLLw1PvouQ_Y/edit?usp=sharing',
    frontendLink: 'https://github.com/ouragan84/skill-swipe-app',
    backendLink: 'https://github.com/ouragan84/skill-swipe-backend'
  },
  {
    id: 2,
    logo: '/assets/logo2.png', // Updated path
    name: 'Clever Cloud',
    description: 'AI-driven file management platform integrating vector search with O(1) time complexity for content-based search and 3D visualization.',
    techStack: 'React, Flask, Python, Pinecone, MinIO',
    demoLink: 'https://youtu.be/JPK1OPkyhVM',
    frontendLink: 'https://github.com/ouragan84/clever-cloud-frontend',
    backendLink: 'https://github.com/ouragan84/clever-cloud-backend'
  },
  {
    id: 3,
    logo: '/assets/logo3.png', // Updated path
    name: 'Denote',
    description: 'An all-in-one note-taking app with AI-driven features, supporting dynamic educational tools with smart prompts and auto-complete notes.',
    techStack: 'React, Electron, Node.js, p5.js, Desmos API, OpenAI GPT API',
    demoLink: 'https://docs.google.com/presentation/d/1FqVkXDKrRvuO0pjayqLa1aeRy3haxeQl89SClEYUHvg/edit?usp=sharing',
    frontendLink: 'https://github.com/ouragan84/denote-app',
    backendLink: 'https://github.com/ouragan84/denote-backend'
  },
  {
    id: 4,
    logo: '/assets/logo4.png', // Updated path
    name: 'AI Finance Coach',
    description: 'Developed user and admin dashboards with AI-driven features to predict credit score trends and offer personalized financial advice.',
    techStack: 'React, Angular, FastAPI, Azure, OpenAI GPT API',
    demoLink: 'https://www.youtube.com/watch?v=VVIoMU9ozC4',
    frontendLink: 'https://github.com/anigokul432/bizhacks_dashboard_frontend',
    backendLink: 'https://github.com/example/backend1'
  }, 
  {
    id: 5,
    logo: '/assets/logo5.png', // Updated path
    name: 'Sea of Prospects',
    description: 'Ocean simulation game with rigid body physics, cloth simulation, and boid system. Navigate and collect treasures while avoiding obstacles and sharks!',
    techStack: 'JavaScript, HTML, CSS, tiny-graphics.js, p5.js, Euler Integration',
    demoLink: 'https://ship.edgarbaudry.dev',
    frontendLink: 'https://github.com/ouragan84/sea-of-prospects',
  },
  {
    id: 6,
    logo: '/assets/logo5.png', // Updated path
    name: 'Website URL Shortener',
    description: 'Web application that shortens URLs and allows users to customize the subdirectory of the shortened link.',
    techStack: 'HTML, CSS, JavaScript, Tailwind CSS, Flask, SQLAlchemy',
    backendLink: 'https://github.com/anigokul432/Website-URL-Shortener.git',
  },  
  {
    id: 7,
    logo: '/assets/logo6.png', // Updated path
    name: 'Live Weather App',
    description: 'A weather app that retrieves data from the OpenWeatherAPI, with features like location-based search and time management.',
    techStack: 'React, Tailwind CSS, OpenWeatherAPI, Luxon',
    demoLink: 'https://anigokul432.github.io/live-weather-app/',
    backendLink: 'https://github.com/anigokul432/live-weather-app'
  },
  {
    id: 8,
    logo: '/assets/logo7.png', // Updated path
    name: 'Rope and Cloth Simulator',
    description: 'This program simulates rope and cloth physics using Euler integration for accurate physics simulation.',
    techStack: 'HTML, CSS, JavaScript, p5.js, Euler Integration',
    demoLink: 'https://anigokul432.github.io/Rope-and-Cloth-Simulator/',
    backendLink: 'https://github.com/anigokul432/Rope-and-Cloth-Simulator'
  },
];

const experiences = [
  {
    id: 1,
    logo: '/assets/infosys.jpg', // Updated path
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
    logo: '/assets/ctc.png', // Updated path
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
    logo: '/assets/powerschool.png', // Updated path
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
  {
    id: 1,
    logo: '/assets/ucla.jpg', // Updated path
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of California, Los Angeles (UCLA)',
    duration: 'Sept 2022 - Jun 2024',
    coursework: [
      'Algorithm Design and Analysis',
      'Artificial Intelligence',
      'Programming Languages',
      'Automata Theory',
      'Operating Systems & System Programming',
      'Computer Architecture',
      'Computer Networking',
      'Machine Learning',
      'Data Science',
      'Compiler Construction',
      'Software Engineering',
    ]
  },
  {
    id: 2,
    logo: '/assets/flc.jpg', // Updated path
    degree: "Associate's Degree in Computer Science",
    institution: 'Folsom Lake College',
    duration: 'August 2020 - May 2022',
    coursework: [
      'Object Oriented Programming (C, C++, Java, Python)',
      'Data Structures',
      'Discrete Math',
    ]
  },
];

const App: React.FC = () => {
  const [navbarOpaque, setNavbarOpaque] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const sections = ['home', 'projects', 'experience', 'education'];

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarOpaque(true);
    } else {
      setNavbarOpaque(false);
    }

    const scrollY = window.scrollY + window.innerHeight / 2;
    let current = 0;
    sections.forEach((section, index) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement && scrollY >= sectionElement.offsetTop) {
        current = index;
      }
    });
    setCurrentSection(current);
  };

  const nextSection = () => {
    const nextIndex = (currentSection + 1) % sections.length;
    const nextSectionElement = document.getElementById(sections[nextIndex]);
    if (nextSectionElement) {
      nextSectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isLastSection = currentSection === sections.length - 1;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);

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
            <a href="https://www.linkedin.com/in/anigokul" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
            <a href="https://github.com/anigokul432" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            <a href={process.env.PUBLIC_URL + '/' + "/assets/resume.pdf"} download="Anieerudh_Gokulakrishnan_Resume.pdf" target="_blank" rel="noopener noreferrer" className="social-link">
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
              <div className="project-details">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p><strong>Tech Used:</strong> {project.techStack}</p>
                <div className="project-links">
                  {project.demoLink ? <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-demo-link">Demo</a> :<></>}
                  {project.frontendLink ? <a href={project.frontendLink} target="_blank" rel="noopener noreferrer" className="project-link">Frontend</a> :<></>}
                  {project.backendLink ? <a href={project.backendLink} target="_blank" rel="noopener noreferrer" className="project-link">{(project.name === "Website URL Shortener" || project.name === 'Live Weather App'|| project.name === 'Rope and Cloth Simulator') ? 'Source Code' : 'Backend'}</a>:<></>}
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
              <img src={process.env.PUBLIC_URL + '/' + exp.logo} alt={exp.company} className="experience-logo" />
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
              <img src={process.env.PUBLIC_URL + '/' + edu.logo} alt={edu.institution} className="education-logo" />
              <div className="education-details">
                <h3>{edu.degree}</h3>
                <p>{edu.institution}</p>
                <p>{edu.duration}</p>
                <div className="coursework">
                  <h4>Relevant Coursework:</h4>
                  <p>{edu.coursework.join(', ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="mobile-nav-button" onClick={nextSection}>
        <FontAwesomeIcon icon={isLastSection ? faCircleUp : faCircleDown} />
      </div>
    </>
  );
};

export default App;
