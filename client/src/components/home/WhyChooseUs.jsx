import {
  FaAward,
  FaHardHat,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward size={35} />,
    title: "Quality Work",
    desc: "We deliver high-quality construction with premium materials.",
  },
  {
    icon: <FaClock size={35} />,
    title: "On Time Delivery",
    desc: "Projects are completed within the committed timeline.",
  },
  {
    icon: <FaHardHat size={35} />,
    title: "Experienced Team",
    desc: "Professional engineers and skilled workers for every project.",
  },
  {
    icon: <FaShieldAlt size={35} />,
    title: "Trusted Company",
    desc: "Building trust through transparency, safety and excellence.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">
          <p className="text-yellow-500 font-semibold uppercase">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Building Trust With Every Project
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition duration-300"
            >
              <div className="text-yellow-500 mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;