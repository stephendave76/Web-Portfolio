import { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('modal-open');

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [project, onClose]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <div
      className={`modal-backdrop${project ? ' open' : ''}`}
      aria-hidden={!project}
      onClick={handleBackdropClick}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        {project && (
          <>
            <button
              className="modal-close"
              onClick={onClose}
              aria-label="Close project details"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="card-icon">
              <i className={project.icon}></i>
            </div>
            <div className="card-index">{project.index}</div>
            <h3 className="card-title modal-title" id="modalTitle">
              {project.title}
            </h3>
            <p className="card-desc">{project.desc}</p>
            <div className="modal-features">
              <h4 className="modal-subtitle">Highlights</h4>
              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="card-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="modal-actions">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="contact-cta modal-live"
              >
                View live <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                  className="card-link"
                >
                  Source code <i className="fa-brands fa-github"></i>
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
