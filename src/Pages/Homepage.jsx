import hero from '../assets/hero.png';

import heroMockup from '../assets/image111.png';
import React, { useEffect, useRef, useState } from 'react';
import About1 from '../assets/About1.png';
import About2 from '../assets/About2.png';
import About3 from '../assets/About3.png';
import About4 from '../assets/About4.png';



const features = [
  {
    img: About1,
    title: 'Invoicing like a Pro',
    description:
      'Track your finances and send professional invoices in seconds—all from one powerful app. Stay in control, get paid faster, and manage like a boss.',
  },
  {
    img: About2,
    title: 'Stay on Top of Your Personal Finances',
    description:
      'Easily track your expenses, assets, and income in one place. Make smarter money moves with real-time insights, right from your pocket.',
  },
  {
    img: About3,
    title: 'Manage Invoices with Ease',
    description:
      "Create, send, and track invoices in just a few taps. It's fast, effortless, and built for how you do business.",
  },
  {
    img: About4,
    title: 'Built for How You Work',
    description:
      "Whether you're a freelancer or a growing business, Spend adapts to your workflow so nothing slips through the cracks.",
  },
];

const testimonials = [
  {
    quote: 'App is very easy to use, efficient, the UI is simple and sleek. The tracking of expenses is top notch. Kudos!',
    name: 'George Mante',
    initial: 'G',
  },
  {
    quote: 'All business owners should get this app. It helps you generate invoices, receipts and also track your sales and expenses. I love ittt!',
    name: 'Miss Mimie',
    initial: 'M',
  },
  {
    quote: 'My go-to app for tracking expenses. UI is very neat, making the entire experience using this app nothing short of a delight.',
    name: 'Fedelis Amenga-etego Wekia',
    initial: 'F',
  },
];

/* Scroll-reveal hook */

function useFadeIn(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* Testimonial card */

const TestimonialCard = ({ quote, name, initial, index }) => {
  const { ref, visible } = useFadeIn();

  return (
    <div
      ref={ref}
      className="testimonial-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.55s ease ${index * 100}ms, transform 0.55s ease ${index * 100}ms`,
      }}
    >
      <p className="testimonial-card__quote">&ldquo;{quote}&rdquo;</p>

      <div className="testimonial-card__reviewer">
        <div className="testimonial-card__avatar">{initial}</div>
        <p className="testimonial-card__name">{name}</p>
      </div>
    </div>
  );
};

/* Homepage */

const Homepage = () => {
  const { ref: featRef, visible: featVisible } = useFadeIn(0.1);
  const { ref: testRef, visible: testVisible } = useFadeIn(0.1);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (

    <div className="homepage">
<section
  className="hero relative overflow-hidden flex flex-col-reverse md:flex-row md:items-center"
  style={{
    background:
      'radial-gradient(at 15% 20%, rgba(56, 189, 248, 0.35) 0px, transparent 50%), ' +
      'radial-gradient(at 82% 0%, rgba(129, 140, 248, 0.35) 0px, transparent 50%), ' +
      'radial-gradient(at 95% 75%, rgba(45, 212, 191, 0.28) 0px, transparent 50%), ' +
      'radial-gradient(at 5% 95%, rgba(30, 64, 175, 0.55) 0px, transparent 50%), ' +
      '#0a1834',
  }}
>

  {/* Modern square mesh grid — sits between the gradient and the content */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-0"
    style={{
      backgroundImage:
        'linear-gradient(rgba(148,163,184,0.14) 1px, transparent 1px), ' +
        'linear-gradient(90deg, rgba(148,163,184,0.14) 1px, transparent 1px)',
      backgroundSize: '44px 44px',
      WebkitMaskImage: 'radial-gradient(ellipse at 60% 40%, black 30%, transparent 75%)',
      maskImage: 'radial-gradient(ellipse at 60% 40%, black 30%, transparent 75%)',
    }}
  />

  <div className="relative z-10 w-full md:w-1/2 lg:w-[180%] flex items-center justify-center md:justify-start px-0 py-10 md:py-0">
    <img
      src={heroMockup}
      alt="Spend app dashboards on mobile"
      className="w-[90%] max-w-none object-contain"
    />
  </div>

  <div className="hero__content relative z-10 w-full md:w-[68%] lg:w-[78%] px-6 md:px-0 md:pr-4 lg:pr-8 md:-translate-x-12 lg:-translate-x-20">
    <p className="hero__eyebrow">Finance &amp; Invoicing</p>
    <h1 className="hero__heading">
      <span className="whitespace-nowrap">Manage Your</span><br />
      <span className="hero__heading-accent whitespace-nowrap">Finances Smarter</span>
    </h1>
    <p className="hero__subheading">
      All-in-one financial management &amp; invoicing — built for individuals and businesses who want clarity on every cedi.
    </p>
    <div className="hero__badges">

       <a href="https://apps.apple.com/gh/app/spend-finance-invoicing/id6448402636"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
        className="hero__badge-link"
      >
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="Download on the App Store"
          className="hero__badge-img"
        />
      </a>

       <a href="https://play.google.com/store/apps/details?id=com.tonysed.spend&hl=en"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
        className="hero__badge-link"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Get it on Google Play"
          className="hero__badge-img"
        />
      </a>
    </div>
  </div>

</section>

      {/* Features */}
      <section className="features-section">
        <div className="max-w-10xl mx-auto">

          <div
            ref={featRef}
            className="section-header"
            style={{
              opacity: featVisible ? 1 : 0,
              transform: featVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.55s ease, transform 0.55s ease",
            }}
          >
            <p className="section-eyebrow">What you get</p>
            <h2 className="section-heading">Every tool you need, in one app</h2>
            <p className="section-subheading">
              Smart financial tools to simplify your business and personal life.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <img
                  src={feature.img}
                  alt={`Feature ${index + 1}`}
                  className="feature-card__img"
                />
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__desc">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="max-w-5xl mx-auto">

          <div
            ref={testRef}
            className="section-header"
            style={{
              opacity: testVisible ? 1 : 0,
              transform: testVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.55s ease, transform 0.55s ease',
            }}
          >
            <p className="section-eyebrow">Real users</p>
            <h2 className="section-heading">What our users say</h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map(({ quote, name, initial }, i) => (
              <TestimonialCard
                key={i}
                quote={quote}
                name={name}
                initial={initial}
                index={i}
              />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Homepage;