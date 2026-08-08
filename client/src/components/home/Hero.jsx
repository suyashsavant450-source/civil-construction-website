import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="relative min-h-[680px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-[heroZoom_12s_ease-in-out_infinite_alternate]"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-blue-950/75" />

      {/* RED ACCENT */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-44 sm:h-44 bg-red-500 rounded-bl-full opacity-90" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 min-h-[680px] flex items-center">

        <div className="max-w-3xl">

          {/* BADGE */}
          <span className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-[fadeDown_0.8s_ease-out]">
            Trusted Construction Company
          </span>

          {/* HEADING */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight animate-[fadeUp_1s_ease-out]">
            Building
            <span className="text-red-400"> Trust.</span>
            <br />
            Delivering
            <span className="text-red-400"> Excellence.</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed animate-[fadeUp_1s_ease-out_0.2s_both]">
            Sai Builders and Constructions delivers reliable residential,
            commercial and infrastructure construction solutions with quality,
            safety and professional execution.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-[fadeUp_1s_ease-out_0.4s_both]">

            <Link
              to="/projects"
              className="text-center bg-red-500 hover:bg-red-600 text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Projects
            </Link>

            <Link
              to="/contact"
              className="text-center border-2 border-white text-white hover:bg-white hover:text-blue-950 px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </div>

      {/* BOTTOM SHAPE */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-white [clip-path:polygon(0_100%,100%_0,100%_100%)]" />

      {/* ANIMATION CSS */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroZoom {
          from {
            transform: scale(1.05);
          }
          to {
            transform: scale(1.12);
          }
        }
      `}</style>

    </section>
  );
};

export default Hero;