import { useState, type MouseEvent } from 'react'
import './App.css'
import myPicture from './assets/picturefix.png'

function App() {
  const [profileImg] = useState<string>(myPicture)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

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
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'merit',
      title: 'Merit Award Scholarship',
      issuer: 'Tenaris PT. Seamless Pipe Indonesia Jaya',
      date: 'March 2021',
      highlight: true,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'project-management',
      title: 'Project Management',
      issuer: 'Dicoding Indonesia X Google Developers',
      date: '18 Jan 2024',
      highlight: false,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'data-science',
      title: 'Data Science Competency',
      issuer: 'Dicoding Indonesia X Google Developers',
      date: '4 Feb 2024',
      highlight: false,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'web-layouts',
      title: 'Web Programming Layouts',
      issuer: 'Dicoding X DBS Foundation Coding Camp',
      date: '5 Feb 2024',
      highlight: false,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'sql',
      title: 'Structured Query Language (SQL)',
      issuer: 'Dicoding Indonesia X Google Developers',
      date: '8 Feb 2024',
      highlight: false,
      image: 'https://images.unsplash.com/photo-1558494949cc5c4f48a4d0d9c9b8c95eb?auto=format&fit=crop&w=900&q=80',
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
      role: 'Student Ambassador \'23 - Content Creator',
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

  return (
    <div className="portfolio-container">
      <nav className="navbar">
        <div className="nav-logo">MF.</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#internships">Internships</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#licenses">Certificates</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </nav>

      <section id="about" className="section-padding">
        <div className="hero-content">
          <div className="profile-image-container">
            <img src={profileImg} className="profile-avatar" alt="Maulika Fitriani Profile" />
          </div>

          <h1 className="name-title">MAULIKA FITRIANI</h1>
          <p className="subtitle">Business & System Analyst | Frontend Developer</p>
          <p className="location">+62 895 1711 1527 | Bandung, West Java</p>

          <div className="contact-buttons">
            <a href="mailto:maulikafitriani@gmail.com" className="btn-contact-icon btn-gmail" title="Email Me">
              <img src="https://unpkg.com/simple-icons@v13/icons/gmail.svg" alt="Gmail" width="20" height="20" style={{ filter: 'invert(31%) sepia(94%) saturate(4505%) hue-rotate(350deg) brightness(95%) contrast(93%)' }} />
            </a>
            <a href="https://www.linkedin.com/in/maulikafitriani" target="_blank" rel="noreferrer" className="btn-contact-icon btn-linkedin" title="LinkedIn">
              <img src="https://unpkg.com/simple-icons@v13/icons/linkedin.svg" alt="LinkedIn" width="20" height="20" style={{ filter: 'invert(29%) sepia(93%) saturate(1512%) hue-rotate(178deg) brightness(91%) contrast(101%)' }} />
            </a>
            <a href="https://wa.me/6289517111527" target="_blank" rel="noreferrer" className="btn-contact-icon btn-whatsapp" title="Chat on WhatsApp">
              <img src="https://unpkg.com/simple-icons@v13/icons/whatsapp.svg" alt="WhatsApp" width="20" height="20" style={{ filter: 'invert(64%) sepia(50%) saturate(4649%) hue-rotate(113deg) brightness(97%) contrast(82%)' }} />
            </a>
          </div>

          <div className="summary-box">
            <p>
              Information Systems Associate graduate and current online Bachelor’s in Informatics student at Telkom University (GPA 3.80/4.00), combining over a year of corporate IT experience with a BNSP Junior Network Administrator certification. Experienced in leading the full Software Development Life Cycle (SDLC) as a System Analyst, Software Engineer, and Frontend Developer—from requirement gathering and process mapping using Agile/Waterfall to hands-on engineering with React.js, Next.js, and TypeScript.
            </p>
            <p>
              Proven track record in digitalizing enterprise supply chain and finance systems for major automotive suppliers while delivering responsive UI/UX architectures. Passionate about bridging business strategy with modern software development to build scalable, high-performance, and user-centric digital solutions.
            </p>
          </div>
        </div>
      </section>

      {isImageModalOpen && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(event) => event.stopPropagation()}>
            <button className="image-modal-close" onClick={closeImageModal} aria-label="Close image">×</button>
            <img src={educationPhotos[currentEduSlide]} alt={`Education Photo ${currentEduSlide + 1}`} className="image-modal-image" />
          </div>
        </div>
      )}

      <section id="education" className="section-padding">
        <h2 className="section-title">Education</h2>

        <div className="education-container">
          <div className="edu-photo-wrapper">
            <div className="edu-slider-container">
              <div className="slider-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <span>Click to enlarge</span>
              </div>

              <img src={educationPhotos[currentEduSlide]} alt={`Education Photo ${currentEduSlide + 1}`} className="edu-photo" onClick={openImageModal} />

              {educationPhotos.length > 1 && (
                <>
                  <button className="slider-btn prev-btn" onClick={prevEduSlide} aria-label="Previous Photo">&#10094;</button>
                  <button className="slider-btn next-btn" onClick={nextEduSlide} aria-label="Next Photo">&#10095;</button>
                </>
              )}

              {educationPhotos.length > 1 && (
                <div className="slider-counter">{currentEduSlide + 1}/{educationPhotos.length}</div>
              )}
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="time-header">
                <h3>Telkom University <span className="location-tag">| Bandung, Indonesia</span></h3>
                <span className="date-tag">Aug 2025 – Present</span>
              </div>
              <p className="degree">• Bachelor’s Degree (Extension) in Informatics PJJ (Online Learning)</p>
            </div>

            <div className="timeline-item">
              <div className="time-header">
                <h3>Telkom University <span className="location-tag">| Bandung, Indonesia</span></h3>
                <span className="date-tag">Aug 2022 - 2025</span>
              </div>
              <p className="degree">• Associate Degree (A.Md. Kom.) in Information System | <strong>GPA 3.80 / 4.00</strong></p>
            </div>
          </div>
        </div>

        <div className="education-projects-section">
          <h2 className="subsection-title">Projects</h2>
          <div className="project-cards-grid">
            <div className="project-card">
              <span className="project-date">Feb 2024 - June 2024</span>
              <h3>Mobile-based Scholarship Application</h3>
              <p className="project-role">Programmer Fullstack Developer & Quality Assurance</p>
              <ul className="bullet-points">
                <li><p>Developed front-end using Flutter and Back-end using PHP.</p></li>
                <li>Collaborated with designers and developers</li>
              </ul>
            </div>

            <div className="project-card">
              <span className="project-date">Oct 2023 - Dec 2023</span>
              <h3>SatuSisi Coffee Web Application</h3>
              <p className="project-role">Programmer Fullstack Developer & System Analyst</p>
              <ul className="bullet-points">
                <li>Analyzted business needs, developed user-friendly website</li>
                <li>Built front-end with PHP and Back-end with HTML CSS</li>
              </ul>
            </div>

            <div className="project-card">
              <span className="project-date">Feb 2023 - June 2023</span>
              <h3>Web-based Cryptocurrency Application</h3>
              <p className="project-role">Programmer Fullstack Developer</p>
              <ul className="bullet-points">
                <li>Created application using HTML CSS and JavaScript with RESTAPIs integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="internships" className="section-padding">
        <h2 className="section-title">Internship Experience</h2>

        <div className="internship-grid">
          {internshipData.map((internship) => (
            <button
              key={internship.id}
              type="button"
              className="internship-card"
              onClick={() => setSelectedInternship(internship)}
            >
              <div className="internship-card-visual">
                <img src={internship.image} alt={internship.company} className="internship-card-photo" />
              </div>

              <div className="internship-card-body">
                <span className="internship-card-date">{internship.date}</span>
                <h3>{internship.company}</h3>
                <p className="internship-card-role">{internship.role}</p>
                <span className="internship-card-location">{internship.location}</span>
              </div>

              <span className="internship-card-hint">Click here</span>
            </button>
          ))}
        </div>
      </section>

      {selectedInternship && (
        <div className="internship-modal-overlay" onClick={() => setSelectedInternship(null)}>
          <div className="internship-modal-content" onClick={(event) => event.stopPropagation()}>
            <button className="internship-modal-close" onClick={() => setSelectedInternship(null)} aria-label="Close internship detail">×</button>

            <div className="internship-modal-visual">
              <img src={selectedInternship.image} alt={selectedInternship.company} className="internship-modal-image" />
            </div>

            <div className="internship-modal-text">
              <p className="internship-modal-label">Internship Experience</p>
              <h3>{selectedInternship.company}</h3>
              <p className="internship-modal-role">{selectedInternship.role}</p>
              <div className="internship-modal-meta">
                <span>{selectedInternship.date}</span>
                <span>{selectedInternship.location}</span>
              </div>

              <ul className="internship-detail-list">
                {selectedInternship.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <section id="experience" className="section-padding">
        <h2 className="section-title">Academic & Project Experience</h2>

        <div className="academic-project-grid">
          {academicProjectData.map((experience) => (
            <button
              key={experience.id}
              type="button"
              className="internship-card"
              onClick={() => setSelectedAcademicProject(experience)}
            >
              <div className="internship-card-visual">
                <img src={experience.image} alt={experience.title} className="internship-card-photo" />
              </div>

              <div className="internship-card-body">
                <span className="internship-card-date">{experience.date}</span>
                <h3>{experience.title}</h3>
                <p className="internship-card-role">{experience.subtitle}</p>
                <span className="internship-card-location">{experience.location}</span>
              </div>

              <span className="internship-card-hint">Click here</span>
            </button>
          ))}
        </div>
      </section>

      {selectedAcademicProject && (
        <div className="internship-modal-overlay" onClick={() => setSelectedAcademicProject(null)}>
          <div className="internship-modal-content" onClick={(event) => event.stopPropagation()}>
            <button className="internship-modal-close" onClick={() => setSelectedAcademicProject(null)} aria-label="Close academic experience detail">×</button>

            <div className="internship-modal-visual">
              <img src={selectedAcademicProject.image} alt={selectedAcademicProject.title} className="internship-modal-image" />
            </div>

            <div className="internship-modal-text">
              <p className="internship-modal-label">Academic & Project Experience</p>
              <h3>{selectedAcademicProject.title}</h3>
              <p className="internship-modal-role">{selectedAcademicProject.subtitle}</p>
              <div className="internship-modal-meta">
                <span>{selectedAcademicProject.date}</span>
                <span>{selectedAcademicProject.location}</span>
              </div>

              <ul className="internship-detail-list">
                {selectedAcademicProject.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <section id="licenses" className="section-padding">
        <h2 className="section-title">Certificates & Awards</h2>

        <div className="certificate-groups">
          <div className="certificate-category">
            <div className="certificates-grid highlight-grid">
              {certificateData.filter((certificate) => certificate.highlight).map((certificate) => (
                <article key={certificate.id} className="cert-card bg-highlight">
                  <div className="cert-card-visual">
                    <button
                      type="button"
                      className="cert-photo-button"
                      onClick={() => setSelectedCertificate(certificate)}
                      aria-label={`View ${certificate.title}`}
                    >
                      <img src={certificate.image} alt={certificate.title} className="cert-photo" />
                    </button>
                    <button type="button" className="cert-nav cert-nav-left" aria-label="Previous certificate">‹</button>
                    <button type="button" className="cert-nav cert-nav-right" aria-label="Next certificate">›</button>
                    <span className="cert-card-counter">3/3</span>
                  </div>
                  <div className="cert-card-body">
                    <span className="cert-date">{certificate.date}</span>
                    <h3>{certificate.title}</h3>
                    <p className="issuer">{certificate.issuer}</p>
                    <p className="desc">
                      {certificate.id === 'bnsp'
                        ? 'Completed certification in network and infrastructure competencies, including network design and configuration.'
                        : 'Received full Merit Award for outstanding and consistent academic excellence.'}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="certificate-category">
            <div className="certificates-grid basic-grid">
              {certificateData.filter((certificate) => !certificate.highlight).map((certificate) => (
                <article key={certificate.id} className="cert-card">
                  <div className="cert-card-visual">
                    <button
                      type="button"
                      className="cert-photo-button"
                      onClick={() => setSelectedCertificate(certificate)}
                      aria-label={`View ${certificate.title}`}
                    >
                      <img src={certificate.image} alt={certificate.title} className="cert-photo" />
                    </button>
                    <button type="button" className="cert-nav cert-nav-left" aria-label="Previous certificate">‹</button>
                    <button type="button" className="cert-nav cert-nav-right" aria-label="Next certificate">›</button>
                    <span className="cert-card-counter">3/3</span>
                  </div>
                  <div className="cert-card-body">
                    <span className="cert-date">{certificate.date}</span>
                    <h3>{certificate.title}</h3>
                    <p className="issuer">{certificate.issuer}</p>
                    <p className="desc">
                      {certificate.id === 'project-management' && 'Learned project management fundamentals, including cycles, methodology, and organizational structures.'}
                      {certificate.id === 'data-science' && 'Studied the basics of data science, data analysis, machine learning, and essential data tools.'}
                      {certificate.id === 'web-layouts' && 'Created final assignments applying semantic HTML techniques and highly responsive web layouts using CSS.'}
                      {certificate.id === 'sql' && 'Learned to manage and query relational databases using basic and advanced SQL commands.'}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-padding">
        <h2 className="section-title">Technical & Soft Skills</h2>

        <div className="skills-container">
          <div className="skills-group">
            <h3>Languages</h3>
            <div className="skills-icons-grid">
              <div className="skill-icon-item" title="Indonesian (Native)" style={{ border: '1px solid transparent' }}>
                <img src="https://unpkg.com/@fortawesome/fontawesome-free@6.4.0/svgs/solid/comment-medical.svg" alt="Indonesian" style={{ filter: 'invert(40%) sepia(10%) saturate(1000%) hue-rotate(320deg)' }} />
                <span>Indonesian</span>
              </div>
              <div className="skill-icon-item" title="English (Intermediate)" style={{ border: '1px solid transparent' }}>
                <img src="https://unpkg.com/@fortawesome/fontawesome-free@6.4.0/svgs/solid/earth-americas.svg" alt="English" style={{ filter: 'invert(40%) sepia(10%) saturate(1000%) hue-rotate(320deg)' }} />
                <span>English</span>
              </div>
            </div>
          </div>

          <div className="skills-group">
            <h3>Technical Skills</h3>
            <div className="skills-icons-grid">
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
                <div key={label} className="skill-icon-item" title={title} style={{ border: '1px solid transparent' }}>
                  <img src={src} alt={label} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-group">
            <h3>Soft Skills</h3>
            <div className="skills-icons-grid">
              {[
                ['Leadership', 'https://unpkg.com/@fortawesome/fontawesome-free@6.4.0/svgs/solid/crown.svg', 'Leadership'],
                ['Communication', 'https://unpkg.com/@fortawesome/fontawesome-free@6.4.0/svgs/solid/comments.svg', 'Strategic Communication'],
                ['Collaboration', 'https://unpkg.com/@fortawesome/fontawesome-free@6.4.0/svgs/solid/users-gear.svg', 'Cross-functional Collaboration'],
                ['Adaptability', 'https://unpkg.com/@fortawesome/fontawesome-free@6.4.0/svgs/solid/arrows-spin.svg', 'Adaptability'],
                ['Problem Solving', 'https://unpkg.com/@fortawesome/fontawesome-free@6.4.0/svgs/solid/lightbulb.svg', 'Problem Solving'],
              ].map(([label, src, title]) => (
                <div key={label} className="skill-icon-item" title={title} style={{ border: '1px solid transparent' }}>
                  <img src={src} alt={label} style={{ filter: 'invert(40%) sepia(10%) saturate(1000%) hue-rotate(320deg)' }} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedCertificate && (
        <div className="image-modal-overlay" onClick={() => setSelectedCertificate(null)}>
          <div className="image-modal-content cert-modal-content" onClick={(event) => event.stopPropagation()}>
            <button className="image-modal-close" onClick={() => setSelectedCertificate(null)} aria-label="Close certificate">×</button>
            <img src={selectedCertificate.image} alt={selectedCertificate.title} className="image-modal-image" />
            <div className="cert-modal-caption">
              <h3>{selectedCertificate.title}</h3>
              <p>{selectedCertificate.issuer}</p>
            </div>
          </div>
        </div>
      )}

      <footer>
        <p>© {new Date().getFullYear()} Maulika Fitriani. Powered by React + Vite.</p>
      </footer>
    </div>
  )
}

export default App
