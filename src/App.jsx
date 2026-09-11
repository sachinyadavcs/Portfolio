
import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          Sachin<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#training">Training</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* HERO */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="hello">HELLO, I'M</p>

          <h1>Sachin Yadav</h1>

          <h2>
            Software Developer <span>|</span> Full Stack Developer
          </h2>

          <p className="hero-text">
            Software Developer with experience building full-stack web
            applications using the MERN Stack. Strong foundation in
            Computer Networking, Data Structures & Algorithms, REST APIs,
            and scalable web application development.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn primary">
              View Projects
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="section">

        <p className="section-label">ABOUT ME</p>

        <h2 className="section-title">
          Who I Am
        </h2>

        <div className="about-content">

          <p>
            I'm Sachin Yadav, a Computer Science and Engineering graduate
            with a strong interest in Software Development and Full Stack
            Web Development.
          </p>

          <p>
            I have experience building full-stack web applications using
            React.js, Node.js, Express.js and MongoDB.
          </p>

          <p>
            I have a strong foundation in Computer Networking, Data
            Structures & Algorithms, Object-Oriented Programming, REST APIs
            and System Design.
          </p>

          <p>
            I have solved 100+ coding problems and continuously work on
            improving my programming, development and problem-solving skills.
          </p>

        </div>

      </section>


      {/* SKILLS */}
      <section id="skills" className="section skills-section">

        <p className="section-label">MY SKILLS</p>

        <h2 className="section-title">
          Technical Skills
        </h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Programming Languages</h3>

            <div className="skill-list">
              <span>C++</span>
              <span>C</span>
              <span>JavaScript</span>
            </div>
          </div>


          <div className="skill-card">
            <h3>Frontend</h3>

            <div className="skill-list">
              <span>React.js</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Bootstrap</span>
              <span>Tailwind CSS</span>
            </div>
          </div>


          <div className="skill-card">
            <h3>Backend</h3>

            <div className="skill-list">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST APIs</span>
            </div>
          </div>


          <div className="skill-card">
            <h3>Database</h3>

            <div className="skill-list">
              <span>MongoDB</span>
              <span>MySQL</span>
              <span>SQL</span>
            </div>
          </div>


          <div className="skill-card">
            <h3>Developer Tools</h3>

            <div className="skill-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Postman</span>
            </div>
          </div>


          <div className="skill-card">
            <h3>Core Concepts</h3>

            <div className="skill-list">
              <span>Computer Networking</span>
              <span>DSA</span>
              <span>OOP</span>
              <span>System Design</span>
            </div>
          </div>

        </div>

      </section>


      {/* PROJECTS */}
      <section id="projects" className="section">

        <p className="section-label">MY WORK</p>

        <h2 className="section-title">
          Featured Projects
        </h2>

        <div className="projects-grid">


          {/* PROJECT 1 */}
          <div className="project-card">

            <div className="project-number">
              01
            </div>

            <h3>
              Society Management System
            </h3>

            <p className="project-date">
              Jan 2026 – May 2026
            </p>

            <p>
              Developed a full-stack MERN application to automate
              residential society management.
            </p>

            <ul className="project-features">
              <li>Resident management</li>
              <li>Maintenance billing</li>
              <li>Complaint handling</li>
              <li>Notice management</li>
              <li>Role-Based Access Control (RBAC)</li>
              <li>Secure REST APIs</li>
            </ul>

            <div className="project-tech">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>

            <div className="project-links">

              <a
                href="https://github.com/Sachin1960"
                target="_blank"
                rel="noreferrer"
              >
                GitHub →
              </a>

            </div>

          </div>


          {/* PROJECT 2 */}
          <div className="project-card">

            <div className="project-number">
              02
            </div>

            <h3>
              IMDb Movie Clone Website
            </h3>

            <p className="project-date">
              July 2025 – Nov 2025
            </p>

            <p>
              Built a responsive movie browsing website with a modern
              user interface and integrated third-party APIs to display
              movie details, ratings and cast information.
            </p>

            <ul className="project-features">
              <li>Movie details</li>
              <li>Ratings and cast information</li>
              <li>Favorites feature</li>
              <li>Watch Later feature</li>
              <li>Responsive interface</li>
            </ul>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Tailwind CSS</span>
            </div>

          </div>

        </div>

      </section>


      {/* EDUCATION */}
      <section id="education" className="section education">

        <p className="section-label">
          EDUCATION
        </p>

        <h2 className="section-title">
          Education
        </h2>

        <div className="education-grid">


          <div className="education-card">

            <span className="education-year">
              Sept 2022 – June 2026
            </span>

            <h3>
              Bachelor of Technology
            </h3>

            <h4>
              Computer Science and Engineering
            </h4>

            <p>
              United College of Engineering and Research, Prayagraj
            </p>

            <strong>
              Percentage: 70%
            </strong>

          </div>


          <div className="education-card">

            <span className="education-year">
              Apr 2020 – Mar 2021
            </span>

            <h3>
              Class XII
            </h3>

            <h4>
              UP Board
            </h4>

            <p>
              J.R.P.I.C Rampur, Jaunpur
            </p>

            <strong>
              Percentage: 75%
            </strong>

          </div>


          <div className="education-card">

            <span className="education-year">
              Apr 2018 – Mar 2019
            </span>

            <h3>
              Class X
            </h3>

            <h4>
              UP Board
            </h4>

            <p>
              J.R.P.I.C Rampur, Jaunpur
            </p>

            <strong>
              Percentage: 75%
            </strong>

          </div>

        </div>

      </section>


      {/* TRAINING */}
      <section id="training" className="section">

        <p className="section-label">
          TECHNICAL TRAINING
        </p>

        <h2 className="section-title">
          Training & Development
        </h2>

        <div className="training-grid">

          <div className="training-card">

            <h3>
              IBM Summer Training
            </h3>

            <p>
              Web Development using MERN Stack
            </p>

          </div>


          <div className="training-card">

            <h3>
              Engineer Core Summer Training
            </h3>

            <p>
              JavaScript Programming
            </p>

          </div>


          <div className="training-card">

            <h3>
              Growth Ninja Summer Training
            </h3>

            <p>
              Full Stack Development using MERN
            </p>

          </div>

        </div>

      </section>


      {/* COURSEWORK */}
      <section className="section coursework">

        <p className="section-label">
          COURSEWORK
        </p>

        <h2 className="section-title">
          Relevant Coursework
        </h2>

        <div className="coursework-list">

          <span>Computer Networks</span>
          <span>Object-Oriented Programming</span>
          <span>Data Structures & Algorithms</span>
          <span>Operating Systems</span>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="section contact">

        <p className="section-label">
          CONTACT
        </p>

        <h2 className="section-title">
          Let's Connect
        </h2>

        <p>
          I'm currently looking for opportunities to start my career
          as a Software Developer and grow as a technology professional.
        </p>

        <div className="contact-info">

          <p>
            📧 sachincse8303@gmail.com
          </p>

          <p>
            📱 +91 8303422399
          </p>

        </div>

        <div className="contact-buttons">

          <a
            href="mailto:sachincse8303@gmail.com"
            className="btn primary"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Sachin1960"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/sachin8303"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            LinkedIn
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer>
        <p>
          © 2026 Sachin Yadav. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;
