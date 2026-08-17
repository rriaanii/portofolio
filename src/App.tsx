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
import bnspCertificate from './assets/sertifikat/bnsp.png'
import tenarisCertificate from './assets/sertifikat/tenaris.png'
import aiCertificate from './assets/Dicoding/2024-2027/Belajar_Dasar_AI.pdf'
import dataScienceCertificate from './assets/Dicoding/2024-2027/Belajar_Dasar_Data_Science.pdf'
import projectManagementCertificate from './assets/Dicoding/2024-2027/Belajar_Dasar_Manajemen_Proyek.pdf'
import javascriptCertificate from './assets/Dicoding/2024-2027/Belajar_Dasar_Pemrograman_JavaScript.pdf'
import webCertificate from './assets/Dicoding/2024-2027/Belajar_Dasar_Pemrograman_Web.pdf'
import sqlCertificate from './assets/Dicoding/2024-2027/Belajar_Dasar_Structured_Query_Language.pdf'
import pythonProceduralCertificate from './assets/Dicoding/2024-2027/Belajar_Pemrograman_Prosedural_dengan_Python.pdf'
import pythonBeginnerCertificate from './assets/Dicoding/2024-2027/Memulai_Pemrograman_dengan_Python.pdf'
import cloudCertificate from './assets/Dicoding/2024-2027/Cloud_Practitioner_Essentials.pdf'
import fabricCertificate from './assets/Dicoding/2026-2029/Belajar_Penerapan_Data_Science_dengan_Microsoft_Fabric.pdf'
import azureCertificate from './assets/Dicoding/2026-2029/Membangun_Aplikasi_Gen_AI_dengan Microsoft_Azure.pdf'
import kiroCertificate from './assets/Dicoding/2026-2029/Spec_Driven_Development_dengan_Kiro.pdf'
import edu1 from './assets/education/1.jpg'
import edu2 from './assets/education/2.jpg'
import edu5 from './assets/education/5.jpg'
import sanohCover from './assets/sanoh/cover.jpg'
import sanoh1 from './assets/sanoh/1.jpg'
import sanoh3 from './assets/sanoh/3.jpg'
import sanoh4 from './assets/sanoh/4.jpg'
import sanoh6 from './assets/sanoh/6.jpg'
import sanoh9 from './assets/sanoh/9.jpg'
import sanoh11 from './assets/sanoh/11.jpg'
import sanohFinanceInvoicePdf from './assets/sanoh/Finance_Invoice.pdf'
import sanohActivityInternPdf from './assets/sanoh/Activity_intern.pdf'
import gopayCover from './assets/gopay/cover2.png'
import gopayInternPdf from './assets/gopay/Gopay_Ambassador23.pdf'
import bankCover from './assets/bankbanten/cover3.png'
import bankInternPdf from './assets/bankbanten/Bank_Banten_PKL.pdf'
import asprakCover from './assets/asprak/cover4.png'
import asprakPdf from './assets/asprak/Asprak_Arsijarkom.pdf'
import abdimasCover from './assets/abdimas/cover5.png'
import abdimasPdf from './assets/abdimas/Pengabdian_Masyarakat.pdf'

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

  const educationPhotos = [edu1, edu2, edu5]
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

  const parseCertificateDate = (dateValue: string) => {
    const englishMonthMap: Record<string, number> = {
      January: 0,
      February: 1,
      March: 2,
      April: 3,
      May: 4,
      June: 5,
      July: 6,
      August: 7,
      September: 8,
      October: 9,
      November: 10,
      December: 11,
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    }

    const indonesianMonthMap: Record<string, number> = {
      Januari: 0,
      Februari: 1,
      Maret: 2,
      Mei: 4,
      Juni: 5,
      Juli: 6,
      Agustus: 7,
      Oktober: 9,
      November: 10,
      Desember: 11,
    }

    const normalized = dateValue.trim().replace(/\s+/g, ' ')

    const resolveMonthIndex = (monthName: string) => {
      const lowercaseName = monthName.trim()
      return englishMonthMap[lowercaseName] ?? indonesianMonthMap[lowercaseName]
    }

    const monthYearMatch = normalized.match(/^(\w+)\s+(\d{4})$/)
    if (monthYearMatch) {
      const [, monthName, year] = monthYearMatch
      const monthIndex = resolveMonthIndex(monthName)
      if (monthIndex !== undefined) {
        return new Date(Number(year), monthIndex, 1).getTime()
      }
    }

    const dayMonthYearMatch = normalized.match(/^(\d{1,2})\s+(\w+)\s+(\d{4})$/)
    if (dayMonthYearMatch) {
      const [, day, monthName, year] = dayMonthYearMatch
      const monthIndex = resolveMonthIndex(monthName)
      if (monthIndex !== undefined) {
        return new Date(Number(year), monthIndex, Number(day)).getTime()
      }
    }

    return 0
  }

  const certificateData = [
    {
      id: 'bnsp',
      title: 'BNSP Certification | Junior Network Administrator',
      issuer: 'Computer Professional Certification Institution',
      date: 'March 2021',
      highlight: true,
      description:
        'Completed certification in network and infrastructure competencies, including network design and configuration.',
      image: bnspCertificate,
    },
    {
      id: 'merit',
      title: 'Merit Award Scholarship',
      issuer: 'Tenaris PT. Seamless Pipe Indonesia Jaya',
      date: 'March 2021',
      highlight: true,
      description: 'Received full Merit Award for outstanding and consistent academic excellence.',
      image: tenarisCertificate,
    },
    {
      id: 'web',
      title: 'Basic Web Programming',
      issuer: 'Dicoding Indonesia',
      date: '05 February 2024',
      highlight: false,
      description:
        'Developed responsive web interfaces using semantic HTML, CSS layout systems, and browser APIs.',
      pdf: webCertificate,
    },
    {
      id: 'sql',
      title: 'Basic Structured Query Language (SQL)',
      issuer: 'Dicoding Indonesia',
      date: '08 February 2024',
      highlight: false,
      description:
        'Learned to manage and query relational databases using basic and advanced SQL commands.',
      pdf: sqlCertificate,
    },
    {
      id: 'python-procedural',
      title: 'Procedural Programming with Python',
      issuer: 'Dicoding Indonesia',
      date: '10 February 2024',
      highlight: false,
      description:
        'Learned Python procedural programming concepts including functions, loops, conditions, and structured logic.',
      pdf: pythonProceduralCertificate,
    },
    {
      id: 'python-beginner',
      title: 'Getting Started with Python Programming',
      issuer: 'Dicoding Indonesia',
      date: '09 February 2024',
      highlight: false,
      description:
        'Started with Python fundamentals such as variables, control flow, and basic coding problem solving.',
      pdf: pythonBeginnerCertificate,
    },
    {
      id: 'ai',
      title: 'Introduction to AI',
      issuer: 'Dicoding Indonesia',
      date: '03 October 2024',
      highlight: false,
      description:
        'Learned the fundamentals of artificial intelligence, practical AI workflows, and responsible AI implementation.',
      pdf: aiCertificate,
    },
    {
      id: 'data-science',
      title: 'Introduction to Data Science',
      issuer: 'Dicoding Indonesia',
      date: '04 February 2024',
      highlight: false,
      description:
        'Explored the core principles of data science, analysis techniques, and insight-driven decision making.',
      pdf: dataScienceCertificate,
    },
    {
      id: 'project-management',
      title: 'Introduction to Project Management',
      issuer: 'Dicoding Indonesia',
      date: '18 January 2024',
      highlight: false,
      description:
        'Studied project lifecycle planning, risk handling, and stakeholder coordination for effective delivery.',
      pdf: projectManagementCertificate,
    },
    {
      id: 'javascript',
      title: 'Basic JavaScript Programming',
      issuer: 'Dicoding Indonesia',
      date: '06 February 2024',
      highlight: false,
      description:
        'Built stronger JavaScript foundations, from syntax and logic to functional programming basics.',
      pdf: javascriptCertificate,
    },
    {
      id: 'aws-cloud',
      title: 'Cloud Practitioner Essentials',
      issuer: 'Amazon Web Services Training',
      date: '04 October 2024',
      highlight: false,
      description:
        'Covered AWS core cloud concepts, shared responsibility model, and foundational cloud architecture practices.',
      pdf: cloudCertificate,
    },
    {
      id: 'fabric',
      title: 'Applied Data Science with Microsoft Fabric',
      issuer: 'Dicoding Indonesia',
      date: '16 July 2026',
      highlight: false,
      description:
        'Applied data science workflows using Microsoft Fabric for analysis, data pipelines, and end-to-end solution design.',
      pdf: fabricCertificate,
    },
    {
      id: 'azure-gen-ai',
      title: 'Building Gen AI Applications with Microsoft Azure',
      issuer: 'Dicoding Indonesia',
      date: '16 July 2026',
      highlight: false,
      description:
        'Designed and deployed generative AI application patterns using Azure AI services and cloud-native principles.',
      pdf: azureCertificate,
    },
    {
      id: 'kiro',
      title: 'Spec-Driven Development with Kiro',
      issuer: 'Dicoding Indonesia',
      date: '15 July 2026',
      highlight: false,
      description:
        'Explored spec-driven workflows for building cleaner, more consistent software requirements and system outputs.',
      pdf: kiroCertificate,
    },
  ]

  const sortedCertificateData = [...certificateData].sort(
    (a, b) => parseCertificateDate(b.date) - parseCertificateDate(a.date),
  )

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
      image: sanohCover,
      photos: [
        sanoh1,
        sanoh3,
        sanoh4,
        sanoh6,
        sanoh9,
        sanoh11,
      ],
      details: [
        'Finance Invoice Management Systems: Collaborated within the BA and Frontend teams to digitize and streamline corporate finance invoicing workflows.',
        'Visitor Management Systems: Engineered intuitive frontend interfaces tailored for security, administrators, and visitors using tablet devices. Optimized check-in workflows for dynamic visit categories including Meetings, Contractors, and Warehouse Deliveries.',
        'Supply Chain Management Systems: Analyzed business requirements across divisions to model system processes via Use Cases, Activity Diagrams, ERDs, and designed & coded print-ready, responsive HTML/CSS layouts for critical SCM documents (PO, DN, and Kanban Labels).',
      ],
    },
    {
      id: 'bank-banten',
      company: 'PT Bank Pembangunan Daerah Banten Tbk',
      role: 'Loan Assistant Intern',
      date: 'Oct 2019 - Dec 2019',
      location: 'Banten, Indonesia',
      image: bankCover,
      photos: [
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
      ],
      details: [
        'Prepared account journals, deposit bills, and savings book account stamps for credit reviews.',
        'Inputted cooperative credit file data systematically into the corporate bank system.',
      ],
      document: {
        title: 'Credit Review & Administration Documentation',
        summary:
          'Summary of daily operational tasks and administrative support activities during the credit review process.',
        pdf: bankInternPdf,
      },
    },
    {
      id: 'gopay',
      company: 'GoPay Indonesia',
      role: "Student Ambassador '23 - Content Creator",
      date: 'Sept 2023 - Dec 2023',
      location: 'Remote / Campus Engagement',
      image: gopayCover,
      details: [
        'Marketed the GoPay brand by increasing awareness of GoPay facilities/services among student peers.',
        'Developed a GoPay Strategy by helping to design and develop GoPay marketing plans based on an analysis of needs and constraints experienced by students.',
      ],
      document: {
        title: 'GoPay Student Ambassador Strategy',
        summary:
          'Campaign material and planning document for digital engagement initiatives and content strategy execution.',
        pdf: gopayInternPdf,
      },
    },
  ]

  const [selectedInternship, setSelectedInternship] = useState<(typeof internshipData)[number] | null>(null)

  const sanohDocumentation = [
    {
      title: 'All Project Report',
      summary:
        'Digitized and streamlined workflows to improve process clarity and operational efficiency.',
      pdf: sanohFinanceInvoicePdf,
      accent: 'bg-accent/15 text-accent-light',
    },
    {
      title: 'Intern Activity Report',
      summary:
        'Documented internship activities, responsibilities, and daily project involvement throughout the program.',
      pdf: sanohActivityInternPdf,
      accent: 'bg-coral/15 text-coral',
    },
  ]

  const academicProjectData = [
    {
      id: 'teaching-assistant',
      title: 'Teaching Assistant Network Architecture',
      subtitle: 'Class Practice Assistant Coordinator',
      date: 'March 2023 - May 2024',
      location: 'FIT, Telkom University',
      image: asprakCover,
      details: [
        'Assisted lecturers in class practicum environments.',
        'Explained complex technical materials and helped students understand network architecture concepts thoroughly.',
      ],
      document: {
        title: 'Teaching Assistant Documentation',
        summary:
          'Reference document for practicum support, technical explanations, and class coordination activities.',
        pdf: asprakPdf,
      },
    },
    {
      id: 'community-service',
      title: 'Web User Interface Developer',
      subtitle: 'Tourism Promotion Website Design Team',
      date: 'Nov 2023 - Dec 2023',
      location: 'Keseneng Village, Semarang',
      image: abdimasCover,
      details: [
        'Researched and analyzed the target audience and tourism potential of Keseneng Village, Semarang.',
        'Designed a user-friendly and informative web layout to boost local village tourism.',
      ],
      document: {
        title: 'Village Tourism Promotion Website Documentation',
        summary:
          'Design and concept documentation for a tourism promotion website created for the local community initiative.',
        pdf: abdimasPdf,
      },
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

  const internshipModal = selectedInternship ? (() => {
    const galleryPhotos = selectedInternship.photos ?? []

    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in"
        onClick={() => setSelectedInternship(null)}
      >
        <div
          className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-glow-lg animate-scale-in"
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

            <ul className="mt-8 space-y-3">
              {selectedInternship.details.map((detail) => (
                <li key={detail} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                  <FaCircleCheck className="mt-1 h-4 w-4 shrink-0 text-mint" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            {selectedInternship.id === 'sanoh' ? (
              <div className="mt-8">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="font-mono text-xs font-semibold tracking-widest text-slate-500 uppercase">
                    Documentation
                  </p>
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-2 py-1 text-[0.6rem] font-semibold tracking-[0.18em] text-accent-light uppercase">
                    PDF
                  </span>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  {sanohDocumentation.map((item) => (
                    <div key={item.title} className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800/80">
                      <div className="flex items-center justify-between border-b border-white/10 bg-ink-900/70 px-4 py-3">
                        <p className="font-mono text-[0.6rem] font-semibold tracking-[0.18em] text-accent-soft uppercase">
                          Document
                        </p>
                        <span
                          className={`inline-flex rounded-full px-2 py-1 font-mono text-[0.55rem] font-semibold tracking-[0.14em] uppercase ${item.accent}`}
                        >
                          PDF
                        </span>
                      </div>

                      <iframe src={item.pdf} title={item.title} className="h-72 w-full border-0 bg-white" />

                      <div className="p-4">
                        <h4 className="font-display text-lg font-bold text-white">{item.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.summary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : selectedInternship.document ? (
              <div className="mt-8">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="font-mono text-xs font-semibold tracking-widest text-slate-500 uppercase">
                    Documentation
                  </p>
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-2 py-1 text-[0.6rem] font-semibold tracking-[0.18em] text-accent-light uppercase">
                    PDF
                  </span>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800/80">
                  <div className="flex items-center justify-between border-b border-white/10 bg-ink-900/70 px-4 py-3">
                    <p className="font-mono text-[0.6rem] font-semibold tracking-[0.18em] text-accent-soft uppercase">
                      Project document
                    </p>
                  </div>

                  <iframe
                    src={selectedInternship.document.pdf}
                    title={selectedInternship.document.title}
                    className="h-64 w-full border-0 bg-white sm:h-80"
                  />

                  <div className="p-4">
                    <h4 className="font-display text-lg font-bold text-white">
                      {selectedInternship.document.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {selectedInternship.document.summary}
                    </p>
                  </div>
                </div>
              </div>
            ) : galleryPhotos.length > 0 ? (
              <div className="mt-8">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="font-mono text-xs font-semibold tracking-widest text-slate-500 uppercase">
                    Documentation
                  </p>
                </div>

                <div className="overflow-x-auto pb-2">
                  <div className="flex min-w-max gap-4">
                    {galleryPhotos.map((photo, index) => (
                      <div
                        key={`${selectedInternship.id}-${index}`}
                        className="h-40 w-64 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-[#edf2f6] shadow-inner sm:h-48 sm:w-72"
                      >
                        <img
                          src={photo}
                          alt={`${selectedInternship.company} documentation ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  })() : null

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

          {selectedAcademicProject.document ? (
            <div className="mt-8">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="font-mono text-xs font-semibold tracking-widest text-slate-500 uppercase">
                  Documentation
                </p>
                <span className="rounded-full border border-accent/20 bg-accent/10 px-2 py-1 text-[0.6rem] font-semibold tracking-[0.18em] text-accent-light uppercase">
                  PDF
                </span>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800/80">
                <div className="flex items-center justify-between border-b border-white/10 bg-ink-900/70 px-4 py-3">
                  <p className="font-mono text-[0.6rem] font-semibold tracking-[0.18em] text-accent-soft uppercase">
                    Project document
                  </p>
                </div>

                <iframe
                  src={selectedAcademicProject.document.pdf}
                  title={selectedAcademicProject.document.title}
                  className="h-64 w-full border-0 bg-white sm:h-80"
                />

                <div className="p-4">
                  <h4 className="font-display text-lg font-bold text-white">
                    {selectedAcademicProject.document.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {selectedAcademicProject.document.summary}
                  </p>
                </div>
              </div>
            </div>
          ) : null}
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
        className="relative w-full max-w-5xl animate-scale-in rounded-2xl border border-white/10 bg-ink-900 p-3 shadow-glow-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="absolute -top-3 -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-ink-800 text-slate-300 transition hover:bg-accent hover:text-[#fff]"
          onClick={() => setSelectedCertificate(null)}
          aria-label="Close certificate"
        >
          <FaXmark className="h-5 w-5" />
        </button>

        {selectedCertificate.pdf ? (
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
            <iframe
              src={selectedCertificate.pdf}
              title={selectedCertificate.title}
              className="h-[75vh] w-full bg-white"
              loading="lazy"
            />
          </div>
        ) : (
          <img
            src={selectedCertificate.image}
            alt={selectedCertificate.title}
            className="max-h-[75vh] w-full rounded-xl object-contain"
          />
        )}

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
          {certificate.pdf ? (
            <div className="relative h-48 w-full overflow-hidden bg-[#0f172a]">
              <iframe
                src={certificate.pdf}
                title={certificate.title}
                className="pointer-events-none h-full w-full"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 rounded-full border border-white/10 bg-ink-950/80 px-2 py-1 font-mono text-[0.6rem] font-semibold tracking-[0.18em] text-accent-light uppercase backdrop-blur-sm">
                PDF
              </span>
            </div>
          ) : (
            <img
              src={certificate.image}
              alt={certificate.title}
              className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </button>
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
                className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
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
              {['React.js', 'Next.js', 'TypeScript', 'System Analysis', 'SDLC', 'Agile / Waterfall', 'Digitalizing'].map((tech) => (
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
                {sortedCertificateData.filter((certificate) => certificate.highlight).map((certificate) =>
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
                {sortedCertificateData.filter((certificate) => !certificate.highlight).map((certificate) =>
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