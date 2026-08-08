import {
  FaBuilding,
  FaUsers,
  FaAward,
  FaHardHat,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaBuilding />,
    number: "250+",
    label: "Projects Completed",
  },
  {
    icon: <FaHardHat />,
    number: "15+",
    label: "Years Experience",
  },
  {
    icon: <FaUsers />,
    number: "180+",
    label: "Happy Clients",
  },
  {
    icon: <FaAward />,
    number: "25+",
    label: "Awards",
  },
];

const Stats = () => {
  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-7 text-center
                       opacity-0 animate-[statsFade_0.7s_ease-out_forwards]"
            style={{ animationDelay: `${index * 150}ms` }}
          >

            <div className="text-red-500 text-3xl sm:text-4xl flex justify-center mb-3">
              {stat.icon}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-blue-950">
              {stat.number}
            </h3>

            <p className="text-slate-500 mt-1 text-sm sm:text-base">
              {stat.label}
            </p>

          </div>
        ))}

      </div>

      <style>{`
        @keyframes statsFade {
          from {
            opacity: 0;
            transform: translateY(25px);
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

export default Stats;