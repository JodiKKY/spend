import React, { useRef, useState, useEffect } from 'react';

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
  @keyframes ppIconPop {
    0%   { transform: scale(0.5); opacity: 0; }
    70%  { transform: scale(1.15); }
    100% { transform: scale(1); opacity: 1; }
  }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

/* Data */

const sections = [
  {
    num: '01', title: 'Information we collect', type: 'list',
    items: [
      'Account information: when you create an account we may collect your name, email address, and any profile information you supply.',
      'Transaction & financial data: if you use invoicing or payment features, we may store invoices, amounts, dates and related metadata required to provide the service.',
      'Usage data: analytics data such as pages viewed, actions taken, and device/browser information to improve the app.',
    ],
  },
  {
    num: '02', title: 'How we use your information', type: 'text',
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
          ? '0 12px 28px rgba(37,99,235,0.12)'
          : '0 1px 4px rgba(15,23,42,0.04)',
        transition: 'box-shadow 0.25s ease, border-color 0.25s ease, opacity 0.55s ease, transform 0.55s ease',
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? 'translateY(-2px)' : 'translateY(0)'
          : 'translateY(24px)',
        transitionDelay: visible ? '0ms' : `${index * 60}ms`,
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
            background: hovered ? 'linear-gradient(135deg, #2563eb, #1d4ed8)' : '#eff6ff',
            color: hovered ? '#ffffff' : '#3b82f6',
            fontSize: '0.68rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: hovered ? '0 4px 14px rgba(37,99,235,0.35)' : 'none',
            transition: 'background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease',
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
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <>
      <style>{STYLES}</style>

      <main
        style={{
          minHeight: '100vh',
          background:
            'radial-gradient(at 50% 0%, rgba(59,130,246,0.07), transparent 55%), #f8f9fc',
          fontFamily: "'Inter', system-ui, sans-serif",
          WebkitFontSmoothing: 'antialiased',
        }}
      >

        {/* ── Header ─────────────────────────────────────────── */}
        <header
          style={{
            position: 'relative',
            background:
              'radial-gradient(at 18% 15%, rgba(96, 165, 250, 0.55) 0px, transparent 50%), ' +
              'radial-gradient(at 82% 0%, rgba(129, 140, 248, 0.45) 0px, transparent 50%), ' +
              'radial-gradient(at 92% 85%, rgba(45, 212, 191, 0.3) 0px, transparent 50%), ' +
              'radial-gradient(at 8% 95%, rgba(29, 78, 216, 0.6) 0px, transparent 50%), ' +
              '#10245c',
            padding: '7rem 1.5rem 6rem',
            textAlign: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Modern square mesh grid */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), ' +
                'linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              WebkitMaskImage:
                'radial-gradient(ellipse at 50% 25%, black 35%, transparent 75%)',
              maskImage:
                'radial-gradient(ellipse at 50% 25%, black 35%, transparent 75%)',
            }}
          />

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
                display: 'inline-block',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.9)',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.25)',
                padding: '0.35rem 0.9rem',
                borderRadius: 999,
                marginBottom: '1.25rem',
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
              Privacy<br />
              <span style={{ color: '#bfe3ff' }}>Policy</span>
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.65 }}>
              Last updated: June 10, 2026
            </p>
          </div>

          {/* Decorative arc */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              zIndex: 2,
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
            padding: '2rem 1.25rem 3rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          {sections.map((s, i) => (
            <PolicyCard key={i} section={s} index={i} />
          ))}
        </section>

        {/* ── CTA card ───────────────────────────────────────── */}
        <section style={{ padding: '2rem 1.25rem 3rem' }}>
          <div
            style={{
              maxWidth: '30rem',
              margin: '0 auto',
              padding: 1.5,
              borderRadius: 22,
              background: 'linear-gradient(135deg, rgba(59,130,246,0.45), rgba(99,102,241,0.45))',
            }}
          >
            <div
              style={{
                background: '#ffffff',
                borderRadius: 20,
                padding: '2.5rem 2rem',
                textAlign: 'center',
                boxShadow: '0 12px 32px rgba(15,23,42,0.08)',
              }}
            >
              {/* Shield icon */}
              <div
                aria-hidden="true"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: 'linear-gradient(135deg, #dbeafe, #eff6ff)',
                  color: '#2563eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                  boxShadow: '0 6px 16px rgba(59,130,246,0.2)',
                  animation: 'ppIconPop 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.6s both',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: 24, height: 24 }}
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>

              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>
                Questions about your data?
              </h2>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Reach out any time about your personal data and we'll get back to you.
              </p>

              <a
                href="mailto:toniSedjoah@gmail.com"
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 2.25rem',
                  borderRadius: 999,
                  background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
                  color: '#ffffff',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: btnHovered
                    ? '0 10px 26px rgba(59,130,246,0.45)'
                    : '0 4px 14px rgba(59,130,246,0.3)',
                  transform: btnHovered ? 'translateY(-2px)' : 'translateY(0)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                Email us
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: 16, height: 16 }}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
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