import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import company from "../../data/company";
import logo from "../../assets/logos/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            <div className="flex items-center gap-3">

              <img
                src={logo}
                alt={company.name}
                className="h-14 w-14 object-contain"
              />

              <div>
                <h2 className="font-bold text-lg">
                  {company.name}
                </h2>

                <p className="text-gray-400 text-sm">
                  {company.tagline}
                </p>

              </div>

            </div>

            <p className="mt-6 text-gray-400 leading-7">
              We build residential, commercial and
              infrastructure projects with quality,
              innovation and trust.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li><a href="/">Home</a></li>

              <li><a href="/about">About</a></li>

              <li><a href="/services">Services</a></li>

              <li><a href="/projects">Projects</a></li>

              <li><a href="/gallery">Gallery</a></li>

              <li><a href="/contact">Contact</a></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Residential Construction</li>

              <li>Commercial Construction</li>

              <li>Renovation</li>

              <li>Interior Works</li>

              <li>Civil Engineering</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-400">

              <p className="flex gap-3">

                <FaPhoneAlt />

                +91 XXXXX XXXXX

              </p>

              <p className="flex gap-3">

                <FaEnvelope />

                info@saibuilders.com

              </p>

              <p className="flex gap-3">

                <FaMapMarkerAlt />

                Karnataka, India

              </p>

            </div>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-700">

        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {company.name}. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm mt-3 md:mt-0">
            Designed & Developed by Suyash Savant
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;