import React, { useState, useEffect } from 'react';

export default function Footer({ onComingSoon, onNavigate }) {
  const [showScrollBtns, setShowScrollBtns] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtns(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLink = (e, name) => {
    e.preventDefault();
    onComingSoon(name);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="edu-footer-wrap">
        <div className="edu-footer-main">
          {/* LEFT SIDE */}
          <div className="edu-left-block">
            <div className="edu-logo-wrap">
              <div className="edu-logo-text">
                <img src="./Assets/Logo 1.png" alt="St. Xavier's Logo" />
              </div>
            </div>

            <div className="edu-contact-section">
              <h4 className="edu-location-heading">Locate Us</h4>
              <h4>St. Xavier&apos;s UMOID</h4>

              <div className="edu-contact-line">
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  St. Xavier&apos;s Umoid via Mowly jWadi South West Khasi Hills,
                  TL, Meghalaya 793119 India
                </span>
              </div>

              <div className="edu-contact-line">
                <i className="fas fa-phone"></i>
                <span>+91 (943)066-5717</span>
              </div>

              <div className="edu-contact-line">
                <i className="fas fa-envelope"></i>
                <span>sunnysjx2@gmail.com</span>
              </div>

              <div className="edu-contact-line">
                <i className="fas fa-globe"></i>
                <span>www.stxaviersumoid.com</span>
              </div>

              <button
                type="button"
                className="edu-direction-btn"
                onClick={() => onComingSoon('Campus Directions')}
              >
                Get Directions
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="edu-right-block">
            <div className="edu-header-top">
              <div className="edu-social-group">
                <h4>Connect With Us</h4>
                <div className="edu-social-icons">
                  <a href="#fb" onClick={(e) => handleLink(e, 'Facebook')}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#ig" onClick={(e) => handleLink(e, 'Instagram')}>
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#yt" onClick={(e) => handleLink(e, 'YouTube')}>
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#tw" onClick={(e) => handleLink(e, 'Twitter')}>
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>

              <div className="edu-payment-group">
                <h4>Our Payment Methods</h4>
                <div className="edu-payment-icons">
                  <i
                    style={{ pointerEvents: 'none' }}
                    className="far fa-credit-card"
                  ></i>
                  <i
                    style={{ pointerEvents: 'none' }}
                    className="fas fa-money-check"
                  ></i>
                  <i
                    style={{ pointerEvents: 'none' }}
                    className="fab fa-paypal"
                  ></i>
                  <i
                    style={{ pointerEvents: 'none' }}
                    className="fab fa-google-pay"
                  ></i>
                </div>
              </div>

              <div className="edu-payment-group admission-form-group">
                <h4>Admission Form</h4>
                <div className="edu-payment-icons">
                  <img
                    style={{ pointerEvents: 'none' }}
                    src="./Assets/image 92.png"
                    alt="Admission Icon"
                  />
                  <img
                    style={{ pointerEvents: 'none' }}
                    src="./Assets/image 93.png"
                    alt="Admission Icon"
                  />
                  <img
                    style={{ pointerEvents: 'none' }}
                    src="./Assets/image 94.png"
                    alt="Admission Icon"
                  />
                </div>
              </div>
            </div>

            <div className="edu-footer-grid">
              <div className="edu-grid-box">
                <h4>Admission</h4>
                <ul>
                  <li>
                    <a
                      href="#adm25"
                      onClick={(e) => handleLink(e, 'Admissions 2025-27')}
                    >
                      Admissions 2025-27
                    </a>
                  </li>
                  <li>
                    <a
                      href="#dist"
                      onClick={(e) => handleLink(e, 'Distance Education')}
                    >
                      Distance Education
                    </a>
                  </li>
                  <li>
                    <a
                      href="#online"
                      onClick={(e) => handleLink(e, 'Online Admission')}
                    >
                      Online Admission
                    </a>
                  </li>
                  <li>
                    <a
                      href="#schol"
                      onClick={(e) => handleLink(e, 'Scholarship & Aid')}
                    >
                      Scholarship &amp; Aid
                    </a>
                  </li>
                  <li>
                    <a
                      href="#fees"
                      onClick={(e) => handleLink(e, 'Fees Deposits')}
                    >
                      Fees Deposits
                    </a>
                  </li>
                  <li>
                    <a href="#faq" onClick={(e) => handleLink(e, 'FAQ')}>
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div className="edu-grid-box">
                <h4>Academics</h4>
                <ul>
                  <li>
                    <a
                      href="#placement"
                      onClick={(e) => handleLink(e, 'Placement Drive')}
                    >
                      Placement Drive
                    </a>
                  </li>
                  <li>
                    <a href="#alumni" onClick={(e) => handleLink(e, 'Alumni')}>
                      Alumni
                    </a>
                  </li>
                  <li>
                    <a
                      href="#ent"
                      onClick={(e) => handleLink(e, 'Entrepreneurship')}
                    >
                      Entrepreneurship
                    </a>
                  </li>
                  <li>
                    <a
                      href="#jesuit"
                      onClick={(e) => handleLink(e, 'Other Jesuit Branches')}
                    >
                      Other Jesuit Branches
                    </a>
                  </li>
                  <li>
                    <a
                      href="#boarding"
                      onClick={(e) => handleLink(e, 'Top Boarding Schools')}
                    >
                      Top Boarding Schools
                    </a>
                  </li>
                  <li>
                    <a
                      href="#entitle"
                      onClick={(e) => handleLink(e, 'Entitlement Application')}
                    >
                      Entitlement Application
                    </a>
                  </li>
                </ul>
              </div>

              <div className="edu-grid-box">
                <h4>Resources</h4>
                <ul>
                  <li>
                    <a
                      href="#prospectus"
                      onClick={(e) => handleLink(e, 'Prospectus')}
                    >
                      Prospectus
                    </a>
                  </li>
                  <li>
                    <a
                      href="#events"
                      onClick={(e) => handleLink(e, 'Events & News')}
                    >
                      Events &amp; News
                    </a>
                  </li>
                  <li>
                    <a
                      href="#alumni-net"
                      onClick={(e) => handleLink(e, 'Alumni Network')}
                    >
                      Alumni Network
                    </a>
                  </li>
                  <li>
                    <a
                      href="#login"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('login');
                      }}
                    >
                      Student Portal
                    </a>
                  </li>
                  <li>
                    <a
                      href="#careers"
                      onClick={(e) => handleLink(e, 'Careers')}
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      onClick={(e) => handleLink(e, 'Contact Us')}
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="edu-footer-bottom">
          <div className="edu-bottom-links">
            <a
              href="#anti-ragging"
              onClick={(e) => handleLink(e, 'Anti Ragging')}
            >
              Anti Ragging
            </a>
            <span>|</span>
            <a href="#privacy" onClick={(e) => handleLink(e, 'Privacy Policy')}>
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#disclaimer" onClick={(e) => handleLink(e, 'Disclaimer')}>
              Disclaimer
            </a>
            <span>|</span>
            <a
              href="#terms"
              onClick={(e) => handleLink(e, 'Terms & Conditions')}
            >
              Terms &amp; Conditions
            </a>
            <span>|</span>
            <a
              href="#grievance"
              onClick={(e) => handleLink(e, 'Student Grievance Redressal')}
            >
              Student Grievance Redressal
            </a>
            <span>|</span>
            <a
              href="#caste"
              onClick={(e) => handleLink(e, 'Caste Based Optimization')}
            >
              Castle Based Optimization
            </a>
            <span>|</span>
            <a href="#rti" onClick={(e) => handleLink(e, 'RTI')}>
              RTI
            </a>
            <span>|</span>
            <a href="#feedback" onClick={(e) => handleLink(e, 'Feedback')}>
              Feedback
            </a>
          </div>
          <div className="edu-copy-note">
            © 2025 St. Xavier&apos;s Umoid. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Bottom Sticky Banner */}
      <div className="banner-bot">
        <div className="banner-bottom-content">
          <div className="slider-track">
            <span onClick={() => onComingSoon('Higher Secondary Admission')}>
              ● Higher Secondary Admission Starts from 01.05.2026
            </span>
            <span onClick={() => onComingSoon('Under Graduate Admission')}>
              ● Under Graduate Admission Starts from 18.06.2026
            </span>
            <span onClick={() => onComingSoon('Career Opportunities')}>
              ● Explore New Career Opportunities with CU
            </span>
            <span onClick={() => onComingSoon('Higher Secondary Admission')}>
              ● Higher Secondary Admission Starts from 01.05.2026
            </span>
            <span onClick={() => onComingSoon('Under Graduate Admission')}>
              ● Under Graduate Admission Starts from 18.06.2026
            </span>
            <span onClick={() => onComingSoon('Career Opportunities')}>
              ● Explore New Career Opportunities with CU
            </span>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="floating-btns">
        <div
          className={`float-btn user-btn ${showScrollBtns ? 'show' : ''}`}
          onClick={() => onComingSoon('AI Assistant Bot')}
        >
          <img src="./Assets/Bot.png" alt="Chatbot" />
        </div>
        <div
          className={`float-btn up-btn ${showScrollBtns ? 'show' : ''}`}
          aria-label="Scroll to top"
          onClick={scrollToTop}
        >
          <img src="./Assets/UP.png" alt="Back to Top" />
        </div>
      </div>
    </>
  );
}
