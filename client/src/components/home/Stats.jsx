import { FaBuilding, FaUsers, FaAward, FaHammer } from "react-icons/fa";

const stats = [
  {
    icon: <FaBuilding size={30} />,
    number: "250+",
    title: "Projects Completed",
  },
  {
    icon: <FaHammer size={30} />,
    number: "15+",
    title: "Years Experience",
  },
  {
    icon: <FaUsers size={30} />,
    number: "180+",
    title: "Happy Clients",
  },
  {
    icon: <FaAward size={30} />,
    number: "25+",
    title: "Awards",
  },
];

const Stats = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300"
          >
            <div className="flex justify-center text-yellow-500 mb-4">
              {item.icon}
            </div>

            <h2 className="text-3xl font-bold text-slate-900">
              {item.number}
            </h2>

            <p className="mt-2 text-gray-600">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;