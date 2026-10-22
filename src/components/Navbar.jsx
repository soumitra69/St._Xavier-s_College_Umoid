import React, { useState } from 'react';

const SECONDARY_NAV_ITEMS = [
  {
    label: 'Campuses ▾',
    name: 'Campuses',
    delay: '100',
    dropdownClass: 'dropdown-content',
    children: [
      { label: 'Main Campus', name: 'Main Campus' },
      { label: 'City Campus', name: 'City Campus' },
      { label: 'International Campus', name: 'International Campus' },
    ],
  },
  {
    label: 'Library ▾',
    name: 'Library',
    delay: '200',
    dropdownClass: 'dropdown-content',
    children: [
      { label: 'Digital Library', name: 'Digital Library' },
      { label: 'Book Request', name: 'Book Request' },
      { label: 'Research Papers', name: 'Research Papers' },
    ],
  },
  {
    label: 'Student Services ▾',
    name: 'Student Services',
    delay: '300',
    dropdownClass: 'dropdown-content',
    children: [
      { label: 'Hostel', name: 'Hostel Facilities' },
      { label: 'Transport', name: 'Transport Services' },
      { label: 'Counseling', name: 'Student Counseling' },
    ],
  },
  {
    label: 'Higher Secondary ▾',
    name: 'Higher Secondary',
    delay: '400',
    dropdownClass: 'dropdown-content',
    children: [
      { label: 'Placement Cell', name: 'Placement Cell' },
      { label: 'Internships', name: 'Internships' },
      { label: 'Job Openings', name: 'Job Openings' },
    ],
  },
  {
    label: 'Undergraduate ▾',
    name: 'Undergraduate',
    delay: '500',
    dropdownClass: 'dropdown-content',
    children: [
      { label: 'Latest Posts', name: 'Latest Posts' },
      { label: 'Student Stories', name: 'Student Stories' },
      { label: 'News', name: 'Undergraduate News' },
    ],
  },
  {
    label: 'Post Graduate ▾',
    name: 'Post Graduate',
    delay: '600',
    dropdownClass: 'dropdown-content',
    children: [
      { label: 'Episodes', name: 'Episodes' },
      { label: 'Guests', name: 'Guests' },
      { label: 'About', name: 'Post Graduate About' },
    ],
  },
  {
    label: 'Blog ▾',
    name: 'Blog',
    delay: '700',
    dropdownClass: 'dropdown-content1',
    children: [
      { label: 'Email', name: 'Blog Email' },
      { label: 'Phone', name: 'Blog Phone' },
      { label: 'Location', name: 'Campus Location' },
    ],
  },
];

export default function Navbar({ onComingSoon, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleLinkClick = (e, name, dropdownIdx = null) => {
    e.preventDefault();
    if (dropdownIdx !== null) {
      setOpenDropdownIndex((prev) =>
        prev === dropdownIdx ? null : dropdownIdx
      );
    }
    onComingSoon(name);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar" data-aos="fade-down" data-aos-duration="1000">
        <div className="top-bar-left">
          <div className="scroll-text">
            ● Register Now for CU Joint Campus Placement Programme &nbsp;&nbsp;
            | &nbsp;&nbsp; ● Embark on a Journey of Passion to Profession
            &nbsp;&nbsp; | &nbsp;&nbsp; ● Admissions Open for 2025 – Apply Now!
            &nbsp;&nbsp; | &nbsp;&nbsp; ● Explore New Career Opportunities with
            CU
          </div>
        </div>

        <div className="top-bar-right" data-aos="fade-left" data-aos-delay="300">
          <a href="#call" onClick={(e) => handleLinkClick(e, 'Call Us')}>
            <i className="fa-solid fa-phone"></i> <span>Call Us</span>
          </a>
          <a
            href="#whatsapp"
            onClick={(e) => handleLinkClick(e, 'WhatsApp Support')}
          >
            <i className="fa-brands fa-whatsapp"></i> <span>Whatsapp</span>
          </a>
          <a
            href="#facebook"
            aria-label="Facebook"
            onClick={(e) => handleLinkClick(e, 'Facebook Page')}
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="#instagram"
            aria-label="Instagram"
            onClick={(e) => handleLinkClick(e, 'Instagram Page')}
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="#twitter"
            aria-label="Twitter"
            onClick={(e) => handleLinkClick(e, 'X (Twitter) Page')}
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header data-aos="fade-up" data-aos-duration="1200">
        <div
          className="logo"
          data-aos="zoom-in-right"
          style={{ cursor: 'pointer' }}
          onClick={() => onNavigate('home')}
        >
          <img src="./Assets/Logo 1.png" alt="St. Xavier's Logo" />
          <div className="logo-text">
            <h1>
              ST. XAVIER&apos;S <br /> <span className="umoid">UMIOD</span>
            </h1>
          </div>
        </div>

        <button
          type="button"
          className="mobile-menu-btn"
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </button>

        <nav
          className={`gradient-nav ${menuOpen ? 'nav-open' : ''}`}
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <a href="#home" onClick={(e) => handleLinkClick(e, 'Home')}>
            Home
          </a>
          <a href="#about" onClick={(e) => handleLinkClick(e, 'About Us')}>
            About
          </a>
          <a href="#academics" onClick={(e) => handleLinkClick(e, 'Academics')}>
            Academics
          </a>
          <a href="#admission" onClick={(e) => handleLinkClick(e, 'Admission')}>
            Admission
          </a>
          <a
            href="#campus-life"
            onClick={(e) => handleLinkClick(e, 'Campus Life')}
          >
            Campus Life
          </a>
          <a
            href="#news"
            onClick={(e) => handleLinkClick(e, 'News & Updates')}
          >
            News
          </a>
        </nav>

        <div className={`login-callback ${menuOpen ? 'nav-open' : ''}`}>
          <div
            className="student-login btn-border-reveal"
            data-aos="zoom-in"
            data-aos-delay="300"
            onClick={() => onNavigate('login')}
          >
            <div className="student-login-text" style={{ fontWeight: 'bold' }}>
              <a
                href="#login"
                style={{ color: 'white', textDecoration: 'none' }}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('login');
                }}
              >
                STUDENT LOGIN
              </a>
            </div>
          </div>

          <div
            className="request-callback btn-border-reveall"
            data-aos="zoom-in-left"
            data-aos-delay="400"
            onClick={(e) => handleLinkClick(e, 'Call Us (1234 5678 9000)')}
          >
            <span style={{ color: 'white', fontSize: '24px' }}>
              <i className="fa-solid fa-phone"></i>
            </span>
            <div>
              <div className="callback-text">CALL US</div>
              <div className="callback-number">1234 5678 9000</div>
            </div>
          </div>
        </div>
      </header>

      {/* Secondary Navigation */}
      <nav
        className={`secondary-nav ${menuOpen ? 'nav-open' : ''}`}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <ul>
          {SECONDARY_NAV_ITEMS.map((item, idx) => (
            <li
              key={item.name}
              className={`dropdown ${openDropdownIndex === idx ? 'open' : ''}`}
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <a
                className="abb"
                href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={(e) => handleLinkClick(e, item.name, idx)}
              >
                {item.label}
              </a>
              <div className={item.dropdownClass}>
                {item.children.map((child) => (
                  <a
                    key={child.name}
                    href={`#${child.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={(e) => handleLinkClick(e, child.name)}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
