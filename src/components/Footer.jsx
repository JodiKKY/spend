import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'FAQs', href: '/faqs' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Cookies Policy', href: '/cookies' },
];

const socials = [
  { Icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { Icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { Icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#0a1834] text-white rounded-t-[3rem] overflow-hidden">
  

      <div className="px-6 py-14 sm:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div>
            <a href="/" className="inline-flex items-center gap-2 text-xl font-bold text-white mb-4">
              Spend
            </a>

            <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
              Your complete financial management solution — invoicing and money
              tracking, built for individuals and businesses.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-slate-300">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-blue-400 shrink-0">
                  <FaMapMarkerAlt size={13} />
                </span>
                Accra, Ghana
              </div>
              <a
                href="tel:+233205287071"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-blue-400 shrink-0">
                  <FaPhoneAlt size={12} />
                </span>
                +233 205 287 071
              </a>
              <a
                href="mailto:toniSedjoah@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-blue-400 shrink-0">
                  <FaEnvelope size={13} />
                </span>
                toniSedjoah@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              {legalLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get the app + socials */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-white mb-4">
              Get the App
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
              Download Spend and take control of your finances anytime, anywhere.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="https://apps.apple.com/gh/app/spend-finance-invoicing/id6448402636"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
                className="inline-block transition-transform duration-200 hover:-translate-y-0.5"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="w-[140px] h-auto"
                />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.tonysed.spend&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                className="inline-block transition-transform duration-200 hover:-translate-y-0.5"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="w-[140px] h-auto"
                />
              </a>
            </div>

            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 text-slate-300 hover:bg-blue-600 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} Spend. All rights reserved.</p>
          <p>
            Designed by{' '}
            <a
              href="https://osd-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-blue-400 transition-colors duration-200"
            >
              JodiKKY
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;