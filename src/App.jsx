import { useEffect, useMemo, useState } from 'react';
import {
  credentials,
  education,
  experiences,
  faqs,
  projects,
  resumeUrl,
  services,
  skillGroups,
} from './data';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgoqbvrl';

const views = [
  ['home', 'Home'],
  ['projects', 'Projects'],
  ['services', 'Services'],
  ['about', 'About'],
  ['contact', 'Contact'],
];

function Arrow({ external = false }) {
  return <span aria-hidden="true">{external ? '↗' : '->'}</span>;
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  );
}

function usePortfolioView() {
  const getView = () => {
    const hash = window.location.hash.replace('#', '');
    return views.some(([id]) => id === hash) ? hash : 'home';
  };

  const [activeView, setActiveView] = useState(getView);

  useEffect(() => {
    const onHashChange = () => setActiveView(getView());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  function navigate(view) {
    if (view === activeView) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.location.hash = view === 'home' ? '' : view;
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  return [activeView, navigate];
}

function Header({ activeView, navigate }) {
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [activeView]);

  return (
    <header className="topbar">
      <div className="shell topbar-inner">
        <button className="identity" type="button" onClick={() => navigate('home')} aria-label="Open home">
          <span className="identity-mark">JC</span>
          <span>
            <strong>Jayesh Chaudhari</strong>
            <small>developer.workspace</small>
          </span>
        </button>

        <nav className={`view-nav ${open ? 'is-open' : ''}`} aria-label="Portfolio views">
          {views.map(([id, label]) => (
            <button
              className={activeView === id ? 'is-active' : ''}
              key={id}
              type="button"
              onClick={() => navigate(id)}
            >
              <span>0{views.findIndex(([view]) => view === id) + 1}</span>
              {label}
            </button>
          ))}
        </nav>

        <div className="topbar-actions">
          <a className="small-action" href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume <Arrow external /></a>
          <button
            className="nav-toggle"
            type="button"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

function WorkspaceBar({ activeView }) {
  return (
    <div className="workspace-bar">
      <div className="shell workspace-inner">
        <span><i /> system.online</span>
        <span className="workspace-path">~/portfolio/{activeView}</span>
        <span>open_to_work=true</span>
      </div>
    </div>
  );
}

function ViewFrame({ activeView, children }) {
  return (
    <main className="workspace" key={activeView}>
      {children}
    </main>
  );
}

function SectionTitle({ kicker, title, description }) {
  return (
    <div className="section-title">
      <p>{kicker}</p>
      <h2>{title}</h2>
      {description && <span>{description}</span>}
    </div>
  );
}

function OrbitVisual() {
  return (
    <div className="orbit-stage" aria-label="Visual representation of Jayesh's technology focus">
      <div className="orbit-glow" />
      <div className="orbit orbit-one"><span /></div>
      <div className="orbit orbit-two"><span /></div>
      <div className="orbit orbit-three"><span /></div>
      <div className="core">
        <span>JC</span>
        <small>build / secure / automate</small>
      </div>
      <p className="orbit-label label-ai">AI SYSTEMS</p>
      <p className="orbit-label label-web">WEB APPS</p>
      <p className="orbit-label label-sec">DEFENSIVE TECH</p>
    </div>
  );
}

function HomeView({ navigate }) {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="signal"><i /> AVAILABLE FOR SELECT FREELANCE PROJECTS</p>
          <p className="hero-kicker">FULL-STACK DEVELOPER <b>+</b> AI BUILDER</p>
          <h1>Building useful<br /><em>systems</em> that work.</h1>
          <p className="hero-description">
            I build AI agent systems, responsive web applications, and practical technology solutions with a
            security-aware mindset.
          </p>
          <div className="action-row">
            <button className="primary-action" type="button" onClick={() => navigate('projects')}>Explore projects <Arrow /></button>
            <a className="secondary-action" href={resumeUrl} target="_blank" rel="noopener noreferrer">Download resume</a>
          </div>
          <div className="hero-metrics">
            <span><strong>04+</strong><small>projects built</small></span>
            <span><strong>01</strong><small>publication</small></span>
            <span><strong>02</strong><small>work experiences</small></span>
          </div>
        </div>
        <OrbitVisual />
      </section>

      <section className="home-strip">
        <div className="shell strip-grid">
          <div>
            <p>NOW BUILDING</p>
            <strong>Aiwork agent framework</strong>
            <span>Intel Unnati Program</span>
          </div>
          <div>
            <p>RECENT CONTRIBUTION</p>
            <strong>SATHI mental health system</strong>
            <span>CRPF project</span>
          </div>
          <div>
            <p>FREELANCE MODE</p>
            <strong>Focused, practical solutions</strong>
            <span>Web / AI / tech guidance</span>
          </div>
        </div>
      </section>

      <section className="view-section shell home-preview">
        <SectionTitle kicker="01 / SELECTED WORK" title="Projects with a real use-case." description="Built through training, academic work, and hands-on development." />
        <div className="project-preview-grid">
          {projects.slice(0, 3).map((project) => <ProjectCard key={project.name} project={project} />)}
        </div>
        <button className="inline-link" type="button" onClick={() => navigate('projects')}>View complete project deck <Arrow /></button>
      </section>

      <section className="view-section home-services">
        <div className="shell">
          <SectionTitle kicker="02 / WHAT I CAN HELP WITH" title="Small-team technology support." description="A focused starting point for useful freelance collaboration." />
          <div className="service-rail">
            {services.map((service) => <ServiceTile key={service.id} service={service} />)}
          </div>
          <button className="inline-link" type="button" onClick={() => navigate('services')}>See service details <Arrow /></button>
        </div>
      </section>

      <section className="home-cta shell">
        <div>
          <p>HAVE A PROBLEM WORTH SOLVING?</p>
          <h2>Let’s turn it into a working system.</h2>
        </div>
        <button className="primary-action" type="button" onClick={() => navigate('contact')}>Start a conversation <Arrow /></button>
      </section>
    </>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span>{project.number}</span>
        <p>{project.category}</p>
      </div>
      <h3>{project.name}</h3>
      <strong>{project.subtitle}</strong>
      <p className="project-copy">{project.description}</p>
      <div className="tech-tags">
        {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer">Open repository <Arrow external /></a>
    </article>
  );
}

function ProjectsView() {
  return (
    <section className="view-section shell full-view">
      <SectionTitle kicker="PROJECT DECK / 04 ENTRIES" title="Things I have built." description="Each project reflects a different part of my toolkit: AI systems, web development, and automation." />
      <div className="project-deck">
        {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
      </div>
    </section>
  );
}

function ServiceTile({ service, detailed = false }) {
  return (
    <article className={`service-tile ${detailed ? 'is-detailed' : ''}`}>
      <span>{service.number}</span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      {detailed && <ul>{service.points.map((point) => <li key={point}>{point}</li>)}</ul>}
    </article>
  );
}

function ServicesView({ navigate }) {
  return (
    <section className="view-section shell full-view">
      <SectionTitle kicker="FREELANCE / STARTING FOCUSED" title="Practical help, scoped clearly." description="I am starting with projects where I can contribute honestly, communicate directly, and deliver something useful." />
      <div className="service-deck">
        {services.map((service) => <ServiceTile key={service.id} service={service} detailed />)}
      </div>
      <div className="faq-zone">
        <SectionTitle kicker="FAQ / FIRST CONVERSATION" title="Before we start." />
        <FaqList />
      </div>
      <div className="mini-cta">
        <span>Unsure if your project fits?</span>
        <button className="inline-link" type="button" onClick={() => navigate('contact')}>Send a short brief <Arrow /></button>
      </div>
    </section>
  );
}

function FaqList() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <article className={openIndex === index ? 'is-open' : ''} key={faq.question}>
          <button type="button" onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
            <span>{faq.question}</span>
            <b>{openIndex === index ? '−' : '+'}</b>
          </button>
          {openIndex === index && <p>{faq.answer}</p>}
        </article>
      ))}
    </div>
  );
}

function AboutView() {
  return (
    <section className="view-section shell full-view">
      <div className="about-hero">
        <div className="portrait-shell">
          <img src="https://github.com/JayeshCC.png" alt="Jayesh Chaudhari" />
          <span>JAYESH_CHAUDHARI.JPG</span>
        </div>
        <div>
          <SectionTitle kicker="ABOUT / BUILDER PROFILE" title="Curious about how systems fit together." />
          <div className="about-copy">
            <p>I am an Information Technology student with a foundation in networks, operating systems, and cybersecurity. My work spans AI agent frameworks, mental health monitoring systems, frontend development, and desktop automation.</p>
            <p>I am starting my freelance journey with a practical approach: clear scope, honest communication, and technology that solves a real problem. I am especially interested in work where intelligent systems and reliable software meet.</p>
          </div>
          <div className="fact-chips">
            <span>Pune, India</span>
            <span>B.E. IT student</span>
            <span>Security-aware builder</span>
          </div>
        </div>
      </div>

      <div className="about-grid">
        <div>
          <SectionTitle kicker="EXPERIENCE LOG" title="Hands-on work." />
          <div className="timeline">
            {experiences.map((item) => (
              <article key={`${item.role}-${item.organization}`}>
                <p>{item.date}</p>
                <h3>{item.role}</h3>
                <strong>{item.organization}</strong>
                <span>{item.description}</span>
              </article>
            ))}
          </div>
        </div>
        <div>
          <SectionTitle kicker="EDUCATION LOG" title="Academic path." />
          <div className="education-list">
            {education.map((item) => (
              <article key={item.title}>
                <p>{item.date}</p>
                <h3>{item.title}</h3>
                <span>{item.place}</span>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="about-block">
        <SectionTitle kicker="TOOLKIT" title="Technologies I work with." />
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </div>

      <div className="about-block">
        <SectionTitle kicker="CREDENTIALS" title="Training and publication." />
        <div className="credential-grid">
          {credentials.map((item) => (
            <article key={item.title}>
              <p>{item.title}</p>
              <h3>{item.description}</h3>
              <span>{item.meta}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactView() {
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  async function submitForm(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    setStatus('');
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('Submission failed');
      form.reset();
      setStatus('Message sent. I will reply as soon as possible.');
    } catch {
      setStatus('Something went wrong. Please email me directly at jayeshcc1210@gmail.com.');
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="view-section shell full-view contact-view">
      <SectionTitle kicker="CONTACT / OPEN CHANNEL" title="Let’s build something useful." description="Share your problem, timeline, and any helpful references. I will reply with an honest first assessment." />
      <div className="contact-grid">
        <form className="contact-form" onSubmit={submitForm}>
          <label>Name <span>*</span><input name="name" required autoComplete="name" placeholder="Your name" /></label>
          <label>Email <span>*</span><input name="email" required type="email" autoComplete="email" placeholder="you@example.com" /></label>
          <label>Area <span>*</span>
            <select name="service" required defaultValue="">
              <option value="" disabled>Select the closest match</option>
              {services.map((service) => <option key={service.id}>{service.title}</option>)}
            </select>
          </label>
          <label>Message <span>*</span><textarea name="message" rows="6" required placeholder="Tell me what you want to solve." /></label>
          <button className="primary-action" disabled={sending} type="submit">{sending ? 'Sending...' : 'Send message'} <Arrow /></button>
          <p className="form-status" role="status">{status}</p>
        </form>
        <aside className="contact-panel">
          <div className="contact-pulse"><i /><span>REPLY MODE: ACTIVE</span></div>
          <h2>Direct channels</h2>
          <p>Email is the best starting point for a short brief. You can also connect through LinkedIn or GitHub.</p>
          <a href="mailto:jayeshcc1210@gmail.com"><MailIcon /><span><small>EMAIL</small>jayeshcc1210@gmail.com</span></a>
          <a href="tel:+919404771210"><b>#</b><span><small>PHONE</small>+91 9404771210</span></a>
          <a href="https://linkedin.com/in/jayeshcc1210" target="_blank" rel="noopener noreferrer"><LinkedinIcon /><span><small>LINKEDIN</small>jayeshcc1210</span></a>
          <a href="https://github.com/JayeshCC" target="_blank" rel="noopener noreferrer"><GithubIcon /><span><small>GITHUB</small>JayeshCC</span></a>
          <div className="reply-note"><strong>* Usually under 24 hours</strong><p>Response time can vary around academic commitments.</p></div>
        </aside>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="shell footer-inner">
        <span>© 2026 Jayesh Chaudhari</span>
        <span>DESIGNED AS A SINGLE-PAGE WORKSPACE</span>
        <div>
          <a href="mailto:jayeshcc1210@gmail.com" aria-label="Email"><MailIcon /></a>
          <a href="https://linkedin.com/in/jayeshcc1210" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
          <a href="https://github.com/JayeshCC" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [activeView, navigate] = usePortfolioView();
  const content = useMemo(() => {
    if (activeView === 'projects') return <ProjectsView />;
    if (activeView === 'services') return <ServicesView navigate={navigate} />;
    if (activeView === 'about') return <AboutView />;
    if (activeView === 'contact') return <ContactView />;
    return <HomeView navigate={navigate} />;
  }, [activeView]);

  return (
    <>
      <Header activeView={activeView} navigate={navigate} />
      <WorkspaceBar activeView={activeView} />
      <ViewFrame activeView={activeView}>{content}</ViewFrame>
      <Footer />
    </>
  );
}

export default App;
