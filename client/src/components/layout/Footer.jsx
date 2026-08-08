import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.jpeg";
import company from "../../data/company";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">

      <div className="max-w-7xl mx-auto px-5 py-14">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* COMPANY */}
          <div>

            <div className="flex items-center gap-3">

              <img
                src={logo}
                alt={company.name}
                className="w-14 h-14 object-contain bg-white rounded-lg p-1"
              />

              <div>
                <h3 className="font-bold">
                  {company.name}
                </h3>

                <p className="text-xs text-gray-300">
                  {company.tagline}
                </p>
              </div>

            </div>

            <p className="text-gray-300 mt-5 leading-7">
              Professional construction solutions with a commitment
              to quality, safety and customer satisfaction.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-lg font-bold mb-5">
              Quick Links
            </h3>

            <div className="space-y-3">

              <Link className="block text-gray-300 hover:text-red-400" to="/">
                Home
              </Link>

              <Link className="block text-gray-300 hover:text-red-400" to="/about">
                About
              </Link>

              <Link className="block text-gray-300 hover:text-red-400" to="/services">
                Services
              </Link>

              <Link className="block text-gray-300 hover:text-red-400" to="/projects">
                Projects
              </Link>

              <Link className="block text-gray-300 hover:text-red-400" to="/gallery">
                Gallery
              </Link>

              <Link className="block text-gray-300 hover:text-red-400" to="/contact">
                Contact
              </Link>

            </div>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-lg font-bold mb-5">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>Residential Construction</li>
              <li>Commercial Construction</li>
              <li>Renovation</li>
              <li>Infrastructure Projects</li>
              <li>Contract Works</li>
            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-lg font-bold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-300">

              <p>📞 Contact us for project enquiries</p>

              <p>📧 Email us for business enquiries</p>

              <p>📍 Karnataka, India</p>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-5 py-5 text-center text-sm text-gray-400">

          © {new Date().getFullYear()} {company.name}.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;