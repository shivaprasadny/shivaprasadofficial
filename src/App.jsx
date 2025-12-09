import React from "react";

function App() {
  return (
    <div className="app">
      {/* Top Navigation */}
      <header className="nav">
        <div className="nav-left">
          <div className="nav-logo">SP</div>
          <div className="nav-title">
            <span className="nav-name">Shiva Prasad</span>
            <span className="nav-role">Java Full Stack Developer</span>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#sports">Sports</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-text">
            <h1>Building scalable, secure Java solutions.</h1>
            <p className="hero-subtitle">
              Full Stack Developer with 6+ years of experience designing and
              delivering high-performance applications for{" "}
              <strong>American Express, Ford, Walmart, and Fiserv</strong>.
            </p>

            <div className="hero-highlight">
              <p>
                I specialize in <strong>Java, Spring Boot, React, Angular, and microservices</strong>, 
                working end-to-end from API design to cloud deployment.
              </p>
            </div>

            <div className="hero-info">
              <div>
                <span className="label">Location</span>
                <span>Brooklyn, New York 11223</span>
              </div>
              <div>
                <span className="label">Email</span>
                <a href="mailto:shivaprasadmaya@gmail.com">
                  shivaprasadmaya@gmail.com
                </a>
              </div>
              <div>
                <span className="label">Phone</span>
                <a href="tel:+19292618102">+1 (929) 261-8102</a>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/shivaprasadjs/"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/shivaprasadny"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* HEADSHOT - rounded square, no text on top */}
          <div className="hero-photo-wrapper">
            <div className="hero-photo-card">
              {/* Make sure /public/headshot.jpg exists */}
              <img
                src="/headshot.jpg"
                alt="Shiva Prasad"
                className="hero-photo"
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <h2>Summary</h2>
          <p>
            Results-driven <strong>Full Stack Developer</strong> with{" "}
            <strong>6+ years</strong> of experience designing and delivering
            scalable, high-performance applications for Fortune 500 companies
            including <strong>American Express, Ford, Walmart, and Fiserv</strong>.
          </p>
          <p>
            Proficient in <strong>Java, Spring Boot, Angular, React</strong>, and{" "}
            <strong>microservices</strong>, with a proven track record of
            optimizing system performance, reducing development time, and
            implementing secure, real-time solutions. Comfortable working in{" "}
            <strong>Agile</strong> teams and leveraging{" "}
            <strong>CI/CD pipelines</strong> to deliver reliable software to
            production.
          </p>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <h2>Technical Skills</h2>
          <div className="grid">
            <div className="card">
              <h3>Languages</h3>
              <p>Java, JavaScript, TypeScript, HTML, SQL</p>
            </div>
            <div className="card">
              <h3>Frontend</h3>
              <p>
                React.js, Angular (v8–v14), React Native, Expo, Redux, NgRx,
                TailwindCSS, Bootstrap
              </p>
            </div>
            <div className="card">
              <h3>Backend</h3>
              <p>Java Spring Boot, Node.js, Express.js, Hibernate, JPA, JMS</p>
            </div>
            <div className="card">
              <h3>Cloud & DevOps</h3>
              <p>AWS, Azure DevOps, Docker, Kubernetes</p>
            </div>
            <div className="card">
              <h3>Databases</h3>
              <p>PostgreSQL, Oracle, MongoDB, DynamoDB, Snowflake</p>
            </div>
            <div className="card">
              <h3>Tools & CI/CD</h3>
              <p>Kafka, Splunk, Git, Swagger/OpenAPI, Jenkins, GitHub Actions, GitLab CI</p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <h2>Experience</h2>

          <div className="timeline">
            <article className="timeline-item">
              <header>
                <div>
                  <h3>Full Stack Developer · Fiserv</h3>
                  <p className="meta">Berkley, NJ · Oct 2024 – Present</p>
                </div>
              </header>
              <ul>
                <li>
                  Designed and delivered scalable financial applications using AWS,
                  React.js, Node.js, and TypeScript aligned with product and
                  business goals.
                </li>
                <li>
                  Developed secure RESTful APIs and microservices with JWT-based
                  authentication, Redis caching, and database performance tuning.
                </li>
                <li>
                  Built responsive UIs with React.js, Redux, and TailwindCSS for
                  seamless customer experiences.
                </li>
                <li>
                  Automated CI/CD pipelines with Git, Jenkins, Docker, and Kubernetes,
                  reducing release cycles by ~30%.
                </li>
                <li>
                  Leveraged AWS S3, Lambda, DynamoDB and optimized Snowflake/PostgreSQL
                  queries for faster analytics.
                </li>
              </ul>
            </article>

            <article className="timeline-item">
              <header>
                <div>
                  <h3>Full Stack Developer · American Express</h3>
                  <p className="meta">New York · June 2021 – July 2024</p>
                </div>
              </header>
              <ul>
                <li>
                  Built web applications using HTML, JavaScript, and Angular with
                  responsive, accessible UI.
                </li>
                <li>
                  Participated in full SDLC using Agile Scrum: sprint planning,
                  daily standups, retrospectives.
                </li>
                <li>
                  Developed RESTful APIs and GraphQL schemas for balance SOR
                  vertical.
                </li>
                <li>
                  Implemented Java, Spring, Hibernate, JMS backends, managing
                  dependencies with Maven and Git.
                </li>
                <li>
                  Used YAML + Swagger for API documentation and Rally for task
                  tracking and issue management.
                </li>
              </ul>
            </article>

            <article className="timeline-item">
              <header>
                <div>
                  <h3>Java Developer · Ford</h3>
                  <p className="meta">Piscataway, NJ · April 2019 – May 2021</p>
                </div>
              </header>
              <ul>
                <li>
                  Developed enterprise applications for internal systems including
                  vehicle diagnostics and inventory management.
                </li>
                <li>
                  Built RESTful APIs and microservices using Spring Boot, Hibernate,
                  JPA for customer data and third-party integrations.
                </li>
                <li>
                  Worked with Oracle and MongoDB for real-time analytics and supply
                  chain optimization.
                </li>
                <li>
                  Implemented logging/monitoring with Splunk, and centralized
                  configuration with Spring Config Server.
                </li>
                <li>
                  Automated deployments using Jenkins, Azure DevOps CI/CD, and used
                  DROOLS + Kafka for rules and messaging.
                </li>
              </ul>
            </article>

            <article className="timeline-item">
              <header>
                <div>
                  <h3>Full Stack Developer · Walmart</h3>
                  <p className="meta">Hoboken, NJ · May 2018 – Feb 2019</p>
                </div>
              </header>
              <ul>
                <li>
                  Developed and maintained Walmart’s Receiving Application for RDCs,
                  ensuring accurate inventory updates.
                </li>
                <li>
                  Built RESTful APIs with Spring Boot & Spring Data JPA, and React.js +
                  Redux frontends.
                </li>
                <li>
                  Optimized MongoDB with compound indexes and implemented Apache
                  Kafka streaming pipelines.
                </li>
                <li>
                  Implemented JWT-based security and monitored systems using Log4j,
                  Splunk, Kubernetes, Jenkins, and Docker.
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* SPORTS SECTION */}
        <section id="sports" className="section">
          <h2>Endurance Sports</h2>
          <p>
            Outside of technology, I’m deeply committed to endurance sports. Training
            and racing have helped me build discipline, focus, and the ability to
            perform under pressure.
          </p>
          <div className="grid sports-grid">
            <div className="card stat-card">
              <span className="stat-number">1</span>
              <span className="stat-label">Ironman Triathlon</span>
            </div>
            <div className="card stat-card">
              <span className="stat-number">2</span>
              <span className="stat-label">Olympic Triathlons</span>
            </div>
            <div className="card stat-card">
              <span className="stat-number">10</span>
              <span className="stat-label">Full Marathons</span>
            </div>
            <div className="card stat-card">
              <span className="stat-number">50</span>
              <span className="stat-label">Half Marathons</span>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section">
          <h2>Education & Certifications</h2>
          <div className="grid">
            <div className="card">
              <h3>Bachelor of Science in Information Technology</h3>
              <p className="meta">Kuvempu University · Karnataka, India</p>
            </div>
            <div className="card">
              <h3>AWS Certified Cloud Practitioner</h3>
              <p className="meta">Amazon Web Services</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>
            Open to Full Stack, backend, and consulting roles focused on scalable
            systems, cloud-native applications, and fintech solutions.
          </p>
          <div className="grid contact-grid">
            <div className="card">
              <h3>Email</h3>
              <a href="mailto:shivaprasadmaya@gmail.com">
                shivaprasadmaya@gmail.com
              </a>
            </div>
            <div className="card">
              <h3>Phone</h3>
              <a href="tel:+19292618102">+1 (929) 261-8102</a>
            </div>
            <div className="card">
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/shivaprasadjs/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/shivaprasadjs/
              </a>
            </div>
            <div className="card">
              <h3>GitHub</h3>
              <a
                href="https://github.com/shivaprasadny"
                target="_blank"
                rel="noreferrer"
              >
                github.com/shivaprasadny
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Shiva Prasad. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
