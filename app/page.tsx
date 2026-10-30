"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Sun, Moon,
  Database, Workflow, ChartNoAxesCombined, Cloud, Code2, ShieldCheck, ExternalLink,
  ChevronRight, Sparkles, Layers3, MapPin, GraduationCap, BriefcaseBusiness
} from "lucide-react";

const projects = [
  {
    id: "retailpulse", no: "01", kind: "ANALYTICS PLATFORM", title: "RetailPulse",
    line: "Retail intelligence, from raw records to sharper decisions.",
    description: "An end-to-end retail analytics platform that turns published daily sales and inventory records into a validated analytical warehouse, reusable SQL metrics, and an interactive Streamlit / Plotly experience.",
    stack: ["Python", "Pandas", "SQLite", "SQL", "Streamlit", "Plotly", "pytest"],
    bullets: [
      "Profiles and validates published sales and inventory source files before transformation.",
      "Uses Pandas to prepare analytical data and loads it into a SQLite warehouse.",
      "Explores sales, product, store, and inventory views through an eight-section dashboard.",
      "Documents KPI definitions, source caveats, SQL analysis, and ETL tests."
    ],
    repo: "https://github.com/shreyayp/RetailPulse",
    live: "https://retailpulse-shreya.streamlit.app/",
    note: "Data-integrity-first: no fabricated transactions. Profitability measures require verification of the source cost field; unsupported customer, returns, geography, and inventory-cover views are intentionally withheld."
  },
  {
    id: "weatherscope", no: "02", kind: "API → WAREHOUSE → BI", title: "WeatherScope India",
    line: "A forecast pipeline across five Indian cities.",
    description: "A Python ETL and analytics workflow that collects daily forecasts from the Open-Meteo REST API for Bengaluru, Mysuru, Chennai, Hyderabad, and Mumbai, then validates, stores, analyses, and visualises forecast snapshots.",
    stack: ["Python", "REST / JSON", "Pandas", "SQLite", "SQL", "unittest", "Power BI"],
    bullets: [
      "Calls the Open-Meteo Forecast API and parses daily JSON responses for five cities.",
      "Transforms weather fields and derives temperature range, rain-risk, and quality flags.",
      "Validates forecast dates, temperature consistency, precipitation probability, and wind speed.",
      "Appends city × forecast date × fetch timestamp snapshots to SQLite and creates reports.",
      "Includes SQL analysis, unit tests, and a Power BI report artifact."
    ],
    repo: "https://github.com/shreyayp/weatherscope-india",
    live: "https://weatherscope-india.streamlit.app/",
    note: "Forecasts are predictions, not observed weather or official warnings. The Power BI report uses a bundled 35-row snapshot."
  },
  {
    id: "trustlayer", no: "03", kind: "DATA QUALITY ENGINEERING", title: "TrustLayer",
    line: "Trust the pipeline before you trust the numbers.",
    description: "A data quality pipeline focused on NYC 311 service requests. It ingests CSV or a limited public API extract, validates records, stores accepted rows, quarantines rejected rows with reasons, and records pipeline-run metrics.",
    stack: ["Python 3.12", "pandas", "SQL", "SQLite", "pytest", "requests", "GitHub Actions"],
    bullets: [
      "Downloads a limited recent sample from the official NYC Open Data 311 API.",
      "Checks required fields, identifiers, duplicate keys, timestamp parsing, and chronology.",
      "Separates valid records from rejected records and stores rejection reasons.",
      "Persists accepted data, rejected data, and pipeline run history in SQLite.",
      "Generates CSV / JSON summaries and runs tests automatically through GitHub Actions."
    ],
    repo: "https://github.com/shreyayp/trustlayer-data-quality-pipeline",
    live: null,
    note: "TrustLayer is a pipeline case study, not a dashboard. Its checked-in CSV is synthetic teaching data. A recorded real-data experiment on 29 Oct 2026 processed 1,000 records: 1,000 valid, 0 rejected, and 8 tests passed. This applies only to that extract and those rules."
  }
];

const skills = [
  { group: "ANALYTICS", icon: ChartNoAxesCombined, items: ["SQL & analytical queries", "Power BI", "Excel", "EDA & data profiling", "Descriptive statistics", "Matplotlib & Seaborn"] },
  { group: "DATA ENGINEERING", icon: Database, items: ["ETL workflows", "Data modelling basics", "Data quality validation", "SQLite", "REST APIs & JSON", "pytest / unittest"] },
  { group: "PROGRAMMING", icon: Code2, items: ["Python", "Pandas & NumPy", "Flask", "Java", "scikit-learn", "TensorFlow / Keras"] },
  { group: "CLOUD & PLATFORMS", icon: Cloud, items: ["AWS Lambda", "API Gateway", "S3 & IAM", "Git / GitHub", "Streamlit", "ServiceNow"] }
];

// const certs = [
//   ["AWS Certified Cloud Practitioner", "Amazon Web Services", "01"],
//   ["ServiceNow Certified System Administrator", "CSA", "02"],
//   ["ServiceNow Certified Application Developer", "CAD", "03"],
//   ["Salesforce Certified Agentforce Specialist", "Salesforce", "04"],
//   ["Python Programming Hands-on Training", "EZ Training and Technologies", "05"]
// ];

const certs = [
  {
    name: "Salesforce Certified Agentforce Specialist",
    link: "https://lnkd.in/p/gausnmsa",
  },
  {
    name: "ServiceNow Certified Application Developer (CAD)",
    link: "https://lnkd.in/p/gCCgaqrP",
  },
  {
    name: "ServiceNow Certified System Administrator (CSA)",
    link: "https://lnkd.in/p/gMNav6YJ",
  },
  {
    name: "Virtual Internship in AWS Cloud Computing",
    link: "https://lnkd.in/p/g5nkJWZA",
  },
  {
    name: "Welcome to ServiceNow – Micro-Certification",
    link: "https://lnkd.in/p/gKewWYnZ",
  },
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: .65, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}

export default function Home() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [activeSkill, setActiveSkill] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const project = projects.find(p => p.id === activeProject);

  return (
    <main className={dark ? "site dark" : "site light"}>
      <div className="grain" />
      <header className="topbar">
        <a className="wordmark" href="#top"><span className="mark">S<span>.</span></span><span>SHREYA Y P</span></a>
        <nav className={menuOpen ? "nav open" : "nav"}>
          {["About", "Capabilities", "Work", "Journey"].map((x) => <a key={x} href={`#${x.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{x}</a>)}
        </nav>
        <div className="top-actions">
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle colour theme">{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
          <a className="contact-pill" href="#contact">Let's talk <ArrowUpRight size={14} /></a>
          <button className="icon-button mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-left">
          <motion.div className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}><span className="pulse" /> DATA ANALYTICS · DATA ENGINEERING · CURIOSITY</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .15 }}>Making data<br /><em>mean</em> something.</motion.h1>
          <motion.p className="hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .55 }}>I’m Shreya — an analytical thinker who enjoys building reliable data workflows and turning complex information into clear, useful stories.</motion.p>
          <motion.div className="hero-buttons" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7 }}>
            <a className="button-primary" href="#work">Explore selected work <ArrowDownRight size={16} /></a>
            <a className="button-text" href="https://github.com/shreyayp" target="_blank" rel="noreferrer"><Github size={16} /> GitHub profile</a>
          </motion.div>
          <div className="hero-foot"><span><MapPin size={13} /> Bengaluru, India</span><span>AVAILABLE FOR DATA OPPORTUNITIES</span></div>
        </div>
        <div className="hero-right">
          <motion.div className="orbit-graphic" animate={{ rotate: 360 }} transition={{ duration: 70, repeat: Infinity, ease: "linear" }}>
            <div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orbit-ring ring-three" />
            <div className="orbit-dot dot-one" /><div className="orbit-dot dot-two" /><div className="orbit-dot dot-three" />
          </motion.div>
          <motion.div className="hero-stamp" initial={{ scale: .8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: .6, duration: .6 }}>
            <span className="stamp-top">THE DATA PRACTICE</span><strong>Observe.<br />Structure.<br /><i>Understand.</i></strong><span className="stamp-bottom">A PORTFOLIO BY SHREYA Y P · 2026</span>
          </motion.div>
          <div className="floating-note note-top"><span className="note-dot" /> Source-aware analysis</div>
          <div className="floating-note note-bottom"><Layers3 size={14} /> From raw data to insight</div>
        </div>
        <div className="hero-index">01 — 06</div>
      </section>

      <section className="intro section-wrap" id="about">
        <div className="section-label"><span>01</span> / THE PERSON BEHIND THE QUERIES</div>
        <div className="intro-grid">
          <Reveal><h2>Good analysis starts<br />with <i>better questions.</i></h2></Reveal>
          <Reveal delay={.12}><div className="intro-copy"><p className="large-copy">I like the space between a messy source file and a decision someone can confidently make.</p><p>My projects combine Python-based data processing, SQL, data quality practices, and visual storytelling. I’ve explored API ingestion, ETL workflows, SQLite warehouses, automated testing, and business-facing dashboards — with an emphasis on understanding source data before interpreting the numbers.</p><a className="underlink" href="https://www.linkedin.com/in/shreya-y-p-6a940b2b7/" target="_blank" rel="noreferrer">A little more on LinkedIn <ArrowUpRight size={14} /></a></div></Reveal>
        </div>
        <div className="stat-strip">
          <div><strong>03</strong><span>Featured projects</span></div><div><strong>8.83</strong><span>B.E. CGPA</span></div><div><strong>05</strong><span>Certifications</span></div><div className="stat-quote">Curiosity is the first tool in the stack. <Sparkles size={17} /></div>
        </div>
      </section>

      <section className="capabilities section-wrap" id="capabilities">
        <div className="section-label"><span>02</span> / THE TOOLKIT</div>
        <div className="section-title-row"><h2>Capabilities, not<br /><i>just keywords.</i></h2><p>Choose a discipline to explore the tools and concepts I’ve been working with.</p></div>
        <div className="skill-explorer">
          <div className="skill-menu">{skills.map((s, i) => { const Icon = s.icon; return <button key={s.group} className={activeSkill === i ? "selected" : ""} onClick={() => setActiveSkill(i)}><Icon size={17} /><span>{s.group}</span><ChevronRight size={15} /></button> })}</div>
          <AnimatePresence mode="wait"><motion.div className="skill-detail" key={activeSkill} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: .25 }}><div className="skill-detail-head"><span>0{activeSkill + 1} / 04</span><h3>{skills[activeSkill].group}</h3></div><div className="skill-chips">{skills[activeSkill].items.map((x, i) => <motion.div key={x} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .055 }}>{x}<span>↗</span></motion.div>)}</div><p className="skill-footnote">Applied through hands-on projects, experimentation, and continuous learning.</p></motion.div></AnimatePresence>
        </div>
      </section>

      <section className="work section-wrap" id="work">
        <div className="section-label"><span>03</span> / SELECTED CASE STUDIES</div>
        <div className="section-title-row"><h2>Three projects.<br /><i>Three perspectives.</i></h2><p>From business-facing analytics to API ingestion and quality-first pipeline design.</p></div>
        <div className="project-list">
          {projects.map((p, i) => <Reveal key={p.id} delay={i * .08}><button className={`project-row p-${p.id}`} onClick={() => setActiveProject(p.id)}>
            <div className="project-number">{p.no} / 03</div>
            <div className="project-visual">
              {p.id === "retailpulse" ? <div className="visual-retail"><div className="bars">{[30, 52, 43, 72, 58, 90, 66, 100, 78].map((v, j) => <i key={j} style={{ height: `${v}%` }} />)}</div><span>RETAIL SIGNALS</span></div> :
                p.id === "weatherscope" ? <div className="visual-weather"><div className="weather-sun" /><div className="weather-lines"><i /><i /><i /></div><span>5 CITY FORECASTS</span></div> :
                  <div className="visual-trust"><div className="quality-flow"><b>INPUT</b><i /><b>CHECK</b><i /><b>STORE</b></div><span>QUALITY GATE</span></div>}
            </div>
            <div className="project-info"><span className="project-kind">{p.kind}</span><h3>{p.title}</h3><p>{p.line}</p><div className="project-stack">{p.stack.slice(0, 4).map(t => <span key={t}>{t}</span>)}</div></div>
            <span className="project-cta"><ArrowUpRight size={21} /></span>
          </button></Reveal>)}
        </div>
        <p className="work-caption">Select a project to explore the problem, approach, tools, and links.</p>
      </section>

      <section className="journey section-wrap" id="journey">
        <div className="section-label"><span>04</span> / THE JOURNEY</div>
        <div className="section-title-row"><h2>Learning by<br /><i>building.</i></h2><p>Experience and education that shaped my approach to problem-solving.</p></div>
        <div className="journey-grid">
          <div className="journey-item"><div className="journey-date">JUN 2026 — OCT 2026</div><div className="journey-icon"><BriefcaseBusiness size={17} /></div><div><h3>Trainee · Mu Sigma</h3><p>Worked across domains and account-specific requirements, applying analytical problem-solving to identify patterns and support data-informed decisions.</p><small>Bengaluru, India</small></div></div>
          <div className="journey-item"><div className="journey-date">FEB 2026 — MAY 2026</div><div className="journey-icon"><BriefcaseBusiness size={17} /></div><div><h3>AWS Intern · SmartBridge</h3><p>Worked on application features, REST APIs, backend logic, and service integration. Applied OOP and contributed to an AI Resume Scorer project.</p><small>Bengaluru, India</small></div></div>
          <div className="journey-item"><div className="journey-date">2022 — 2026</div><div className="journey-icon"><GraduationCap size={18} /></div><div><h3>B.E. Computer Science · BITM</h3><p>Ballari Institute of Technology and Management</p><small>CGPA 8.83</small></div></div>
          <div className="journey-item"><div className="journey-date">2020 — 2022</div><div className="journey-icon"><GraduationCap size={18} /></div><div><h3>Class XII · PCMB</h3><p>Jindal Vidya Mandir, Toranagallu</p><small>70%</small></div></div>
        </div>
      </section>

      <section className="credentials section-wrap" id="credentials">
        <div className="section-label"><span>05</span> / CREDENTIALS</div>
        <div className="section-title-row"><h2>Always in<br /><i>learning mode.</i></h2><p>Credentials across cloud, platforms, and programming.</p></div>
        <div className="cert-list">
          {certs.map((c, i) => (
            <a
              className="cert-row"
              key={c.name}
              href={c.link}
              target="_blank"
              rel="noreferrer"
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              <strong>{c.name}</strong>
              <small>View on LinkedIn</small>
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>
        {/* <div className="cert-list">{certs.map(c=><div className="cert-row" key={c[2]}><span>{c[2]}</span><strong>{c[0]}</strong><small>{c[1]}</small><ArrowUpRight size={16}/></div>)}</div> */}
        <p className="credential-note">
          Explore Shreya's certifications and learning milestones on LinkedIn.
        </p>
        {/* <p className="credential-note">Credential verification links can be added when individual certificate URLs are available.</p> */}
      </section>

      <section className="contact section-wrap" id="contact">
        <div className="contact-panel"><div className="contact-decoration">LET'S<br />MAKE<br /><i>IT COUNT.</i></div><div className="contact-content"><div className="section-label"><span>06</span> / START A CONVERSATION</div><h2>Have a question,<br />idea, or opportunity?</h2><p>I'm always happy to connect with people who are curious about data and the possibilities behind it.</p><div className="contact-links"><a href="https://www.linkedin.com/in/shreya-y-p-6a940b2b7/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a><a href="https://github.com/shreyayp" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a></div></div></div>
      </section>

      <footer><a className="wordmark" href="#top"><span className="mark">S<span>.</span></span><span>SHREYA Y P</span></a><span>BUILT AROUND CURIOSITY · © 2026</span><a href="#top">BACK TO TOP ↑</a></footer>

      <AnimatePresence>{project && <motion.div className="modal-layer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveProject(null)}><motion.div className="case-modal" initial={{ y: 40, scale: .97 }} animate={{ y: 0, scale: 1 }} exit={{ y: 30, scale: .98 }} transition={{ type: "spring", damping: 25 }} onClick={e => e.stopPropagation()}><button className="modal-x" onClick={() => setActiveProject(null)} aria-label="Close"><X /></button><div className="section-label"><span>{project.no}</span> / {project.kind}</div><h2>{project.title}</h2><p className="modal-lead">{project.description}</p><div className="case-columns"><div><h4>WHAT I BUILT</h4><ul>{project.bullets.map(b => <li key={b}>{b}</li>)}</ul></div><div><h4>TECHNOLOGY</h4><div className="modal-stack">{project.stack.map(t => <span key={t}>{t}</span>)}</div><h4 className="links-heading">EXPLORE</h4><a className="case-link" href={project.repo} target="_blank" rel="noreferrer">GitHub repository <ExternalLink size={14} /></a>{project.live && <a className="case-link" href={project.live} target="_blank" rel="noreferrer">Live project <ExternalLink size={14} /></a>}</div></div><div className="case-caveat">{project.note}</div></motion.div></motion.div>}</AnimatePresence>
    </main>
  );
}
