import {
  FaHome,
  FaBuilding,
  FaTools,
  FaRoad,
  FaHardHat,
  FaPaintRoller,
} from "react-icons/fa";

import BackButton from "../components/common/BackButton";

const services = [
  {
    icon: <FaHome />,
    title: "Residential Construction",
    description:
      "Quality construction solutions for homes, residential buildings and related projects.",
  },
  {
    icon: <FaBuilding />,
    title: "Commercial Construction",
    description:
      "Reliable construction services for commercial buildings, offices and business spaces.",
  },
  {
    icon: <FaTools />,
    title: "Renovation",
    description:
      "Practical renovation and remodeling solutions to improve existing spaces.",
  },
  {
    icon: <FaRoad />,
    title: "Infrastructure Work",
    description:
      "Construction support for roads, infrastructure and development projects.",
  },
  {
    icon: <FaHardHat />,
    title: "RCC Works",
    description:
      "Professional reinforced concrete construction and structural work.",
  },
  {
    icon: <FaPaintRoller />,
    title: "Finishing Works",
    description:
      "Quality finishing solutions with attention to detail and workmanship.",
  },
];

const Services = () => {
  return (
    <div className="bg-white">

      <BackButton />

      {/* HEADER */}
      <section className="bg-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">

          <p className="text-red-400 font-semibold uppercase">
            Our Services
          </p>

          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Construction Services
          </h1>

          <p className="mt-5 text-slate-300 max-w-2xl mx-auto">
            Reliable construction solutions delivered with quality,
            safety and professional execution.
          </p>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-5">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (

              <div
                key={service.title}
                className="bg-white rounded-2xl border border-slate-200 p-8
                           shadow-sm hover:shadow-xl hover:-translate-y-2
                           transition-all duration-300"
                style={{
                  animation: "serviceFade 0.7s ease-out forwards",
                  animationDelay: `${index * 120}ms`,
                  opacity: 0,
                }}
              >

                <div className="w-16 h-16 rounded-xl bg-red-50 text-red-500
                                flex items-center justify-center text-3xl
                                transition-transform duration-300
                                hover:scale-110">
                  {service.icon}
                </div>

                <h2 className="mt-6 text-2xl font-bold text-blue-950">
                  {service.title}
                </h2>

                <p className="mt-4 text-slate-600 leading-7">
                  {service.description}
                </p>

                <button className="mt-6 text-red-500 font-semibold hover:text-red-600">
                  Learn More →
                </button>

              </div>

            ))}

          </div>

        </div>
      </section>

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

    </div>
  );
};

export default Services;