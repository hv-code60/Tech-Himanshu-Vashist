import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiX, FiMenu } from 'react-icons/fi';

export default function CardNav({
  logo,
  logoAlt = 'Zyntraa Solutions',
  pages = [],
  baseColor = '#FFFFFF',
  textColor = '#0B3C5D',
  buttonBgColor = '#2ECC71',
  buttonTextColor = '#FFFFFF',
}) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [mobileOpen]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollToSection = (id) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

  return (
    <div
      ref={navRef}
      style={{
        position: 'fixed',
        top: '1.25rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '92%',
        maxWidth: 1180,
        zIndex: 100,
      }}
    >
      <nav
        style={{
          background: baseColor,
          borderRadius: mobileOpen ? '18px 18px 0 0' : 18,
          padding: isMobile ? '10px 18px' : '12px 28px',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr auto' : 'auto 1fr auto',
          alignItems: 'center',
          boxShadow: '0 14px 40px rgba(11,60,93,0.12)',
          transition: 'border-radius 0.2s ease',
        }}
      >
        {/* LOGO */}
        <img
          src={logo}
          alt={logoAlt}
          style={{ height: isMobile ? 38 : 50, width: 'auto', objectFit: 'contain' }}
        />

        {/* DESKTOP NAV LINKS */}
        {!isMobile && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 32, position: 'relative' }}>
            {pages.map((page, idx) =>
              page.submenu ? (
                <div
                  key={idx}
                  onMouseEnter={() => setOpenDropdown(idx)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  style={{ position: 'relative', paddingBottom: openDropdown === idx ? 8 : 0, transition: 'padding 0.1s ease' }}
                >
                  <button
                    style={{ background: 'transparent', border: 'none', color: textColor, fontSize: 15, fontWeight: 500, letterSpacing: '0.3px', cursor: 'pointer', padding: '6px 2px', display: 'flex', alignItems: 'center', gap: 4 }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#1F7AE0'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = textColor; }}
                  >
                    {page.label}
                    <FiChevronDown size={16} style={{ marginLeft: 4, transition: 'transform 0.2s ease', transform: openDropdown === idx ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </button>

                  {openDropdown === idx && (
                    <div
                      onMouseEnter={() => setOpenDropdown(idx)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      style={{ position: 'absolute', top: '100%', left: 0, background: baseColor, border: '1px solid #E6EEF5', borderRadius: 12, marginTop: 0, boxShadow: '0 10px 30px rgba(11,60,93,0.15)', minWidth: 260, zIndex: 1000, overflow: 'hidden' }}
                    >
                      {page.submenu.map((item, subIdx) => (
                        <Link
                          key={subIdx}
                          to={item.path}
                          style={{ display: 'block', padding: '12px 20px', color: textColor, textDecoration: 'none', fontSize: 14, fontWeight: 500, borderBottom: subIdx < page.submenu.length - 1 ? '1px solid #F0F4F8' : 'none', transition: 'all 0.2s ease', background: 'transparent' }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = '#F0F4F8'; e.currentTarget.style.color = '#2ECC71'; e.currentTarget.style.paddingLeft = '24px'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = textColor; e.currentTarget.style.paddingLeft = '20px'; }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : page.path ? (
                <Link
                  key={idx}
                  to={page.path}
                  style={{ background: 'transparent', border: 'none', color: textColor, fontSize: 15, fontWeight: 500, letterSpacing: '0.3px', cursor: 'pointer', padding: '6px 2px', textDecoration: 'none', borderBottom: '2px solid transparent' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#1F7AE0'; e.currentTarget.style.borderBottom = '2px solid #2ECC71'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = textColor; e.currentTarget.style.borderBottom = '2px solid transparent'; }}
                >
                  {page.label}
                </Link>
              ) : (
                <button
                  key={idx}
                  onClick={() => scrollToSection(page.targetId)}
                  style={{ background: 'transparent', border: 'none', color: textColor, fontSize: 15, fontWeight: 500, letterSpacing: '0.3px', cursor: 'pointer', padding: '6px 2px', borderBottom: '2px solid transparent' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#1F7AE0'; e.currentTarget.style.borderBottom = '2px solid #2ECC71'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = textColor; e.currentTarget.style.borderBottom = '2px solid transparent'; }}
                >
                  {page.label}
                </button>
              )
            )}
          </div>
        )}

        {/* RIGHT: CTA (desktop) OR Hamburger (mobile) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {!isMobile && (
            <button
              onClick={() => scrollToSection('contact')}
              style={{ background: buttonBgColor, color: buttonTextColor, border: 'none', borderRadius: 14, padding: '10px 28px', fontWeight: 600, fontSize: 15, minHeight: 42, cursor: 'pointer', whiteSpace: 'nowrap', boxShadow: '0 8px 22px rgba(46,204,113,0.35)', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(46,204,113,0.45)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 22px rgba(46,204,113,0.35)'; }}
            >
              Get in Touch
            </button>
          )}

          {isMobile && (
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 6, color: textColor }}
            >
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          )}
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      {isMobile && (
        <div
          style={{
            background: baseColor,
            borderRadius: '0 0 18px 18px',
            boxShadow: '0 20px 40px rgba(11,60,93,0.15)',
            overflow: 'hidden',
            maxHeight: mobileOpen ? '80vh' : 0,
            overflowY: 'auto',
            transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
            borderTop: mobileOpen ? '1px solid #F0F4F8' : 'none',
          }}
        >
          <div style={{ padding: '8px 0 16px' }}>
            {pages.map((page, idx) =>
              page.submenu ? (
                <div key={idx}>
                  <button
                    onClick={() => setMobileExpanded((v) => (v === idx ? null : idx))}
                    style={{ width: '100%', background: 'transparent', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 24px', color: textColor, fontSize: 15, fontWeight: 600, cursor: 'pointer' }}
                  >
                    {page.label}
                    <FiChevronDown size={16} style={{ transition: 'transform 0.25s', transform: mobileExpanded === idx ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </button>

                  <div style={{ maxHeight: mobileExpanded === idx ? 400 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease', background: '#F8FBFF' }}>
                    {page.submenu.map((item, subIdx) => (
                      <Link
                        key={subIdx}
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        style={{ display: 'block', padding: '11px 36px', color: textColor, textDecoration: 'none', fontSize: 14, fontWeight: 500, borderBottom: subIdx < page.submenu.length - 1 ? '1px solid #EEF2F6' : 'none' }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#2ECC71'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = textColor; }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : page.path ? (
                <Link
                  key={idx}
                  to={page.path}
                  onClick={() => setMobileOpen(false)}
                  style={{ display: 'block', padding: '13px 24px', color: textColor, textDecoration: 'none', fontSize: 15, fontWeight: 600, borderBottom: '1px solid #F0F4F8' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#2ECC71'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = textColor; }}
                >
                  {page.label}
                </Link>
              ) : (
                <button
                  key={idx}
                  onClick={() => scrollToSection(page.targetId)}
                  style={{ width: '100%', textAlign: 'left', background: 'transparent', border: 'none', padding: '13px 24px', color: textColor, fontSize: 15, fontWeight: 600, cursor: 'pointer', borderBottom: '1px solid #F0F4F8' }}
                >
                  {page.label}
                </button>
              )
            )}

            {/* Mobile CTA */}
            <div style={{ padding: '16px 24px 4px' }}>
              <button
                onClick={() => scrollToSection('contact')}
                style={{ width: '100%', background: buttonBgColor, color: buttonTextColor, border: 'none', borderRadius: 12, padding: '13px 20px', fontWeight: 700, fontSize: 15, cursor: 'pointer', boxShadow: '0 8px 22px rgba(46,204,113,0.30)' }}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}