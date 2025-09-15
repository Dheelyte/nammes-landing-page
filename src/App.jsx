import { useState, useEffect, useRef } from 'react';
import './App.css';
import heroImage from './assets/hero-image.jpg';
import weldingImage from './assets/welding.jpg';
import microscopeImage from './assets/microscope.jpg';
import blastFurnaceImage from './assets/blast-furnace.jpg';
import phaseDiagramImage from './assets/phase-diagram.jpg';
import websiteLaunch from './assets/updates/news-website-launch.jpg';
import btf2 from './assets/updates/news-btf-2.0.jpg';
import competitionImage from './assets/updates/3m-intl-conference.jpg';
import nseSponsorship from './assets/updates/Sponsorship.jpg';
import btf1 from './assets/updates/news-btf-1.0.jpg';
import siwesImage from './assets/Tijani-Bello.jpg';
import TijaniBello from './assets/Tijani-Bello.jpg'
import Azeez from './assets/azeez.jpg'
import Dami from './assets/Oluwadamilare.png'
import members from './members.json'


const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [daysUntilConvention, setDaysUntilConvention] = useState(0);
  const [seeMore, setSeeMore] = useState(false)
  
  const heroImages = [
    weldingImage,
    microscopeImage,
    blastFurnaceImage,
    phaseDiagramImage
  ];


// Inside your component
const newsScrollRef = useRef(null);

const scrollNews = (direction) => {
  if (newsScrollRef.current) {
    const scrollAmount = 400; // Adjust this value as needed
    const currentScroll = newsScrollRef.current.scrollLeft;
    
    if (direction === 'right') {
      newsScrollRef.current.scrollTo({
        left: currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    } else {
      newsScrollRef.current.scrollTo({
        left: currentScroll - scrollAmount,
        behavior: 'smooth'
      });
    }
  }
};

// Add the ref to the news scroll wrapper
<div className="news-scroll-wrapper" ref={newsScrollRef}></div>

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate days until next convention (assuming it's October 15, 2024)
  useEffect(() => {
    const calculateDays = () => {
      const today = new Date();
      const conventionDate = new Date('2024-10-15');
      const diffTime = conventionDate - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysUntilConvention(diffDays > 0 ? diffDays : 0);
    };
    
    calculateDays();
    
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(imageInterval);
  }, []);

  return (
    <div className="app">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="logo-container">
            <img style={{width: '50px', height: '50px'}} src="/logo.png" alt="" />
            <div className="logo">
              <span className="logo-text">NAMMES</span>
              <span className="logo-subtext" style={{ color: isScrolled ? 'var(--dark-color)' : 'var(--white)' }}>
                Nigeria
              </span>
            </div>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#leadership">Leadership</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#membership">Membership</a></li>
            <li><a href="https://youtube.com/@midecaliengineer">Tutorials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero" style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            {/* Navigation */}
            <h1>Materials... the bedrock of technological advancement</h1>
            <p>National Association of Metallurgical and Materials Engineering Students</p>
            <div className="hero-buttons">
              <a href='https://nammesngcertificate.live' className="btn-primary">Join NAMMES</a>
              <a href='/nammes-constitution-and-senate-act.pdf' download={true} className="btn-secondary">Download Constitution</a>
              <a href='#events' className="btn-tertiary">Upcoming Convention</a>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="about" className="welcome-section">
        <div className="container">
          <h2>Welcome to NAMMES Nigeria</h2>
          <div className="welcome-content">
            <div className="welcome-text">
              <p>
                It is with great pleasure that we welcome you to this digital home of innovation, 
                representation, and academic excellence. NAMMES Nigeria is the unifying body for 
                students studying Metallurgical and Materials Engineering across all affiliated 
                institutions in Nigeria.
              </p>
              <p>
                Guided by our motto — <em>"Materials… the bedrock of technological advancement"</em> — 
                we are committed to promoting technological growth, professional development, 
                and national relevance through our shared discipline.
              </p>
              <p>
                This platform is more than a website; it is a <strong>hub for engagement</strong>, 
                <strong>transparency</strong>, and <strong>connection</strong>. Here, members can access important 
                documents such as our <strong>constitution</strong>, view updates from our <strong>National Executive 
                Council and Senate</strong>, follow up on <strong>events and programs</strong>, and be part of shaping 
                a more vibrant and inclusive engineering future.
              </p>
              <p className="motto">
                <strong>CO-METALS… Materials for Service!</strong>
              </p>
            </div>
            <div className="welcome-image">
              <img src={heroImage} alt="Metallurgical Engineering Students" />
            </div>
          </div>
        </div>
      </section>

      {/* News & Resources Section */}
<section id="news-resources" className="news-resources-section">
  <div className="container">
    <div className="section-header">
      <h2>News & Resources</h2>
      <p>Stay informed with the latest announcements and access important documents</p>
    </div>

    {/* News Section with Horizontal Scroll */}
    <div className="news-section">
      <div className="news-header">
        <h3>Latest News & Announcements</h3>
        <div className="scroll-indicators">
          <button className="scroll-btn scroll-left" onClick={() => scrollNews('left')}>
            ←
          </button>
          <button className="scroll-btn scroll-right" onClick={() => scrollNews('right')}>
            →
          </button>
        </div>
      </div>
      
      <div className="news-scroll-container">
        <div className="news-scroll-wrapper" ref={newsScrollRef}>
          {[
            {
              id: 1,
              title: "OFFICIAL NOTICE OF WEBSITE LAUNCH",
              date: "9 August, 2025",
              excerpt: "We are delighted to announce the official launch of the NAMMES Nigeria Website. This new platform marks a significant step in modernizing how we serve you — smarter, faster, and more secure.",
              category: "Innovation",
              urgent: true,
              image: websiteLaunch,
              readTime: "2 min read"
            },
            {
              id: 2,
              title: "BEYOND THE FURNACE 2.0",
              date: "25 September, 2025",
              excerpt: "The September Edition of NAMMES Monthly Webinar Series is here! Speaker: Prof. Lawrence Opeyemi Osoba (Aerospace Materials & Welding)",
              category: "Event",
              image: btf2,
              readTime: "3 min read"
            },
            {
              id: 3,
              title: "3M Internation Conference Competition Winners Announced",
              date: "February 28, 2024",
              excerpt: "Congratulations to the winners of the 2025 3M Internation Conference.",
              category: "Achievement",
              image: competitionImage,
              readTime: "4 min read"
            },
            {
              id: 4,
              title: "Sponsorship Opportunity - Free NSE Registration for 110 MME Students",
              date: "1 April, 2025",
              excerpt: "MideCali Engineer is pleased to sponsor the registration of 110 MME students under NSE.",
              category: "Announcement",
              image: nseSponsorship,
              readTime: "2 min read"
            },
            {
              id: 5,
              title: "20 Membership Certificates Sponsored",
              date: "1 August, 2025",
              excerpt: "20 individuals membership certificates were sponsored and an individual went home with 30,000 Naira cash during the webinar 1.0",
              category: "Achievement",
              image: btf1,
              readTime: "3 min read"
            },
            {
              id: 6,
              title: "SIWES Placement Resources Now Live",
              date: "9 August, 2025",
              excerpt: "New online resources for industrial training placements is now available for all members.",
              category: "Update",
              image: microscopeImage,
              readTime: "2 min read"
            }
          ].map(news => (
            <div key={news.id} className={`news-card ${news.urgent ? 'urgent' : ''}`}>
              {news.urgent && <div className="urgent-badge">URGENT</div>}
              
              <div className="news-image">
                <img src={news.image} alt={news.title} />
                <div className="news-category">{news.category}</div>
              </div>
              
              <div className="news-content">
                <h4>{news.title}</h4>
                <p>{news.excerpt}</p>
                
                <div className="news-meta">
                  <span className="news-readtime">{news.date}</span>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Documents Section */}
    <div className="documents-section">
      <h3>Important Documents</h3>
      <div className="documents-grid">



        <div className="document-category">
          <div className="document-list">
            {[
              { name: "Webinar Slides: Beyond the Furnace 1.0", format: "PDF", href: "Beyond_furnace_webinar_01.pdf", size: "868KB"},
              { name: "NAMMES PROFILE", format: "PNG", href: "NAMMES Profile.png", size: "1.1MB"},
              { name: "NAMMES REFERENCE LIST", format: "PNG", href: "NAMMES REFERENCE LIST.png", size: "1.2MB"},
              { name: "NAMMES CHAPTERS 2025", format: "PNG", href: "NAMMES CHAPTERS 2025.png", size: "1.1MB"}
            ].map((doc, index) => (
              <div key={index} className="document-item">
                <div className="doc-icon">📁</div>
                <div className="doc-info">
                  <h5>{doc.name}</h5>
                  <span>{doc.format} • {doc.size}</span>
                </div>
                <a href={doc.href} className="download-btn" download={true}>
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">R</div>
              <h3>Representation</h3>
              <p>Ensuring every member's voice is heard and represented at all levels</p>
            </div>
            <div className="value-card">
              <div className="value-icon">I</div>
              <h3>Integrity</h3>
              <p>Upholding the highest ethical standards in all our activities</p>
            </div>
            <div className="value-card">
              <div className="value-icon">T</div>
              <h3>Transparency</h3>
              <p>Open and accountable in all our operations and decision-making</p>
            </div>
            <div className="value-card">
              <div className="value-icon">E</div>
              <h3>Efficiency</h3>
              <p>Delivering quality services and programs with optimal resource use</p>
            </div>
            <div className="value-card">
              <div className="value-icon">P</div>
              <h3>Probity</h3>
              <p>Demonstrating honesty and decency in all financial matters</p>
            </div>
            <div className="value-card">
              <div className="value-icon">A</div>
              <h3>Accountability</h3>
              <p>Taking responsibility for our actions and decisions</p>
            </div>
            <div className="value-card">
              <div className="value-icon">E</div>
              <h3>Excellence</h3>
              <p>Striving for the highest standards in all our endeavors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="events-section">
        <div className="container">
          <h2>Upcoming Events</h2>
          <div className="event-highlight">
            <div className="event-countdown">
              <h3>Annual NAMMES Nigeria Convention</h3>
              <div className="countdown-timer">
                <div className="countdown-box">
                  <span className="countdown-number">{daysUntilConvention}</span>
                  <span className="countdown-label">Days</span>
                </div>
                <p>Until the big event!</p>
              </div>
              <button className="btn-primary">Register Now</button>
            </div>
            <div className="event-details">
              <h4>Event Details</h4>
              <p><strong>Date:</strong> October 15-19, 2024</p>
              <p><strong>Location:</strong> Federal University of Technology, Akure</p>
              <p><strong>Theme:</strong> "Sustainable Materials Development for National Growth"</p>
              <p>
                The Annual NAMMES Convention brings together students, academics, and industry 
                professionals from across Nigeria to discuss the latest developments in 
                metallurgical and materials engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internship/SIWES Directory Section */}
      <section id="internships" className="internship-section">
        <div className="container">
          <div className="section-header">
            <h2>Internship & SIWES Placement</h2>
            <p style={{textAlign: 'center'}}>Connect with industry partners for your mandatory training programs</p>
          </div>
          
          <div className="directory-cards">
            {/* Industry Partners Card */}
            <div className="directory-card">
              <div className="card-icon">🏭</div>
              <h3>Industry Partners</h3>
              <p>Access our network of 50+ metallurgical and materials engineering companies offering internships</p>
            </div>
            
            {/* SIWES Resources Card */}
            <div className="directory-card">
              <div className="card-icon">📚</div>
              <h3>SIWES Resources</h3>
              <p>Download logbooks, guidelines and get approved for your industrial training</p>
            </div>
            
            {/* Alumni Network Card */}
            <div className="directory-card">
              <div className="card-icon">👥</div>
              <h3>Alumni Network</h3>
              <p>Connect with NAMMES alumni who can help with placements and mentorship</p>
            </div>
          </div>

          <div style={{display: 'flex', justifyContent: 'center'}}>
            <a
              href='/Industrial-Training-data.pdf'
              download={true}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                padding: '10px 15px',
                borderRadius: '10px',
                textAlign: 'center'
              }}
            >
              Browse Companies
            </a>
          </div>
          
          <div className="testimonial">
            <div className="quote-icon">❝</div>
            <blockquote>
              "Through NAMMES' industry connections, I secured my SIWES at Naval Dockyard. 
              The experience shaped my career path in metallurgical engineering."
            </blockquote>
            <div className="testimonial-author">
              <div className="author-avatar"></div>
              <div className="author-info">
                <strong>Tijani-Bello Ghaffar</strong>
                <span>Metallurgical Engineering, Unilag</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section id="leadership" className="leadership-section">
        <div className="container">
          <h2>Our Leadership</h2>
          <div className="leadership-grid">
            <div className="leader-card">
              <div className="leader-image">
                <img src={TijaniBello} alt="Tijani Bello" />
              </div>
              <h3>President</h3>
              <p>Tijani-Bello Ghaffar</p>
            </div>
            <div className="leader-card">
              <div className="leader-image">
                <img src={Azeez} alt="Azeez" />
              </div>
              <h3>Vice President</h3>
              <p>Azeez Fawaz Olawale</p>
            </div>
            <div className="leader-card">
              <div className="leader-image">
                <img src={Dami} alt="Oluwadamilare" />
              </div>
              <h3>Secretary General</h3>
              <p>Emmanuel, Peter Damilare</p>
            </div>

          </div>
          {!seeMore && (<div style={{display: 'flex', justifyContent: 'center'}}>
            <button
              onClick={()=>{setSeeMore(true)}}
              className="btn-secondary"
              style={{
                padding: '10px 25px',
                borderRadius: '10px',
                textAlign: 'center'
              }}
            >
              See more
            </button>
          </div>)}
          { seeMore && (
            <div className="leadership-grid">
            {members.map((member) => (
              <div className="leader-card">
                <div className="leader-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.post}</p>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* Membership CTA */}
      <section id="membership" className="membership-cta">
        <div className="container">
          <h2>Become a NAMMES Member Today</h2>
          <p>
            Join the largest network of Metallurgical and Materials Engineering students in Nigeria. 
            Enjoy access to exclusive resources, networking opportunities, and professional development programs.
          </p>
          <div className="membership-options">
            <div className="membership-card">
              <h3>Student Member</h3>
              <p>For current undergraduate students</p>
              <a href="https://nammesngcertificate.live" target='__blank' className="btn-primary">Join Now</a>
            </div>
            <div className="membership-card">
              <h3>Alumni Member</h3>
              <p>For graduates of Metallurgical/Materials Engineering</p>
              <a href="https://nammesngcertificate.live" target='__blank' className="btn-primary">Join Now</a>
            </div>
            <div className="membership-card">
              <h3>Institutional Member</h3>
              <p>For university chapters and departments</p>
              <a href="https://nammesngcertificate.live" target='__blank' className="btn-primary">Join Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* News Ticker */}
      <section className="news-ticker">
        <div className="container">
          <h3>Latest Updates</h3>
          <div className="ticker-content">
            <span>• NAMMES wins 1st place at National Engineering Competition •</span>
            <span>• Senate passes new budget for 2024 academic year •</span>
            <span>• Registration open for Materials Characterization Workshop •</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p><strong>Email:</strong> nammesnigeriaofficial@gmail.com, nammesng.senate@gmail.com</p>
              <p style={{display: 'flex', gap: '10px'}}>
                <strong>Social Media: </strong>
                <a href="https://www.linkedin.com/company/nammesnigeria/">LinkedIn</a>
                <a href="https://x.com/nammesnigeriaHQ">X/Twitter</a>
                <a href="https://instagram.com/nammes_nigeriahq">Instagram</a>
              </p>
              <p><strong>Address:</strong> Department of Metallurgical and Materials Engineering, University of Lagos, Akoka</p>
            </div>
            <div className="contact-form">
              <h3>Send us a Message</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="logo">
                <span className="logo-text">NAMMES</span>
                <span className="logo-subtext">Nigeria</span>
              </div>
              <p>Materials... the bedrock of technological advancement</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#leadership">Leadership</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="/Industrial-Training-data.xlsx" download={true}>SIWES Placement Directory</a></li>
                <li><a href="https://youtube.com/@midecaliengineer">Resources</a></li>
                <li><a href="#membership">Membership</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-newsletter">
              <h4>Subscribe to our Newsletter</h4>
              <form>
                <input type="email" placeholder="Your Email" />
                <button type="submit" className="btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} NAMMES Nigeria. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;