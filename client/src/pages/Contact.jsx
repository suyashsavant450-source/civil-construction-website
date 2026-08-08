import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase";

import BackButton from "../components/common/BackButton";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // ================= FORM CHANGE =================

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ================= SUBMIT ENQUIRY =================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.message) {
      alert("Please fill Name, Phone Number and Message.");
      return;
    }

    try {
      setLoading(true);
      setSuccess("");

      await addDoc(collection(db, "enquiries"), {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        status: "New",
        createdAt: serverTimestamp(),
      });

      setSuccess(
        "Thank you! Your enquiry has been sent successfully."
      );

      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting enquiry:", error);

      alert(
        "Something went wrong. Please check your internet connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ================= BACK BUTTON ================= */}

      <BackButton />

      {/* ================= HEADER ================= */}

      <section className="bg-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">

          <p className="text-red-400 font-semibold uppercase">
            Contact Us
          </p>

          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Let's Build Something Together
          </h1>

          <p className="mt-5 text-slate-300">
            Get in touch with Sai Builders and Contractors.
          </p>

        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section className="py-16 sm:py-20">

        <div className="max-w-7xl mx-auto px-5">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">

            {/* ================= CONTACT INFO ================= */}

            <div>

              <p className="text-red-500 font-semibold uppercase">
                Get In Touch
              </p>

              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-blue-950">
                Contact Information
              </h2>

              <p className="mt-5 text-slate-600 leading-7">
                Have a construction requirement or want to discuss your
                project? Contact us and we will be happy to assist you.
              </p>

              <div className="mt-8 space-y-6">

                {/* PHONE */}

                <div className="flex items-start gap-4">

                  <div className="shrink-0 w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                    <FaPhoneAlt />
                  </div>

                  <div>

                    <h3 className="font-bold text-blue-950">
                      Phone
                    </h3>

                    <div className="mt-1 space-y-1">

                      <a
                        href="tel:9916129353"
                        className="block text-slate-600 hover:text-red-500 transition"
                      >
                        +91 99161 29353
                      </a>

                      <a
                        href="tel:8073378872"
                        className="block text-slate-600 hover:text-red-500 transition"
                      >
                        +91 80733 78872
                      </a>

                    </div>

                  </div>

                </div>

                {/* EMAIL */}

                <div className="flex items-start gap-4">

                  <div className="shrink-0 w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                    <FaEnvelope />
                  </div>

                  <div>

                    <h3 className="font-bold text-blue-950">
                      Email
                    </h3>

                    <a
                      href="mailto:saibuilders5105@gmail.com"
                      className="block mt-1 text-slate-600 hover:text-red-500 transition break-all"
                    >
                      saibuilders5105@gmail.com
                    </a>

                  </div>

                </div>

                {/* LOCATION */}

                <div className="flex items-start gap-4">

                  <div className="shrink-0 w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                    <FaMapMarkerAlt />
                  </div>

                  <div>

                    <h3 className="font-bold text-blue-950">
                      Location
                    </h3>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=C93M%2BHGP%2C%20Nippani-Chikodi%20Road%2C%20Near%20Basaveshwar%20Bank%2C%20Manik%20Nagar%2C%20Nippani%2C%20Karnataka%20591237"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-1 text-slate-600 hover:text-red-500 transition leading-6"
                    >
                      C93M+HGP, Nippani-Chikodi Road,
                      Near Basaveshwar Bank, Manik Nagar,
                      Nippani, Karnataka 591237
                    </a>

                  </div>

                </div>

              </div>

              {/* ================= WHATSAPP ================= */}

              <a
                href="https://wa.me/919916129353"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 bg-green-500 hover:bg-green-600 text-white
                           px-7 py-3 rounded-lg font-semibold
                           flex items-center gap-3 transition
                           hover:-translate-y-1 w-fit"
              >
                <FaWhatsapp className="text-xl" />

                Contact on WhatsApp
              </a>

            </div>

            {/* ================= ENQUIRY FORM ================= */}

            <div
              className="bg-slate-50 border border-slate-200
                         rounded-2xl p-6 sm:p-9 shadow-sm"
            >

              <h2 className="text-2xl font-bold text-blue-950">
                Send Us a Message
              </h2>

              <p className="mt-2 text-slate-500 text-sm">
                Fill in your details and our team will contact you.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-5"
              >

                {/* NAME */}

                <div>

                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full border border-slate-300
                               rounded-lg px-4 py-3
                               outline-none focus:border-red-500
                               transition"
                    required
                  />

                </div>

                {/* PHONE */}

                <div>

                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full border border-slate-300
                               rounded-lg px-4 py-3
                               outline-none focus:border-red-500
                               transition"
                    required
                  />

                </div>

                {/* EMAIL */}

                <div>

                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="w-full border border-slate-300
                               rounded-lg px-4 py-3
                               outline-none focus:border-red-500
                               transition"
                  />

                </div>

                {/* MESSAGE */}

                <div>

                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full border border-slate-300
                               rounded-lg px-4 py-3
                               outline-none focus:border-red-500
                               transition resize-none"
                    required
                  />

                </div>

                {/* SUCCESS MESSAGE */}

                {success && (
                  <div
                    className="bg-green-50 border border-green-200
                               text-green-700 rounded-lg p-3 text-sm"
                  >
                    {success}
                  </div>
                )}

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-500 hover:bg-red-600
                             disabled:bg-red-300 text-white
                             py-3 rounded-lg font-semibold
                             transition"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* ================= MAP CTA ================= */}

      <section className="bg-slate-50 py-12">

        <div className="max-w-4xl mx-auto px-5 text-center">

          <FaMapMarkerAlt className="mx-auto text-red-500 text-3xl" />

          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-blue-950">
            Visit Our Location
          </h2>

          <p className="mt-3 text-slate-600">
            Nippani, Karnataka
          </p>

          <p className="mt-2 text-slate-500 text-sm">
            C93M+HGP, Nippani-Chikodi Road, Near Basaveshwar Bank,
            Manik Nagar, Nippani, Karnataka 591237
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=C93M%2BHGP%2C%20Nippani-Chikodi%20Road%2C%20Near%20Basaveshwar%20Bank%2C%20Manik%20Nagar%2C%20Nippani%2C%20Karnataka%20591237"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 bg-blue-950 hover:bg-blue-900
                       text-white px-6 py-3 rounded-lg
                       font-semibold transition"
          >
            Open in Google Maps →
          </a>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="bg-blue-950 py-16 text-center text-white">

        <div className="max-w-3xl mx-auto px-5">

          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready To Start Your Project?
          </h2>

          <p className="mt-4 text-slate-300">
            Talk to Sai Builders and Contractors today.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row
                          justify-center gap-4">

            <a
              href="tel:9916129353"
              className="bg-white text-blue-950
                         px-6 py-3 rounded-lg
                         font-semibold hover:bg-slate-100 transition"
            >
              Call Us
            </a>

            <a
              href="https://wa.me/919916129353"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600
                         text-white px-6 py-3 rounded-lg
                         font-semibold transition"
            >
              WhatsApp Us
            </a>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;