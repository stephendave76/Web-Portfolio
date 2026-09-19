// Active nav link on scroll
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const setActive = () => {
  let current = sections[0]?.id;
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
  });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
};
window.addEventListener('scroll', setActive);
window.addEventListener('resize', setActive);
window.addEventListener('load', setActive);
setActive();

// Reveal-on-scroll animation
const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// Dynamic copyright year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Project showcase modal
const projects = {
  'study-break': {
    index: '01',
    icon: 'fa-solid fa-terminal',
    title: 'Study Break',
    desc: 'Study Break Game is a collection of short and engaging mini-games designed to help students relax and refresh their minds during study breaks. It includes memory, reaction time, math, word, and pattern recognition challenges that improve focus, thinking skills, and mental alertness while keeping gameplay simple and enjoyable.',
    features: [
      'Five mini-games: memory, reaction time, math, word, and pattern challenges',
      'Quick pick-up-and-play rounds built for short study breaks',
      'Score tracking to measure focus and mental alertness',
      'Simple, distraction-free game interface'
    ],
    tags: ['Web Development', 'Interactive', 'HTML', 'CSS', 'JavaScript'],
    live: 'https://stephendave76.github.io/Study-Game/',
    source: 'https://github.com/stephendave76/Study-Game'
  },
  'regex-challenge': {
    index: '02',
    icon: 'fa-solid fa-check-to-slot',
    title: 'Regex Challenge 2',
    desc: 'An interactive learning platform designed to help students learn and practice Regular Expressions through hands-on challenges. It allows users to create regex patterns, test them against given inputs, and receive instant feedback to improve their understanding and problem-solving skills.',
    features: [
      'Hands-on regex challenges with increasing difficulty',
      'Live pattern testing against sample inputs',
      'Instant feedback on matches and mistakes',
      'Learn-by-doing approach to regex concepts'
    ],
    tags: ['Web Development', 'UI/UX', 'Education'],
    live: 'https://okayt.github.io/RegEx-Escape.io/',
    source: null
  },
  'workout-planner': {
    index: '03',
    icon: 'fa-solid fa-dumbbell',
    title: 'Workout Planner',
    desc: 'A workout planner where users log training days and exercises, track streaks and weekly activity, and generate full routines instantly with a built-in AI workout generator.',
    features: [
      'Log training days and exercises',
      'Streak tracking and weekly activity overview',
      'Built-in AI workout generator for instant full routines',
      'Clean dashboard for monitoring progress'
    ],
    tags: ['Web Development', 'UI/UX', 'HTML', 'CSS', 'JavaScript'],
    live: 'https://stephendave76.github.io/Workout-Planner/',
    source: 'https://github.com/stephendave76/Workout-Planner'
  }
};

const modal = document.getElementById('projectModal');
const modalIcon = document.getElementById('modalIcon');
const modalIndex = document.getElementById('modalIndex');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalFeatures = document.getElementById('modalFeatures');
const modalTags = document.getElementById('modalTags');
const modalLive = document.getElementById('modalLive');
const modalSource = document.getElementById('modalSource');
const modalClose = document.getElementById('modalClose');

const openProjectModal = (key) => {
  const p = projects[key];
  if (!p || !modal) return;
  modalIcon.innerHTML = '<i class="' + p.icon + '"></i>';
  modalIndex.textContent = p.index;
  modalTitle.textContent = p.title;
  modalDesc.textContent = p.desc;
  modalFeatures.innerHTML = '';
  p.features.forEach((f) => {
    const li = document.createElement('li');
    li.textContent = f;
    modalFeatures.appendChild(li);
  });
  modalTags.innerHTML = '';
  p.tags.forEach((t) => {
    const span = document.createElement('span');
    span.textContent = t;
    modalTags.appendChild(span);
  });
  modalLive.href = p.live;
  if (p.source) {
    modalSource.style.display = '';
    modalSource.href = p.source;
  } else {
    modalSource.style.display = 'none';
  }
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
};

const closeProjectModal = () => {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
};

document.querySelectorAll('[data-project]').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.has-dropdown.open').forEach((d) => {
      d.classList.remove('open');
      const t = d.querySelector('.drop-toggle');
      if (t) t.setAttribute('aria-expanded', 'false');
    });
    openProjectModal(btn.dataset.project);
  });
});

if (modalClose) modalClose.addEventListener('click', closeProjectModal);
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeProjectModal();
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProjectModal();
});

// Contact form — opens the visitor's email client with the message prefilled
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    const subject = encodeURIComponent('Portfolio inquiry from ' + name);
    const body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');
    window.location.href = 'mailto:izumimiyamura588@gmail.com?subject=' + subject + '&body=' + body;
  });
}

// Nav dropdowns — toggle on click, close on outside click / Escape
const dropdowns = document.querySelectorAll('.has-dropdown');
const closeAllDropdowns = () => {
  dropdowns.forEach((d) => {
    d.classList.remove('open');
    const t = d.querySelector('.drop-toggle');
    if (t) t.setAttribute('aria-expanded', 'false');
  });
};
dropdowns.forEach((dd) => {
  const toggle = dd.querySelector('.drop-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const wasOpen = dd.classList.contains('open');
    closeAllDropdowns();
    if (!wasOpen) {
      dd.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
    }
  });
});
document.addEventListener('click', (e) => {
  if (!e.target.closest('.has-dropdown')) closeAllDropdowns();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeAllDropdowns();
});