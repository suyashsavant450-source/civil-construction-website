import company from "../../data/company";

const Hero = () => {
  return (
    <section
      className="relative h-[90vh] min-h-[600px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/70"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

          <span className="inline-block rounded-full bg-yellow-500 px-4 py-2 text-sm font-semibold text-white">
            Trusted Construction Company
          </span>

          <h1 className="mt-6 text-4xl font-extrabold text-white md:text-6xl lg:text-7xl">
            {company.name}
          </h1>

          <p className="mt-4 text-xl text-yellow-400">
            {company.tagline}
          </p>

          <p className="mt-6 max-w-2xl text-lg text-gray-200">
            Delivering quality construction solutions with
            innovation, precision, and trust for residential,
            commercial, and infrastructure projects.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-white transition hover:bg-yellow-600">
              Explore Projects
            </button>

            <button className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900">
              Contact Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;