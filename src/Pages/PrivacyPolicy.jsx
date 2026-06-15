import React, { useRef, useState, useEffect } from 'react';

/* ── Keyframes ─────────────────────────────────────────────── */

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

  @keyframes ppHeaderIn {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes ppArcExpand {
    from { transform: scaleX(0.6) scaleY(0.4); opacity: 0; }
    to   { transform: scaleX(1) scaleY(1); opacity: 1; }
  }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

/* ── Data ───────────────────────────────────────────────────── */

const sections = [
  {
    num: '01',
    title: 'Information we collect',
    type: 'list',
    items: [
      'Account information: when you create an account we may collect your name, email address, and any profile information you supply.',
      'Transaction & financial data: if you use invoicing or payment features, we may store invoices, amounts, dates and related metadata required to provide the service.',
      'Usage data: analytics data such as pages viewed, actions taken, and device/browser information to improve the app.',
    ],
  },
  {
    num: '02',
    title: 'How we use your information',
    type: 'text',
    body: 'We use information to operate, maintain, and improve the service, to provide customer support, and to process transactions. We do not sell personal data to advertisers.',
  },
  {
    num: '03',
    title: 'Cookies and tracking',
    type: 'text',
    body: 'We and our third-party partners may use cookies and similar technologies for analytics and to provide essential functionality. You can control cookie preferences through your browser settings.',
  },
  {
    num: '04',
    title: 'Third-party services',
    type: 'text',
    body: 'We may share data with third-party providers who help with analytics, payments, and cloud hosting. These providers are contractually required to protect your data and use it only to perform services for us.',
  },
  {
    num: '05',
    title: 'Data security',
    type: 'text',
    body: 'We implement reasonable technical and organizational measures to protect personal data. However, no method of transmission over the internet is 100% secure — if you believe your account has been compromised, contact us.',
  },
  {
    num: '06',
    title: "Children's privacy",
    type: 'text',
    body: 'The service is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have such data, please contact us to request deletion.',
  },
  {
    num: '07',
    title: 'Changes to this policy',
    type: 'text',
    body: 'We may update this policy from time to time. We will post changes here with an updated effective date. Continued use after changes indicates acceptance of the new policy.',
  },
  {
    num: '08',
    title: 'Contact us',
    type: 'contact',
    body: 'If you have questions or requests about your personal data, please contact us at',
    email: 'toniSedjoah@gmail.com',
  },
];

/* ── Scroll-reveal hook ─────────────────────────────────────── */

function useFadeIn(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── Section card ───────────────────────────────────────────── */

const PolicyCard = ({ section, index }) => {
  const { ref, visible } = useFadeIn();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#ffffff',
        border: `1px solid ${hovered ? '#bfdbfe' : '#e9ecf0'}`,
        borderRadius: 16,
        padding: '1.75rem',
        boxShadow: hovered
          ? '0 4px 20px rgba(59,130,246,0.10)'
          : '0 1px 4px rgba(0,0,0,0.04)',
        transition: 'box-shadow 0.25s ease, border-color 0.25s ease, opacity 0.55s ease, transform 0.55s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${index * 60}ms`,
      }}
    >
      {/* Number + title row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
        <span
          style={{
            flexShrink: 0,
            width: 36,
            height: 36,
            borderRadius: 10,
            background: hovered ? '#3b82f6' : '#eff6ff',
            color: hovered ? '#ffffff' : '#3b82f6',
            fontSize: '0.68rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.25s ease, color 0.25s ease',
            letterSpacing: '0.05em',
          }}
        >
          {section.num}
        </span>
        <h2
          style={{
            fontSize: '1rem',
            fontWeight: 700,
            color: '#111827',
            lineHeight: 1.3,
          }}
        >
          {section.title}
        </h2>
      </div>

      {/* Content */}
      {section.type === 'list' && (
        <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {section.items.map((item, i) => (
            <li
              key={i}
              style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: 1.7 }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {section.type === 'text' && (
        <p style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: 1.75, margin: 0 }}>
          {section.body}
        </p>
      )}

      {section.type === 'contact' && (
        <p style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: 1.75, margin: 0 }}>
          {section.body}{' '}
          <a
            href={`mailto:${section.email}`}
            style={{ color: '#1d4ed8', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid #93c5fd' }}
          >
            {section.email}
          </a>
          .
        </p>
      )}
    </div>
  );
};

/* ── Main page ──────────────────────────────────────────────── */

const PrivacyPolicy = () => {
  return (
    <>
      <style>{STYLES}</style>

      <main
        style={{
          minHeight: '100vh',
          background: '#f8f9fc',
          fontFamily: "'Inter', system-ui, sans-serif",
          WebkitFontSmoothing: 'antialiased',
        }}
      >

        {/* ── Header ─────────────────────────────────────────── */}
        <header
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 60%, #60a5fa 100%)',
            padding: '7rem 1.5rem 6rem',
            textAlign: 'center',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              maxWidth: '40rem',
              margin: '0 auto',
              animation: 'ppHeaderIn 0.8s ease-out both',
            }}
          >
            <p
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.75)',
                marginBottom: '1rem',
              }}
            >
              Legal
            </p>
            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                marginBottom: '1rem',
              }}
            >
              Privacy Policy
            </h1>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
              Last updated: June 10, 2026
            </p>
          </div>

          {/* Arc */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: -2,
              left: '-5%',
              width: '110%',
              height: 72,
              background: '#f8f9fc',
              borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
              animation: 'ppArcExpand 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.4s both',
            }}
          />
        </header>

        {/* ── Intro blurb ────────────────────────────────────── */}
        <div style={{ maxWidth: '52rem', margin: '0 auto', padding: '3rem 1.25rem 0' }}>
          <p
            style={{
              fontSize: '0.9375rem',
              color: '#6b7280',
              lineHeight: 1.8,
              background: '#ffffff',
              border: '1px solid #e9ecf0',
              borderRadius: 14,
              padding: '1.25rem 1.5rem',
              boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            }}
          >
            Welcome to Spend. Your privacy matters to us. This Privacy Policy explains
            what information we collect, how we use it, and the choices you have.
          </p>
        </div>

        {/* ── Policy cards ───────────────────────────────────── */}
        <section
          style={{
            maxWidth: '52rem',
            margin: '0 auto',
            padding: '2rem 1.25rem 5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          {sections.map((s, i) => (
            <PolicyCard key={i} section={s} index={i} />
          ))}
        </section>

        {/* ── Footer note ────────────────────────────────────── */}
        <div
          style={{
            maxWidth: '52rem',
            margin: '0 auto',
            padding: '0 1.25rem 5rem',
          }}
        >
          <p
            style={{
              fontSize: '0.8rem',
              color: '#9ca3af',
              lineHeight: 1.7,
              textAlign: 'center',
              borderTop: '1px solid #e9ecf0',
              paddingTop: '1.5rem',
            }}
          >
            This Privacy Policy describes how Spend handles your personal information.
            It does not create any contractual rights beyond those in our Terms of Service.
          </p>
        </div>

      </main>
    </>
  );
};

export default PrivacyPolicy;