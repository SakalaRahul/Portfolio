import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { profile as P, experience, skills, projects, education, certifications, leadership } from "./data.js";
import ParticleField from "./components/ParticleField.jsx";
import TiltCard from "./components/TiltCard.jsx";
import CommandPalette from "./components/CommandPalette.jsx";
import FloatingIcons from "./components/FloatingIcons.jsx";
import Typing from "./components/Typing.jsx";
import BackgroundDecor from "./components/BackgroundDecor.jsx";

const NAV = ["about", "experience", "skills", "projects", "education", "certifications", "leadership", "contact"];
const Reveal = ({ children, d = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: d }} viewport={{ once: true }}>{children}</motion.div>
);
const Section = ({ id, title, children }) => (
  <section id={id}><Reveal><h2>{title}</h2></Reveal>{children}</section>
);
const ROLES = ["Java Full Stack Developer", "Spring Boot Engineer", "React Developer", "AI Enthusiast"];
export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [filter, setFilter] = useState("All");
  const [repos, setRepos] = useState([]);
  const [imgOk, setImgOk] = useState(true);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem("theme", theme); }, [theme]);
  useEffect(() => {
    fetch(`https://api.github.com/users/${P.github}/repos?sort=updated&per_page=6`)
      .then((r) => (r.ok ? r.json() : [])).then((d) => setRepos(Array.isArray(d) ? d : [])).catch(() => {});
  }, []);
  useEffect(() => {
    const m = (e) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", m); return () => window.removeEventListener("mousemove", m);
  }, []);

  const tags = useMemo(() => ["All", ...new Set(projects.flatMap((p) => p.tags))], []);
  const shown = projects.filter((p) => filter === "All" || p.tags.includes(filter));

  return (
    <>
      <motion.div className="progress" style={{ scaleX: progress }} />
      <div className="glow" />
      <div className="aurora"><i /><i /><i /></div>
      <BackgroundDecor />
      <CommandPalette toggleTheme={toggleTheme} />
      <nav>
        <b><span className="logo">{P.initials}</span> {P.name}</b>
        <div className="links">
          {NAV.map((s) => <a key={s} href={`#${s}`}>{s}</a>)}
          <button onClick={toggleTheme} aria-label="Toggle theme">{theme === "dark" ? "☀" : "☾"}</button>
          <kbd>Ctrl K</kbd>
        </div>
      </nav>

     <header className="hero" id="home">
  <div className="hero-bg" style={{ backgroundImage: `url(${P.photo})` }} />
  <ParticleField />
  <FloatingIcons />
  <motion.div className="hero-inner" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
    <div>
      <p className="eyebrow">👋 Hello, welcome</p>
      <h1>I'm <span className="grad">{P.name}</span></h1>
      <h3 className="role"><Typing words={ROLES} /></h3>
      <p className="muted">{P.intro}</p>
      <a className="btn" href="#projects">View Projects</a>{" "}
      <a className="btn ghost" href={P.cv} target="_blank" rel="noreferrer">Download CV</a>
    </div>
  </motion.div>
</header>

      <Section id="about" title="About Me">
        <div className="about">
          <div className="photo-frame">
  <span className="pf-glow" />
  {imgOk ? (
    <img src={P.aboutPhoto} alt={P.name} onError={() => setImgOk(false)} />
  ) : (
    <pre className="code-card">{`const rahul = {
  role: "Java Full Stack",
  stack: ["Java", "Spring Boot",
          "React", "MySQL"],
  location: "Vijayawada",
  openToWork: true,
};`}</pre>
  )}
  <b className="chip c1">☕ Java</b>
  <b className="chip c2">⚛ React</b>
  <b className="chip c3">🍃 Spring Boot</b>
</div>
          <div>
            <p className="muted"><b>Objective:</b> {P.objective}</p>
            {P.about.map((t) => <p key={t} className="muted">{t}</p>)}
            <dl>
              <dt>Email</dt><dd>{P.email}</dd>
              <dt>Location</dt><dd>{P.location}</dd>
              <dt>Currently</dt><dd>{P.currently}</dd>
            </dl>
          </div>
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="timeline">
          {experience.map((e, i) => (
            <Reveal key={e.title} d={i * 0.1}>
              <div className={`t-item ${e.current ? "current" : ""}`}>
                <small>{e.period} {e.current && <em>Current</em>}</small>
                <h3>{e.title}</h3><h4>{e.org}</h4><ul className="muted">{e.points.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Technical Skills">
        <div className="grid">{skills.map((s, i) => (
          <Reveal key={s.name} d={i * 0.04}><div className="card"><h3>{s.name}</h3><p className="muted">{s.desc}</p></div></Reveal>
        ))}</div>
      </Section>

      <Section id="projects" title="Featured Projects">
        <div className="filters">{tags.map((t) => <button key={t} className={t === filter ? "on" : ""} onClick={() => setFilter(t)}>{t}</button>)}</div>
        <div className="grid">{shown.map((p) => <TiltCard key={p.title} p={p} />)}</div>
        {repos.length > 0 && <>
          
        </>}
      </Section>

      <Section id="education" title="Education">
        <div className="table-wrap"><table>
          <thead><tr><th>Qualification</th><th>Institution</th><th>Year</th><th>CGPA / %</th></tr></thead>
          <tbody>{education.map((e) => <tr key={e.q}><td>{e.q}</td><td>{e.school}</td><td>{e.year}</td><td>{e.score}</td></tr>)}</tbody>
        </table></div>
      </Section>

      <Section id="certifications" title="Certifications">
        <div className="grid">{certifications.map((c) => (
          <Reveal key={c.title}><div className="card"><h3>{c.title}</h3><p className="muted">{c.by}</p>
            <a className="btn small" href={c.link} target="_blank" rel="noreferrer">View Certificate</a></div></Reveal>
        ))}</div>
      </Section>

      <Section id="leadership" title="Leadership">
        {leadership.map((l) => (
          <Reveal key={l.title}><div className="t-item"><small>{l.period}</small>
            <h3>{l.title}</h3><h4>{l.org}</h4><p className="muted">{l.desc}</p></div></Reveal>
        ))}
      </Section>

      <Section id="contact" title="Get In Touch">
        <div className="contact">
          <div className="card">
            <h3>Contact Information</h3>
            <p><b>Email</b><br /><a href={`mailto:${P.email}`}>{P.email}</a></p>
            <p><b>Phone</b><br /><a href={`tel:${P.phone.replace(/\s/g, "")}`}>{P.phone}</a></p>
            <p><b>Location</b><br />{P.location}</p>
            <p><b>LinkedIn</b><br /><a href={P.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/24rahul</a></p>
            <p><b>GitHub</b><br /><a href={`https://github.com/${P.github}`} target="_blank" rel="noreferrer">github.com/{P.github}</a></p>
          </div>
          <form action={`https://formsubmit.co/${P.email}`} method="POST">
            <input type="hidden" name="_subject" value="New message from portfolio site" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: "none" }} />
            <input name="name" placeholder="Full name" required />
            <input name="email" type="email" placeholder="Email" required />
            <input name="subject" placeholder="Subject" />
            <textarea name="message" rows="6" placeholder="Write your message..." required />
            <button className="btn">Send Message</button>
          </form>
        </div>
      </Section>
      <footer>© {new Date().getFullYear()} {P.name} · {P.role} | AI Enthusiast | Problem Solver</footer>
    </>
  );
}