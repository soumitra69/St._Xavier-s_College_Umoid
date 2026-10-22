import React, { useEffect } from 'react';

export default function ComingSoonModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  const cleanName = (item.name || 'This Section')
    .replace(/▾/g, '')
    .replace(/»/g, '')
    .replace(/●/g, '')
    .trim();

  return (
    <div
      id="comingSoonModal"
      className="coming-soon-modal active"
      role="dialog"
      aria-modal="true"
      aria-labelledby="comingSoonTitle"
      onClick={(e) => {
        if (
          e.target.id === 'comingSoonModal' ||
          e.target.classList.contains('coming-soon-backdrop')
        ) {
          onClose();
        }
      }}
    >
      <div className="coming-soon-backdrop"></div>
      <div className="coming-soon-card" key={item.id}>
        <button
          type="button"
          className="coming-soon-close close-btn"
          aria-label="Close"
          onClick={onClose}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="coming-soon-icon-wrap">
          <i className="fa-solid fa-rocket"></i>
        </div>
        <span className="coming-soon-badge">COMING SOON</span>
        <h3 id="comingSoonTitle">{cleanName} — Coming Soon!</h3>
        <p id="comingSoonDesc">
          The &ldquo;{cleanName}&rdquo; section of St. Xavier&apos;s College
          Umoid is currently under development and will be launching soon. Stay
          tuned!
        </p>
        <div className="coming-soon-actions">
          <button
            type="button"
            className="coming-soon-ok-btn"
            onClick={onClose}
          >
            Got It, Thanks!
          </button>
        </div>
      </div>
    </div>
  );
}
