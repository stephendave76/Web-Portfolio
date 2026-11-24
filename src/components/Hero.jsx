import { SOCIALS } from '../data/content';

const GITHUB_URL = SOCIALS.find((social) => social.label === 'GitHub').url;

export default function Hero() {
  return (
    <section id="home" className="hero">
      <span className="corner corner-tl"></span>
      <span className="corner corner-tr"></span>
      <span className="corner corner-bl"></span>
      <span className="corner corner-br"></span>
      <span className="hero-plus plus-1">+</span>
      <span className="hero-plus plus-2">+</span>

      <div className="hero-content reveal">
        <div className="hero-photo-col">
          <div className="hero-photo">
            <img src="/dev.jpg.jpg" alt="Stephen Dave A. Hugo" />
            <span className="hero-photo-tag">
              <span>&#9679;</span> DEV
            </span>
          </div>
        </div>

        <div className="hero-text-col">
          <div className="hero-greet">
            &gt; Aspiring Software Developer<span className="hero-cursor"></span>
          </div>
          <h1 className="hero-heading">
            Welcome to my <span className="accent">Portfolio</span>
          </h1>
          <div className="hero-badge">
            <span className="dot"></span> Available for work
          </div>
          <div className="hero-name">Stephen Dave A. Hugo</div>
          <div className="hero-tagline">I CODE. I DESIGN. I DELIVER.</div>
          <div className="hero-dots">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hero-github-cta">
            <i className="fa-brands fa-github"></i> View GitHub
          </a>
        </div>
      </div>

      <div className="hero-scroll reveal">
        <span className="scroll-line"></span>
        SCROLL
      </div>
    </section>
  );
}
