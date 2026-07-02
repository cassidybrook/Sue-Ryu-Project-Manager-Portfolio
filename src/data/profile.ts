export const profile = {
  name: 'Sue Ryu',
  title: 'Project Manager | Finance Professional',
  location: 'Auckland, New Zealand',
  phone: '021 075 9773',
  email: 'sue.ryu@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/sue-ryu-ca-5285b1195/',
  cvUrl: '/Sue-Ryu-CV-v2.pdf',
  cvFilename: 'Sue-Ryu-CV-v2.pdf',
  about:
    'Project manager and finance professional with a strong foundation in assurance, FP&A, and corporate reporting. At Air New Zealand, I progressed from financial analysis into project management — developing plans, aligning stakeholders, and coordinating cross-functional teams through complex delivery. Previously a Senior Assurance Associate at Ernst & Young, I bring analytical rigour, stakeholder partnership, and a track record of turning data into clear, actionable insights.',
} as const

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
] as const

export const education = [
  {
    id: 'caanz',
    institution: 'Chartered Accountants Australia and New Zealand (CAANZ)',
    credential: 'Provisional Member',
    period: '2020 – Present',
    details: [
      'Completed modules: Tax, Financial Accounting, Management and Applied Finance, Audit, Capstone',
    ],
  },
  {
    id: 'uoa',
    institution: 'University of Auckland',
    credential: 'Bachelor of Commerce / Arts',
    period: '2015 – 2019',
    details: ['Accounting, Psychology, Criminology'],
  },
] as const

export const experience = [
  {
    id: 'airnz-pm',
    company: 'Air New Zealand',
    role: 'Project Manager',
    period: 'Apr 2025 – Jun 2026',
    location: 'Auckland, New Zealand',
    highlights: [
      'Developed and maintained project plans, schedules and budgets to ensure successful delivery on time and within budget',
      'Engaged and aligned key stakeholders across business units to ensure clarity of project goals and deliverables',
      'Coordinated cross-functional teams to solve complex problems and remove blockers during project execution',
    ],
  },
  {
    id: 'airnz-fs',
    company: 'Air New Zealand',
    role: 'Finance Specialist',
    period: 'Apr 2023 – Apr 2025',
    location: 'Auckland, New Zealand',
    highlights: [
      'Financial reporting and analysis — conducting in-depth financial analysis and reporting to support strategic decision-making and providing insights on cost management',
      'Budgeting and forecasting — comparing actual performance against targets to drive financial accountability and business performance',
      'Stakeholder collaboration — partnering with various squads to translate financial data into actionable insights, supporting business objectives',
    ],
  },
  {
    id: 'ey',
    company: 'Ernst & Young',
    role: 'Senior Assurance Associate',
    period: 'Mar 2020 – Apr 2023',
    highlights: [
      'Audit and compliance — conducting financial audits for clients across various industries, ensuring compliance with IFRS / NZ GAAP and regulatory requirements',
      'Risk assessment and internal controls — evaluated internal controls and identified risks, providing recommendations to improve financial reporting accuracy',
      'Stakeholder engagement — collaborated with clients and senior auditors to gather financial data, assess audit findings, and deliver key insights to support informed decision-making',
    ],
  },
] as const

export const leadership = [
  {
    id: 'yopro',
    organization: 'Air New Zealand',
    role: 'Yo Pro Network Lead',
    description:
      'Leading the planning and execution of events for the Yo Pro Network, creating opportunities for networking, professional growth, and community-building among early-career employees.',
  },
  {
    id: 'ey-social',
    organization: 'Ernst & Young',
    role: 'Year Group Lead & Social Committee',
    description:
      'Ensuring voices of colleagues are heard at monthly meetings held with other year group leaders and Partners. Organising social functions for the assurance service line (monthly and quarterly).',
  },
] as const
