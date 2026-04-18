export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#081F2D',
        color: '#E6EEF5',
        padding: '10px 24px 30px',
        marginTop: '100px',
      }}
    >
      {/* Main Footer */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 40,
          marginBottom: 50,
        }}
      >
        {/* Brand */}
        <div>
          <h3
            style={{
              color: '#2ECC71',
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 16,
              letterSpacing: 0.6,
            }}
          >
            NexaH Technologies
          </h3>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.7,
              color: '#B8C6D1',
            }}
          >
            Delivering secure, scalable, and future-ready IT solutions that help businesses
            innovate, transform, and grow globally.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 18,
            }}
          >
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['Home', 'Services', 'Consulting', 'About Us', 'Contact'].map((link) => (
              <li key={link} style={{ marginBottom: 12 }}>
                <a
                  href={`#${link.toLowerCase().replace(' ', '')}`}
                  style={{
                    color: '#B8C6D1',
                    textDecoration: 'none',
                    fontSize: 14,
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#2ECC71')}
                  onMouseLeave={(e) => (e.target.style.color = '#B8C6D1')}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 18,
            }}
          >
            Our Services
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              'Software Development',
              'Cloud & DevOps',
              'Cyber Security',
              'Automation & AI',
              'IT Consulting',
            ].map((service) => (
              <li
                key={service}
                style={{
                  color: '#B8C6D1',
                  fontSize: 14,
                  marginBottom: 12,
                }}
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 18,
            }}
          >
            Contact Us
          </h4>
          <div
            style={{
              fontSize: 14,
              lineHeight: 1.9,
              color: '#B8C6D1',
            }}
          >
            <p>
              <strong style={{ color: '#2ECC71' }}>Email</strong>
              <br />
              info@zyntraasolutions.com
            </p>
            <p>
              <strong style={{ color: '#2ECC71' }}>Phone</strong>
              <br />
              +91 9319303073
            </p>
            <p>
              <strong style={{ color: '#2ECC71' }}>Location</strong>
              <br />
              India | Global Delivery
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          height: 1,
          background:
            'linear-gradient(90deg, transparent, rgba(46,204,113,0.4), transparent)',
          marginBottom: 30,
        }}
      />

      {/* Bottom Bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
          fontSize: 13,
          color: '#9FB0BE',
        }}
      >
        <div>
          © {currentYear} NexaH Technologies. All Rights Reserved.
        </div>

        <div style={{ display: 'flex', gap: 20 }}>
          {['Privacy Policy', 'Terms of Service'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '')}`}
              style={{
                color: '#9FB0BE',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#2ECC71')}
              onMouseLeave={(e) => (e.target.style.color = '#9FB0BE')}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
