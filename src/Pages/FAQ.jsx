import React, { useState, useRef, useEffect } from 'react';

/* ── Data ───────────────────────────────────────────────────── */

const faqs = [
  {
    q: 'What is Spend?',
    a: 'Spend is an app for managing personal and small-business finances — track expenses, create invoices, and get simple insights, all from your phone.',
  },
  {
    q: 'How do I create an invoice?',
    a: 'Go to the Invoices section, tap "Create Invoice", fill in the recipient and items, then save or send directly to your client.',
  },
  {
    q: 'Is my financial data secure?',
    a: 'We use industry-standard encryption to protect your data at rest and in transit. See our Privacy Policy for the full details.',
  },
  {
    q: 'Can I export my data?',
    a: 'Yes — you can export invoices and transaction history from the Settings or Reports screen in the app.',
  },
  {
    q: 'How can I get support?',
    a: 'Reach us via the in-app chat or email us at support@spend.app — we usually reply within one business day.',
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

/* ── Single FAQ item ────────────────────────────────────────── */

const FAQItem = ({ item, index }) => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const { ref, visible } = useFadeIn();
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(open ? bodyRef.current.scrollHeight : 0);
    }
  }, [open]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#ffffff',
        border: `1px solid ${open ? '#bfdbfe' : hovered ? '#dbeafe' : '#e9ecf0'}`,
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: hovered
          ? '0 12px 28px rgba(37,99,235,0.12)'
          : '0 1px 4px rgba(15,23,42,0.04)',
        transition: 'box-shadow 0.25s ease, border-color 0.25s ease, opacity 0.5s ease, transform 0.5s ease',
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? 'translateY(-2px)' : 'translateY(0)'
          : 'translateY(20px)',
        transitionDelay: visible ? '0ms' : `${index * 80}ms`,
      }}
    >
      <button
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1.25rem 1.5rem',
          background: btnHovered ? '#f8f9fc' : 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          transition: 'background 0.2s ease',
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        {/* Number badge */}
        <span
          style={{
            flexShrink: 0,
            width: 32,
            height: 32,
            borderRadius: 9,
            background: open
              ? 'linear-gradient(135deg, #2563eb, #1d4ed8)'
              : '#eff6ff',
            color: open ? '#ffffff' : '#3b82f6',
            fontSize: '0.7rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: open ? '0 4px 14px rgba(37,99,235,0.35)' : 'none',
            transition: 'background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease',
          }}
        >
          0{index + 1}
        </span>

        {/* Question text */}
        <span
          style={{
            flex: 1,
            fontSize: '0.975rem',
            fontWeight: 600,
            color: '#111827',
            lineHeight: 1.4,
          }}
        >
          {item.q}
        </span>

        {/* Chevron */}
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: 20,
            height: 20,
            color: open ? '#3b82f6' : '#9ca3af',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), color 0.25s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '100%', height: '100%' }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {/* Animated answer panel */}
      <div
        aria-hidden={!open}
        style={{
          height,
          overflow: 'hidden',
          transition: 'height 0.38s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div
          ref={bodyRef}
          style={{
            padding: '0 1.5rem 1.25rem 4.5rem',
            fontSize: '0.9rem',
            color: '#4b5563',
            lineHeight: 1.75,
            fontFamily: "'Inter', system-ui, sans-serif",
          }}
        >
          {item.a}
        </div>
      </div>
    </div>
  );
};

/* ── FAQ page ───────────────────────────────────────────────── */

const FAQ = () => {
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <>
      {/* Keyframe animations — only part that needs a style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @keyframes faqHeaderIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes arcExpand {
          from { transform: scaleX(0.6) scaleY(0.4); opacity: 0; }
          to   { transform: scaleX(1) scaleY(1); opacity: 1; }
        }
        @keyframes iconPop {
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
      `}</style>

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
              animation: 'faqHeaderIn 0.8s ease-out both',
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
              Support
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
              Frequently asked<br />
              <span style={{ color: '#bfe3ff' }}>questions</span>
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.65 }}>
              Everything you need to know about Spend. Can't find an answer?
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
              animation: 'arcExpand 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.4s both',
            }}
          />
        </header>

        {/* ── FAQ list ───────────────────────────────────────── */}
        <section style={{ padding: '3rem 1.25rem 4rem' }}>
          <div
            style={{
              maxWidth: '42rem',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            {faqs.map((f, i) => (
              <FAQItem key={i} item={f} index={i} />
            ))}
          </div>
        </section>

        {/* ── CTA card ───────────────────────────────────────── */}
        <section style={{ padding: '2rem 1.25rem 5rem' }}>
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
              {/* Chat icon */}
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
                  animation: 'iconPop 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.6s both',
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
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>

              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>
                Still have a question?
              </h2>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Our team is happy to help. Reach out and we'll get back to you.
              </p>
              
              <a
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

      </main>
    </>
  );
};

export default FAQ;