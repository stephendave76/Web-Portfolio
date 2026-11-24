import { PROJECTS } from '../data/content';

export default function Work({ onOpenProject }) {
  return (
    <section id="work">
      <div className="section-inner reveal">
        <div className="eyebrow">selected work</div>
        <h2 className="section-title">My work</h2>
        <div className="bento reveal-stagger">
          {PROJECTS.map((project) => (
            <div className="bento-card reveal-item" key={project.id}>
              {project.id === 'study-break' && <div className="bento-glow"></div>}
              <div>
                <div className="card-icon">
                  <i className={project.icon}></i>
                </div>
                <div className="card-index">{project.index}</div>
                <div className="card-title">{project.title}</div>
                <p className="card-desc">{project.shortDesc}</p>
                <div className="card-tags">
                  {project.cardTags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="card-actions">
                <a href={project.live} target="_blank" rel="noreferrer" className="card-link">
                  View project{' '}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <button
                  className="card-details"
                  onClick={() => onOpenProject(project.id)}
                >
                  Details <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
