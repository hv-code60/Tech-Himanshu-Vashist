import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Ribbons from '../Ribbons';

export default function MainLayout() {
  const isDesktop =
    typeof window !== 'undefined' && window.innerWidth > 1024;
  const location = useLocation();

  useEffect(() => {
    // Handle hash-based scrolling
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
        border: 'none',
        outline: 'none',
      }}
    >
      {/* Background ribbon effect */}
     {isDesktop && <Ribbons />}

      {/* Website content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          backgroundColor: '#FFFFFF',
          border: 'none',
          outline: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        <Navbar />
        <main style={{ flex: 1 }}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
