import { useState, useRef } from 'react'
import './App.css'
import myPicture from './assets/picture.png' // Impor foto aslimu dengan aman

function App() {
  const [copied, setCopied] = useState(false)
  const [profileImg, setProfileImg] = useState<string>(myPicture)
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+6289517111527")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Fungsi drop gambar interaktif jika ingin ganti gambar lewat browser langsung
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragOver(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (event) => {
          if (event.target?.result) {
            setProfileImg(event.target.result as string)
          }
        }
        reader.readAsDataURL(file)
      }
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  const handleAvatarClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileImg(event.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="portfolio-container">
      {/* Navigation Bar */}
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

      {/* Hero / About Section */}
      <section id="about" className="section-padding">
        <div className="hero-content">
          
          {/* Bulatan Avatar Utama */}
          <div 
            className={`profile-image-container ${isDragOver ? 'drag-active' : ''}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={handleAvatarClick}
            title="Klik atau seret (drop) foto kamu di sini untuk mengganti gambar"
          >
            <img 
              src={profileImg} 
              className="profile-avatar" 
              alt="Maulika Fitriani Profile" 
            />
            <div className="avatar-overlay">
              <span>Ganti Foto <br/> (Drop di sini)</span>
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="image/*" 
              style={{ display: 'none' }} 
            />
          </div>

          <h1 className="name-title">MAULIKA FITRIANI</h1>
          <p className="subtitle">System Analyst | Frontend Developer | UI/UX Designer</p>
          <p className="location">+8951 7111 527 | Bandung, West Java, 40256</p>
          
          <div className="contact-buttons">
          {/* Tombol Gmail Resmi (Warna Merah Asli) */}
            <a 
              href="mailto:maulikafitriani@gmail.com" 
              className="btn-contact-icon btn-gmail" 
              title="Email Me"
            >
              <img 
                src="https://unpkg.com/simple-icons@v13/icons/gmail.svg" 
                alt="Gmail" 
                width="20" 
                height="20" 
                style={{ filter: "invert(31%) sepia(94%) saturate(4505%) hue-rotate(350deg) brightness(95%) contrast(93%)" }}
              />
            </a>

            {/* Tombol LinkedIn Resmi (Warna Biru Asli & Fix URL Terbaca) */}
          <a 
              href="https://www.linkedin.com/in/maulikafitriani" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-contact-icon btn-linkedin" 
              title="LinkedIn"
            >
              <img 
                src="https://unpkg.com/simple-icons@v13/icons/linkedin.svg" 
                alt="LinkedIn" 
                width="20" 
                height="20"
                style={{ filter: "invert(29%) sepia(93%) saturate(1512%) hue-rotate(178deg) brightness(91%) contrast(101%)" }}
              />
            </a>

            {/* Tombol Copy Phone (Warna Hijau WhatsApp Asli) */}
          {/* Tombol WhatsApp Resmi (Warna Hijau Asli & Langsung Direct Chat) */}
          <a 
            href="https://wa.me/6289517111527" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-contact-icon btn-whatsapp" 
            title="Chat on WhatsApp"
          >
            <img 
              src="https://unpkg.com/simple-icons@v13/icons/whatsapp.svg" 
              alt="WhatsApp" 
              width="20" 
              height="20" 
              style={{ filter: "invert(64%) sepia(50%) saturate(4649%) hue-rotate(113deg) brightness(97%) contrast(82%)" }}
            />
          </a>
          </div>

          <div className="summary-box">
            <p>
              An Information Systems Associate graduate and current online Bachelor’s in Informatics student at Telkom University (GPA 3.80/4.00), combining over a year of corporate IT internship experience with a BNSP Junior Network Administrator certification. Demonstrates a versatile technical skill set spanning System Analysis, Frontend Development, UI/UX Design, and Data Science. 
              <br>
              </br>
            </p>
            <p>
              Possesses a proven track record of translating complex business requirements into functional digital solutions through cross-functional collaboration. Highly motivated to leverage this multidisciplinary academic foundation and hands-on corporate tech experience to bridge the gap between complex business strategies and modern engineering frameworks, actively contributing to impactful digital transformations and the development of scalable, user-centric software solutions.
            </p>
          </div>
        </div>
      </section>

{/* Education Section */}
      <section id="education" className="section-padding">
        <h2 className="section-title">Education</h2>
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
        
        {/* Education PROJECT */}
        <div className="education-projects-section">
          <h2 className="subsection-title">Projects</h2>
          <div className="certificates-grid">
            <div className="cert-card">
              <span className="cert-date">Feb 2024 - June 2024</span>
              <h3>Mobile-based Scholarship Application</h3>
              <p className="issuer" style={{ fontSize: "0.80rem", color: "#64748b" }}>
                Programmer Fullstack Developer & Quality Assurance
              </p>              
              <ul className="bullet-points">
              <li><p>Developed front-end using Flutter and Back-end using PHP.</p> </li>
              <li>Collaborated with designers and developers</li>
              </ul>
            </div>

            <div className="cert-card">
              <span className="cert-date">Oct 2023 - Dec 2023</span>
              <h3>SatuSisi Coffee Web Application</h3>
              <p className="issuer" style={{ fontSize: "0.80rem", color: "#64748b" }}>
                Programmer Fullstack Developer & System Analyst
              </p>              
              <ul className="bullet-points">
              <li>Analyzted business needs, developed user-friendly website</li>
              <li>Built front-end with PHP and Back-end with HTML CSS</li>
              </ul>
            </div>

            <div className="cert-card">
              <span className="cert-date">Feb 2023 - June 2023</span>
              <h3>Web-based Cryptocurrency Application</h3>
              <p className="issuer" style={{ fontSize: "0.80rem", color: "#64748b" }}>
                Programmer Fullstack Developer
              </p>              
              <ul className="bullet-points">
              <li>Created application using HTML CSS and JavaScript with RESTAPIs integration</li>
              </ul>
            </div>

          </div> {/* <--- Tambah Penutup untuk certificates-grid */}
        </div> {/* <--- Tambah Penutup untuk education-projects-section */}
      </section>

      {/* Internships Section */}
      <section id="internships" className="section-padding">
        <h2 className="section-title">Internship Experience</h2>
        <div className="card-list">
          
          <div className="experience-card">
            <div className="card-header">
              <div>
                <h3>PT Sanoh Indonesia <span className="location-tag">| Cikarang, Indonesia</span></h3>
                <p className="role-title">Business & System Analyst and Frontend Developer Intern</p>
              </div>
              <span className="date-tag">July 2024 – July 2025</span>
            </div>
            <ul className="bullet-points">
              <li><strong>Finance Invoice Management Systems:</strong> Collaborated within the BA and Frontend teams to digitize and streamline corporate finance invoicing workflows.</li>
              <li><strong>Visitor Management Systems:</strong> Engineered intuitive frontend interfaces tailored for security, administrators, and visitors using tablet devices. Optimized check-in workflows for dynamic visit categories including Meetings, Contractors, and Warehouse Deliveries.</li>
              <li><strong>Supply Chain Management Systems:</strong> Analyzed business requirements across divisions to model system processes via Use Cases, Activity Diagrams, ERDs, and designed & coded print-ready, responsive HTML/CSS layouts for critical SCM documents (PO, DN, and Kanban Labels).</li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="card-header">
              <div>
                <h3>GoPay Indonesia</h3>
                <p className="role-title">Student Ambassador '23 - Content Creator</p>
              </div>
              <span className="date-tag">Sept 2023 - Dec 2023</span>
            </div>
            <ul className="bullet-points">
              <li>Marketed the GoPay brand by increasing awareness of GoPay facilities/services among student peers.</li>
              <li>Developed a GoPay Strategy by helping to design and develop GoPay marketing plans based on an analysis of needs and constraints experienced by students.</li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="card-header">
              <div>
                <h3>PT Bank Pembangunan Daerah Banten Tbk</h3>
                <p className="role-title">Loan Assistant Intern</p>
              </div>
              <span className="date-tag">Oct 2019 - Dec 2019</span>
            </div>
            <ul className="bullet-points">
              <li>Prepared account journals, deposit bills, and savings book account stamps for credit reviews.</li>
              <li>Inputted cooperative credit file data systematically into the corporate bank system.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Work Experience / Projects Section */}
      <section id="experience" className="section-padding">
        <h2 className="section-title">Academic & Project Experience</h2>
        <div className="card-list">
          
          <div className="experience-card">
            <div className="card-header">
              <div>
                <h3>Teaching Assistant Network Architecture</h3>
                <p className="role-title">Class Practice Assistant Coordinator</p>
              </div>
              <span className="date-tag">March 2023 - May 2024</span>
            </div>
            <ul className="bullet-points">
              <li>Assisted lecturers in class practicum environments.</li>
              <li>Explained complex technical materials and helped students understand network architecture concepts thoroughly.</li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="card-header">
              <div>
                <h3>Pengabdian Masyarakat (Community Service)</h3>
                <p className="role-title">Tourism Promotion Website Design Team</p>
              </div>
              <span className="date-tag">Nov 2023 - Dec 2023</span>
            </div>
            <ul className="bullet-points">
              <li>Researched and analyzed the target audience and tourism potential of Keseneng Village, Semarang.</li>
              <li>Designed a user-friendly and informative web layout to boost local village tourism.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Licenses & Achievements Section */}
      <section id="licenses" className="section-padding">
        <h2 className="section-title">Certificates & Awards</h2>
        
        <div className="certificates-grid">
          <div className="cert-card bg-highlight">
            <span className="cert-date">March 2021</span>
            <h3>BNSP Certification | Junior Network Administrator</h3>
            <p className="issuer">Computer Professional Certification Institution</p>
            <p className="desc">Completed certification in network and infrastructure competencies, including network design and configuration.</p>
          </div>

          <div className="cert-card">
            <span className="cert-date">18 Jan 2024</span>
            <h3>Project Management</h3>
            <p className="issuer">Dicoding Indonesia X Google Developers</p>
            <p className="desc">Learned project management fundamentals, including cycles, methodology, and organizational structures.</p>
          </div>

          <div className="cert-card">
            <span className="cert-date">4 Feb 2024</span>
            <h3>Data Science Competency</h3>
            <p className="issuer">Dicoding Indonesia X Google Developers</p>
            <p className="desc">Studied the basics of data science, data analysis, machine learning, and essential data tools.</p>
          </div>

          <div className="cert-card">
            <span className="cert-date">5 Feb 2024</span>
            <h3>Web Programming Layouts</h3>
            <p className="issuer">Dicoding X DBS Foundation Coding Camp</p>
            <p className="desc">Created final assignments applying semantic HTML techniques and highly responsive web layouts using CSS.</p>
          </div>

          <div className="cert-card">
            <span className="cert-date">8 Feb 2024</span>
            <h3>Structured Query Language (SQL)</h3>
            <p className="issuer">Dicoding Indonesia X Google Developers</p>
            <p className="desc">Learned to manage and query relational databases using basic and advanced SQL commands.</p>
          </div>

          <div className="cert-card bg-highlight">
            <span className="cert-date">March 2021</span>
            <h3>Merit Award Scholarship</h3>
            <p className="issuer">Tenaris PT. Seamless Pipe Indonesia Jaya</p>
            <p className="desc">Received full Merit Award for outstanding and consistent academic excellence.</p>
          </div>
        </div>
      </section>

        <section id="skills" className="section-padding">
          <h2 className="section-title">Technical & Soft Skills</h2>
          <div className="skills-container">
            
            <div className="skills-group">
              <h3>Languages</h3>
              <div className="skills-icons-grid">
                {/* Indonesian (Native) */}
                <div className="skill-icon-item" title="Indonesian (Native)">
                  <img 
                    src="https://unpkg.com/@fortawesome/fontawesome-free@6.4.0/svgs/solid/comment-medical.svg" 
                    alt="Indonesian" 
                    style={{ filter: "invert(40%) sepia(10%) saturate(1000%) hue-rotate(320deg)" }} 
                  />
                  <span>Indonesian</span>
                </div>

                {/* English (Intermediate) */}
                <div className="skill-icon-item" title="English (Intermediate)">
                  <img 
                    src="https://unpkg.com/@fortawesome/fontawesome-free@6.4.0/svgs/solid/earth-americas.svg" 
                    alt="English" 
                    style={{ filter: "invert(40%) sepia(10%) saturate(1000%) hue-rotate(320deg)" }} 
                  />
                  <span>English</span>
                </div>
              </div>
            </div>

        <div className="skills-group">
          <h3>Technical Skills</h3>
          <div className="skills-icons-grid">
            {/* Figma */}
            <div className="skill-icon-item" title="UI/UX Design (Figma)">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
              <span>Figma</span>
            </div>

            {/* HTML5 */}
            <div className="skill-icon-item" title="HTML5">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
              <span>HTML5</span>
            </div>

            {/* CSS3 */}
            <div className="skill-icon-item" title="CSS3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
              <span>CSS3</span>
            </div>

            {/* JavaScript */}
            <div className="skill-icon-item" title="JavaScript">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
              <span>JavaScript</span>
            </div>

            {/* React.js */}
            <div className="skill-icon-item" title="React.js">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" />
              <span>React.js</span>
            </div>

            {/* MySQL / SQL */}
            <div className="skill-icon-item" title="Databases (SQL)">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" />
              <span>SQL</span>
            </div>

            {/* Python */}
            <div className="skill-icon-item" title="Python">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
              <span>Python</span>
            </div>

            {/* Business & System Analysis (Diwakili Ikon Lab/Sains Devicon) */}
            <div className="skill-icon-item" title="Business & System Analysis">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/labview/labview-original.svg" alt="Analysis" />
              <span>Analysis</span>
            </div>

            {/* Diagrams / Process (Diwakili Ikon Rencana/Arsitektur) */}
            <div className="skill-icon-item" title="Use Cases, ERDs & Activity Diagrams">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg" alt="Diagrams" />
              <span>Diagrams</span>
            </div>

            {/* Design Thinking (Diwakili Ikon Canva/Kreatif Devicon) */}
            <div className="skill-icon-item" title="Design Thinking">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" alt="Design Thinking" />
              <span>Design Thinking</span>
            </div>
          </div>
        </div>
        <div className="skills-group">
          <h3>Soft Skills</h3>
          <div className="skills-icons-grid">
            {/* Leadership */}
            <div className="skill-icon-item" title="Leadership">
              <img 
                src="https://unpkg.com/@fortawesome/fontawesome-free@6.4.0/svgs/solid/crown.svg" 
                alt="Leadership" 
                style={{ filter: "invert(40%) sepia(10%) saturate(1000%) hue-rotate(320deg)" }} 
              />
              <span>Leadership</span>
            </div>

            {/* Strategic Communication */}
            <div className="skill-icon-item" title="Strategic Communication">
              <img 
                src="https://unpkg.com/@fortawesome/fontawesome-free@6.4.0/svgs/solid/comments.svg" 
                alt="Communication" 
                style={{ filter: "invert(40%) sepia(10%) saturate(1000%) hue-rotate(320deg)" }}
              />
              <span>Communication</span>
            </div>

            {/* Cross-functional Collaboration */}
            <div className="skill-icon-item" title="Cross-functional Collaboration">
              <img 
                src="https://unpkg.com/@fortawesome/fontawesome-free@6.4.0/svgs/solid/users-gear.svg" 
                alt="Collaboration" 
                style={{ filter: "invert(40%) sepia(10%) saturate(1000%) hue-rotate(320deg)" }}
              />
              <span>Collaboration</span>
            </div>

            {/* Adaptability */}
            <div className="skill-icon-item" title="Adaptability">
              <img 
                src="https://unpkg.com/@fortawesome/fontawesome-free@6.4.0/svgs/solid/arrows-spin.svg" 
                alt="Adaptability" 
                style={{ filter: "invert(40%) sepia(10%) saturate(1000%) hue-rotate(320deg)" }}
              />
              <span>Adaptability</span>
            </div>

            {/* Problem Solving */}
            <div className="skill-icon-item" title="Problem Solving">
              <img 
                src="https://unpkg.com/@fortawesome/fontawesome-free@6.4.0/svgs/solid/lightbulb.svg" 
                alt="Problem Solving" 
                style={{ filter: "invert(40%) sepia(10%) saturate(1000%) hue-rotate(320deg)" }}
              />
              <span>Problem Solving</span>
            </div>
          </div>
        </div>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Maulika Fitriani. Powered by React + Vite.</p>
      </footer>
    </div>
  )
}

export default App