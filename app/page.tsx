import Image from "next/image";
import { SiteHeader } from "./site-controls";

const projects = [
  {
    name: "VisitKla",
    type: "Local navigation",
    description:
      "Landmark directions and boda fare guidance for a defined part of Kampala. Built around how people actually explain a route.",
    demo: "https://visit-kla.vercel.app",
    source: "https://github.com/iranziresponse-hue/VisitKla",
    image: "/images/visitkla-boda.png",
    imageAlt: "Boda rider artwork from the VisitKla project",
  },
  {
    name: "Lumela",
    type: "Community map",
    description:
      "A community map for sharing and checking local power status, with reports tied to where people are.",
    demo: "https://lumela-self.vercel.app",
    source: "https://github.com/iranziresponse-hue/lumela",
  },
  {
    name: "Nuru",
    type: "Document workflow",
    description:
      "Invoice and statement extraction with OCR and human review. Its evaluation is candid about the gap between synthetic tests and real receipts.",
    source: "https://github.com/iranziresponse-hue/Nuru",
  },
  {
    name: "studyBuddy",
    type: "Learning tools",
    description:
      "An AI study companion exploring tutoring, document analysis, and academic planning in one study flow.",
    demo: "https://v0-study-buddy-setup.vercel.app",
    source: "https://github.com/iranziresponse-hue/studyBuddy",
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
              <p className="hero-location">Makerere University <span>/</span> Kampala</p>
              <h1 id="hero-title">I build useful software for everyday life.</h1>
              <p className="hero-lead">
                I am a software engineering student making practical tools for study, work, and getting around.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">See what I am building</a>
                <a className="button button-secondary" href="https://orch.spriteteam.com">Meet Orch</a>
              </div>
              <p className="hero-note">Currently building Orch, my most ambitious project so far.</p>
            </div>
            <figure className="portrait-block">
              <div className="portrait-frame">
                <Image
                  src="/images/response.jpg"
                  alt="Response Iranzi wearing a dark suit and white shirt"
                  fill
                  sizes="(max-width: 760px) 90vw, 42vw"
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
              <div className="featured-facts" aria-label="Orch details">
                <span>Windows app</span>
                <span>Makerere-aware</span>
                <span>Useful anywhere</span>
              </div>
              <div className="featured-actions">
                <a className="text-link" href="https://orch.spriteteam.com">Visit Orch</a>
                <a className="text-link" href="https://github.com/iranziresponse-hue/file-organizer">Explore the source</a>
              </div>
            </div>
            <div className="orch-gallery">
              <a className="orch-screen orch-screen-main" href="https://orch.spriteteam.com/screenshots.html" aria-label="View Orch screenshots">
                <Image
                  src="https://orch.spriteteam.com/assets/img/screenshots/study-home.webp"
                  alt="Orch study dashboard showing a focus timer, review queue, and activity feed"
                  fill
                  sizes="(max-width: 760px) 92vw, 55vw"
                />
              </a>
              <a className="orch-screen orch-screen-secondary" href="https://orch.spriteteam.com/screenshots.html" aria-label="See Orch Project Studio">
                <Image
                  src="https://orch.spriteteam.com/assets/img/screenshots/project-studio.webp"
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
              <h2 id="projects-title">Other things I am making.</h2>
              <p>Different problems, one habit: start with what would make someone&apos;s day easier.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.name}>
                  {project.image && (
                    <div className="project-image">
                      <Image src={project.image} alt={project.imageAlt ?? ""} fill sizes="(max-width: 760px) 92vw, 40vw" />
                    </div>
                  )}
                  <div className="project-card-copy">
                    <p className="project-type">{project.type}</p>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-links">
                      {project.demo && <a href={project.demo}>Try the demo</a>}
                      <a href={project.source}>View source</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-band section-space" id="about" aria-labelledby="about-title">
          <div className="page-container about-layout">
            <h2 id="about-title">Good software starts with paying attention.</h2>
            <div className="about-copy">
              <p>
                I study software engineering at Makerere University. I like the distance between spotting an everyday problem and shipping a tool someone can actually try.
              </p>
              <p>
                AI is moving fast, but a clever demo is not the same as a dependable tool. I care about imperfect inputs, honest limits, and giving people a way to recover when software gets something wrong.
              </p>
              <p>
                I am especially interested in applied AI, student tools, and building for people around East Africa.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-band" id="contact" aria-labelledby="contact-title">
          <div className="page-container contact-layout">
            <div>
              <p className="contact-kicker">Have a good problem?</p>
              <h2 id="contact-title">Let&apos;s make something useful.</h2>
            </div>
            <a className="button button-inverse" href="https://www.linkedin.com/in/iranzi-response-428136382">Say hello on LinkedIn</a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="page-container footer-layout">
          <a className="footer-name" href="#top">Response Iranzi</a>
          <p>Software engineering student at Makerere University, Kampala.</p>
          <div className="footer-links">
            <a href="https://github.com/iranziresponse-hue">GitHub</a>
            <a href="https://www.linkedin.com/in/iranzi-response-428136382">LinkedIn</a>
            <a href="https://orch.spriteteam.com">Orch</a>
          </div>
        </div>
      </footer>
    </>
  );
}
