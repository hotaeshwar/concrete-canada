import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const links = [
  { label: "Home", href: "home", path: "/" },
  { label: "About Us", href: "about", path: "/about" },
  { label: "Concrete Services", href: "services", path: "/services" },
  { label: "Project Gallery", href: "gallery", path: "/gallery" },
  { label: "Contact Us", href: "contact", path: "/contact" },
];

const leftLinks = links.slice(0, 2);
const rightLinks = links.slice(2);

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const navHeight = document.querySelector("nav")?.offsetHeight || 96;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

function NavLinkItem({ link, activeLink, onSamePageClick, className = "nav-link" }) {
  const handleClick = (e) => {
    e.preventDefault();
    onSamePageClick(link.href);
  };

  return (
    <Link
      to={link.path}
      className={`${className}${activeLink === link.href ? " active" : ""}`}
      onClick={handleClick}
    >
      {link.label}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Highlight active link based on scroll position */
  useEffect(() => {
    const sectionIds = links.map((l) => l.href);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleSamePageClick = (id) => {
    setActiveLink(id);
    setMenuOpen(false);
    const link = links.find((l) => l.href === id);
    if (link && link.path !== window.location.pathname) {
      navigate(link.path);
    }
    scrollToSection(id);
  };

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          font-weight: 700;
          text-decoration: none;
          padding: 6px 2px;
          font-size: 0.875rem;
          letter-spacing: 0.01em;
          white-space: nowrap;
          transition: color 0.3s;
          cursor: pointer;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2.5px;
          background: #f97316;
          border-radius: 2px;
          transition: width 0.28s cubic-bezier(.4,0,.2,1);
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        .nav-link:hover {
          color: #f97316 !important;
        }
        .nav-link.active {
          color: #f97316 !important;
        }

        .nav-transparent .nav-link {
          color: #ffffff;
        }
        .nav-scrolled .nav-link {
          color: #111111;
        }

        .hamburger-line {
          display: block;
          width: 24px;
          height: 2px;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(.4,0,.2,1);
          transform-origin: center;
        }
        .nav-transparent .hamburger-line { background: #ffffff; }
        .nav-scrolled   .hamburger-line { background: #111111; }

        .open .hamburger-line:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        .open .hamburger-line:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .open .hamburger-line:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        .mobile-link {
          display: block;
          font-weight: 700;
          font-size: 1rem;
          color: #111;
          text-decoration: none;
          padding: 14px 0;
          border-bottom: 1px solid rgba(0,0,0,0.07);
          letter-spacing: 0.01em;
          transition: color 0.2s, padding-left 0.2s;
          cursor: pointer;
        }
        .mobile-link:hover {
          color: #f97316;
          padding-left: 8px;
        }
        .mobile-link.active {
          color: #f97316;
        }
        .mobile-link:last-child {
          border-bottom: none;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-menu-open {
          animation: slideDown 0.22s cubic-bezier(.4,0,.2,1) forwards;
        }

        .call-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          background: #111;
          color: #f97316 !important;
          border-radius: 999px;
          padding: 7px 16px;
          font-weight: 700;
          font-size: 0.8rem;
          text-decoration: none;
          white-space: nowrap;
          border: none;
          letter-spacing: 0.01em;
          transition: background 0.2s, transform 0.15s;
          box-shadow: 0 1px 8px 0 rgba(0,0,0,0.18);
        }
        .call-btn svg { stroke: #f97316; }
        .call-btn:hover {
          background: #222;
          transform: scale(1.04);
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md nav-scrolled"
            : "bg-transparent nav-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">

            {/* LEFT LINKS */}
            <div className="hidden lg:flex items-center gap-6 flex-1 justify-end pr-10">
              {leftLinks.map((link) => (
                <NavLinkItem
                  key={link.label}
                  link={link}
                  activeLink={activeLink}
                  onSamePageClick={handleSamePageClick}
                />
              ))}
            </div>

            {/* CENTER LOGO */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <Link to="/" onClick={() => handleSamePageClick("home")}>
                <img
                  src="/media/logo.png"
                  alt="Wilches Ready Mix Concrete"
                  className="h-20 lg:h-28 w-auto object-contain"
                  style={{ filter: scrolled ? "none" : "drop-shadow(0 2px 8px rgba(0,0,0,0.18))" }}
                />
              </Link>
            </div>

            {/* RIGHT LINKS + CALL BUTTON */}
            <div className="hidden lg:flex items-center gap-6 flex-1 justify-start pl-10">
              {rightLinks.map((link) => (
                <NavLinkItem
                  key={link.label}
                  link={link}
                  activeLink={activeLink}
                  onSamePageClick={handleSamePageClick}
                />
              ))}
              <a href="tel:6478914740" className="call-btn ml-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                647-891-4740
              </a>
            </div>

            {/* MOBILE: Call + Hamburger */}
            <div className="flex lg:hidden items-center gap-3">
              <a href="tel:6478914740" className="call-btn" style={{ fontSize: "0.75rem", padding: "6px 12px" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                Call
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`flex flex-col justify-center items-center gap-[7px] w-10 h-10 rounded-lg bg-transparent border-none outline-none cursor-pointer ${menuOpen ? "open" : ""}`}
                aria-label="Toggle menu"
              >
                <span className="hamburger-line" />
                <span className="hamburger-line" />
                <span className="hamburger-line" />
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        {menuOpen && (
          <div className="lg:hidden mobile-menu-open bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-screen-xl mx-auto px-6 py-4">
              {links.map((link) => (
                <NavLinkItem
                  key={link.label}
                  link={link}
                  activeLink={activeLink}
                  onSamePageClick={handleSamePageClick}
                  className="mobile-link"
                />
              ))}
              <a
                href="tel:6478914740"
                className="call-btn mt-4 justify-center w-full"
                style={{ borderRadius: "10px" }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                647-891-4740
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}