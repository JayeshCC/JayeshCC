export const resumeUrl = new URL('../Jayesh_Resume_Final-1.pdf', import.meta.url).href;

export const services = [
  {
    id: 'web-applications',
    number: '01',
    title: 'Web Applications',
    description:
      'Responsive websites and practical web applications built around clear user flows and maintainable code.',
    points: ['Portfolio and business websites', 'Responsive application interfaces', 'API-connected web experiences'],
  },
  {
    id: 'ai-automation',
    number: '02',
    title: 'AI Automation & Tools',
    description:
      'Focused AI-powered tools and workflow automation for repetitive tasks, analysis, and system coordination.',
    points: ['Agent workflow prototypes', 'Automation utilities', 'AI-assisted product features'],
  },
  {
    id: 'frontend-development',
    number: '03',
    title: 'Frontend Development',
    description:
      'Clean, responsive frontend implementation with attention to usability, layout consistency, and iteration.',
    points: ['HTML, CSS, and JavaScript', 'React interfaces', 'Responsive UI improvement'],
  },
  {
    id: 'tech-security-advisor',
    number: '04',
    title: 'Tech & Security Advisor',
    description:
      'Practical guidance for individuals and small teams working through system, network, and basic defensive security concerns.',
    points: ['System and network troubleshooting', 'Security hygiene guidance', 'Tool-informed technical support'],
  },
];

export const projects = [
  {
    number: '01',
    category: 'Intel Unnati Program',
    name: 'Aiwork',
    subtitle: 'AI Agent Framework',
    description:
      'A lightweight Python framework for intelligent agentic workflows with hybrid DAG orchestration, tool integration, memory handling, and guardrails.',
    tech: ['Python', 'Flask', 'Kafka', 'Redis', 'OpenVINO'],
    link: 'https://github.com/JayeshCC/Aiwork',
  },
  {
    number: '02',
    category: 'CRPF Team Project',
    name: 'SATHI',
    subtitle: 'Mental Health Monitoring System',
    description:
      'An AI-powered mental health assessment system designed for CRPF, combining sentiment analysis and facial emotion detection for risk assessment.',
    tech: ['Python', 'Flask', 'React', 'TypeScript', 'TensorFlow', 'OpenCV'],
    link: 'https://github.com/JayeshCC/SATHI',
  },
  {
    number: '03',
    category: 'Diploma Capstone',
    name: 'Smart File Manager',
    subtitle: 'Desktop Automation',
    description:
      'A Python desktop utility with color-coded tagging, duplicate detection, and multi-threaded operations for everyday file management.',
    tech: ['Python', 'Tkinter', 'Multi-threading'],
    link: 'https://github.com/JayeshCC/Smart-File-Manager',
  },
  {
    number: '04',
    category: 'Anweb Technologies',
    name: 'ShopAt',
    subtitle: 'E-Commerce Web Application',
    description:
      'A responsive browser-based e-commerce frontend built during an internship, with product navigation and shopping-cart functionality.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/JayeshCC',
  },
];

export const experiences = [
  {
    date: 'May 2025 - Mar 2026',
    role: 'SATHI Contributor',
    organization: 'CRPF',
    description:
      'Debugged 30+ UI screens and validated backend API endpoints, resolving broken states, edge-case flows, and integration gaps. Identified performance bottlenecks to improve key workflow responsiveness.',
  },
  {
    date: '2023',
    role: 'Web Developer Intern',
    organization: 'Anweb Technologies',
    description:
      'Built the frontend for ShopAt, a client-facing e-commerce web application, using HTML, CSS, and JavaScript. Delivered responsive UI components and collaborated on iterative development workflows.',
  },
];

export const skillGroups = [
  { title: 'Languages', items: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'SQL'] },
  { title: 'AI & Systems', items: ['Agent Framework Design', 'DAG Workflows', 'Automation', 'System Architecture'] },
  { title: 'Cybersecurity', items: ['Incident Response', 'Digital Forensics', 'Threat Hunting', 'Nmap', 'Wireshark', 'Autopsy'] },
  { title: 'Web & Tools', items: ['HTML / CSS / JS', 'Flask', 'React', 'Git', 'Linux', 'Docker'] },
];

export const education = [
  { date: '2024 - 2027', title: 'B.E., Information Technology', place: 'NMIET, Talegaon' },
  { date: '2021 - 2024', title: 'Diploma, Computer Engineering', place: 'Pimpri Chinchwad Polytechnic, Pune - 88.97%' },
  { date: '2020 - 2021', title: 'Class X (CBSE)', place: 'Pratibha International School - 86%' },
];

export const credentials = [
  {
    title: 'Publication',
    description: 'Intelligent Automation in File Management: Addressing Data Accessibility and Redundancy',
    meta: 'IJARSCT - Jan 2024',
  },
  {
    title: 'Detect & Defend',
    description: 'Incident Response & Digital Forensics Blueprint',
    meta: 'Secured Bharat Group - Oct-Nov 2025',
  },
  {
    title: 'Cyber Security Workshop',
    description: 'Tools & Techniques Workshop',
    meta: 'Cyber Sanskar - Sep 2023',
  },
];

export const faqs = [
  {
    question: 'What kind of projects are a good fit?',
    answer:
      'Small and focused web applications, frontend improvements, automation tools, and practical AI prototypes are the best fit. For larger ideas, I can help define a realistic first phase.',
  },
  {
    question: 'How do we communicate during a project?',
    answer:
      'We agree on the goal, scope, and milestones before development starts. I share progress updates and flag questions early so the work stays clear and manageable.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'Timelines depend on scope. A focused website or small tool can move quickly, while a larger application should be split into milestones after an initial discussion.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Send a short message with your goal, timeline, and any references. I usually reply within 24 hours and will confirm whether the project is a good fit.',
  },
];
