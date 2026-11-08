export const links = {
  linkedin: 'https://www.linkedin.com/in/mostafa-safwat-95198323b',
  github: 'https://github.com/Mostafa-Safwat',
  email: 'mostafasafwat404@gmail.com',
  cv: '/cv.pdf',
}

export const nav = [
  { label: 'Experience', href: '#experience', n: '01' },
  { label: 'Projects', href: '#projects', n: '02' },
  { label: 'Contact', href: '#contact', n: '03' },
]

export const stats = [
  { n: '218', l: 'pull requests merged at Jimber, about a quarter of all merged PRs on the platform since June 2025' },
  { n: 'About 30%', l: 'of the tickets in a product release' },
  { n: 'About half', l: 'of the Playwright end-to-end test suite' },
]

export const about = [
  "I'm a ==full stack developer working in TypeScript==, with production experience across a Vue 3 frontend, a NestJS (Node.js) backend and a MySQL database with Prisma.",
  'At Jimber, a Belgian security company building a SASE platform, I ==merged 218 pull requests, about a quarter of all merged PRs== on the platform since June 2025, shipped about 30% of the tickets in a product release, and wrote ==about half of its Playwright end-to-end test suite==.',
  'My graduation project, Snipscribe, transcribes, summarizes and translates YouTube videos using ==OpenAI Whisper and the Qwen3 LLM==, with a NestJS backend and a React frontend in English and Arabic.',
  'I graduated from EELU in 2025 with a degree in Computers and Information Technology.',
]

export const jimber = {
  company: 'Jimber',
  blurb: 'A Belgian security company building a SASE platform.',
  when: 'Remote · Jun 2025 – Present',
  roles: [
    { title: 'Full Stack Developer', dates: 'Oct 2025 – Present', current: true },
    { title: 'Intern', dates: 'Jun 2025 – Sep 2025', current: false },
  ],
  work: [
    'Worked in TypeScript across a Vue 3 frontend, a NestJS backend and a MySQL database (Prisma).',
    'Merged 218 pull requests, about a quarter of all merged PRs on the platform since June 2025.',
    'Shipped about 30% of the tickets in a product release.',
    'Wrote about half of the Playwright end-to-end test suite, covering firewall policies, users and customers, network settings (DHCP, WAN load balancing), web filtering and EDR.',
    'Built the EDR whitelist feature across the stack (validation, API and UI, plus adding items straight from the monitoring page), the malicious file detection UI, and a redesign of the EDR monitoring page.',
    'Built the security assessment feature, including monthly scheduling and PDF reports.',
    'Added CSV export to every monitoring page, streaming large exports in batches and protecting against CSV injection.',
    "Built a GitHub App on my own (NestJS, GitHub GraphQL API) that updates the team's project board from webhooks: moving issues to In review when a pull request asks for review, sending unassigned issues back to Ready, and grouping notifications into one comment. Deployed it to a cloud VPS with Docker Compose, Traefik (HTTPS) and a CI/CD pipeline.",
    'Set up a nightly release staging environment, refactored the preprod GitHub Actions workflow, and added pull request lint checks (commitlint, YAML lint).',
  ],
  tech: ['TypeScript', 'Vue 3', 'NestJS', 'MySQL', 'Prisma', 'Playwright', 'Docker', 'Docker Compose', 'Traefik', 'GitHub Actions', 'GitHub GraphQL API'],
}

export const recommendations = [
  {
    quote: [
      "I've worked with Mostafa for about a year and a half, starting with his internship. From early on, he showed that he could work independently and take ownership of his work, including areas such as end-to-end test automation.",
      'Over time, he became proactive and confident in solving problems on his own, while also knowing when to ask for input.',
      'It was great to see his growth from intern to developer and to work with him throughout that process.',
    ],
    name: 'Alexander Mol',
    role: 'Senior developer at Jimber',
    link: `${links.linkedin}/details/recommendations/`,
  },
  {
    quote: [
      'I had the pleasure of working with Mostafa on our SASE platform, and saw him grow into a vital role building and maintaining the product.',
      "From a product perspective, Mostafa didn't just build features: he thought beyond the specs he received and challenged me by asking questions I hadn't thought of at the time.",
      'His problem-solving mindset, reliability, and proactive communication make him a huge asset to any team. He also took ownership of writing comprehensive E2E tests to ensure our releases were stable, reliable, and user-ready.',
      'I highly recommend Mostafa to anyone looking for a skilled, dependable, and thorough Full Stack Developer!',
    ],
    name: 'Rani Devriendt',
    role: 'Product owner at Jimber',
    link: `${links.linkedin}/details/recommendations/`,
  },
]

export const snipscribe = {
  label: 'Featured · Graduation project',
  title: 'Snipscribe: AI-Powered Video Summarization Platform',
  points: [
    'Developed a full-stack web platform that transcribes, summarizes, and translates YouTube videos using state-of-the-art AI models: OpenAI Whisper for transcription and Qwen3 LLM for summarization and translation.',
    'Built a NestJS backend and integrated email/in-app notifications to enhance user engagement.',
    'Implemented key features including bilingual support (English/Arabic), summary history, community sharing, and a responsive React frontend.',
  ],
  tech: ['NestJS', 'React', 'OpenAI Whisper', 'Qwen3'],
  repo: 'https://github.com/Mostafa-Safwat/snipscribe',
}

export const projects = [
  { name: 'Booktopia', note: 'Team project, coursework', desc: 'An online bookstore built with my team, with user accounts, a storefront, checkout and an admin panel.', tech: 'HTML · CSS · JavaScript · PHP · MySQL', repo: 'https://github.com/Mostafa-Safwat/booktopia' },
  { name: 'Final Fantasy 14 Discord Bot', note: 'Personal project', desc: 'A Python bot that scrapes the Final Fantasy 14 news site with BeautifulSoup and posts updates to Discord, filtered by topic. It can also pick randomly from options users give it.', tech: 'Python · BeautifulSoup · Discord API', repo: 'https://github.com/Mostafa-Safwat/final-fantasy-14-discord-bot' },
  { name: 'YouTube Downloader', note: 'Personal project', desc: 'A Tkinter desktop app for downloading YouTube videos and playlists, with quality and folder selection.', tech: 'Python · Tkinter', repo: 'https://github.com/Mostafa-Safwat/youtube-downloader' },
  { name: 'Amazon Price Tracker', note: 'Personal project', desc: "A Python script that scrapes an Amazon product's price with BeautifulSoup and notifies the user when it changes.", tech: 'Python · BeautifulSoup', repo: 'https://github.com/Mostafa-Safwat/amazon-webscraper' },
]

export const skills = [
  { k: 'Frontend', v: 'Vue 3, React, TypeScript, JavaScript, HTML/CSS, Tailwind CSS' },
  { k: 'Backend', v: 'NestJS, Node.js, Python (Flask, Django), PHP' },
  { k: 'Databases', v: 'MySQL, PostgreSQL, Prisma' },
  { k: 'Testing', v: 'Playwright (end-to-end)' },
  { k: 'Tools', v: 'Docker, Docker Compose, Traefik, CI/CD (GitHub Actions), Git, GitHub, Linux, Bash' },
  { k: 'AI coding tools', v: 'Claude, GitHub Copilot, Codex' },
  { k: 'Other languages', v: 'Java, C, SQL, R' },
]

export const education = {
  school: 'The Egyptian E-Learning University (EELU)',
  degree: "Bachelor's degree, Computers and Information Technology · 2021 – 2025",
}

export const certs = [
  { n: 'CS50', d: 'Harvard · Oct 2022' },
  { n: 'Google IT Automation with Python', d: 'Coursera · May 2022' },
  { n: 'Google Data Analytics', d: 'Coursera · Nov 2022' },
  { n: 'Web Development Challenger', d: 'Udacity · Oct 2022' },
  { n: 'Foundations of User Experience (UX) Design', d: 'Google' },
  { n: 'CCNA: Introduction to Networks', d: 'Cisco · Jul 2023' },
  { n: 'CCNA: Switching, Routing, and Wireless Essentials', d: 'Cisco · Jan 2024' },
]
