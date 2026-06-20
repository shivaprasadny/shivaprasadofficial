import { useEffect, useMemo, useState } from "react";

// Small shared UI elements used across multiple portfolio sections.
export function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

export function Section({ id, title, subtitle, children, right }) {
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

export function Header({ profile }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme || "light";
  });

  // Apply the chosen theme to the full document and remember it for future visits.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Keep the main navigation short so it remains useful on desktop and mobile.
  const navItems = [
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="nav">
      {/* Brand */}
      <a className="nav-left" href="#top" aria-label="Back to top">
        <img className="nav-logo" src="/sp-logo.png" alt="" />
        <div className="nav-title">
          <span className="nav-name">{profile.name}</span>
          <span className="nav-role">{profile.title}</span>
        </div>
      </a>

      {/* Primary navigation */}
      <nav
        id="primary-navigation"
        className={`nav-links ${menuOpen ? "open" : ""}`}
        aria-label="Primary navigation"
      >
        {navItems.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
      </nav>

      {/* Desktop contact action and mobile menu control */}
      <div className="nav-cta">
        <a className="btn small" href="#contact">Contact</a>
        <button
          className="theme-button"
          type="button"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          onClick={() => setTheme((currentTheme) => (
            currentTheme === "dark" ? "light" : "dark"
          ))}
        >
          <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
        </button>
        <button
          className={`menu-button ${menuOpen ? "open" : ""}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export function Hero({ profile }) {
  return (
    <section className="hero" id="top">
      {/* Main introduction */}
      <div className="hero-text">
        <div className="hero-kicker">
          <div className="availability"><span /> Available for new opportunities</div>
          <p className="eyebrow">Java Full Stack Developer</p>
        </div>

        <h1>
          Building scalable, secure products
          <span className="accent"> for enterprise teams</span>.
        </h1>

        <p className="lead">
          Full Stack Developer with 7+ years of experience delivering high-performance
          applications for <strong>Fiserv, American Express, Ford, and Walmart</strong>.
        </p>

        {/* Core strengths only; the complete list lives in Technical Skills. */}
        <div className="hero-pills">
          <Pill>Spring Boot</Pill>
          <Pill>React</Pill>
          <Pill>AWS</Pill>
          <Pill>AI-Assisted Development</Pill>
        </div>

        {/* Primary conversion actions */}
        <div className="hero-actions">
          <a className="btn primary" href="#projects">View My Work</a>
          <a className="btn" href="#contact">Contact Me</a>
          <button className="text-action" type="button" onClick={() => window.print()}>
            Save Résumé
          </button>
        </div>

        {/* Contact details and professional profiles */}
        <div className="hero-meta">
          <span>{profile.location}</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span className="meta-divider" aria-hidden="true">•</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      {/* Unified profile visual keeps the right side calm and intentional. */}
      <aside className="hero-profile" aria-label="Profile and certification">
        <div className="photo-card">
          <img src="/headshot.jpg" alt="Shiva Prasad" className="photo" />
        </div>
        <div className="cert-card">
          <div className="cert-icon" aria-hidden="true">AWS</div>
          <div>
            <div className="cert-title">Certified</div>
            <div className="cert-main">AWS Cloud Practitioner</div>
            <div className="cert-sub">Amazon Web Services</div>
          </div>
        </div>
      </aside>
    </section>
  );
}

export function AboutSection({ summary }) {
  return (
    <Section id="about" title="About Me" subtitle="Enterprise experience, product thinking, and a bias toward dependable software">
      <div className="card about-card">
        <p>{summary}</p>
        <div className="about-highlights">
          <span><strong>7+ years</strong> building production software</span>
          <span><strong>4 companies</strong> across enterprise teams</span>
          <span><strong>Full stack</strong> from UI to cloud delivery</span>
        </div>
      </div>
    </Section>
  );
}

export function ProjectsSection({ projects }) {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Personal products where I apply full-stack engineering outside enterprise work"
    >
      {/* Project cards use verified repository links from the user's GitHub. */}
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card card" key={project.title}>
            <div className="project-visual" aria-hidden="true">
              <span>{project.monogram}</span>
              <small>{project.eyebrow}</small>
            </div>
            <div className="project-content">
              <p className="project-eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-challenge">
                <strong>Technical challenge</strong>
                <span>{project.challenge}</span>
              </div>
              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                View repository <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function SkillsSection({ skills }) {
  return (
    <Section id="skills" title="Technical Skills" subtitle="Tools I use to ship reliable software">
      <div className="grid">
        {skills.map((skill) => (
          <div className="card" key={skill.k}>
            <h3>{skill.k}</h3>
            <p>{skill.v}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function ExperienceSection({ experience }) {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="7+ years delivering secure, scalable products for Fortune 500 teams"
    >
      {/* Numbered timeline highlights the most relevant achievements per role. */}
      <div className="timeline">
        {experience.map((job, index) => (
          <article key={`${job.company}-${job.dates}`} className="timeline-item">
            <div className="timeline-marker">
              <span>{index + 1}</span>
            </div>
            <div className="timeline-content card">
              <div className="experience-head">
                <div className="company-identity">
                  <div className="company-mark" aria-hidden="true">
                    {job.company
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="company-name">{job.company}</p>
                    <h3>{job.role}</h3>
                  </div>
                </div>
                <div className="experience-meta">
                  <span className="date-chip">{job.dates}</span>
                  <span className="location-chip">{job.location}</span>
                </div>
              </div>
              <div className="achievement-label">Selected achievements</div>
              <ul className="achievement-list">
                {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function EducationSection({ education, certifications }) {
  return (
    <Section id="education" title="Education">
      <div className="grid">
        {[...education, ...certifications].map((item) => (
          <div className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p className="meta">{item.sub}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function SportsSection({ sports }) {
  return (
    <Section id="sports" title="Endurance Sports" subtitle="Consistency, discipline, and long-term focus">
      <div className="stats">
        {sports.map((sport) => (
          <div key={sport.label} className="card stat">
            <div className="stat-n">{sport.n}</div>
            <div className="stat-label">{sport.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function BooksSection({ books, previewCount }) {
  // Search and category state stays local to the books section.
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const tags = useMemo(
    () => ["All", ...new Set(books.map((book) => book.tag))],
    [books],
  );

  const filteredBooks = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return books.filter((book) => {
      const matchesTag = tag === "All" || book.tag === tag;
      const matchesQuery = !normalizedQuery
        || `${book.title} ${book.author} ${book.tag}`.toLowerCase().includes(normalizedQuery);
      return matchesTag && matchesQuery;
    });
  }, [books, query, tag]);

  const visibleBooks = showAll ? filteredBooks : filteredBooks.slice(0, previewCount);

  return (
    <Section
      id="books"
      title="Books I’ve Read"
      subtitle="A mix of classics, productivity, history, and Indian literature"
      right={
        <div className="books-controls">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search books…"
            aria-label="Search books"
            className="input"
          />
          <select
            value={tag}
            onChange={(event) => {
              setTag(event.target.value);
              setShowAll(false);
            }}
            aria-label="Filter books by category"
            className="select"
          >
            {tags.map((bookTag) => <option key={bookTag}>{bookTag}</option>)}
          </select>
        </div>
      }
    >
      <div className="books-grid">
        {visibleBooks.map((book) => (
          <div key={`${book.title}-${book.author}`} className="book card">
            <div className="book-top">
              <div className="book-title">{book.title}</div>
              <span className="tag">{book.tag}</span>
            </div>
            <div className="book-author">{book.author}</div>
          </div>
        ))}
      </div>

      <div className="note">
        Showing <strong>{visibleBooks.length}</strong> of <strong>{filteredBooks.length}</strong> books.
      </div>

      {filteredBooks.length > previewCount && (
        <div className="books-more">
          <button className="btn" type="button" onClick={() => setShowAll((value) => !value)}>
            {showAll ? "Show less" : "Show all books"}
          </button>
          {!showAll && <span>Tip: use search and filter to find a book quickly.</span>}
        </div>
      )}
    </Section>
  );
}

export function VolunteerSection({ volunteer }) {
  return (
    <Section id="volunteer" title="Volunteer" subtitle="Giving back through events, community service, and health initiatives">
      <div className="grid">
        {volunteer.map((item) => (
          <div className="card" key={item.org}>
            <h3>{item.role} · {item.org}</h3>
            <p className="meta">{item.dates}</p>
            <ul>
              {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function ContactSection({ profile, endpoint }) {
  // Formspree handles delivery; local state provides sending and result feedback.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState("idle");

  async function sendEmail(event) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _gotcha: honeypot,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setHoneypot("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" title="Contact" subtitle="Open to Full Stack and Backend roles · NYC / Remote">
      <div className="contact-layout">
        <form className="card contact-form" onSubmit={sendEmail}>
          <h3>Send me a message</h3>
          {/* Bots often complete this hidden field; Formspree silently rejects them. */}
          <label className="honeypot" aria-hidden="true">
            Leave this field empty
            <input
              name="_gotcha"
              value={honeypot}
              onChange={(event) => setHoneypot(event.target.value)}
              tabIndex="-1"
              autoComplete="off"
            />
          </label>
          <div className="form-row">
            <label>
              Name
              <input
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </label>
          </div>
          <label>
            Subject
            <input
              name="subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              placeholder="Job opportunity or project"
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Hi Shiva, I’d like to connect about..."
              rows="6"
              required
            />
          </label>
          <button className="btn primary" type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Send message"}
          </button>
          <div className="form-status" aria-live="polite">
            {status === "success" && (
              <p className="form-success">Thank you! Your message was sent successfully.</p>
            )}
            {status === "error" && (
              <p className="form-error">
                The message could not be sent. Please try again or email{" "}
                <a href={`mailto:${profile.email}`}>{profile.email}</a>.
              </p>
            )}
          </div>
        </form>

        <div className="contact-details">
          <div className="card">
            <h3>Email</h3>
            <a href={`mailto:${profile.email}`} className="link">{profile.email}</a>
          </div>
          <div className="card">
            <h3>LinkedIn</h3>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link">
              linkedin.com/in/shivaprasadjs
            </a>
          </div>
          <div className="card">
            <h3>GitHub</h3>
            <a href={profile.github} target="_blank" rel="noreferrer" className="link">
              github.com/shivaprasadny
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Footer({ profile }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
        <div className="footer-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <span>·</span>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
