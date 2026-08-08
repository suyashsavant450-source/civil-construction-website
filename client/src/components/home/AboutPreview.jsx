import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="bg-white py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl group">

            <img
              src="/about.png"
              alt="Sai Builders construction work"
              className="w-full h-[320px] sm:h-[400px] lg:h-[450px]
                         object-cover rounded-2xl
                         transition-transform duration-700
                         group-hover:scale-105"
            />

          </div>

          {/* CONTENT */}
          <div className="animate-[aboutFade_0.9s_ease-out]">

            <p className="text-red-500 font-bold uppercase tracking-wider">
              About Us
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 mt-2 leading-tight">
              Building With Integrity & Excellence
            </h2>

            <p className="text-slate-600 mt-5 leading-7">
              Sai Builders and Constructions is committed to delivering
              high-quality residential, commercial and infrastructure
              projects.
            </p>

            <p className="text-slate-600 mt-4 leading-7">
              We focus on quality execution, safety, professionalism and
              customer satisfaction in every project.
            </p>

            <Link
              to="/about"
              className="inline-block mt-7 bg-blue-950 text-white px-6 py-3 rounded-lg
                         font-semibold hover:bg-blue-900
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Read More →
            </Link>

          </div>

        </div>

      </div>

      <style>{`
        @keyframes aboutFade {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

    </section>
  );
};

export default AboutPreview;