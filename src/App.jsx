import React, { useMemo, useState } from "react";

const PROFILE = {
  name: "Shiva Prasad",
  title: "Java Full Stack Developer",
  location: "Brooklyn, New York 11223",
  phone: "+1 (929) 261-8102",
  email: "shivaprasadmaya@gmail.com",
  linkedin: "https://www.linkedin.com/in/shivaprasadjs/",
  website: "https://www.shivaprasadofficial.com/",
  github: "https://github.com/shivaprasadny",
};

const BOOKS_PREVIEW_COUNT = 12;

const SUMMARY = [
  "To bring my expertise as a Full Stack Developer to a dynamic organization, leveraging my experience in building scalable, secure, and high-performance applications for Fiserv, American Express, Ford, and Walmart. I aim to drive innovation, optimize system performance, and deliver impactful solutions that enhance user experience and operational efficiency.",
  "Results-driven Full Stack Developer with 6+ years of experience designing and delivering scalable, high-performance applications for Fortune 500 companies like American Express, Ford, and Walmart. Proficient in Java, Spring Boot, Angular, React, and microservices, with a proven track record of optimizing system performance, reducing development time, and implementing secure, real-time solutions. Adept at collaborating in Agile environments and leveraging CI/CD pipelines to drive efficiency and innovation. Seeking to leverage my expertise to contribute to impactful projects and deliver cutting-edge solutions.",
];

const SKILLS = [
  { k: "Languages", v: "Java, JavaScript, TypeScript, HTML, SQL" },
  {
    k: "Frontend",
    v: "React.js, Angular (v8–v14), React Native, Expo, Redux, NgRx, TailwindCSS, Bootstrap",
  },
  { k: "Backend", v: "Java Spring Boot, Node.js, Express.js, Hibernate, JPA, JMS" },
  { k: "Cloud/DevOps", v: "AWS, Azure DevOps, Docker, Kubernetes" },
  { k: "Database", v: "PostgreSQL, Oracle, MongoDB, DynamoDB, Snowflake" },
  { k: "Tools", v: "Kafka, Splunk, Git, Swagger/OpenAPI" },
  {
    k: "CI/CD",
    v: "Jenkins, GitHub Actions / GitLab CI, build & deployment scripting, containerization",
  },
  { k: "AI Productivity Tools", v: "GitHub Copilot, ChatGPT, OpenAI API, Cursor AI" },
];

const CERTS = [{ title: "AWS Certified Cloud Practitioner", sub: "Amazon Web Services" }];

const SPORTS = [
  { n: 1, label: "Ironman Triathlon" },
  { n: 2, label: "Olympic-Distance Triathlons" },
  { n: 10, label: "Full Marathons" },
  { n: 50, label: "Half Marathons" },
];

const EXPERIENCE = [
  {
    company: "Fiserv",
    role: "Full Stack Developer",
    location: "Berkley, NJ",
    dates: "Oct 2024 – Present",
    bullets: [
      "Designed and delivered scalable financial applications using AWS, React.js, Java Spring Boot, and TypeScript, ensuring strong alignment with client requirements and broader business objectives.",
      "Led end-to-end SDLC activities—from requirements gathering and solution design to deployment—overseeing unit testing, API integration, and post-launch support to ensure reliability and performance.",
      "Developed secure, high-performance RESTful APIs and microservices using Java Spring Boot, implementing JWT-based authentication, Redis caching, and database performance enhancements to support scalable growth.",
      "Built responsive and accessible user interfaces with React.js, Redux, and TailwindCSS, optimizing frontend performance to deliver intuitive user experiences.",
      "Utilized AWS services such as S3, Lambda, and DynamoDB to architect fault-tolerant applications; collaborated with data engineering teams to fine-tune Snowflake and PostgreSQL queries for faster analytics.",
      "Automated CI/CD pipelines with Git, Jenkins, Docker, and Kubernetes, decreasing release cycles by ~30% and accelerating delivery of customer-facing features.",
      "Championed Agile practices and cross-functional collaboration by leading sprint planning, backlog refinement, and rapid production issue resolution using AWS CloudWatch to minimize service disruptions.",
      "Leveraged AI-assisted development tools (GitHub Copilot, ChatGPT) to accelerate debugging, improve documentation, and enhance code quality across backend and frontend services.",
    ],
  },
  {
    company: "American Express",
    role: "Full Stack Developer",
    location: "New York",
    dates: "Jun 2021 – Jul 2024",
    bullets: [
      "Designed and developed web applications using HTML, JavaScript, and Angular, ensuring responsive and user-friendly interfaces.",
      "Participated in all stages of SDLC using Agile Scrum methodology, including sprint planning, daily standups, and retrospectives.",
      "Utilized NgRx-bootstrap for CSS styling and Node.js for server-side scripting to enhance application performance and scalability.",
      "Developed and maintained RESTful APIs for seamless integration between frontend and backend systems.",
      "Wrote and maintained YAML files for API documentation and deployed them into Swagger for improved usability.",
      "Implemented Java, Spring, Hibernate, and JMS for backend development, ensuring robust and scalable solutions.",
      "Managed project dependencies using Maven and version control using Git, ensuring efficient collaboration and code management.",
      "Conducted bug reporting, task tracking, and issue resolution using Rally, improving team productivity and project transparency.",
      "Built and maintained GraphQL schemas for the balance SOR vertical, enabling efficient data querying and retrieval.",
      "Worked with Jenkins to establish CI/CD pipelines, automating build, test, and deployment processes for continuous improvement.",
      "Developed scripts for building, packaging, and deploying core services and applications, streamlining deployment workflows.",
      "Collaborated with cross-functional teams to ensure alignment between technical solutions and business requirements, delivering high-quality software on time.",
    ],
  },
  {
    company: "Ford",
    role: "Java Developer",
    location: "Piscataway, NJ",
    dates: "Apr 2019 – May 2021",
    bullets: [
      "Developed and maintained enterprise applications for Ford's internal systems, including business logic, user interfaces, and reporting tools to support critical operations.",
      "Designed, tested, and deployed microservices and monolithic architectures for vehicle diagnostics and inventory management systems, improving scalability and performance.",
      "Built RESTful APIs using Spring Boot, Hibernate, and JPA to integrate customer data management systems with third-party platforms.",
      "Utilized Swagger UI to document APIs for dealer management systems, enhancing developer productivity and integration efficiency.",
      "Implemented microservices to access and manage data from Oracle and MongoDB databases, supporting real-time analytics for supply chain optimization.",
      "Configured and used Splunk for centralized logging and monitoring of production line applications, ensuring reliability and uptime.",
      "Leveraged Spring Config Server for centralized configuration management of global sales and marketing platforms.",
      "Automated deployment processes using Jenkins Pipeline and Azure DevOps CI/CD for vehicle configuration systems, reducing deployment time by ~30%.",
      "Implemented DROOLS to handle complex business rules for warranty and claims processing systems, improving automation and accuracy.",
      "Built reusable components and forms in Angular 8 for employee self-service portals, enhancing UX and maintainability.",
      "Integrated Apache Kafka for real-time messaging between order processing and inventory systems, ensuring smooth data flow and reducing delays.",
    ],
  },
  {
    company: "Walmart",
    role: "Full Stack Developer",
    location: "Hoboken, NJ",
    dates: "May 2018 – Feb 2019",
    bullets: [
      "Developed and maintained Walmart’s Receiving Application for Regional Distribution Centres (RDCs), ensuring accurate inventory updates and streamlined distribution to stores.",
      "Designed and implemented RESTful APIs using Spring Boot and Spring Data JPA to integrate inventory systems with vendor data.",
      "Built dynamic and responsive user interfaces using React.js, enhancing usability of internal tools and dashboards.",
      "Integrated Redux for state management, ensuring consistent and predictable data flow across frontend systems.",
      "Optimized database operations in MongoDB using compound indexes to reduce query times during peak traffic.",
      "Developed real-time streaming pipelines using Apache Kafka to enable event-driven communication between microservices.",
      "Implemented JWT-based authentication and authorization for secure API access.",
      "Utilized Log4j and Splunk for centralized logging and monitoring, reducing downtime and improving reliability.",
      "Deployed and managed applications using Kubernetes for scalability and high availability.",
      "Built CI/CD pipelines using Jenkins and Docker, automating build, test, and deployment processes.",
    ],
  },
];

const EDUCATION = [
  { title: "Bachelor of Science in Information Technology", sub: "Kuvempu University · Karnataka, India" },
];

const VOLUNTEER = [
  {
    org: "New York Road Runners (NYRR)",
    role: "Race Volunteer",
    dates: "Ongoing",
    bullets: [
      "Volunteered at NYRR races supporting runner check-in, course operations, and participant assistance.",
      "Helped ensure smooth event logistics and a safe, positive experience for athletes.",
    ],
  },
  {
    org: "Earth Saviours Foundation",
    role: "Volunteer",
    dates: "Gurugram, India · Ongoing",
    bullets: [
      "Supported community service initiatives including work for the organization’s old age home.",
      "Assisted with daily operations and on-ground support for residents and charity activities.",
    ],
  },
  {
    org: "American Red Cross",
    role: "Volunteer / Blood Donation Supporter",
    dates: "Ongoing",
    bullets: ["Supported blood donation awareness and community health initiatives."],
  },
  {
    org: "New York Blood Center",
    role: "Regular Blood Donor",
    dates: "Ongoing",
    bullets: ["Regular blood donor contributing to community blood supply and emergency readiness."],
  },
  {
    org: "DKMS",
    role: "Bone Marrow Donor (Blood Cancer Registry)",
    dates: "Ongoing",
    bullets: [
      "Registered bone marrow donor to support patients fighting blood cancer.",
      "Promote awareness of stem cell/bone marrow donation within community.",
    ],
  },
  {
    org: "Band of Parents",
    role: "Fundraising Volunteer",
    dates: "Madison Square Garden, New York · Ongoing",
    bullets: [
      "Volunteered in charity events and games to raise funds for cancer patients and research support.",
      "Assisted with event operations, coordination, and attendee experience.",
    ],
  },
];

const BOOKS = [
  { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", tag: "History" },
  { title: "21 Lessons for the 21st Century", author: "Yuval Noah Harari", tag: "Society" },
  { title: "Remnants of a Separation: A History of the Partition through Material Memory", author: "Aanchal Malhotra", tag: "History" },
  { title: "Train to Pakistan", author: "Khushwant Singh", tag: "History" },
  { title: "Waiting For A Visa", author: "B.R. Ambedkar", tag: "History" },
  { title: "Why I am an Atheist and Other Works", author: "Bhagat Singh", tag: "History" },
  { title: "Gandhi: An Autobiography", author: "Mahatma Gandhi", tag: "Biography" },
  { title: "Long Walk to Freedom", author: "Nelson Mandela", tag: "Biography" },
  { title: "Black Warrant: Confessions of a Tihar Jailer", author: "Sunil Gupta", tag: "True Crime" },
  { title: "Benjamin Franklin's Last Bet", author: "Michael Meyer", tag: "History" },
  { title: "Shiksha: My Experiments as an Education Minister", author: "Manish Sisodia", tag: "Education" },

  { title: "The Coming Wave: AI, Power, and Our Future", author: "Mustafa Suleyman", tag: "AI / Tech" },
  { title: "Clean Code", author: "Robert C. Martin", tag: "Engineering" },
  { title: "The Pragmatic Programmer", author: "Andrew Hunt & David Thomas", tag: "Engineering" },

  { title: "Atomic Habits", author: "James Clear", tag: "Productivity" },
  { title: "The Psychology of Money", author: "Morgan Housel", tag: "Money" },
  { title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", tag: "Productivity" },
  { title: "How to Win Friends & Influence People", author: "Dale Carnegie", tag: "People" },
  { title: "Think and Grow Rich", author: "Napoleon Hill", tag: "Money" },
  { title: "As a Man Thinketh", author: "James Allen", tag: "Mindset" },
  { title: "The Courage to Be Disliked", author: "Ichiro Kishimi", tag: "Mindset" },
  { title: "The Daily Stoic", author: "Ryan Holiday & Stephen Hanselman", tag: "Stoicism" },

  { title: "Good to Go", author: "Christie Aschwanden", tag: "Fitness" },
  { title: "Marathon (All-New 4th Edition)", author: "Hal Higdon", tag: "Fitness" },
  { title: "The New Rules of Marathon and Half-Marathon Nutrition", author: "Matt Fitzgerald", tag: "Fitness" },
  { title: "The Blue Zones", author: "Dan Buettner", tag: "Health" },
  { title: "Yoga Anatomy", author: "Leslie Kaminoff", tag: "Health" },

  { title: "The Blue Umbrella", author: "Ruskin Bond", tag: "Literature" },

  { title: "Godan", author: "Munshi Premchand", tag: "Hindi Classic" },
  { title: "अक्टूबर जंक्शन", author: "Divya Prakash Dubey", tag: "Hindi" },
  { title: "Ibnebatuti (Hindi Edition)", author: "Divya Prakash Dubey", tag: "Hindi" },
  { title: "ट्वेल्थ फेल (12th Fail)", author: "Anurag Pathak", tag: "Hindi" },
  { title: "नाराज़", author: "Rahat Indori", tag: "Poetry" },
  { title: "तरकश (Tarkash)", author: "Javed Akhtar", tag: "Poetry" },
  { title: "रश्मिरथी", author: "Ramdhari Singh 'Dinkar'", tag: "Poetry" },

  { title: "The Immortals of Meluha", author: "Amish Tripathi", tag: "Mythology" },
  { title: "The Secret of the Nagas", author: "Amish Tripathi", tag: "Mythology" },
  { title: "The Oath of the Vayuputras", author: "Amish Tripathi", tag: "Mythology" },
  { title: "Scion of Ikshvaku", author: "Amish Tripathi", tag: "Mythology" },
  { title: "Sita: Warrior of Mithila", author: "Amish Tripathi", tag: "Mythology" },
  { title: "Raavan: Enemy of Aryavarta", author: "Amish Tripathi", tag: "Mythology" },
  { title: "War of Lanka", author: "Amish Tripathi", tag: "Mythology" },
  { title: "Immortal India", author: "Amish Tripathi", tag: "Mythology" },
];

function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

function Section({ id, title, subtitle, children, right }) {
  return (
    <section id={id} className="section">
      <div className="section-head">
        <div>
          <h2>{title}</h2>
          {subtitle ? <p className="sub">{subtitle}</p> : null}
        </div>
        {right ? <div className="section-right">{right}</div> : null}
      </div>
      {children}
    </section>
  );
}

export default function App() {
  const [bookQuery, setBookQuery] = useState("");
  const [bookTag, setBookTag] = useState("All");
  const [showAllBooks, setShowAllBooks] = useState(false);

  const allTags = useMemo(() => {
    const tags = new Set(["All"]);
    BOOKS.forEach((b) => tags.add(b.tag));
    return Array.from(tags);
  }, []);

  const filteredBooks = useMemo(() => {
    const q = bookQuery.trim().toLowerCase();
    return BOOKS.filter((b) => {
      const matchesTag = bookTag === "All" ? true : b.tag === bookTag;
      const matchesQuery = q
        ? `${b.title} ${b.author} ${b.tag}`.toLowerCase().includes(q)
        : true;
      return matchesTag && matchesQuery;
    });
  }, [bookQuery, bookTag]);

  const visibleBooks = useMemo(() => {
    if (showAllBooks) return filteredBooks;
    return filteredBooks.slice(0, BOOKS_PREVIEW_COUNT);
  }, [filteredBooks, showAllBooks]);

  return (
    <div className="app">
      {/* NAV */}
      <header className="nav">
        <div className="nav-left">
          <div className="nav-logo">SP</div>
          <div className="nav-title">
            <span className="nav-name">{PROFILE.name}</span>
            <span className="nav-role">{PROFILE.title}</span>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#sports">Sports</a>
          <a href="#books">Books</a>
          <a href="#volunteer">Volunteer</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-cta">
          <a className="btn small" href="#contact">Contact</a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-text">
            <p className="eyebrow">Java · Spring Boot · React · Angular · Microservices</p>
            <h1>
              Building scalable, secure products
              <span className="accent"> for enterprise teams</span>.
            </h1>

            <p className="lead">
              Full Stack Developer with 6+ years of experience delivering high-performance
              applications for <strong>Fiserv, American Express, Ford, and Walmart</strong>.
            </p>

            <div className="hero-pills">
              <Pill>AWS</Pill>
              <Pill>Spring Boot</Pill>
              <Pill>React</Pill>
              <Pill>Kafka</Pill>
              <Pill>CI/CD</Pill>
              <Pill>Redis</Pill>
            </div>

            <div className="hero-info">
              <div>
                <span className="label">Location</span>
                <span>{PROFILE.location}</span>
              </div>
              <div>
                <span className="label">Email</span>
                <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              </div>
              <div>
                <span className="label">Phone</span>
                <a href="tel:+19292618102">{PROFILE.phone}</a>
              </div>
            </div>

            <div className="hero-actions">
              <a className="btn primary" href="#contact">Let’s Connect</a>
              <a className="btn" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>

            <div className="hero-links">
              <a href={PROFILE.website} target="_blank" rel="noreferrer">
                {PROFILE.website.replace("https://", "").replace("/", "")}
              </a>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <div className="photo-card">
              <img src="/headshot.jpg" alt="Shiva Prasad" className="photo" />
            </div>

            <div className="cert-card">
              <div className="cert-title">Certification</div>
              <div className="cert-main">AWS Certified Cloud Practitioner</div>
              <div className="cert-sub">Amazon Web Services</div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" title="About">
          <div className="two-col">
            <div className="card">
              <h3>Objective</h3>
              <p>{SUMMARY[0]}</p>
            </div>
            <div className="card">
              <h3>Summary</h3>
              <p>{SUMMARY[1]}</p>
            </div>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Technical Skills" subtitle="Tools I use to ship reliable software">
          <div className="grid">
            {SKILLS.map((s) => (
              <div className="card" key={s.k}>
                <h3>{s.k}</h3>
                <p>{s.v}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section
          id="experience"
          title="Work Experience"
          subtitle="Enterprise engineering experience across fintech and automotive"
        >
          <div className="timeline">
            {EXPERIENCE.map((job) => (
              <article key={`${job.company}-${job.dates}`} className="timeline-item">
                <div className="dot" />
                <div className="timeline-content card">
                  <h3>{job.role} · {job.company}</h3>
                  <p className="meta">{job.location} · {job.dates}</p>
                  <ul>
                    {job.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education" title="Education">
          <div className="grid">
            {EDUCATION.map((e) => (
              <div className="card" key={e.title}>
                <h3>{e.title}</h3>
                <p className="meta">{e.sub}</p>
              </div>
            ))}
            {CERTS.map((c) => (
              <div className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p className="meta">{c.sub}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* SPORTS */}
        <Section id="sports" title="Endurance Sports" subtitle="Consistency, discipline, and long-term focus">
          <div className="stats">
            {SPORTS.map((s) => (
              <div key={s.label} className="card stat">
                <div className="stat-n">{s.n}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* BOOKS */}
        <Section
          id="books"
          title="Books I’ve Read"
          subtitle="A mix of classics, productivity, history, and Indian literature"
          right={
            <div className="books-controls">
              <input
                value={bookQuery}
                onChange={(e) => setBookQuery(e.target.value)}
                placeholder="Search books…"
                className="input"
              />
              <select
                value={bookTag}
                onChange={(e) => {
                  setBookTag(e.target.value);
                  setShowAllBooks(false); // reset when filter changes
                }}
                className="select"
              >
                {allTags.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          }
        >
          <div className="books-grid">
            {visibleBooks.map((b) => (
              <div key={`${b.title}-${b.author}`} className="book card">
                <div className="book-top">
                  <div className="book-title">{b.title}</div>
                  <span className="tag">{b.tag}</span>
                </div>
                <div className="book-author">{b.author}</div>
              </div>
            ))}
          </div>

          <div className="note">
            Showing <strong>{visibleBooks.length}</strong> of <strong>{filteredBooks.length}</strong> books (filtered).
          </div>

          {filteredBooks.length > BOOKS_PREVIEW_COUNT && (
            <div style={{ marginTop: "0.9rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
              <button className="btn" type="button" onClick={() => setShowAllBooks((v) => !v)}>
                {showAllBooks ? "Show less" : "Show all books"}
              </button>
              {!showAllBooks && (
                <span style={{ color: "#6b7280", fontSize: "0.92rem" }}>
                  Tip: use search + filter to find quickly.
                </span>
              )}
            </div>
          )}
        </Section>

        {/* VOLUNTEER */}
        <Section id="volunteer" title="Volunteer" subtitle="Giving back through events, community service, and health initiatives">
          <div className="grid">
            {VOLUNTEER.map((v) => (
              <div className="card" key={v.org}>
                <h3>{v.role} · {v.org}</h3>
                <p className="meta">{v.dates}</p>
                <ul>
                  {v.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact" subtitle="Open to Full Stack and Backend roles · NYC / Remote">
          <div className="grid contact">
            <div className="card">
              <h3>Email</h3>
              <a href={`mailto:${PROFILE.email}`} className="link">{PROFILE.email}</a>
            </div>
            <div className="card">
              <h3>Phone</h3>
              <a href="tel:+19292618102" className="link">{PROFILE.phone}</a>
            </div>
            <div className="card">
              <h3>LinkedIn</h3>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="link">
                linkedin.com/in/shivaprasadjs
              </a>
            </div>
            <div className="card">
              <h3>Website</h3>
              <a href={PROFILE.website} target="_blank" rel="noreferrer" className="link">
                shivaprasadofficial.com
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
          <div className="footer-links">
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <span>·</span>
            <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
