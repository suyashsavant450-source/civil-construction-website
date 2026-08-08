import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import company from "../../data/company";
import logo from "../../assets/logos/logo.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* MAIN NAVBAR */}
        <div className="min-h-20 flex items-center justify-between gap-4">

          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 sm:gap-3 min-w-0"
          >
            <img
              src={logo}
              alt={company.name}
              className="w-11 h-11 sm:w-14 sm:h-14 object-contain shrink-0"
            />

           <div className="max-w-[420px] sm:max-w-none">
  <h1 className="text-xl sm:text-2xl font-bold text-blue-950 leading-tight">
    {company.name}
  </h1>

  <p className="text-[12px] sm:text-sm text-gray-500 mt-0.5">
    {company.tagline}
  </p>
</div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">

            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-2 font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? "text-red-500"
                    : "text-slate-700 hover:text-red-500"
                }`}
              >
                {link.name}

                {/* ACTIVE LINE */}
                {isActive(link.path) && (
                  <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-red-500 rounded-full" />
                )}
              </Link>
            ))}

            {/* GET QUOTE */}
            <Link
              to="/contact"
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Quote
            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg text-blue-950 hover:bg-red-50 hover:text-red-500 transition"
          >
            {menuOpen ? (
              <HiX className="text-3xl" />
            ) : (
              <HiMenuAlt3 className="text-3xl" />
            )}
          </button>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen
              ? "max-h-[600px] opacity-100 pb-5"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-slate-200 pt-3">

            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center px-4 py-3.5 rounded-lg font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-red-50 text-red-500"
                    : "text-slate-700 hover:bg-red-50 hover:text-red-500"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* MOBILE GET QUOTE */}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center mt-3 bg-red-500 hover:bg-red-600 text-white py-3.5 rounded-lg font-semibold transition"
            >
              Get Quote
            </Link>

          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;