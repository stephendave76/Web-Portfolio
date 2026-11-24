export const EMAIL = 'izumimiyamura588@gmail.com';

export const SOCIALS = [
  {
    label: 'Facebook',
    short: 'FB',
    icon: 'fa-brands fa-facebook',
    url: 'https://www.facebook.com/share/1MaDMBLcoq/',
  },
  {
    label: 'Instagram',
    short: 'IG',
    icon: 'fa-brands fa-instagram',
    url: 'https://www.instagram.com/www_deeeevxs?igsh=MTd6eWdneDhkMDZ0Nw==',
  },
  {
    label: 'GitHub',
    short: 'GH',
    icon: 'fa-brands fa-github',
    url: 'https://github.com/stephendave76',
  },
];

export const HOBBIES = [
  {
    icon: 'fa-solid fa-basketball',
    title: 'Basketball',
    desc: 'court time, teamwork, competition',
  },
  {
    icon: 'fa-solid fa-dumbbell',
    title: 'Gym',
    desc: 'discipline, consistency, progress',
  },
];

export const SKILL_GROUPS = [
  {
    id: 'skill-core',
    label: 'CORE SKILLS',
    skills: [
      'Web Development',
      'HTML&CSS',
      'UI/UX Design',
      'Prompt Engineering',
      'Front-end Development',
      'Database Management',
      'Debugging',
    ],
  },
  {
    id: 'skill-lang',
    label: 'LANGUAGES',
    skills: ['HTML', 'CSS'],
  },
  {
    id: 'skill-frameworks',
    label: 'FRAMEWORKS & LIBRARIES',
    note: '\u00B7 currently exploring',
    skills: ['React', 'Bootstrap', 'Node.js', 'Laravel'],
  },
  {
    id: 'skill-tools',
    label: 'TOOLS',
    skills: ['Visual Studio Code', 'GitHub', 'Canva'],
  },
];

export const PROJECTS = [
  {
    id: 'study-break',
    index: '01',
    icon: 'fa-solid fa-terminal',
    title: 'Study Break',
    shortDesc:
      'Study Break Game is a collection of short and engaging mini-games designed to help students relax and refresh their minds during study breaks. It includes memory, reaction time, math, word, and pattern recognition challenges that improve focus, thinking skills, and mental alertness while keeping gameplay simple and enjoyable.',
    desc: 'Study Break Game is a collection of short and engaging mini-games designed to help students relax and refresh their minds during study breaks. It includes memory, reaction time, math, word, and pattern recognition challenges that improve focus, thinking skills, and mental alertness while keeping gameplay simple and enjoyable.',
    features: [
      'Five mini-games: memory, reaction time, math, word, and pattern challenges',
      'Quick pick-up-and-play rounds built for short study breaks',
      'Score tracking to measure focus and mental alertness',
      'Simple, distraction-free game interface',
    ],
    cardTags: ['Web Development', 'Interactive'],
    tags: ['Web Development', 'Interactive', 'HTML', 'CSS', 'JavaScript'],
    live: 'https://stephendave76.github.io/Study-Game/',
    source: 'https://github.com/stephendave76/Study-Game',
  },
  {
    id: 'regex-challenge',
    index: '02',
    icon: 'fa-solid fa-check-to-slot',
    title: 'Regex Challenge 2',
    shortDesc:
      'An interactive learning platform designed to help students learn and practice Regular Expressions through hands-on challenges. It allows users to create regex patterns, test them against given inputs, and receive instant feedback to improve their understanding and problem-solving skills.',
    desc: 'An interactive learning platform designed to help students learn and practice Regular Expressions through hands-on challenges. It allows users to create regex patterns, test them against given inputs, and receive instant feedback to improve their understanding and problem-solving skills.',
    features: [
      'Hands-on regex challenges with increasing difficulty',
      'Live pattern testing against sample inputs',
      'Instant feedback on matches and mistakes',
      'Learn-by-doing approach to regex concepts',
    ],
    cardTags: ['Web Development', 'UI/UX'],
    tags: ['Web Development', 'UI/UX', 'Education'],
    live: 'https://okayt.github.io/RegEx-Escape.io/',
    source: null,
  },
  {
    id: 'workout-planner',
    index: '03',
    icon: 'fa-solid fa-dumbbell',
    title: 'Workout Planner',
    shortDesc:
      'A workout planner where users log training days and exercises, track streaks and weekly activity, and generate full routines instantly with a built-in AI workout generator.',
    desc: 'A workout planner where users log training days and exercises, track streaks and weekly activity, and generate full routines instantly with a built-in AI workout generator.',
    features: [
      'Log training days and exercises',
      'Streak tracking and weekly activity overview',
      'Built-in AI workout generator for instant full routines',
      'Clean dashboard for monitoring progress',
    ],
    cardTags: ['Web Development', 'UI/UX'],
    tags: ['Web Development', 'UI/UX', 'HTML', 'CSS', 'JavaScript'],
    live: 'https://stephendave76.github.io/Workout-Planner/',
    source: 'https://github.com/stephendave76/Workout-Planner',
  },
];

export const PROJECTS_BY_ID = Object.fromEntries(
  PROJECTS.map((project) => [project.id, project])
);
