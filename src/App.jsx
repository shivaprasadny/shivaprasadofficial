import {
  AboutSection,
  BooksSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  Footer,
  Header,
  Hero,
  ProjectsSection,
  SkillsSection,
  SportsSection,
  VolunteerSection,
} from "./components/PortfolioSections";

const PROFILE = {
  name: "Shiva Prasad",
  title: "Java Full Stack Developer",
  location: "Brooklyn, New York",
  email: "shivaprasadmaya@gmail.com",
  linkedin: "https://www.linkedin.com/in/shivaprasadjs/",
  website: "https://www.shivaprasadofficial.com/",
  github: "https://github.com/shivaprasadny",
};

const BOOKS_PREVIEW_COUNT = 12;
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqevzzpq";

// Short homepage introduction. Keep this focused and recruiter-friendly.
const SUMMARY =
  "I’m a Full Stack Developer with 7+ years of experience building secure, scalable applications for Fiserv, American Express, Ford, and Walmart. I work across Java, Spring Boot, React, Angular, cloud infrastructure, and event-driven systems, with a practical focus on performance, reliability, and useful customer experiences.";

// Featured personal projects shown near the top of the portfolio.
const PROJECTS = [
  {
    title: "PayDG",
    eyebrow: "Income tracking app",
    description:
      "A mobile app for restaurant workers to track shifts, hours, tips, workplaces, and income with visual insights, local backups, and biometric protection.",
    challenge:
      "Built reliable offline-first shift calculations across multiple workplaces, roles, break times, hourly rates, and tip records.",
    technologies: ["React Native", "Expo", "TypeScript", "SQLite", "Biometrics"],
    github: "https://github.com/shivaprasadny/paydg",
    monogram: "PD",
  },
  {
    title: "ExpenseDG",
    eyebrow: "Personal finance app",
    description:
      "A privacy-focused mobile expense manager with income tracking, budgets, recurring records, analytics, smart insights, notifications, backups, and biometric security.",
    challenge:
      "Designed local SQLite data and migration flows for expenses, income, recurring transactions, categories, budgets, and user settings.",
    technologies: ["React Native", "Expo", "TypeScript", "SQLite", "Charts"],
    github: "https://github.com/shivaprasadny/ExpenseDg",
    monogram: "ED",
  },
  {
    title: "Gotham Cricket Platform",
    eyebrow: "Backend API",
    description:
      "A Spring Boot backend for managing cricket teams, players, squads, matches, authentication, notifications, and documented REST APIs.",
    challenge:
      "Modeled connected cricket workflows while securing REST endpoints with JWT authentication and role-aware access.",
    technologies: ["Java", "Spring Boot", "JWT", "JPA", "OpenAPI"],
    github: "https://github.com/shivaprasadny/gotham-cricket-backend",
    monogram: "GC",
  },
  {
    title: "Gotham Cricket Mobile",
    eyebrow: "Mobile application",
    description:
      "A companion mobile experience for the cricket platform with authenticated sessions, team workflows, notifications, and match information.",
    challenge:
      "Coordinated persisted authentication, API error handling, notifications, and navigation across a multi-screen mobile application.",
    technologies: ["React Native", "Expo", "TypeScript", "REST APIs"],
    github: "https://github.com/shivaprasadny/gotham-cricket-club-mobile",
    monogram: "GM",
  },
  {
    title: "Restaurant Closeout Sheet",
    eyebrow: "Operations tool",
    description:
      "A responsive closeout application that helps restaurant teams organize daily totals, time sheets, and end-of-shift reporting.",
    challenge:
      "Turned a dense operational closeout process into responsive forms and print-friendly reports that remain usable during busy shifts.",
    technologies: ["React", "TypeScript", "Vite", "Responsive UI"],
    github: "https://github.com/shivaprasadny/restaurant-closeout-sheet",
    monogram: "RC",
  },
];

// Skills are grouped by how they are used rather than displayed as one long list.
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
  {
    k: "AI & LLM Development",
    v: "Large Language Models (LLMs), OpenAI API, prompt engineering, AI-assisted workflows",
  },
  {
    k: "AI Coding Tools",
    v: "OpenAI Codex, Claude Code, GitHub Copilot, ChatGPT, Cursor AI",
  },
];

const CERTS = [{ title: "AWS Certified Cloud Practitioner", sub: "Amazon Web Services" }];

const SPORTS = [
  { n: 1, label: "Ironman Triathlon" },
  { n: 2, label: "Olympic-Distance Triathlons" },
  { n: 10, label: "Full Marathons" },
  { n: 50, label: "Half Marathons" },
];

// Professional experience content is intentionally limited to selected achievements.
const EXPERIENCE = [
  {
    company: "Fiserv",
    role: "Full Stack Developer",
    location: "Berkley, NJ",
    dates: "Oct 2024 – Present",
    bullets: [
      "Designed and delivered scalable financial applications using AWS, React.js, Java Spring Boot, and TypeScript, ensuring strong alignment with client requirements and broader business objectives.",
      "Developed secure, high-performance RESTful APIs and microservices using Java Spring Boot, implementing JWT-based authentication, Redis caching, and database performance enhancements to support scalable growth.",
      "Built responsive and accessible user interfaces with React.js, Redux, and TailwindCSS, optimizing frontend performance to deliver intuitive user experiences.",
      "Utilized AWS services such as S3, Lambda, and DynamoDB to architect fault-tolerant applications; collaborated with data engineering teams to fine-tune Snowflake and PostgreSQL queries for faster analytics.",
      "Automated CI/CD pipelines with Git, Jenkins, Docker, and Kubernetes, decreasing release cycles by ~30% and accelerating delivery of customer-facing features.",
    ],
  },
  {
    company: "American Express",
    role: "Full Stack Developer",
    location: "New York",
    dates: "Jun 2021 – Jul 2024",
    bullets: [
      "Designed and developed web applications using HTML, JavaScript, and Angular, ensuring responsive and user-friendly interfaces.",
      "Developed and maintained RESTful APIs for seamless integration between frontend and backend systems.",
      "Implemented Java, Spring, Hibernate, and JMS for backend development, ensuring robust and scalable solutions.",
      "Built and maintained GraphQL schemas for the balance SOR vertical, enabling efficient data querying and retrieval.",
      "Worked with Jenkins to establish CI/CD pipelines, automating build, test, and deployment processes for continuous improvement.",
    ],
  },
  {
    company: "Ford",
    role: "Java Developer",
    location: "Piscataway, NJ",
    dates: "Apr 2019 – May 2021",
    bullets: [
      "Designed, tested, and deployed microservices and monolithic architectures for vehicle diagnostics and inventory management systems, improving scalability and performance.",
      "Built RESTful APIs using Spring Boot, Hibernate, and JPA to integrate customer data management systems with third-party platforms.",
      "Implemented microservices to access and manage data from Oracle and MongoDB databases, supporting real-time analytics for supply chain optimization.",
      "Automated deployment processes using Jenkins Pipeline and Azure DevOps CI/CD for vehicle configuration systems, reducing deployment time by ~30%.",
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
      "Optimized database operations in MongoDB using compound indexes to reduce query times during peak traffic.",
      "Developed real-time streaming pipelines using Apache Kafka to enable event-driven communication between microservices.",
    ],
  },
];

// Personal sections add character without competing with projects and experience.
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

export default function App() {
  return (
    <div className="app">
      <Header profile={PROFILE} />

      <main>
        <Hero profile={PROFILE} />
        <ProjectsSection projects={PROJECTS} />
        <AboutSection summary={SUMMARY} />
        <SkillsSection skills={SKILLS} />
        <ExperienceSection experience={EXPERIENCE} />
        <EducationSection education={EDUCATION} certifications={CERTS} />
        <SportsSection sports={SPORTS} />
        <BooksSection books={BOOKS} previewCount={BOOKS_PREVIEW_COUNT} />
        <VolunteerSection volunteer={VOLUNTEER} />
        <ContactSection profile={PROFILE} endpoint={FORMSPREE_ENDPOINT} />
      </main>

      <Footer profile={PROFILE} />
    </div>
  );
}
