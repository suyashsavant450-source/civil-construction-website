const CTA = () => {
  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-yellow-500 font-semibold uppercase tracking-wider">
          Let's Build Together
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
          Ready To Build Your Dream Project?
        </h2>

        <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
          We provide high-quality residential, commercial and civil construction
          services with trust, quality and timely delivery.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <a
            href="tel:+9100000000"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-xl transition"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/9100000000"
            target="_blank"
            rel="noreferrer"
            className="border-2 border-white hover:bg-white hover:text-slate-900 text-white font-semibold px-8 py-4 rounded-xl transition"
          >
            💬 WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
};

export default CTA;