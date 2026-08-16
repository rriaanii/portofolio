import { useEffect, useState, type MouseEvent } from 'react'
import { SiGmail, SiWhatsapp } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import {
  FaMagnifyingGlass,
  FaChevronLeft,
  FaChevronRight,
  FaXmark,
  FaLocationDot,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaLayerGroup,
  FaArrowRight,
  FaCircleCheck,
  FaMoon,
  FaSun,
} from 'react-icons/fa6'
import myPicture from './assets/picturefix.png'

function App() {
  const [profileImg] = useState<string>(myPicture)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'dark'
    const stored = window.localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

  const educationPhotos = ['/wisuda.jpg', '/wisuda2.png']
  const [currentEduSlide, setCurrentEduSlide] = useState(0)

  const changeEduSlide = (direction: 'next' | 'prev') => {
    setCurrentEduSlide((prev) => {
      if (direction === 'next') {
        return prev === educationPhotos.length - 1 ? 0 : prev + 1
      }
      return prev === 0 ? educationPhotos.length - 1 : prev - 1
    })
  }

  const nextEduSlide = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    changeEduSlide('next')
  }

  const prevEduSlide = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    changeEduSlide('prev')
  }

  const openImageModal = () => setIsImageModalOpen(true)
  const closeImageModal = () => setIsImageModalOpen(false)

  const certificateData = [
    {
      id: 'bnsp',
      title: 'BNSP Certification | Junior Network Administrator',
      issuer: 'Computer Professional Certification Institution',
      date: 'March 2021',
      highlight: true,
      description:
        'Completed certification in network and infrastructure competencies, including network design and configuration.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'merit',
      title: 'Merit Award Scholarship',
      issuer: 'Tenaris PT. Seamless Pipe Indonesia Jaya',
      date: 'March 2021',
      highlight: true,
      description: 'Received full Merit Award for outstanding and consistent academic excellence.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'project-management',
      title: 'Project Management',
      issuer: 'Dicoding Indonesia X Google Developers',
      date: '18 Jan 2024',
      highlight: false,
      description:
        'Learned project management fundamentals, including cycles, methodology, and organizational structures.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'data-science',
      title: 'Data Science Competency',
      issuer: 'Dicoding Indonesia X Google Developers',
      date: '4 Feb 2024',
      highlight: false,
      description:
        'Studied the basics of data science, data analysis, machine learning, and essential data tools.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'web-layouts',
      title: 'Web Programming Layouts',
      issuer: 'Dicoding X DBS Foundation Coding Camp',
      date: '5 Feb 2024',
      highlight: false,
      description:
        'Created final assignments applying semantic HTML techniques and highly responsive web layouts using CSS.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'sql',
      title: 'Structured Query Language (SQL)',
      issuer: 'Dicoding Indonesia X Google Developers',
      date: '8 Feb 2024',
      highlight: false,
      description:
        'Learned to manage and query relational databases using basic and advanced SQL commands.',
      image: 'https://images.unsplash.com/photo-1558494949cc5c4f48a4d0d9c9b8c95eb?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'responsive-design',
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: '12 Mar 2024',
      highlight: false,
      description:
        'Built responsive, mobile-first web layouts using modern CSS, Flexbox, and Grid systems.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'ux-design',
      title: 'Belajar Dasar UX Design',
      issuer: 'Dicoding Indonesia',
      date: '22 Mar 2024',
      highlight: false,
      description:
        'Studied the UX design workflow from user research and empathy maps to wireframes and prototyping.',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'python',
      title: 'Python Programming Essentials',
      issuer: 'Dicoding Indonesia',
      date: '5 Apr 2024',
      highlight: false,
      description:
        'Practiced Python fundamentals, including data structures, functions, and basic automation scripts.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'scrum',
      title: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      date: '18 May 2024',
      highlight: false,
      description:
        'Applied the Scrum framework, sprint planning, and agile ceremonies to manage team delivery.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'google-analytics',
      title: 'Google Analytics for Beginners',
      issuer: 'Google Analytics Academy',
      date: '2 Jun 2024',
      highlight: false,
      description:
        'Learned to measure website traffic and user behavior to support data-driven business decisions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'db-design',
      title: 'Database Design & Modeling',
      issuer: 'Udemy',
      date: '14 Jul 2024',
      highlight: false,
      description:
        'Designed normalized relational schemas and applied entity-relationship modeling for real-world cases.',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'figma',
      title: 'UI Design with Figma',
      issuer: 'Coursera',
      date: '9 Aug 2024',
      highlight: false,
      description:
        'Created high-fidelity UI mockups and interactive prototypes using design systems in Figma.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'toefl',
      title: 'TOEFL ITP Certification',
      issuer: 'IIEF',
      date: '23 Aug 2024',
      highlight: false,
      description:
        'Demonstrated English proficiency in listening, structure, and written expression.',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
    },
  ]

  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof certificateData)[number] | null
  >(null)

  const internshipData = [
    {
      id: 'sanoh',
      company: 'PT Sanoh Indonesia',
      role: 'Business & System Analyst and Frontend Developer Intern',
      date: 'July 2024 – July 2025',
      location: 'Cikarang, Indonesia',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
      details: [
        'Finance Invoice Management Systems: Collaborated within the BA and Frontend teams to digitize and streamline corporate finance invoicing workflows.',
        'Visitor Management Systems: Engineered intuitive frontend interfaces tailored for security, administrators, and visitors using tablet devices. Optimized check-in workflows for dynamic visit categories including Meetings, Contractors, and Warehouse Deliveries.',
        'Supply Chain Management Systems: Analyzed business requirements across divisions to model system processes via Use Cases, Activity Diagrams, ERDs, and designed & coded print-ready, responsive HTML/CSS layouts for critical SCM documents (PO, DN, and Kanban Labels).',
      ],
    },
    {
      id: 'gopay',
      company: 'GoPay Indonesia',
      role: "Student Ambassador '23 - Content Creator",
      date: 'Sept 2023 - Dec 2023',
      location: 'Remote / Campus Engagement',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
      details: [
        'Marketed the GoPay brand by increasing awareness of GoPay facilities/services among student peers.',
        'Developed a GoPay Strategy by helping to design and develop GoPay marketing plans based on an analysis of needs and constraints experienced by students.',
      ],
    },
    {
      id: 'bank-banten',
      company: 'PT Bank Pembangunan Daerah Banten Tbk',
      role: 'Loan Assistant Intern',
      date: 'Oct 2019 - Dec 2019',
      location: 'Banten, Indonesia',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
      details: [
        'Prepared account journals, deposit bills, and savings book account stamps for credit reviews.',
        'Inputted cooperative credit file data systematically into the corporate bank system.',
      ],
    },
  ]

  const [selectedInternship, setSelectedInternship] = useState<(typeof internshipData)[number] | null>(null)

  const academicProjectData = [
    {
      id: 'teaching-assistant',
      title: 'Teaching Assistant Network Architecture',
      subtitle: 'Class Practice Assistant Coordinator',
      date: 'March 2023 - May 2024',
      location: 'Telkom University',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
      details: [
        'Assisted lecturers in class practicum environments.',
        'Explained complex technical materials and helped students understand network architecture concepts thoroughly.',
      ],
    },
    {
      id: 'community-service',
      title: 'Pengabdian Masyarakat (Community Service)',
      subtitle: 'Tourism Promotion Website Design Team',
      date: 'Nov 2023 - Dec 2023',
      location: 'Keseneng Village, Semarang',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
      details: [
        'Researched and analyzed the target audience and tourism potential of Keseneng Village, Semarang.',
        'Designed a user-friendly and informative web layout to boost local village tourism.',
      ],
    },
  ]

  const [selectedAcademicProject, setSelectedAcademicProject] = useState<(typeof academicProjectData)[number] | null>(null)

  const educationProjects = [
    {
      date: 'Feb 2024 - June 2024',
      title: 'Mobile-based Scholarship Application',
      role: 'Programmer Fullstack Developer & Quality Assurance',
      bullets: [
        'Developed front-end using Flutter and Back-end using PHP.',
        'Collaborated with designers and developers',
      ],
    },
    {
      date: 'Oct 2023 - Dec 2023',
      title: 'SatuSisi Coffee Web Application',
      role: 'Programmer Fullstack Developer & System Analyst',
      bullets: [
        'Analyzted business needs, developed user-friendly website',
        'Built front-end with PHP and Back-end with HTML CSS',
      ],
    },
    {
      date: 'Feb 2023 - June 2023',
      title: 'Web-based Cryptocurrency Application',
      role: 'Programmer Fullstack Developer',
      bullets: [
        'Created application using HTML CSS and JavaScript with RESTAPIs integration',
      ],
    },
  ]

  const sectionHeader = (number: string, title: string, subtitle?: string) => (
    <div className="mb-12 text-center">
      <span className="font-mono text-xs font-semibold tracking-widest text-accent-soft uppercase">
        {number}
      </span>
      <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-sm text-slate-400">{subtitle}</p>}
      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-accent via-purple-400 to-pink-400" />
    </div>
  )

  const educationModal = isImageModalOpen ? (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in"
      onClick={closeImageModal}
    >
      <div className="relative w-full max-w-4xl animate-scale-in" onClick={(event) => event.stopPropagation()}>
        <button
          className="absolute -top-3 -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-ink-800 text-slate-300 transition hover:bg-accent hover:text-[#fff]"
          onClick={closeImageModal}
          aria-label="Close image"
        >
          <FaXmark className="h-5 w-5" />
        </button>
        <img
          src={educationPhotos[currentEduSlide]}
          alt={`Education Photo ${currentEduSlide + 1}`}
          className="max-h-[80vh] w-full rounded-2xl object-contain shadow-2xl"
        />
        <div className="mt-3 text-center font-mono text-sm text-slate-400">
          {currentEduSlide + 1} / {educationPhotos.length}
        </div>
      </div>
    </div>
  ) : null

  const internshipModal = selectedInternship ? (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in"
      onClick={() => setSelectedInternship(null)}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-glow-lg animate-scale-in"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-[#fff] transition hover:bg-accent"
          onClick={() => setSelectedInternship(null)}
          aria-label="Close internship detail"
        >
          <FaXmark className="h-4 w-4" />
        </button>

        <div className="relative h-56 w-full shrink-0 sm:h-64">
          <img
            src={selectedInternship.image}
            alt={selectedInternship.company}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
        </div>

        <div className="overflow-y-auto p-6 sm:p-8">
          <p className="font-mono text-xs font-semibold tracking-widest text-accent-soft uppercase">
            Internship Experience
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            {selectedInternship.company}
          </h3>
          <p className="mt-1 text-sm text-slate-400">{selectedInternship.role}</p>

          <div className="mt-4 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-light">
              {selectedInternship.date}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
              <FaLocationDot className="h-3 w-3 text-coral" />
              {selectedInternship.location}
            </span>
          </div>

          <ul className="mt-6 space-y-3">
            {selectedInternship.details.map((detail) => (
              <li key={detail} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                <FaCircleCheck className="mt-1 h-4 w-4 shrink-0 text-mint" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : null

  const academicModal = selectedAcademicProject ? (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in"
      onClick={() => setSelectedAcademicProject(null)}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-glow-lg animate-scale-in"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-[#fff] transition hover:bg-accent"
          onClick={() => setSelectedAcademicProject(null)}
          aria-label="Close academic experience detail"
        >
          <FaXmark className="h-4 w-4" />
        </button>

        <div className="relative h-56 w-full shrink-0 sm:h-64">
          <img
            src={selectedAcademicProject.image}
            alt={selectedAcademicProject.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
        </div>

        <div className="overflow-y-auto p-6 sm:p-8">
          <p className="font-mono text-xs font-semibold tracking-widest text-accent-soft uppercase">
            Academic & Project Experience
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            {selectedAcademicProject.title}
          </h3>
          <p className="mt-1 text-sm text-slate-400">{selectedAcademicProject.subtitle}</p>

          <div className="mt-4 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-light">
              {selectedAcademicProject.date}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
              <FaLocationDot className="h-3 w-3 text-coral" />
              {selectedAcademicProject.location}
            </span>
          </div>

          <ul className="mt-6 space-y-3">
            {selectedAcademicProject.details.map((detail) => (
              <li key={detail} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                <FaCircleCheck className="mt-1 h-4 w-4 shrink-0 text-mint" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : null

  const certificateModal = selectedCertificate ? (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in"
      onClick={() => setSelectedCertificate(null)}
    >
      <div
        className="relative w-full max-w-4xl animate-scale-in rounded-2xl border border-white/10 bg-ink-900 p-3 shadow-glow-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="absolute -top-3 -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-ink-800 text-slate-300 transition hover:bg-accent hover:text-[#fff]"
          onClick={() => setSelectedCertificate(null)}
          aria-label="Close certificate"
        >
          <FaXmark className="h-5 w-5" />
        </button>
        <img
          src={selectedCertificate.image}
          alt={selectedCertificate.title}
          className="max-h-[70vh] w-full rounded-xl object-contain"
        />
        <div className="p-4 text-center">
          <h3 className="font-display text-lg font-bold text-white">
            {selectedCertificate.title}
          </h3>
          <p className="mt-1 text-sm text-slate-400">{selectedCertificate.issuer}</p>
        </div>
      </div>
    </div>
  ) : null

  const certCard = (certificate: (typeof certificateData)[number], highlighted: boolean) => (
    <article
      key={certificate.id}
      className={`group flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-glow ${
        highlighted
          ? 'border-accent/20 bg-gradient-to-b from-accent/10 via-ink-800/80 to-ink-800/80'
          : 'border-white/8 bg-ink-800/60 hover:border-accent/25'
      }`}
    >
      <div className="relative min-h-[180px] overflow-hidden bg-ink-700">
        <button
          type="button"
          className="block h-full w-full cursor-pointer"
          onClick={() => setSelectedCertificate(certificate)}
          aria-label={`View ${certificate.title}`}
        >
          <img
            src={certificate.image}
            alt={certificate.title}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </button>

        <button
          type="button"
          className="absolute top-1/2 left-3 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-[#fff] opacity-70 backdrop-blur-sm transition hover:bg-accent hover:opacity-100"
          aria-label="Previous certificate"
        >
          <FaChevronLeft className="h-3.5 w-3.5" />
        </button>
        <button
          type="button"
          className="absolute top-1/2 right-3 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-[#fff] opacity-70 backdrop-blur-sm transition hover:bg-accent hover:opacity-100"
          aria-label="Next certificate"
        >
          <FaChevronRight className="h-3.5 w-3.5" />
        </button>
        <span className="absolute right-3 bottom-3 rounded-full bg-black/60 px-2.5 py-1 font-mono text-xs font-semibold text-[#fff] backdrop-blur-sm">
          3/3
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="font-mono text-xs font-semibold tracking-widest text-accent-soft uppercase">
          {certificate.date}
        </span>
        <h3 className="mt-2 font-display text-base font-bold leading-snug text-white">
          {certificate.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-slate-400">{certificate.issuer}</p>
        <p className="mt-3 text-xs leading-relaxed text-slate-500">
          {certificate.description}
        </p>
      </div>
    </article>
  )

  const experienceCard = (item: { id: string; secondaryTitle: string; secondarySubtitle: string; date: string; location: string; image: string }, onClick: () => void) => (
    <button
      key={item.id}
      type="button"
      onClick={onClick}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-ink-800/60 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-glow"
    >
      <div className="relative h-40 overflow-hidden bg-ink-700">
        <img
          src={item.image}
          alt={item.secondaryTitle}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 rounded-full border border-accent/30 bg-ink-950/70 px-3 py-1 font-mono text-[0.65rem] font-semibold tracking-wider text-accent-light uppercase backdrop-blur-sm">
          {item.date}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-bold text-white transition-colors group-hover:text-accent-light">
          {item.secondaryTitle}
        </h3>
        <p className="mt-1 text-sm font-medium text-slate-400">{item.secondarySubtitle}</p>
        <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
          <FaLocationDot className="h-3 w-3 text-coral" />
          {item.location}
        </p>

        <span className="mt-4 flex items-center gap-2 pb-1 font-mono text-xs font-semibold tracking-widest text-accent-soft uppercase transition-colors group-hover:text-accent-light">
          Click here
          <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  )

  return (
    <div className="min-h-screen bg-ink-950 font-sans text-slate-300 antialiased">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-40" />
        <div className="absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute top-1/3 -left-32 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]" />
        <div className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-pink-500/10 blur-[100px]" />
      </div>

      {/* ==================== NAVBAR ==================== */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-ink-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#about" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-purple-600 font-display text-sm font-extrabold text-[#fff] shadow-glow">
              MF
            </span>
            <span className="hidden font-display text-base font-bold tracking-tight text-white sm:block">
              Maulika<span className="text-accent-soft">.</span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {[
              ['About', '#about'],
              ['Education', '#education'],
              ['Internships', '#internships'],
              ['Experience', '#experience'],
              ['Certificates', '#licenses'],
              ['Skills', '#skills'],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="relative text-sm font-medium text-slate-400 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-gradient-to-r after:from-accent after:to-purple-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent-soft transition-all hover:bg-accent hover:text-[#fff]"
          >
            {theme === 'light' ? <FaMoon className="h-4 w-4" /> : <FaSun className="h-4 w-4" />}
          </button>

          <a
            href="mailto:maulikafitriani@gmail.com"
            className="hidden rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent-light transition-all hover:bg-accent hover:text-[#fff] sm:inline-flex"
          >
            Hire Me
          </a>

          {/* Mobile menu button placeholder — simple anchor for now */}
          <a
            href="#about"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 md:hidden"
            aria-label="Menu"
          >
            <span className="flex flex-col gap-1">
              <span className="block h-0.5 w-4 bg-current" />
              <span className="block h-0.5 w-4 bg-current" />
              <span className="block h-0.5 w-4 bg-current" />
            </span>
          </a>
        </div>
      </nav>

      {/* ==================== HERO / ABOUT ==================== */}
      <section id="about" className="relative z-10 px-4 pt-32 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="relative mx-auto mb-8 w-fit animate-fade-up">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-accent via-purple-500 to-pink-500 opacity-60 blur-lg" />
            <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-white/20 bg-ink-800 sm:h-44 sm:w-44">
              <img
                src={profileImg}
                alt="Maulika Fitriani Profile"
                className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute right-1 bottom-1 flex h-10 w-10 items-center justify-center rounded-full border-4 border-ink-950 bg-mint text-slate-900">
              <FaCircleCheck className="h-5 w-5" />
            </div>
          </div>

          <p className="animate-fade-up font-mono text-xs font-semibold tracking-[0.3em] text-accent-soft uppercase">
            Welcome to my portfolio
          </p>
          <h1 className="mt-4 animate-fade-up font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            MAULIKA <span className="text-gradient">FITRIANI</span>
          </h1>

          <div className="mt-4 flex animate-fade-up flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent-light">
              <FaBriefcase className="h-3.5 w-3.5" />
              Business & System Analyst | Frontend Developer
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-semibold text-slate-300">
              <FaLocationDot className="h-3.5 w-3.5 text-coral" />
              Bandung, West Java
            </span>
          </div>

          <div className="mt-6 flex animate-fade-up items-center justify-center gap-4">
            <a
              href="mailto:maulikafitriani@gmail.com"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-1 hover:border-[#EA4335] hover:bg-[#EA4335]/10 hover:text-[#EA4335] hover:shadow-glow"
              title="Email Me"
            >
              <SiGmail className="h-4.5 w-4.5 transition-transform group-hover:scale-110" />
            </a>
            <a
              href="https://www.linkedin.com/in/maulikafitriani"
              target="_blank"
              rel="noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-1 hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] hover:shadow-glow"
              title="LinkedIn"
            >
              <FaLinkedin className="h-4.5 w-4.5 transition-transform group-hover:scale-110" />
            </a>
            <a
              href="https://wa.me/6289517111527"
              target="_blank"
              rel="noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-1 hover:border-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366] hover:shadow-glow"
              title="Chat on WhatsApp"
            >
              <SiWhatsapp className="h-4.5 w-4.5 transition-transform group-hover:scale-110" />
            </a>
          </div>

          <div className="mx-auto mt-8 max-w-3xl animate-fade-up rounded-2xl border border-white/8 bg-ink-800/60 p-6 text-left backdrop-blur-sm sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent-soft">
                <FaLayerGroup className="h-4 w-4" />
              </span>
              <h3 className="font-display text-sm font-bold tracking-widest text-white uppercase">
                Professional Summary
              </h3>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-slate-400">
              <p>
                Information Systems Associate graduate and current online Bachelor's in Informatics
                student at Telkom University (GPA 3.80/4.00), combining over a year of corporate IT
                experience with a BNSP Junior Network Administrator certification. Experienced in
                leading the full Software Development Life Cycle (SDLC) as a System Analyst,
                Software Engineer, and Frontend Developer—from requirement gathering and process
                mapping using Agile/Waterfall to hands-on engineering with React.js, Next.js, and
                TypeScript.
              </p>
              <p>
                Proven track record in digitalizing enterprise supply chain and finance systems for
                major automotive suppliers while delivering responsive UI/UX architectures. Passionate
                about bridging business strategy with modern software development to build scalable,
                high-performance, and user-centric digital solutions.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {['React.js', 'Next.js', 'TypeScript', 'System Analysis', 'SDLC', 'Agile / Waterfall'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-semibold text-accent-light"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== EDUCATION ==================== */}
      <section id="education" className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {sectionHeader('01', 'Education', 'My academic journey and university projects')}

          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            {/* Education Photo Slider */}
            <div className="flex items-stretch justify-center">
              <div className="relative h-[380px] w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-glow sm:h-[400px]">
                <button
                  type="button"
                  className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-lg bg-ink-950/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-accent hover:text-[#fff]"
                  onClick={openImageModal}
                >
                  <FaMagnifyingGlass className="h-3 w-3" />
                  Click to enlarge
                </button>

                <img
                  src={educationPhotos[currentEduSlide]}
                  alt={`Education Photo ${currentEduSlide + 1}`}
                  className="h-full w-full cursor-zoom-in object-cover transition-transform duration-500 hover:scale-105"
                  onClick={openImageModal}
                />

                {educationPhotos.length > 1 && (
                  <>
                    <button
                      className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-[#fff] backdrop-blur-sm transition hover:bg-accent"
                      onClick={prevEduSlide}
                      aria-label="Previous Photo"
                    >
                      <FaChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      className="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-[#fff] backdrop-blur-sm transition hover:bg-accent"
                      onClick={nextEduSlide}
                      aria-label="Next Photo"
                    >
                      <FaChevronRight className="h-4 w-4" />
                    </button>
                  </>
                )}

                {educationPhotos.length > 1 && (
                  <span className="absolute right-3 bottom-3 rounded-full bg-black/60 px-3 py-1 font-mono text-xs font-semibold text-[#fff] backdrop-blur-sm">
                    {currentEduSlide + 1}/{educationPhotos.length}
                  </span>
                )}
              </div>
            </div>

            {/* Education Timeline */}
            <div className="space-y-5">
              {[
                {
                  degree: (
                    <>
                      <span className="text-white">Bachelor's Degree (Extension) in Informatics PJJ</span>{' '}
                      <span className="font-normal text-slate-400">(Online Learning)</span>
                    </>
                  ),
                  school: 'Telkom University',
                  location: 'Bandung, Indonesia',
                  date: 'Aug 2025 – Present',
                  current: true,
                },
                {
                  degree: (
                    <>
                      <span className="text-white">Associate Degree (A.Md. Kom.) in Information System</span>{' '}
                      <span className="font-normal text-slate-400">
                        | <strong className="font-semibold text-gold">GPA 3.80 / 4.00</strong>
                      </span>
                    </>
                  ),
                  school: 'Telkom University',
                  location: 'Bandung, Indonesia',
                  date: 'Aug 2022 - 2025',
                  current: false,
                },
              ].map((item) => (
                <div
                  key={item.date}
                  className="group relative rounded-2xl border border-white/8 bg-ink-800/60 p-6 transition-all duration-300 hover:border-accent/25 hover:bg-ink-800"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${item.current ? 'bg-accent text-white' : 'bg-accent/15 text-accent-soft'}`}>
                        <FaGraduationCap className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold text-white">{item.school}</h3>
                        <p className="flex items-center gap-1 text-xs text-slate-500">
                          <FaLocationDot className="h-3 w-3 text-coral" />
                          {item.location}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 font-mono text-xs font-semibold ${
                        item.current
                          ? 'border border-mint/30 bg-mint/10 text-mint'
                          : 'border border-accent/30 bg-accent/10 text-accent-light'
                      }`}
                    >
                      {item.current ? '●' : ''} {item.date}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">{item.degree}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Projects */}
          <div className="mt-16">
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent-soft">
                <FaLayerGroup className="h-4.5 w-4.5" />
              </span>
              <h3 className="font-display text-xl font-bold text-white sm:text-2xl">University Projects</h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {educationProjects.map((project) => (
                <div
                  key={project.title}
                  className="group flex flex-col rounded-2xl border border-white/8 bg-ink-800/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-glow"
                >
                  <span className="font-mono text-xs font-semibold tracking-widest text-accent-soft uppercase">
                    {project.date}
                  </span>
                  <h4 className="mt-2 font-display text-base font-bold text-white">{project.title}</h4>
                  <p className="mt-1 text-sm font-medium text-slate-400">{project.role}</p>
                  <ul className="mt-4 space-y-2">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2 text-xs leading-relaxed text-slate-500">
                        <FaCircleCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mint" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INTERNSHIPS ==================== */}
      <section id="internships" className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {sectionHeader('02', 'Internship Experience', 'Professional roles that shaped my career')}

          <div className="grid gap-6 md:grid-cols-3">
            {internshipData.map((internship) =>
              experienceCard(
                {
                  id: internship.id,
                  secondaryTitle: internship.company,
                  secondarySubtitle: internship.role,
                  date: internship.date,
                  location: internship.location,
                  image: internship.image,
                },
                () => setSelectedInternship(internship),
              ),
            )}
          </div>
        </div>
      </section>

      {/* ==================== ACADEMIC & PROJECT EXPERIENCE ==================== */}
      <section id="experience" className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {sectionHeader('03', 'Academic & Project Experience', 'Teaching, community, and hands-on roles')}

          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {academicProjectData.map((experience) =>
              experienceCard(
                {
                  id: experience.id,
                  secondaryTitle: experience.title,
                  secondarySubtitle: experience.subtitle,
                  date: experience.date,
                  location: experience.location,
                  image: experience.image,
                },
                () => setSelectedAcademicProject(experience),
              ),
            )}
          </div>
        </div>
      </section>

      {/* ==================== CERTIFICATES ==================== */}
      <section id="licenses" className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {sectionHeader('04', 'Certificates & Awards', 'Credentials from professional and academic institutions')}

          <div className="space-y-12">
            {/* Highlighted Certificates */}
            <div>
              <div className="mx-auto mb-6 grid max-w-3xl gap-6 sm:grid-cols-2">
                {certificateData.filter((certificate) => certificate.highlight).map((certificate) =>
                  certCard(certificate, true),
                )}
              </div>
            </div>

            {/* Basic Certificates */}
            <div>
              <div className="mb-6 flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                <span className="h-px w-12 bg-white/10" />
                Professional Certifications
                <span className="h-px w-12 bg-white/10" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {certificateData.filter((certificate) => !certificate.highlight).map((certificate) =>
                  certCard(certificate, false),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SKILLS ==================== */}
      <section id="skills" className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {sectionHeader('05', 'Technical & Soft Skills', 'Tools and abilities I bring to every project')}

          <div className="grid gap-6 md:grid-cols-2">
            {/* Languages */}
            <div className="rounded-2xl border border-white/8 bg-ink-800/60 p-6 transition-colors hover:border-accent/25">
              <h3 className="mb-5 flex items-center gap-2 font-display text-base font-bold text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent-soft">
                  <FaCircleCheck className="h-4 w-4" />
                </span>
                Languages
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {[
                  ['Indonesian', 'text-[#dc2626]'],
                  ['English', 'text-[#2563eb]'],
                ].map(([label, color]) => (
                  <div
                    key={label}
                    title={label}
                    className="group flex cursor-default flex-col items-center justify-center gap-2 rounded-xl border border-transparent p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:bg-ink-700/60 hover:shadow-glow"
                  >
                    <span className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 ${color}`}>
                      <FaCircleCheck className="h-5 w-5" />
                    </span>
                    <span className="w-full truncate text-center text-xs font-medium text-slate-400">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="rounded-2xl border border-white/8 bg-ink-800/60 p-6 transition-colors hover:border-accent/25">
              <h3 className="mb-5 flex items-center gap-2 font-display text-base font-bold text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent-soft">
                  <FaAward className="h-4 w-4" />
                </span>
                Soft Skills
              </h3>
              <div className="grid grid-cols-5 gap-4">
                {[
                  ['Leadership', 'text-gold'],
                  ['Communication', 'text-accent-soft'],
                  ['Collaboration', 'text-mint'],
                  ['Adaptability', 'text-coral'],
                  ['Problem Solving', 'text-purple-400'],
                ].map(([label, color]) => (
                  <div
                    key={label}
                    title={label}
                    className="group flex cursor-default flex-col items-center justify-center gap-2 rounded-xl border border-transparent p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:bg-ink-700/60 hover:shadow-glow"
                  >
                    <FaAward className={`h-8 w-8 ${color}`} />
                    <span className="w-full truncate text-center text-[0.65rem] font-medium text-slate-400">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mt-6 rounded-2xl border border-white/8 bg-ink-800/60 p-6 transition-colors hover:border-accent/25">
            <h3 className="mb-6 flex items-center gap-2 font-display text-base font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent-soft">
                <FaBriefcase className="h-4 w-4" />
              </span>
              Technical Skills
            </h3>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-10">
              {[
                ['Figma', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', 'UI/UX Design (Figma)'],
                ['HTML5', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', 'HTML5'],
                ['CSS3', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', 'CSS3'],
                ['JavaScript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 'JavaScript'],
                ['React.js', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 'React.js'],
                ['SQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', 'Databases (SQL)'],
                ['Python', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 'Python'],
                ['Analysis', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/labview/labview-original.svg', 'Business & System Analysis'],
                ['Diagrams', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg', 'Use Cases, ERDs & Activity Diagrams'],
                ['Design Thinking', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', 'Design Thinking'],
              ].map(([label, src, title]) => (
                <div
                  key={label}
                  title={title}
                  className="group flex cursor-default flex-col items-center justify-center gap-2 rounded-xl border border-transparent p-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:bg-ink-700/60 hover:shadow-glow"
                >
                  <img
                    src={src}
                    alt={label}
                    className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="w-full truncate text-center text-[0.65rem] font-medium text-slate-400">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MODALS ==================== */}
      {educationModal}
      {internshipModal}
      {academicModal}
      {certificateModal}

      {/* ==================== FOOTER ==================== */}
      <footer className="relative z-10 border-t border-white/5 bg-ink-950/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-purple-600 font-display text-sm font-extrabold text-[#fff]">
              MF
            </span>
            <div>
              <p className="font-display text-sm font-bold text-white">Maulika Fitriani</p>
              <p className="text-xs text-slate-500">Business & System Analyst | Frontend Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:maulikafitriani@gmail.com"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-[#EA4335] hover:text-[#EA4335]"
              title="Email"
            >
              <SiGmail className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/maulikafitriani"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-[#0A66C2] hover:text-[#0A66C2]"
              title="LinkedIn"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/6289517111527"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-[#25D366] hover:text-[#25D366]"
              title="WhatsApp"
            >
              <SiWhatsapp className="h-4 w-4" />
            </a>
          </div>

          <p className="font-mono text-xs text-slate-500">
            © {new Date().getFullYear()} Maulika Fitriani. Powered by React + Vite.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App