import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-blue-950 py-20 px-5 relative overflow-hidden">

      <div className="absolute right-0 top-0 w-64 h-64 bg-red-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto text-center">

        <p className="text-red-400 font-bold uppercase">
          Start Your Project
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
          Ready To Build Your Dream Project?
        </h2>

        <p className="text-gray-300 mt-5 max-w-2xl mx-auto">
          Get in touch with Sai Builders and Constructions
          for reliable and professional construction solutions.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/contact"
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3.5 rounded-lg font-semibold transition"
          >
            Contact Us
          </Link>

          <a
            href="https://wa.me/"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-950 px-8 py-3.5 rounded-lg font-semibold transition"
          >
            WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
};

export default CTA;