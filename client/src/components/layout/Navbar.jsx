import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import company from "../../data/company";
import logo from "../../assets/logos/logo.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Gallery", path: "/gallery" },
  { name: "Achievements", path: "/achievements" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-xl py-2"
          : "bg-white/95 backdrop-blur py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between">

          {/* Logo */}

          <Link to="/" className="flex items-center gap-3">

            <img
              src={logo}
              alt={company.name}
              className="h-14 w-14 object-contain"
            />

            <div className="hidden sm:block">
              <h2 className="text-xl font-bold text-slate-900">
                {company.name}
              </h2>

              <p className="text-xs text-gray-500">
                {company.tagline}
              </p>
            </div>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition-all duration-300 ${
                    isActive
                      ? "text-yellow-500"
                      : "text-slate-700 hover:text-yellow-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

          </nav>

          {/* Right Buttons */}

          <div className="hidden lg:flex items-center gap-3">

            <a
              href="tel:+910000000000"
              className="flex items-center gap-2 rounded-xl border px-5 py-3 hover:bg-slate-100 transition"
            >
              <FaPhoneAlt />
              Call
            </a>

            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl bg-yellow-500 text-white px-5 py-3 hover:bg-yellow-600 transition"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-3xl"
          >
            <HiMenuAlt3 />
          </button>

        </div>
      </div>          {/* Mobile Menu Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/50 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}

          {/* Mobile Drawer */}
          <div
            className={`fixed top-0 right-0 h-screen w-80 bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b p-5">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt={company.name}
                  className="h-12 w-12 object-contain"
                />

                <div>
                  <h2 className="font-bold text-slate-900 text-sm">
                    {company.name}
                  </h2>

                  <p className="text-xs text-gray-500">
                    {company.tagline}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-3xl text-slate-700"
              >
                <HiX />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-col p-6">

              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `py-4 text-lg border-b transition ${
                      isActive
                        ? "text-yellow-500 font-semibold"
                        : "text-slate-700 hover:text-yellow-500"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

            </nav>

            {/* Bottom Buttons */}
            <div className="absolute bottom-8 left-6 right-6 space-y-4">

              <a
                href="tel:+910000000000"
                className="flex justify-center items-center gap-2 rounded-xl border border-slate-300 py-3 font-semibold hover:bg-slate-100 transition"
              >
                <FaPhoneAlt />
                Call Now
              </a>

              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center gap-2 rounded-xl bg-green-500 py-3 text-white font-semibold hover:bg-green-600 transition"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

            </div>

          </div>

        </header>
  );
};

export default Navbar;