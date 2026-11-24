import { useEffect, useState } from 'react';
import { PROJECTS, SOCIALS } from '../data/content';

const NAV_SKILLS = [
  { href: '#skill-core', label: 'Core Skills' },
  { href: '#skill-lang', label: 'Languages' },
  { href: '#skill-frameworks', label: 'Frameworks & Libraries' },
  { href: '#skill-tools', label: 'Tools' },
];

export default function Navbar({ active, onOpenProject }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (!event.target.closest('.has-dropdown')) setOpenDropdown(null);
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpenDropdown(null);
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleDropdown = (name, event) => {
    event.preventDefault();
    setOpenDropdown((current) => (current === name ? null : name));
  };

  const handleProjectClick = (id) => {
    setOpenDropdown(null);
    onOpenProject(id);
  };

  const dropdownClass = (name) =>
    `has-dropdown${openDropdown === name ? ' open' : ''}`;

  return (
    <nav className="topnav">
      <div className="nav-inner">
        <a href="#home" className="logo">
          STEPHEN<span className="logo-accent">DAVE</span>
        </a>

        <div className="nav-links" id="navLinks">
          <a href="#home" className={active === 'home' ? 'active' : ''}>
            HOME
          </a>
          <a href="#about" className={active === 'about' ? 'active' : ''}>
            ABOUT
          </a>

          <div className={dropdownClass('skills')}>
            <a
              href="#skills"
              className={`drop-toggle${active === 'skills' ? ' active' : ''}`}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'skills'}
              onClick={(event) => toggleDropdown('skills', event)}
            >
              SKILLS <i className="fa-solid fa-caret-down"></i>
            </a>
            <div className="dropdown">
              {NAV_SKILLS.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className={dropdownClass('work')}>
            <a
              href="#work"
              className={`drop-toggle${active === 'work' ? ' active' : ''}`}
              aria-haspopup="true"
              aria-expanded={openDropdown === 'work'}
              onClick={(event) => toggleDropdown('work', event)}
            >
              MY WORK <i className="fa-solid fa-caret-down"></i>
            </a>
            <div className="dropdown">
              {PROJECTS.map((project) => (
                <button
                  type="button"
                  key={project.id}
                  onClick={() => handleProjectClick(project.id)}
                >
                  <span className="drop-index">{project.index}</span> {project.title}
                </button>
              ))}
            </div>
          </div>

          <a href="#contact" className={active === 'contact' ? 'active' : ''}>
            CONTACT
          </a>
        </div>

        <div className="nav-socials">
          {SOCIALS.map((social) => (
            <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
              {social.short}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
