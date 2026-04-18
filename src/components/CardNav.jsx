import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';

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

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleDropdownEnter = (idx) => {
    setOpenDropdown(idx);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <div
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
          borderRadius: 18,
          padding: '12px 28px',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          alignItems: 'center',
          boxShadow: '0 14px 40px rgba(11,60,93,0.12)',
        }}
      >
        {/* LOGO – LEFT */}
        <img
          src={logo}
          alt={logoAlt}
          style={{
            height: 50,
            width: 'auto',
            objectFit: 'contain',
          }}
        />

        {/* NAV LINKS – CENTER */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 32,
            position: 'relative',
          }}
        >
          {pages.map((page, idx) => 
            page.submenu ? (
              <div
                key={idx}
                onMouseEnter={() => handleDropdownEnter(idx)}
                onMouseLeave={handleDropdownLeave}
                style={{
                  position: 'relative',
                  paddingBottom: openDropdown === idx ? 8 : 0,
                  transition: 'padding 0.1s ease',
                }}
              >
                <button
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: textColor,
                    fontSize: 15,
                    fontWeight: 500,
                    letterSpacing: '0.3px',
                    cursor: 'pointer',
                    padding: '6px 2px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#1F7AE0';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = textColor;
                  }}
                >
                  {page.label}
                  <FiChevronDown size={16} style={{ marginLeft: 4, transition: 'transform 0.2s ease' }} />
                </button>

                {/* DROPDOWN MENU */}
                {openDropdown === idx && (
                  <div
                    onMouseEnter={() => handleDropdownEnter(idx)}
                    onMouseLeave={handleDropdownLeave}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      background: baseColor,
                      border: `1px solid #E6EEF5`,
                      borderRadius: 12,
                      marginTop: 0,
                      boxShadow: '0 10px 30px rgba(11,60,93,0.15)',
                      minWidth: 240,
                      zIndex: 1000,
                      overflow: 'hidden',
                    }}
                  >
                    {page.submenu.map((item, subIdx) => (
                      <Link
                        key={subIdx}
                        to={item.path}
                        style={{
                          display: 'block',
                          padding: '12px 20px',
                          color: textColor,
                          textDecoration: 'none',
                          fontSize: 14,
                          fontWeight: 500,
                          borderBottom: subIdx < page.submenu.length - 1 ? `1px solid #F0F4F8` : 'none',
                          transition: 'all 0.2s ease',
                          background: 'transparent',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#F0F4F8';
                          e.target.style.color = '#2ECC71';
                          e.target.style.paddingLeft = '24px';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.color = textColor;
                          e.target.style.paddingLeft = '20px';
                        }}
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
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: textColor,
                  fontSize: 15,
                  fontWeight: 500,
                  letterSpacing: '0.3px',
                  cursor: 'pointer',
                  padding: '6px 2px',
                  position: 'relative',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#1F7AE0';
                  e.target.style.borderBottom = '2px solid #2ECC71';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = textColor;
                  e.target.style.borderBottom = '2px solid transparent';
                }}
              >
                {page.label}
              </Link>
            ) : (
              <button
                key={idx}
                onClick={() => scrollToSection(page.targetId)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: textColor,
                  fontSize: 15,
                  fontWeight: 500,
                  letterSpacing: '0.3px',
                  cursor: 'pointer',
                  padding: '6px 2px',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#1F7AE0';
                  e.target.style.borderBottom = '2px solid #2ECC71';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = textColor;
                  e.target.style.borderBottom = '2px solid transparent';
                }}
              >
                {page.label}
              </button>
            )
          )}
        </div>

        {/* CTA – RIGHT */}
        <button
          onClick={() => scrollToSection('contact')}
          style={{
            background: buttonBgColor,
            color: buttonTextColor,
            border: 'none',
            borderRadius: 14,
            padding: '10px 28px',
            fontWeight: 600,
            minHeight: 42,
            fontFamily: '15px/1.2 "Poppins", sans-serif',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            boxShadow: '0 8px 22px rgba(46,204,113,0.35)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-1px)';
            e.target.style.boxShadow = '0 12px 28px rgba(46,204,113,0.45)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 22px rgba(46,204,113,0.35)';
          }}
        >
          Get in Touch
        </button>
      </nav>
    </div>
  );
}
