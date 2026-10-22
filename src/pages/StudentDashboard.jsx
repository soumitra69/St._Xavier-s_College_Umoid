import React from 'react';

export default function StudentDashboard({ onComingSoon, onNavigate }) {
  return (
    <div className="dashboard-page-wrapper">
      {/* Top Bar */}
      <nav className="dashboard-top-nav">
        <div className="dashboard-top-inner">
          <div className="dashboard-user-info">
            <div className="dashboard-avatar">
              <i className="fa-solid fa-user-graduate"></i>
            </div>
            <div>
              <h1>Student Portal</h1>
              <p>ALEX JOHNSON</p>
            </div>
          </div>

          <div className="dashboard-nav-links">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
            >
              Main Website
            </a>
            <a
              href="#courses"
              onClick={(e) => {
                e.preventDefault();
                onComingSoon('Courses');
              }}
            >
              Courses
            </a>
            <a
              href="#grades"
              onClick={(e) => {
                e.preventDefault();
                onComingSoon('Grades & Transcripts');
              }}
            >
              Grades
            </a>
            <a
              href="#attendance"
              onClick={(e) => {
                e.preventDefault();
                onComingSoon('Attendance');
              }}
            >
              Attendance
            </a>
            <a
              href="#library"
              onClick={(e) => {
                e.preventDefault();
                onComingSoon('Digital Library');
              }}
            >
              Library
            </a>
          </div>

          <div className="dashboard-actions">
            <button
              type="button"
              className="dashboard-icon-btn"
              onClick={() => onComingSoon('Notifications')}
              aria-label="Notifications"
            >
              <i className="fa-solid fa-bell"></i>
            </button>
            <button
              type="button"
              className="dashboard-icon-btn"
              onClick={() => onComingSoon('Dashboard Search')}
              aria-label="Search"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button
              type="button"
              className="dashboard-home-btn"
              onClick={() => onNavigate('home')}
            >
              Home
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-welcome">
          <h2>Hello, Alex! 👋</h2>
          <p>You have 3 classes and 2 deadlines today.</p>
        </div>

        {/* KPI Cards */}
        <div className="dashboard-kpi-grid">
          <div className="dashboard-kpi-card center">
            <div className="dashboard-gpa-circle">
              <span>3.85</span>
            </div>
            <p className="dashboard-kpi-label">Academic GPA</p>
          </div>

          <div className="dashboard-kpi-card">
            <div className="dashboard-kpi-top">
              <div className="dashboard-kpi-icon">
                <i className="fa-solid fa-calendar-check"></i>
              </div>
              <span className="dashboard-status-pill">ON TRACK</span>
            </div>
            <div className="dashboard-kpi-bottom">
              <h3>94%</h3>
              <p className="dashboard-kpi-label">Attendance</p>
            </div>
          </div>
        </div>

        <div className="dashboard-two-col">
          {/* Today's Schedule */}
          <section className="dashboard-panel">
            <div className="dashboard-panel-head">
              <h3>Today&apos;s Schedule</h3>
              <button
                type="button"
                onClick={() => onComingSoon('Full Academic Calendar')}
              >
                View Calendar
              </button>
            </div>

            <div className="dashboard-list">
              <div
                className="dashboard-class-card primary"
                onClick={() => onComingSoon('Advanced Physics II Details')}
              >
                <div className="dashboard-time">
                  <span>10:30</span>
                  <span>AM</span>
                </div>
                <div className="dashboard-class-info">
                  <h4>Advanced Physics II</h4>
                  <p>
                    <i className="fa-solid fa-location-dot"></i> Science Lab 402
                  </p>
                </div>
                <div className="dashboard-class-badge primary">
                  <i className="fa-solid fa-bolt"></i>
                </div>
              </div>

              <div
                className="dashboard-class-card amber"
                onClick={() => onComingSoon('Modern History Details')}
              >
                <div className="dashboard-time">
                  <span>01:15</span>
                  <span>PM</span>
                </div>
                <div className="dashboard-class-info">
                  <h4>Modern History</h4>
                  <p>
                    <i className="fa-solid fa-location-dot"></i> Main Auditorium
                  </p>
                </div>
                <div className="dashboard-class-badge amber">
                  <i className="fa-solid fa-landmark"></i>
                </div>
              </div>
            </div>
          </section>

          {/* Pending Tasks */}
          <section className="dashboard-panel">
            <div className="dashboard-panel-head">
              <h3>Pending Tasks</h3>
              <span className="dashboard-count-pill">4 TOTAL</span>
            </div>

            <div className="dashboard-list">
              <div
                className="dashboard-task-card"
                onClick={() => onComingSoon('Calculus Problem Set #4')}
              >
                <div className="dashboard-checkbox">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div>
                  <h4>Calculus Problem Set #4</h4>
                  <div className="dashboard-tags">
                    <span className="tag rose">DUE TODAY</span>
                    <span className="tag muted">Math Dept</span>
                  </div>
                </div>
              </div>

              <div
                className="dashboard-task-card"
                onClick={() => onComingSoon('History Essay Outline')}
              >
                <div className="dashboard-checkbox">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div>
                  <h4>History Essay Outline</h4>
                  <div className="dashboard-tags">
                    <span className="tag amber">2 DAYS LEFT</span>
                    <span className="tag muted">History</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Daily Study Goal */}
        <section className="dashboard-goal-card">
          <div className="dashboard-goal-top">
            <div>
              <h4>Daily Study Goal</h4>
              <p>Keep it up! You&apos;re almost there.</p>
            </div>
            <div className="dashboard-goal-icon">
              <i className="fa-solid fa-arrow-trend-up"></i>
            </div>
          </div>
          <div className="dashboard-goal-progress">
            <div className="dashboard-goal-labels">
              <span>3.5 / 5 hours</span>
              <span>70%</span>
            </div>
            <div className="dashboard-goal-bar">
              <div style={{ width: '70%' }}></div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Tab Navigation */}
      <div className="dashboard-bottom-bar">
        <div className="dashboard-bottom-inner">
          <button
            type="button"
            className="active"
            onClick={() => onComingSoon('Dashboard Home')}
          >
            <i className="fa-solid fa-table-cells-large"></i>
            <span>Home</span>
          </button>
          <button
            type="button"
            onClick={() => onComingSoon('Courses')}
          >
            <i className="fa-solid fa-book-open"></i>
            <span>Courses</span>
          </button>
          <button
            type="button"
            className="dashboard-fab"
            onClick={() => onComingSoon('Quick Action')}
            aria-label="Quick Action"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
          <button
            type="button"
            onClick={() => onComingSoon('Grades')}
          >
            <i className="fa-solid fa-chart-line"></i>
            <span>Grades</span>
          </button>
          <button
            type="button"
            onClick={() => onComingSoon('Student Profile')}
          >
            <i className="fa-solid fa-user"></i>
            <span>Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
