import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import company from "../data/company";

const Contact = () => {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-slate-900 py-20 md:py-28">

        <div className="max-w-7xl mx-auto px-4 text-center">

          <p className="text-yellow-500 font-semibold uppercase">
            Get In Touch
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white mt-3">
            Contact Us
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto mt-5 text-lg">
            Have a project in mind? Let's discuss your requirements.
          </p>

        </div>

      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Details */}
            <div>

              <p className="text-yellow-500 font-semibold uppercase">
                Contact Information
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Let's Talk About Your Project
              </h2>

              <p className="text-gray-600 leading-7 mt-5">
                Get in touch with {company.name} for construction,
                design, planning and project requirements.
              </p>

              <div className="mt-8 space-y-5">

                {/* Phone */}
                <a
                  href={`tel:${company.contact.phone[0]}`}
                  className="flex items-start gap-5 p-5 rounded-2xl
                  border hover:shadow-lg transition"
                >
                  <FaPhoneAlt className="text-yellow-500 text-2xl mt-1" />

                  <div>
                    <h3 className="font-bold">
                      Phone
                    </h3>

                    <p className="text-gray-600 mt-1">
                      {company.contact.phone[0]}
                    </p>

                    <p className="text-gray-600">
                      {company.contact.phone[1]}
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/91${company.contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-5 p-5 rounded-2xl
                  border hover:shadow-lg transition"
                >
                  <FaWhatsapp className="text-green-500 text-2xl mt-1" />

                  <div>
                    <h3 className="font-bold">
                      WhatsApp
                    </h3>

                    <p className="text-gray-600 mt-1">
                      {company.contact.whatsapp}
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${company.contact.email}`}
                  className="flex items-start gap-5 p-5 rounded-2xl
                  border hover:shadow-lg transition"
                >
                  <FaEnvelope className="text-red-500 text-2xl mt-1" />

                  <div>
                    <h3 className="font-bold">
                      Email
                    </h3>

                    <p className="text-gray-600 mt-1 break-all">
                      {company.contact.email}
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div
                  className="flex items-start gap-5 p-5 rounded-2xl
                  border"
                >
                  <FaMapMarkerAlt className="text-blue-500 text-2xl mt-1" />

                  <div>
                    <h3 className="font-bold">
                      Office Address
                    </h3>

                    <p className="text-gray-600 mt-1 leading-7">
                      {company.contact.address}
                    </p>
                  </div>
                </div>

              </div>

            </div>


            {/* Contact Form */}
            <div className="bg-slate-50 rounded-3xl p-7 md:p-10 shadow-lg">

              <h2 className="text-2xl font-bold">
                Send Us a Message
              </h2>

              <p className="text-gray-500 mt-2">
                Fill in your details and we'll get back to you.
              </p>

              <form className="mt-7 space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-4 rounded-xl border
                  outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-5 py-4 rounded-xl border
                  outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-4 rounded-xl border
                  outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full px-5 py-4 rounded-xl border
                  outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                />

                <button
                  type="button"
                  className="w-full bg-yellow-500 text-white
                  py-4 rounded-xl font-semibold
                  hover:bg-yellow-600 hover:scale-[1.02]
                  transition"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Contact;