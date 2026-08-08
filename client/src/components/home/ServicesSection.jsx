import services from "../../data/services";

import {
  FaHome,
  FaBuilding,
  FaTools,
  FaRoad,
  FaHardHat,
} from "react-icons/fa";

const icons = {
  home: <FaHome />,
  building: <FaBuilding />,
  tools: <FaTools />,
  road: <FaRoad />,
  hardhat: <FaHardHat />,
};

const ServicesSection = () => {
  return (
    <section className="bg-slate-50 py-20">

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* HEADER */}
        <div className="text-center mb-12">

          <p className="text-red-500 font-bold uppercase tracking-wide">
            Our Services
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 mt-2">
            What We Provide
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto leading-7">
            Reliable construction services focused on quality,
            innovation and timely project completion.
          </p>

        </div>

        {/* SERVICES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (

            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm
                         hover:shadow-xl hover:-translate-y-2
                         transition-all duration-300
                         opacity-0 animate-[serviceFade_0.7s_ease-out_forwards]"
              style={{ animationDelay: `${index * 120}ms` }}
            >

              {/* ICON */}
              <div className="w-14 h-14 rounded-xl bg-red-50 text-red-500
                              flex items-center justify-center text-2xl
                              transition-transform duration-300
                              hover:rotate-6 hover:scale-110">
                {icons[service.icon] || <FaBuilding />}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-blue-950 mt-5">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-600 mt-3 leading-7">
                {service.description}
              </p>

              {/* BUTTON */}
              <button
                className="mt-5 text-red-500 font-semibold
                           hover:text-red-600 transition"
              >
                Learn More →
              </button>

            </div>

          ))}

        </div>

      </div>

      <style>{`
        @keyframes serviceFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
};

export default ServicesSection;