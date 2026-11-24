import { EMAIL, SOCIALS } from '../data/content';

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n\u2014 ${name} (${email})`);

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact">
      <div className="section-inner">
        <div className="contact-wrap reveal">
          <div className="eyebrow">get in touch</div>
          <h2 className="contact-big">
            Let&apos;s build something.
            <br />
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </h2>

          <a href={`mailto:${EMAIL}`} className="contact-cta">
            Say hello <i className="fa-solid fa-arrow-right"></i>
          </a>

          <div className="contact-socials">
            {SOCIALS.map((social) => (
              <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
                <i className={social.icon}></i> {social.label}
              </a>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Your name" required />
              <input type="email" name="email" placeholder="Your email" required />
            </div>
            <textarea
              name="message"
              placeholder="What's on your mind?"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="contact-cta form-submit">
              Send message <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
