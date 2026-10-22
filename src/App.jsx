import React, { useState, useEffect, useCallback } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import ComingSoonModal from './components/ComingSoonModal';

function getInitialPage() {
  const hash = window.location.hash.replace('#', '').toLowerCase();
  const path = window.location.pathname.toLowerCase();
  if (hash === 'login' || path.endsWith('login.html')) {
    if (path.endsWith('studentlogin.html')) return 'dashboard';
    return 'login';
  }
  if (hash === 'dashboard' || path.endsWith('studentlogin.html')) {
    return 'dashboard';
  }
  return 'home';
}

export default function App() {
  const [page, setPage] = useState(getInitialPage);
  const [comingSoonItem, setComingSoonItem] = useState(null);

  const handleComingSoon = useCallback((name) => {
    setComingSoonItem({
      name: name || 'This Section',
      id: Date.now() + Math.random(),
    });
  }, []);

  const handleCloseComingSoon = useCallback(() => {
    setComingSoonItem(null);
  }, []);

  const handleNavigate = useCallback((targetPage) => {
    setPage(targetPage);
    if (targetPage === 'home') {
      window.history.pushState(null, '', './');
    } else {
      window.history.pushState(null, '', `#${targetPage}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const onPopState = () => {
      setPage(getInitialPage());
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (typeof window.AOS !== 'undefined') {
      window.AOS.init({
        duration: 1000,
        offset: 80,
        once: true,
        easing: 'ease-in-out',
      });
      window.AOS.refresh();
    }
  }, [page]);

  return (
    <>
      {page === 'home' && (
        <Home onComingSoon={handleComingSoon} onNavigate={handleNavigate} />
      )}
      {page === 'login' && (
        <Login onComingSoon={handleComingSoon} onNavigate={handleNavigate} />
      )}
      {page === 'dashboard' && (
        <StudentDashboard
          onComingSoon={handleComingSoon}
          onNavigate={handleNavigate}
        />
      )}
      <ComingSoonModal item={comingSoonItem} onClose={handleCloseComingSoon} />
    </>
  );
}
