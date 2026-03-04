export type NavItem = { label: string; href: string }

export const nav: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const agency = {
  name: 'SWYM',
  location: 'Dubai, UAE',
  parent: 'AST Solutions',
  clients: ['My Desert Spring Water', 'SUPER GYM', 'LIMS Catering'],
  whatsapp: {
    e164: '+971529014052',
    display: '+971 52 901 4052',
    waLink: 'https://wa.me/971529014052',
  },
  mapLink: 'https://maps.app.goo.gl/63CBTQ2G1Fx2B2WD7',
  positioning:
    'Creative & digital marketing for brands that want to stand out and scale — strategy, content, and performance built to convert.',
}

export type Service = {
  title: string
  description: string
  bullets: string[]
}

export const services: Service[] = [
  {
    title: 'Brand & Creative',
    description: 'Identity systems and campaign creative that feel premium and perform.',
    bullets: ['Brand strategy', 'Visual identity', 'Campaign concepts', 'Design systems'],
  },
  {
    title: 'Social Media',
    description: 'Always-on content with a clear narrative, cadence, and conversion path.',
    bullets: ['Content strategy', 'Content production', 'Community-ready assets', 'Reporting & insights'],
  },
  {
    title: 'Performance Marketing',
    description: 'Full-funnel media built for measurable growth, not vanity metrics.',
    bullets: ['Paid social', 'Search ads', 'Landing page optimization', 'Experimentation'],
  },
  {
    title: 'Web & Landing Pages',
    description: 'Fast, modern pages that look sharp and ship leads.',
    bullets: ['Website UX', 'Landing pages', 'Copy & messaging', 'Conversion-focused structure'],
  },
]

export type CaseStudy = {
  client: string
  title: string
  summary: string
  tags: string[]
  deliverables: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    client: 'My Desert Spring Water',
    title: 'Refresh the brand story for modern audiences',
    summary:
      'A clean, elevated creative direction built to feel premium across social, web, and campaigns.',
    tags: ['Brand', 'Content', 'Social'],
    deliverables: ['Creative direction', 'Content system', 'Social templates', 'Launch-ready assets'],
  },
  {
    client: 'SUPER GYM',
    title: 'High-energy creative built to convert',
    summary:
      'A performance-minded creative approach for a bold fitness brand — designed for scroll-stopping attention.',
    tags: ['Paid Social', 'Creative', 'Landing Pages'],
    deliverables: ['Ad creative system', 'Messaging angles', 'Landing page structure', 'Iteration cadence'],
  },
  {
    client: 'LIMS Catering',
    title: 'Corporate-ready presence with appetite appeal',
    summary:
      'A cohesive visual and messaging system aimed at clear menus, stronger trust, and consistent lead flow.',
    tags: ['Brand', 'Web', 'Content'],
    deliverables: ['Positioning', 'Website sections', 'Content templates', 'Sales-ready collateral'],
  },
]
