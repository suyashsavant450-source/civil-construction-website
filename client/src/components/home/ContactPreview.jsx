import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

import company from "../../data/company";

const ContactPreview = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="text-yellow-500 font-semibold uppercase">
            Contact Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Let's Build Something Great Together
          </h2>

          <p className="mt-4 text-gray-500">
            Get in touch with us for your next construction project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <a
            href={`tel:${company.contact.phone[0]}`}
            className="p-6 rounded-2xl shadow-lg border hover:-translate-y-1 transition flex gap-5"
          >
            <FaPhoneAlt className="text-yellow-500 text-3xl" />

            <div>
              <h3 className="font-bold text-lg">Phone</h3>
              <p className="text-gray-600">
                {company.contact.phone[0]}
              </p>
              <p className="text-gray-600">
                {company.contact.phone[1]}
              </p>
            </div>
          </a>

          <a
            href={`https://wa.me/91${company.contact.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-2xl shadow-lg border hover:-translate-y-1 transition flex gap-5"
          >
            <FaWhatsapp className="text-green-500 text-3xl" />

            <div>
              <h3 className="font-bold text-lg">WhatsApp</h3>
              <p className="text-gray-600">
                {company.contact.whatsapp}
              </p>
            </div>
          </a>

          <a
            href={`mailto:${company.contact.email}`}
            className="p-6 rounded-2xl shadow-lg border hover:-translate-y-1 transition flex gap-5"
          >
            <FaEnvelope className="text-red-500 text-3xl" />

            <div>
              <h3 className="font-bold text-lg">Email</h3>
              <p className="text-gray-600 break-all">
                {company.contact.email}
              </p>
            </div>
          </a>

          <div className="p-6 rounded-2xl shadow-lg border flex gap-5">
            <FaMapMarkerAlt className="text-blue-500 text-3xl shrink-0" />

            <div>
              <h3 className="font-bold text-lg">Office Address</h3>

              <p className="text-gray-600 leading-7">
                {company.contact.address}
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactPreview;