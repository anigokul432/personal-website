// src/App.tsx

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileLines, faCircleDown, faCircleUp } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    id: 1,
    logo: '/assets/logo1.png',
    name: 'Skill Swipe',
    description: 'Mobile app that connects UCLA recruiters and job seekers using a heuristic-based matchmaking algorithm.',
    techStack: 'React, MongoDB, Express, Node, AWS S3, Styled Components',
    demoLink: 'https://docs.google.com/presentation/d/1040tB19Hv3Oax3SIPyWwWIa5_a-ZvlebLLw1PvouQ_Y/edit?usp=sharing',
    frontendLink: 'https://github.com/ouragan84/skill-swipe-app',
    backendLink: 'https://github.com/ouragan84/skill-swipe-backend',
  },
  {
    id: 2,
    logo: '/assets/logo2.png',
    name: 'Clever Cloud',
    description: 'AI-driven file management platform integrating vector search with O(1) time complexity for content-based search and 3D visualization.',
    techStack: 'React, Flask, Python, Pinecone, MinIO',
    demoLink: 'https://youtu.be/JPK1OPkyhVM',
    frontendLink: 'https://github.com/ouragan84/clever-cloud-frontend',
    backendLink: 'https://github.com/ouragan84/clever-cloud-backend',
  },
  {
    id: 3,
    logo: '/assets/logo3.png',
    name: 'Denote',
    description: 'An all-in-one note-taking app with AI-driven features, supporting dynamic educational tools with smart prompts and auto-complete notes.',
    techStack: 'React, Electron, Node.js, p5.js, Desmos API, OpenAI GPT API',
    demoLink: 'https://docs.google.com/presentation/d/1FqVkXDKrRvuO0pjayqLa1aeRy3haxeQl89SClEYUHvg/edit?usp=sharing',
    frontendLink: 'https://github.com/ouragan84/denote-app',
    backendLink: 'https://github.com/ouragan84/denote-backend',
  },
  {
    id: 4,
    logo: '/assets/logo4.png',
    name: 'AI Finance Coach',
    description: 'Developed user and admin dashboards with AI-driven features to predict credit score trends and offer personalized financial advice.',
    techStack: 'React, Angular, FastAPI, Azure, OpenAI GPT API',
    demoLink: 'https://www.youtube.com/watch?v=VVIoMU9ozC4',
    frontendLink: 'https://github.com/anigokul432/bizhacks_dashboard_frontend',
    backendLink: 'https://github.com/example/backend1',
  },
  {
    id: 5,
    logo: '/assets/logo5.png',
    name: 'Sea of Prospects',
    description: 'Ocean simulation game with rigid body physics, cloth simulation, and boid system. Navigate and collect treasures while avoiding obstacles and sharks!',
    techStack: 'JavaScript, HTML, CSS, tiny-graphics.js, p5.js, Euler Integration',
    demoLink: 'https://ship.edgarbaudry.dev',
    frontendLink: 'https://github.com/ouragan84/sea-of-prospects',
  },
  {
    id: 6,
    logo: '/assets/logo5.png',
    name: 'Website URL Shortener',
    description: 'Web application that shortens URLs and allows users to customize the subdirectory of the shortened link.',
    techStack: 'HTML, CSS, JavaScript, Tailwind CSS, Flask, SQLAlchemy',
    backendLink: 'https://github.com/anigokul432/Website-URL-Shortener.git',
  },
  {
    id: 7,
    logo: '/assets/logo6.png',
    name: 'Live Weather App',
    description: 'A weather app that retrieves data from the OpenWeatherAPI, with features like location-based search and time management.',
    techStack: 'React, Tailwind CSS, OpenWeatherAPI, Luxon',
    demoLink: 'https://anigokul432.github.io/live-weather-app/',
    backendLink: 'https://github.com/anigokul432/live-weather-app',
  },
  {
    id: 8,
    logo: '/assets/logo7.png',
    name: 'Rope and Cloth Simulator',
    description: 'This program simulates rope and cloth physics using Euler integration for accurate physics simulation.',
    techStack: 'HTML, CSS, JavaScript, p5.js, Euler Integration',
    demoLink: 'https://anigokul432.github.io/Rope-and-Cloth-Simulator/',
    backendLink: 'https://github.com/anigokul432/Rope-and-Cloth-Simulator',
  },
];

const experiences = [
  {
    id: 1,
    logo: '/assets/infosys.jpg',
    title: 'Software Engineer Intern',
    company: 'Infosys',
    duration: 'June 2024 – Present',
    bullets: [
      'Transitioned LiDAR data into training datasets for self-driving cars, handling 270 million data points',
      'Developed a 3D map (React and Typescript), tracking 50+ self-driving cars on Infosys campuses using WebSocket',
      'Optimized PostgreSQL with PostGIS for spatial data, including GiST indexing and partitioning',
    ],
  },
  {
    id: 2,
    logo: '/assets/ctc.png',
    title: 'Software Engineer',
    company: 'California Transportation Commission',
    duration: 'March 2021 – Present',
    bullets: [
      'Developed a dynamic, interactive map to facilitate the analysis of commuter traffic patterns in local highways',
      'Used ReactJS with Mapbox for geospatial data visualization; Enhanced data retrieval speeds by 50% with Redis',
      'Engineered a system to provide users with real-time traffic updates, and notify accidents and road conditions',
      'Integrated WebSocket for live data streaming and used a REST API layer (Node.js) that interfaced with MongoDB',
      'Wrote unit and functional tests to increase code coverage from 65% to 90%, ensuring a scalable platform',
      'Used Git for version control, integrated CI/CD pipelines with Azure DevOps, reducing deployment times by 30%',
    ],
  },
  {
    id: 3,
    logo: '/assets/powerschool.png',
    title: 'Technology Student Intern',
    company: 'Powerschool',
    duration: 'June 2019 – August 2019',
    bullets: [
      'Developed a platform for students to optimize school schedules via ML algorithms to match student needs',
      'Enhanced predictive model accuracy using Python and TensorFlow for efficient forecast of optimal schedules',
      'Developed API endpoints with Java and Spring Boot to provide student data for the ML algorithms',
    ],
  },
];

const education = [
  {
    id: 1,
    logo: '/assets/ucla.jpg',
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
    ],
  },
  {
    id: 2,
    logo: '/assets/flc.jpg',
    degree: "Associate's Degree in Computer Science",
    institution: 'Folsom Lake College',
    duration: 'August 2020 - May 2022',
    coursework: [
      'Object Oriented Programming (C, C++, Java, Python)',
      'Data Structures',
      'Discrete Math',
    ],
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

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Navbar - Hidden on mobile */}
      <div className="hidden md:block">
        <Navbar opaque={navbarOpaque} />
      </div>

      <section id="home" className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-200 to-sky-100 text-black p-5">
  <div className="flex w-full max-w-5xl">
    {/* Left Content */}
    <div className="flex-1 flex flex-col justify-center text-left">
      <p className="text-xs uppercase tracking-widest text-gray-600 mb-4">Welcome to my portfolio</p>
      <h1 className="text-5xl font-bold mb-2 animate-fadeInLeft">
        Hi, I’m <span className="text-blue-800 py-2">Anieerudh</span>
      </h1>
      <h2 className="text-4xl font-light mb-6 animate-fadeInLeftDelayed">
        a <span className="font-bold">Software Engineer</span>
      </h2>
      <p className="text-lg leading-relaxed font-sans text-gray-700 max-w-lg animate-fadeInLeftLater">
        With a B.S. in Computer Science from <strong className="text-blue-800">UCLA</strong>, I have strong experience in <strong>Full Stack Development</strong>. I specialize in creating efficient, scalable, and user-friendly applications.
      </p>

      <div className="mt-5 flex gap-5 flex-wrap">
        <a href="https://www.linkedin.com/in/anigokul" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-lg px-5 py-2 rounded bg-blue-800 text-white hover:bg-blue-900 transition-all">
          <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
          <span className="hidden sm:inline ml-2">LinkedIn</span>
        </a>
        <a href="https://github.com/anigokul432" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-lg px-5 py-2 rounded bg-blue-800 text-white hover:bg-blue-900 transition-all">
          <FontAwesomeIcon icon={faGithub} className="text-xl" />
          <span className="hidden sm:inline ml-2">GitHub</span>
        </a>
        <a href={process.env.PUBLIC_URL + '/' + "/assets/resume.pdf"} download="Anieerudh_Gokulakrishnan_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-lg px-5 py-2 rounded bg-blue-800 text-white hover:bg-blue-900 transition-all">
          <FontAwesomeIcon icon={faFileLines} className="text-xl" />
          <span className="hidden sm:inline ml-2">Resume</span>
        </a>
      </div>
    </div>

    {/* Right Content - Hidden on mobile */}
    <div className="hidden md:flex flex-1 items-end justify-center relative">
      {/* Gradient Rectangle */}
      <div className="w-96 h-64 bg-gradient-to-br from-gray-200 to-white border border-white shadow-lg relative z-0"></div>

      {/* Image */}
      <img 
        src={process.env.PUBLIC_URL + '/' + "/assets/me.png"} 
        alt="Me" 
        className="w-96 h-auto object-cover absolute bottom-0 z-10" 
      />
    </div>
  </div>
</section>


      <section id="projects" className="min-h-screen bg-sky-100 text-black text-center p-5 flex flex-col">
        <h1 className="text-3xl mb-5 mt-20">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {projects.map(project => (
            <div key={project.id} className="bg-white text-left p-5 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform">
              <div className="flex flex-col items-start">
                <h3 className="text-2xl text-black">{project.name}</h3>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <p className="text-gray-700 mt-2"><strong>Tech Used:</strong> {project.techStack}</p>
                <div className="mt-4 flex gap-3">
                  {project.demoLink && <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-lg px-4 py-2 rounded bg-transparent border border-blue-800 text-blue-800 hover:bg-blue-900 hover:text-white transition-all">Demo</a>}
                  {project.frontendLink && <a href={project.frontendLink} target="_blank" rel="noopener noreferrer" className="text-lg px-4 py-2 rounded bg-blue-800 text-white hover:bg-blue-900 transition-all">Frontend</a>}
                  {project.backendLink && <a href={project.backendLink} target="_blank" rel="noopener noreferrer" className="text-lg px-4 py-2 rounded bg-blue-800 text-white hover:bg-blue-900 transition-all">{['Website URL Shortener', 'Live Weather App', 'Rope and Cloth Simulator'].includes(project.name) ? 'Source Code' : 'Backend'}</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="min-h-screen bg-sky-100 text-black text-center p-5 flex flex-col">
        <h1 className="text-3xl mb-5 mt-5">Experience</h1>
        <div className="flex flex-col items-center gap-5 max-w-5xl mx-auto">
          {experiences.map(exp => (
            <div key={exp.id} className="flex flex-col md:flex-row items-center bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform w-[100%]">
              <img src={process.env.PUBLIC_URL + '/' + exp.logo} alt={exp.company} className="w-20 h-20 rounded-full mr-5 mb-5 md:mb-0" />
              <div className="text-left">
                <h3 className="text-2xl text-black">{exp.title}</h3>
                <p className="text-lg text-gray-800">{exp.company}</p>
                <p className="text-lg mb-2 text-gray-800">{exp.duration}</p>
                <ul className="list-disc ml-5 text-sm space-y-1 text-gray-700">
                  {exp.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="min-h-screen bg-sky-100 text-black text-center p-5 flex flex-col">
        <h1 className="text-3xl mb-5 mt-20">Education</h1>
        <div className="flex flex-col items-center gap-5 max-w-4xl mx-auto">
          {education.map(edu => (
            <div key={edu.id}className="flex flex-col md:flex-row items-center bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform w-[100%]">
              <img src={process.env.PUBLIC_URL + '/' + edu.logo} alt={edu.institution} className="w-20 h-20 rounded-full mr-5 mb-5 md:mb-0" />
              <div className="text-left">
                <h3 className="text-2xl text-black">{edu.degree}</h3>
                <p className="text-lg text-gray-800">{edu.institution}</p>
                <p className="text-lg mb-2 text-gray-800">{edu.duration}</p>
                <div className="mt-2">
                  <h4 className="text-xl text-black">Relevant Coursework:</h4>
                  <p className="text-sm list-disc text-gray-700 ">{edu.coursework.join(', ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scroll Icon - Hidden on desktop */}
      <div className="md:hidden fixed bottom-5 right-5 bg-blue-800 text-white p-3 rounded-full flex items-center justify-center text-xl z-50 cursor-pointer hover:bg-blue-900 transition-all" onClick={nextSection}>
        <FontAwesomeIcon icon={isLastSection ? faCircleUp : faCircleDown} />
      </div>

      <footer className="bg-sky-100 left-0 right-0 flex items-center justify-center text-center pb-3">
  Copyright © {currentYear}
</footer>
    </>
  );
};

export default App;