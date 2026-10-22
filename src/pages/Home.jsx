import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home({ onComingSoon, onNavigate }) {
  const [statCount, setStatCount] = useState(0);
  const [courseQuery, setCourseQuery] = useState('');

  useEffect(() => {
    const target = 69;
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      if (current >= target) {
        setStatCount(target);
        clearInterval(timer);
      } else {
        setStatCount(current);
      }
    }, 15);
    return () => clearInterval(timer);
  }, []);

  const handleLink = (e, name) => {
    e.preventDefault();
    onComingSoon(name);
  };

  return (
    <div>
      {/* HERO & NAVBANNER SECTION */}
      <section className="navbanner">
        <Navbar onComingSoon={onComingSoon} onNavigate={onNavigate} />

        <div className="container">
          <div className="hero">
            <div
              className="hero-content"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2 className="banner-title">
                From the Heart of <span className="meghalaya">Meghalaya</span>
              </h2>
              <p>
                A Jesuit institution fostering knowledge, values, and community
                spirit. Where every student finds their voice, vision, and
                values.
              </p>
              <button
                type="button"
                className="apply-btn glow-on-hover"
                data-aos="zoom-in"
                data-aos-delay="200"
                onClick={() => onComingSoon('Online Application')}
              >
                Apply Now
              </button>

              <div
                className="nursery-box"
                data-aos="flip-up"
                data-aos-delay="300"
              >
                <div className="nursury-box-content">
                  <h3>Nursery &amp; LKG</h3>
                  <p>
                    Counselling &amp; Slot Booking
                    <br />
                    Starts from 25.12.2025
                  </p>
                </div>
                <button
                  type="button"
                  className="download-btn"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  onClick={() => onComingSoon('Prospectus Download')}
                >
                  Download Prospectus
                </button>
              </div>

              <div
                className="arrow-btn"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <img
                  src="./Assets/Frame 168.png"
                  alt="Previous"
                  onClick={() => onComingSoon('Previous Slide')}
                />
                <img
                  src="./Assets/Frame 167.png"
                  alt="Next"
                  onClick={() => onComingSoon('Next Slide')}
                />
              </div>
            </div>

            {/* Application Form */}
            <div
              className="application-form"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <h3>
                Apply Today for
                <br />
                <span className="st-xaviers">St. Xavier&apos;s</span>{' '}
                <span className="umoid-text">Umiod</span>
              </h3>
              <p className="form-subtitle">
                Lorem ipsum dolor sit amet consectetur.
              </p>

              <form
                className="banner-from"
                onSubmit={(e) => {
                  e.preventDefault();
                  onComingSoon('Application Submission');
                }}
              >
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" placeholder="Student Name" />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Student Email ID" />
                  </div>
                </div>

                <div className="form-group">
                  <div className="phone-input">
                    <select className="country-code" defaultValue="+91">
                      <option value="+91">+91</option>
                    </select>
                    <input type="tel" placeholder="Student Mobile No" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <select defaultValue="">
                      <option value="">Select DOB</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Student City" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <select defaultValue="">
                      <option value="">Select Discipline</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select defaultValue="">
                      <option value="">Select Program</option>
                    </select>
                  </div>
                </div>

                <p className="form-footer">
                  Lorem ipsum dolor sit amet consectetur. Mi ut tellus nibh quis
                  ac.
                </p>

                <button
                  type="submit"
                  className="submit-btn glow-on-hover"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  Apply Now
                </button>
              </form>
            </div>
          </div>
        </div>

        <div
          className="background-img"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        ></div>
      </section>

      {/* ADMISSION / STATISTICS / FINANCIAL AID / ACADEMIC PREPARATION */}
      <section className="admission-section">
        <div className="container">
          <div className="Statistics-Section">
            <div className="Statistics-Section-content">
              <div className="stat-number">{statCount}%</div>
              <div className="stat-text">
                Qualified for
                <br />
                JEE-Advanced
              </div>
            </div>
            <div className="Statistics-Section-content-img">
              <img
                data-aos="fade-up-right"
                src="./Assets/Rectangle 250.png"
                alt="School Building"
              />
            </div>
          </div>

          <div className="financial-aid-Section">
            <div className="financial-aid-Section-content">
              <h3>Financial Aid</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Massa facilisis mauris
                ultricies lorem consequat donec. Duis facilisis orci varius id
                cursus neque. Neque facilisis nibh ultrices neque lorem nisi
                pellentesque. Ornare eget cursus in convallis pulvinar est.
              </p>
            </div>
            <div className="image">
              <img
                data-aos="fade-right"
                src="./Assets/Rectangle 251.png"
                alt="Students"
              />
            </div>
          </div>
          <img
            className="financial-aid-Section-relative-imge"
            data-aos="fade-down"
            src="./Assets/Rectangle 252.png"
            alt="Campus life"
          />

          <div className="Admission-Section">
            <div data-aos="fade-left" className="Admission-Section-content">
              <h3>Admission</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Massa facilisis mauris
                ultricies lorem. Duis facilisis orci varius id cursus neque.
                Neque tempor lorem morbi elementum porttitor magna. Volutpat
                gravida sit diam imperdiet. Sed aliquet fermentum eget nibh et
                suspendisse hac bibendum.
              </p>
              <div className="button-group">
                <a
                  href="#learn-more"
                  className="btn btn-primary"
                  onClick={(e) => handleLink(e, 'Admission Details')}
                >
                  Learn More
                </a>
                <a
                  href="#checklist"
                  className="btn btn-secondary"
                  onClick={(e) => handleLink(e, 'Apply Checklist')}
                >
                  Apply checklist
                </a>
              </div>
            </div>
            <div className="image">
              <img src="./Assets/Rectangle 248.png" alt="Classroom" />
            </div>
          </div>

          <div className="Academic-Preparation-Section">
            <div
              data-aos="fade-right"
              className="Academic-Preparation-Section-content"
            >
              <h3>
                Academic
                <br />
                Preparation
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. In odio nibh diam nec
                odio vitae sem nec aliquam. Sed gravida suscipit faucibus vitae
                vitae ullamcorper. Sollicitudin urna nibh id nibh et malesuada
                hac.
              </p>
              <div className="button-group">
                <a
                  href="#read-more"
                  className="btn btn-primary"
                  onClick={(e) => handleLink(e, 'Academic Preparation')}
                >
                  Read More
                </a>
                <a
                  href="#impact"
                  className="btn btn-secondary"
                  onClick={(e) => handleLink(e, 'Impact Report')}
                >
                  Impact Report
                </a>
              </div>
            </div>
            <div className="image">
              <img src="./Assets/Rectangle 249.png" alt="Academic Event" />
            </div>
          </div>
        </div>
      </section>

      {/* CARD SECTION */}
      <section className="card-section">
        {[
          './Assets/Rectangle 258.png',
          './Assets/Rectangle 256.png',
          './Assets/Rectangle 267.png',
          './Assets/Rectangle 259.png',
        ].map((imgSrc, idx) => (
          <div key={idx} data-aos="zoom-in" className="card">
            <img src={imgSrc} alt="High School 2026" />
            <div className="card-content">
              <div className="card-content-header">
                <h3>High School 2026</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Consequat amet
                  sagittis arcu aenean in sed tincidunt euismod...
                </p>
              </div>
              <button
                type="button"
                className="btn card-content-btn"
                onClick={() => onComingSoon('High School 2026 Application')}
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* JOURNEY SECTION */}
      <section className="Journey-section">
        <div className="container">
          <div className="jureny-content">
            <div data-aos="zoom-in" className="first-row">
              <h3>Start Your Journey With St. Xavier’s</h3>
              <p>
                Take your first step towards transforming not only your future,
                but also the world around you. Start by discovering our
                game-changing academic and research programmes.
              </p>
              <div className="apply-read">
                <button
                  type="button"
                  style={{ marginLeft: 0 }}
                  className="btn card-content-btn"
                  onClick={() =>
                    onComingSoon('Start Your Journey - Apply Now')
                  }
                >
                  Apply Now
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => onComingSoon('Academic Programmes')}
                >
                  Read More
                </button>
              </div>
            </div>

            <div className="second-row">
              <div data-aos="fade-down-right" className="second-row-first-div">
                <h3>Undergraduate Programmes</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Turpis erat mattis
                  diam posuere.
                </p>
                {[
                  '»Lorem ipsum sit molestie',
                  '»Lorem ipsum',
                  '»Lorem ipsum urna',
                  '»Lorem ipsum arcu dignissim malesuada',
                  '»Lorem ipsum',
                ].map((txt, i) => (
                  <span
                    key={i}
                    onClick={() => onComingSoon('Undergraduate Programmes')}
                  >
                    {txt}
                  </span>
                ))}
              </div>
              <div data-aos="fade-down-right" className="second-row-second-div">
                <h3>Professional &amp; Continuing Education</h3>
                <span
                  onClick={() =>
                    onComingSoon('St. Xavier’s UMOID Continuing Education')
                  }
                >
                  St. Xavier’s UMOID »
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquam scelerisque
                  ultrices sapien tincidunt egestas sagittis mauris magna
                  congue.
                </p>
                <span
                  onClick={() => onComingSoon('UMOID’s Executive Development')}
                >
                  UMOID’s Executive Development »
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ante magna diam eu
                  mattis lectus quis dui egestas. Volutpat non enim eget tellus
                  pharetra pulvinar viverra.
                </p>
              </div>
            </div>

            <div className="third-row">
              <div data-aos="fade-down-left" className="third-row-first-div">
                <h3>Postgraduate Degrees</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquam scelerisque
                  ultrices sapien tincidunt egestas sagittis mauris magna
                  congue.
                </p>
                {[
                  '»Lorem ipsum sit molestie',
                  '»Lorem ipsum',
                  '»Lorem ipsum urna',
                  '»Lorem ipsum arcu dignissim malesuada',
                  '»Lorem ipsum',
                ].map((txt, i) => (
                  <span
                    key={i}
                    onClick={() => onComingSoon('Postgraduate Degrees')}
                  >
                    {txt}
                  </span>
                ))}
              </div>
              <div data-aos="fade-down-left" className="third-row-second-div">
                <h3>Research</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Imperdiet ac sem id
                  ornare leo purus. Commodo urna sit blandit in gravida
                  facilisis aenean dui. Tortor vitae at neque et dictumst sit
                  facilisis vulputate. Tortor volutpat nunc at sed facilisis
                  tellus.
                </p>
                {[
                  '»Lorem ipsum sit molestie',
                  '»Lorem ipsum',
                  '»Lorem ipsum urna',
                  '»Lorem ipsum arcu dignissim malesuada',
                  '»Lorem ipsum',
                ].map((txt, i) => (
                  <span
                    key={i}
                    onClick={() => onComingSoon('Research Programmes')}
                  >
                    {txt}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section className="achievements-section">
        <div className="container">
          <h2>Our Achievements</h2>

          <div className="achievements-grid">
            {[
              {
                num: '3',
                suffix: 'rd',
                title: 'IN ASIA',
                highlight: 'for Master of IT in Business',
                desc: 'Lorem ipsum dolor sit amet consectetur. Dolor laoreet id quam volutpat purus.',
              },
              {
                num: '15',
                suffix: 'th',
                title: 'IN WORLDWIDE',
                highlight: 'amongst Specialist Universities',
                desc: 'Lorem ipsum dolor sit amet consectetur. Dolor laoreet id quam volutpat purus.',
              },
              {
                num: '2',
                suffix: 'nd',
                title: 'IN INDIA',
                highlight: 'to achieve AAHRPP accreditation',
                desc: 'Lorem ipsum dolor sit amet consectetur. Dolor laoreet id quam volutpat purus.',
              },
              {
                num: '17',
                suffix: 'th',
                title: 'IN THE WORLD',
                highlight: 'for Master of IT in Business',
                desc: 'Lorem ipsum dolor sit amet consectetur. Vel metus nisl congue scelerisque amet. Nisl pretium eget mauris accumsan in aliquet commodo.',
              },
              {
                num: '5',
                suffix: 'th',
                title: 'GLOBALLY',
                highlight: 'in Software Engineering',
                desc: 'Lorem ipsum dolor sit amet consectetur. Morbi hac morbi elementum habitant sed. Lacus massa convallis est amet.',
              },
              {
                num: '1',
                suffix: 'st',
                title: 'IN MEGHALAYA',
                highlight: 'for B.Tech of IT in AIML',
                desc: 'Lorem ipsum dolor sit amet consectetur. Dolor laoreet id quam volutpat purus.',
              },
            ].map((item, idx) => (
              <div key={idx} data-aos="zoom-in" className="achievement-card">
                <h3>
                  <span className="number">{item.num}</span>
                  <span className="suffix">{item.suffix}</span>
                </h3>
                <h4>{item.title}</h4>
                <p className="highlight">{item.highlight}</p>
                <hr />
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOICES SECTION */}
      <section className="voice-section">
        <div className="voice-section-div">
          <div data-aos="zoom-in-right" className="voice-section-first-div">
            <h3>Voices of UMOID</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Vel malesuada vitae
              ullamcorper quis sit lectus. Malesuada quis at libero amet. Et
              phasellus et dictum vulputate purus sed neque. Elit sed volutpat
              neque facilisis sed quam augue. Pulvinar amet tempor est nullam
              cras est aliquam at. Tortor feugiat adipiscing tortor adipiscing
              massa. Ullamcorper lorem hendrerit euismod id. Laoreet vitae
              lectus odio adipiscing massa sed. Eget ornare scelerisque sed
              mollis elementum pellentesque sodales neque.
            </p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => onComingSoon('Voices of UMOID')}
            >
              READ MORE
            </button>
          </div>
          <div data-aos="zoom-in" className="voice-section-second-div">
            <div className="voice-section-imge">
              <img
                src="./Assets/Rectangle 281.png"
                alt="The Society of Jesus"
              />
            </div>
            <div className="voice-section-content">
              <h3>The Society of Jesus</h3>
              <span>Founder</span>
              <p>
                Lorem ipsum dolor sit amet consectetur. Velit ipsum vulputate
                nunc varius feugiat id dictum. Consectetur at nunc facilisi
                accumsan vulputate in mauris. Maecenas in sed integer varius
                amet.
              </p>
            </div>
          </div>
          <div data-aos="zoom-in-left" className="voice-section-third-div">
            <div className="voice-section-imge">
              <img
                src="./Assets/Rectangle 281 (1).png"
                alt="Dr. Sunny Augustine SJ"
              />
            </div>
            <div className="voice-section-content">
              <h3>Dr. Sunny Augustine SJ”</h3>
              <span>Principal -Director</span>
              <p>
                Lorem ipsum dolor sit amet consectetur. Velit ipsum vulputate
                nunc varius feugiat id dictum. Consectetur at nunc facilisi
                accumsan vulputate in mauris. Maecenas in sed integer varius
                amet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE SEARCH SECTION */}
      <section className="course-section">
        <div className="course-section-img-div">
          <img src="./Assets/Rectangle 254.png" alt="Course Search" />
        </div>
        <div className="course-section-content">
          <h3>Looking for a Course or Degree?</h3>
          <div className="search-container">
            <input
              type="text"
              value={courseQuery}
              onChange={(e) => setCourseQuery(e.target.value)}
              placeholder="e.g. Accountancy, Business, Higher Secondary..."
            />
            <button
              type="button"
              onClick={() =>
                onComingSoon(
                  courseQuery.trim()
                    ? `Course Search: "${courseQuery.trim()}"`
                    : 'Course Search'
                )
              }
            >
              SEARCH
            </button>
          </div>
        </div>
      </section>

      {/* STUDENTS TESTIMONIAL SECTION */}
      <section className="students-section">
        <div className="students-header" data-aos="fade-up">
          <h2>
            What Our <br />
            <span>Students Say</span>
          </h2>
          <button
            type="button"
            className="review-btn"
            onClick={() => onComingSoon('Student Reviews')}
          >
            VIEW ALL REVIEWS
          </button>
        </div>

        <div className="students-content">
          <div className="student-cards" data-aos="fade-left">
            <div
              className="student-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="./Assets/Rectangle 241.png"
                alt="Rohini Kharsyntiew"
              />
              <h4>Rohini Kharsyntiew</h4>
              <p>
                B.Sc. Computer Science
                <br />
                (Class of 2023)
              </p>
            </div>

            <div
              className="student-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src="./Assets/Rectangle 245.png" alt="Anjali Rai" />
              <h4>Anjali Rai</h4>
              <p>
                B.Com
                <br />
                (Class of 2024)
              </p>
            </div>

            <div
              className="student-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img src="./Assets/Rectangle 244.png" alt="David Nongkynrih" />
              <h4>David Nongkynrih</h4>
              <p>
                B.Ed.
                <br />
                (Class of 2022)
              </p>
            </div>
          </div>

          <div className="student-review" data-aos="fade-right">
            <div className="review-text">
              <p>
                “Studying at St. Xavier’s Umoid was a life-changing experience.
                The professors truly care about your growth, and the campus
                environment fosters learning and leadership.”
              </p>
              <h4>
                <a
                  href="#pramod"
                  onClick={(e) =>
                    handleLink(e, 'Student Profile: Pramod Hajong')
                  }
                >
                  Pramod Hajong
                </a>
              </h4>
              <p>B.A. English (Class of 2024)</p>
            </div>
            <div className="review-img">
              <img src="./Assets/Rectangle 239.png" alt="Pramod Hajong" />
            </div>
          </div>
        </div>
      </section>

      {/* NEWS & EVENTS SECTION */}
      <section className="news-section">
        <div className="news-container">
          <div className="news-header">
            <h2>News &amp; Events</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Quisquem in sit sed velit
              et neque leo sed a. Mi ullamcorper volutpat adipiscing mauris
              pulvinar elit morbi ac quam.
            </p>
            <div className="news-nav">
              <div className="arrow-btn">
                <img
                  src="./Assets/Frame 168.png"
                  alt="Previous News"
                  onClick={() => onComingSoon('Previous News')}
                />
                <img
                  src="./Assets/Frame 167.png"
                  alt="Next News"
                  onClick={() => onComingSoon('Next News')}
                />
              </div>
            </div>
          </div>

          <div className="news-cards">
            <div className="news-card">
              <img src="./Assets/Rectangle 217.png" alt="Research Center" />
              <div className="card-overlay">
                <h3>Research Center Inaugurated</h3>
                <p className="date">Published on 07 Oct, 2025</p>
                <p>St. Xavier’s introduces a state-of-the-art research...</p>
                <a
                  href="#news1"
                  className="btn btn-group"
                  onClick={(e) => handleLink(e, 'Research Center News')}
                >
                  READ MORE
                </a>
              </div>
            </div>

            <div className="news-card">
              <img src="./Assets/Rectangle 218.png" alt="Admissions 2025" />
              <div className="card-overlay">
                <h3>Admissions 2025 Now Open</h3>
                <p className="date">Published on 01 Oct, 2025</p>
                <p>Applications are now being accepted for undergraduate...</p>
                <a
                  href="#news2"
                  className="btn btn-group"
                  onClick={(e) => handleLink(e, 'Admissions 2025')}
                >
                  APPLY NOW
                </a>
              </div>
            </div>

            <div className="news-card">
              <img src="./Assets/Rectangle 219.png" alt="Annual Sports Meet" />
              <div className="card-overlay">
                <h3>Annual Sports Meet 2025</h3>
                <p className="date">Published on 27 Sep, 2025</p>
                <p>An energetic week of athletics, teamwork, and fun...</p>
                <a
                  href="#news3"
                  className="btn btn-group"
                  onClick={(e) => handleLink(e, 'Annual Sports Meet Gallery')}
                >
                  VIEW GALLERY
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY PLACEMENT SECTION */}
      <section className="company-ad">
        <div className="container">
          <div className="company-ad-content">
            <h3>Top Tier Companies of our Placement Network</h3>
            <p style={{ color: '#1E40AF' }}>
              Lorem ipsum dolor sit amet consectetur. Amet semper orci id et.
              Fames facilisis molestie eu velit penatibus mauris quam. Donec
              mattis nibh nec diam.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onComingSoon('Placement Network')}
            >
              VIEW ALL
            </button>
          </div>
        </div>
      </section>

      <section className="company-logo-section">
        <div className="logo-slider">
          <div className="slide-track">
            {[
              './Assets/Rectangle 221.png',
              './Assets/Rectangle 222.png',
              './Assets/Rectangle 223.png',
              './Assets/Rectangle 224.png',
              './Assets/Rectangle 225.png',
              './Assets/Rectangle 226.png',
              './Assets/Rectangle 221.png',
              './Assets/Rectangle 222.png',
              './Assets/Rectangle 223.png',
              './Assets/Rectangle 224.png',
              './Assets/Rectangle 225.png',
              './Assets/Rectangle 226.png',
            ].map((logo, idx) => (
              <img key={idx} src={logo} alt="Partner Logo" />
            ))}
          </div>
        </div>
      </section>

      {/* VISIT SECTION */}
      <section className="visit-section">
        <div className="visit-section-content">
          <h3>
            Visit Our <br />
            St. Xavier’s Umoid
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Convallis in quis
            scelerisque sem. Mauris morbi placerat vitae tincidunt. Ultricies
            amet enim nulla tempor. Proin accumsan velit arcu sit est viverra
            massa ipsum.
          </p>
          <button
            type="button"
            className="btn btn-group btn-primary"
            onClick={() => onComingSoon('Contact Us')}
          >
            Contact US
          </button>
        </div>
      </section>

      {/* MEMORIES SECTION */}
      <section className="memories-section">
        <div className="container1">
          <div className="memories-section-header">
            <h3>Our Precious Memories</h3>
            <button
              type="button"
              className="btn btn-group btn-primary"
              onClick={() => onComingSoon('Memories Gallery')}
            >
              VISIT GALLERY
            </button>
          </div>
          <div className="memories-section-img">
            <div className="memories-section-img-first">
              <img
                data-aos="zoom-in-right"
                className="memory-tall-img"
                src="./Assets/Rectangle 266.png"
                alt="Campus Memory"
              />
              <img
                data-aos="zoom-in-right"
                className="first-flex-img"
                src="./Assets/Rectangle 270.png"
                alt="Campus Memory"
              />
              <img
                data-aos="zoom-in-right"
                className="first-flex-img"
                src="./Assets/Rectangle 271.png"
                alt="Campus Memory"
              />
            </div>
            <div className="memories-section-img-second">
              <img
                data-aos="zoom-in-left"
                className="memory-wide-img"
                src="./Assets/Rectangle 267.png"
                alt="Campus Memory"
              />
              <div className="flex-img">
                <img
                  data-aos="zoom-in-left"
                  className="memory-half-img"
                  src="./Assets/Rectangle 268.png"
                  alt="Campus Memory"
                />
                <img
                  data-aos="zoom-in-left"
                  className="memory-half-img"
                  src="./Assets/Rectangle 269.png"
                  alt="Campus Memory"
                />
              </div>
              <img
                data-aos="zoom-in-left"
                className="memory-medium-img"
                src="./Assets/Rectangle 272.png"
                alt="Campus Memory"
              />
              <img
                data-aos="zoom-in-left"
                className="memory-medium-img"
                src="./Assets/Rectangle 273.png"
                alt="Campus Memory"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REQUEST CALLBACK SECTION */}
      <section className="request-callback-section">
        <div className="request-calback-content">
          <h3>
            Admission for <br />
            Higher Secondary Education
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Convallis in quis
            scelerisque sem. Mauris morbi placerat vitae tincidunt. Ultricies
            amet enim nulla tempor. Proin accumsan velit arcu sit est viverra
            massa ipsum.
          </p>
        </div>
        <div className="callback-container">
          <div className="input-section">
            <div className="input-group">
              <select className="country-code" defaultValue="+91">
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input type="tel" placeholder="Student Mobile No" />
            </div>
            <button
              type="button"
              className="btn request-btn"
              onClick={() => onComingSoon('Request Callback')}
            >
              REQUEST CALLBACK
            </button>
          </div>
          <button
            type="button"
            className="btn prospectus-btn btn-swipe"
            onClick={() => onComingSoon('Download Prospectus')}
          >
            DOWNLOAD PROSPECTUS
          </button>
        </div>
      </section>

      <Footer onComingSoon={onComingSoon} onNavigate={onNavigate} />
    </div>
  );
}
