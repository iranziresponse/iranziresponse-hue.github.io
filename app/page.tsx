import Image from "next/image";
import { ProjectGallery, type ProjectSlide } from "./project-gallery";
import { SiteHeader } from "./site-controls";

const projects = [
  {
    name: "VisitKla",
    type: "Local navigation",
    description:
      "Landmark directions and boda fare guidance for a defined part of Kampala. Built around how people actually explain a route.",
    demo: "https://visit-kla.vercel.app",
    source: "https://github.com/iranziresponse/VisitKla",
    slides: [
      { src: "/images/visitkla-boda.png", alt: "VisitKla boda rider artwork", caption: "Landmark-first Kampala routes", fit: "contain" },
      { src: "/images/visitkla-top.png", alt: "Top view of a boda rider and motorcycle", caption: "Boda mode, route view", fit: "contain" },
    ] satisfies ProjectSlide[],
  },
  {
    name: "Lumela",
    type: "Community map",
    description:
      "A community map for sharing and checking local power status, with reports tied to where people are.",
    demo: "https://lumela-self.vercel.app",
    source: "https://github.com/iranziresponse/lumela",
    slides: [
      { src: "/images/lumela-panel.png", alt: "Lumela power report controls and status", caption: "Community power reports", fit: "contain" },
      { src: "/images/lumela-status.png", alt: "Lumela live status summary", caption: "Live network status" },
    ] satisfies ProjectSlide[],
  },
  {
    name: "Nuru",
    type: "Document workflow",
    description:
      "Invoice and statement extraction with OCR and human review. Its evaluation is candid about the gap between synthetic tests and real receipts.",
    source: "https://github.com/iranziresponse/Nuru",
    slides: [
      { src: "/images/nuru-scan.png", alt: "Nuru document scan screen", caption: "Scan a document" },
      { src: "/images/nuru-ledger.png", alt: "Nuru searchable document ledger", caption: "A local document ledger" },
      { src: "/images/nuru-audit.png", alt: "Nuru metadata-only audit trail", caption: "Review the audit trail" },
    ] satisfies ProjectSlide[],
  },
  {
    name: "studyBuddy",
    type: "Learning tools",
    description:
      "An AI study companion exploring tutoring, document analysis, and academic planning in one study flow.",
    demo: "https://v0-study-buddy-setup.vercel.app",
    source: "https://github.com/iranziresponse/studyBuddy",
    slides: [
      { src: "/images/studybuddy-landing.png", alt: "Study Buddy tutor and planner landing page", caption: "Your AI tutor and study planner" },
      { src: "/images/studybuddy-features.png", alt: "Study Buddy teaching, PDF analysis, active recall, and timetable features", caption: "Tools for deeper study", fit: "contain" },
    ] satisfies ProjectSlide[],
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <section className="hero-band" id="top" aria-labelledby="hero-title">
          <div className="page-container hero-layout">
            <div className="hero-copy">
              <p className="hero-eyebrow">Software engineering student <span>—</span> Kampala, Uganda</p>
              <h1 id="hero-title">
                I build useful software for <span className="hero-title-accent">everyday life.</span>
              </h1>
              <p className="hero-lead">
                I am studying software engineering at Makerere University and building practical tools for study, work, and getting around.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="https://orch.spriteteam.com">Explore Orch <span aria-hidden="true">↗</span></a>
                <a className="button button-secondary" href="#work">Selected work <span aria-hidden="true">↓</span></a>
              </div>
              <p className="hero-note">Currently working on Orch, a Windows app for student work and everyday files.</p>
            </div>
            <figure className="portrait-block">
              <div className="portrait-frame">
                <Image
                  src="/images/response-portrait.webp"
                  alt="Response Iranzi in a dark suit beside a bright window"
                  fill
                  sizes="(max-width: 760px) 90vw, (max-width: 1100px) 40vw, 440px"
                  className="portrait-image"
                  loading="eager"
                />
              </div>
              <figcaption>Response Iranzi <span>Software engineering student</span></figcaption>
            </figure>
          </div>
        </section>

        <section className="featured-band section-space" id="work" aria-labelledby="orch-title">
          <div className="page-container featured-layout">
            <div className="featured-copy">
              <p className="section-kicker">The project I am proudest of</p>
              <h2 id="orch-title">Orch gives your work a place to land.</h2>
              <p>
                Your Downloads folder should not decide how chaotic your week feels. Orch helps keep coursework, deadlines, revision, and project files in places you can find again.
              </p>
              <p>
                If it is unsure where a file belongs, it asks. Every move can be checked or undone.
              </p>
              <div className="featured-actions">
                <a className="text-link" href="https://orch.spriteteam.com">Open Orch</a>
                <a className="text-link" href="https://github.com/iranziresponse/file-organizer">View its source</a>
              </div>
            </div>
            <div className="orch-gallery">
              <a className="orch-screen orch-screen-main" href="https://orch.spriteteam.com/screenshots.html" aria-label="View Orch screenshots">
                <Image
                  src="/images/orch-study-home.webp"
                  alt="Orch study dashboard showing a focus timer, review queue, and activity feed"
                  fill
                  sizes="(max-width: 760px) 92vw, 55vw"
                />
              </a>
              <a className="orch-screen orch-screen-secondary" href="https://orch.spriteteam.com/screenshots.html" aria-label="See Orch Project Studio">
                <Image
                  src="/images/orch-project-studio.webp"
                  alt="Orch Project Studio showing engineering projects by status"
                  fill
                  sizes="(max-width: 760px) 72vw, 25vw"
                />
                <span className="image-caption">Project Studio</span>
              </a>
            </div>
          </div>
        </section>

        <section className="projects-section section-space" aria-labelledby="projects-title">
          <div className="page-container">
            <div className="section-heading">
              <p className="section-kicker">Selected work</p>
              <h2 id="projects-title">Projects I can show you.</h2>
              <p>Personal builds and experiments. Each listing links to a demo or source when one is available.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.name}>
                  <ProjectGallery name={project.name} slides={project.slides} />
                  <div className="project-card-copy">
                    <p className="project-type">{project.type}</p>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-links">
                      {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Try the demo</a>}
                      <a href={project.source} target="_blank" rel="noreferrer">View source</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-band section-space" id="about" aria-labelledby="about-title">
          <div className="page-container about-layout">
            <h2 id="about-title">I like software that handles the messy parts.</h2>
            <figure className="about-portrait">
              <div className="about-portrait__frame">
                <Image
                  src="/images/response-closeup.webp"
                  alt="Close-up portrait of Response Iranzi in a dark suit"
                  fill
                  sizes="(max-width: 760px) 82vw, (max-width: 960px) 42vw, 280px"
                  className="about-portrait__image"
                />
              </div>
              <figcaption>
                <span>Response Iranzi</span>
                <span>Makerere University · Kampala</span>
              </figcaption>
            </figure>
            <div className="about-copy">
              <p>
                I study software engineering at Makerere University. Most of the work here is personal projects: things I have built to explore problems I care about, not client case studies.
              </p>
              <p>
                Nuru explores document scanning with a human review step. Orch focuses on keeping files organized while making moves easy to check or undo. Both start from the same question: what happens when the software is unsure?
              </p>
              <p>
                I am still learning, especially around applied AI and tools for students. The demos and public repositories are here so you can inspect the work directly.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-band" id="contact" aria-labelledby="contact-title">
          <div className="page-container contact-layout">
            <div>
              <p className="contact-kicker">Contact</p>
              <h2 id="contact-title">Have a project or question?</h2>
            </div>
            <a className="button button-inverse" href="https://www.linkedin.com/in/iranzi-response-428136382">Message me on LinkedIn</a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="page-container footer-layout">
          <a className="footer-name" href="#top">Response Iranzi</a>
          <p>Software engineering student at Makerere University, Kampala.</p>
          <div className="footer-links">
            <a href="https://github.com/iranziresponse">GitHub</a>
            <a href="https://www.linkedin.com/in/iranzi-response-428136382">LinkedIn</a>
            <a href="https://orch.spriteteam.com">Orch</a>
          </div>
        </div>
      </footer>
    </>
  );
}
