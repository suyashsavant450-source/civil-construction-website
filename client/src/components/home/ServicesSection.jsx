import services from "../../data/services";
import {
  FaHome,
  FaBuilding,
  FaTools,
} from "react-icons/fa";

const icons = {
  home: <FaHome size={35} />,
  building: <FaBuilding size={35} />,
  tools: <FaTools size={35} />,
};

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">
          <p className="text-yellow-500 font-semibold uppercase">
            Our Services
          </p>

          <h2 className="text-4xl font-bold mt-2">
            What We Provide
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We deliver reliable construction services with quality,
            innovation, and timely project completion.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl border p-8 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <div className="text-yellow-500 mb-5">
                {icons[service.icon]}
              </div>

              <h3 className="text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {service.description}
              </p>

              <button className="mt-6 text-yellow-600 font-semibold hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;