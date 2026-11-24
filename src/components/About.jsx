import { HOBBIES } from '../data/content';

export default function About() {
  return (
    <section id="about">
      <div className="section-inner reveal">
        <div className="eyebrow">who i am</div>
        <h2 className="section-title">About me</h2>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I&apos;m <strong>Stephen Dave A. Hugo</strong>, an aspiring software
              developer who enjoys turning ideas into clean, functional interfaces. I
              like picking apart how things work and rebuilding them better &mdash; whether
              that&apos;s a layout, a workflow, or a line of code.
            </p>
            <p>
              Outside of the screen, I stay active and keep a clear head through{' '}
              <strong>basketball</strong> and the <strong>gym</strong> &mdash; habits that
              carry over into how I work: consistent reps, steady improvement, and
              showing up every day.
            </p>
          </div>

          <div className="hobby-list reveal-stagger">
            {HOBBIES.map((hobby) => (
              <div className="hobby-card reveal-item" key={hobby.title}>
                <div className="hobby-icon">
                  <i className={hobby.icon}></i>
                </div>
                <div className="hobby-info">
                  <div className="hobby-title">{hobby.title}</div>
                  <div className="hobby-desc">{hobby.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
