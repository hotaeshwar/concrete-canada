import { Phone, MapPin, Clock, Star, ArrowUp } from "lucide-react";

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "home" },
  { label: "About Us", href: "about" },
  { label: "Concrete Services", href: "services" },
  { label: "Project Gallery", href: "gallery" },
  { label: "Contact Us", href: "contact" },
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const navHeight = document.querySelector("nav")?.offsetHeight || 96;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{
        background: "#fe5f00",
        boxShadow: "0 4px 20px rgba(254,95,0,0.45)",
      }}
    >
      <ArrowUp size={20} color="#000" strokeWidth={2.5} />
    </button>
  );
}

export default function Footer() {
  return (
    <>
      <BackToTop />
      <style>{`
        .footer-link {
          color: #ffffff;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          transition: color 0.2s;
          cursor: pointer;
          display: inline-block;
          position: relative;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #fe5f00;
          border-radius: 2px;
          transition: width 0.25s cubic-bezier(.4,0,.2,1);
        }
        .footer-link:hover {
          color: #fe5f00;
        }
        .footer-link:hover::after {
          width: 100%;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1.5px solid rgba(254,95,0,0.4);
          color: #fe5f00;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, transform 0.15s;
        }
        .social-btn:hover {
          background: #fe5f00;
          color: #000;
          border-color: #fe5f00;
          transform: scale(1.1);
        }

        .hours-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 5px 0;
          font-size: 0.8rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          gap: 12px;
        }
        .hours-row:last-child {
          border-bottom: none;
        }
        .hours-row.today-row .day-name,
        .hours-row.today-row .day-time {
          color: #fe5f00 !important;
          font-weight: 700;
        }
        .day-name { color: rgba(255,255,255,0.6); }
        .day-time { color: #ffffff; font-weight: 600; }

        .divider-orange {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(254,95,0,0.4), transparent);
          width: 100%;
        }

        .contact-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: rgba(255,255,255,0.75);
          font-size: 0.85rem;
          line-height: 1.5;
        }
        .contact-row svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: #fe5f00;
        }
        .contact-row a {
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          transition: color 0.2s;
        }
        .contact-row a:hover {
          color: #fe5f00;
        }

        .footer-section-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #fe5f00;
          margin-bottom: 1rem;
        }

        .bottom-bar {
          border-top: 1px solid rgba(254,95,0,0.15);
          padding: 1.25rem 0;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.4);
        }

        .province-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(254,95,0,0.1);
          border: 1px solid rgba(254,95,0,0.25);
          color: #fe5f00;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 999px;
        }
      `}</style>

      <footer className="bg-black text-white" id="contact">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-0">

          {/* ── TOP GRID ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 pb-10">

            {/* COL 1 — Logo + About */}
            <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-start gap-5">
              <img
                src="/media/logo.png"
                alt="Wilches Ready Mix Concrete"
                className="w-auto"
                style={{ height: "90px" }}
              />
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", maxWidth: "260px" }}>
                Ontario's trusted concrete paving contractor with over 20 years of excellence across the GTA.
              </p>

              {/* Google rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5" style={{ color: "#fe5f00" }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#fe5f00" strokeWidth={0} />)}
                </div>
                <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>
                  2.363 Google Reviews
                </span>
              </div>

              {/* Province badge */}
              <span className="province-badge"><MapPin size={12} /> Ontario, Canada</span>

              {/* Social icons */}
              <div className="flex items-center gap-3 pt-1">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="YouTube">
                  <YoutubeIcon />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">
                  <FacebookIcon />
                </a>
              </div>
            </div>

            {/* COL 2 — Navigation */}
            <div>
              <p className="footer-section-title">Navigation</p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <span
                      className="footer-link"
                      onClick={() => scrollToSection(link.href)}
                    >
                      {link.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* COL 3 — Contact Info */}
            <div className="flex flex-col gap-4">
              <p className="footer-section-title">Contact Us</p>
              <div className="contact-row">
                <MapPin size={16} />
                <a
                  href="https://maps.google.com/?q=32+Taber+Rd,+Etobicoke,+ON+M9W+3A7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  32 Taber Rd, Etobicoke,<br />ON M9W 3A7, Canada
                </a>
              </div>
              <div className="contact-row">
                <Phone size={16} />
                <div className="flex flex-col gap-1">
                  <a href="tel:+14168352923">+1 416-835-2923</a>
                  <a href="tel:6478914740">647-891-4740</a>
                </div>
              </div>
              <div className="contact-row" style={{ alignItems: "center" }}>
                <Clock size={16} />
                <span>Open Daily: <span style={{ color: "#fe5f00", fontWeight: 700 }}>6 am – 6 pm</span></span>
              </div>
            </div>

          </div>

          <div className="divider-orange" />

          {/* ── BOTTOM BAR ── */}
          <div className="bottom-bar">
            <span>
              © {new Date().getFullYear()} Wilches Ready Mix Concrete Inc. All rights reserved.
            </span>
            <span style={{ color: "rgba(255,255,255,0.25)" }}>
              Concrete Product Supplier · Toronto, Canada
            </span>
          </div>

        </div>
      </footer>
    </>
  );
}