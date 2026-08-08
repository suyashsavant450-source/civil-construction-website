import {
  FaHardHat,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

import BackButton from "../components/common/BackButton";

const About = () => {
  const reasons = [
    "Quality Construction",
    "Reliable Execution",
    "Customer Satisfaction",
    "Professional Service",
  ];

  return (
    <div className="bg-white">

      <BackButton />

      {/* HERO */}
      <section className="bg-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-5 text-center animate-[fadeDown_0.7s_ease-out]">

          <p className="text-red-400 font-semibold uppercase tracking-wider">
            About Us
          </p>

          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold">
            SAI BUILDERS AND CONTRACTORS
          </h1>

          <p className="mt-5 text-slate-300 text-lg">
            Integrity in Design. Strength in Execution.
          </p>

        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="animate-[slideLeft_0.8s_ease-out]">

              <p className="text-red-500 font-semibold uppercase tracking-wide">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 leading-tight">
                Building With Integrity & Excellence
              </h2>

              <p className="mt-6 text-slate-600 leading-8">
                SAI BUILDERS AND CONTRACTORS is a construction firm
                committed to delivering quality and reliable construction
                solutions.
              </p>

              <p className="mt-4 text-slate-600 leading-8">
                We focus on strong execution, safety, customer satisfaction
                and practical construction solutions across residential,
                commercial and infrastructure projects.
              </p>

              <p className="mt-4 text-slate-600 leading-8">
                Our goal is to complete every project with professionalism,
                attention to detail and a strong commitment to quality.
              </p>

            </div>

            {/* OWNER */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm
                            hover:shadow-xl hover:-translate-y-2
                            transition-all duration-500
                            animate-[slideRight_0.8s_ease-out]">

              <div className="w-16 h-16 rounded-xl bg-red-500 text-white
                              flex items-center justify-center text-3xl">
                <FaHardHat />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-blue-950">
                Amit A Tandale
              </h3>

              <p className="mt-1 text-red-500 font-medium">
                Civil Engineer and Contractor
              </p>

              <p className="mt-5 text-slate-600 leading-7">
                Leading construction work with a focus on quality,
                responsible execution and client satisfaction.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-slate-50 py-20">

        <div className="max-w-7xl mx-auto px-5">

          <div className="text-center mb-12">
            <p className="text-red-500 font-semibold uppercase">
              Our Purpose
            </p>

            <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-blue-950">
              Vision & Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              {
                icon: <FaCheckCircle />,
                title: "Our Vision",
                text: "To become a trusted construction firm delivering high-quality services and dependable solutions to our clients.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Our Mission",
                text: "To design, engineer, manage and build quality construction solutions with a commitment to safety, collaboration and customer satisfaction.",
              },
            ].map((item, index) => (

              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200
                           hover:shadow-xl hover:-translate-y-2
                           transition-all duration-300
                           animate-[cardFade_0.7s_ease-out]"
                style={{ animationDelay: `${index * 150}ms` }}
              >

                <div className="w-14 h-14 bg-red-50 text-red-500 rounded-xl
                                flex items-center justify-center text-2xl">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-blue-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.text}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-5">

          <div className="text-center mb-12">

            <p className="text-red-500 font-semibold uppercase">
              Why Choose Us
            </p>

            <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-blue-950">
              Why Work With Us?
            </h2>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {reasons.map((item, index) => (

              <div
                key={item}
                className="border border-slate-200 rounded-2xl p-6 bg-white
                           shadow-sm hover:shadow-xl hover:-translate-y-2
                           transition-all duration-300"
                style={{
                  animation: "cardFade 0.7s ease-out forwards",
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                }}
              >

                <FaCheckCircle className="text-red-500 text-2xl" />

                <h3 className="mt-4 text-lg font-bold text-blue-950">
                  {item}
                </h3>

                <p className="mt-3 text-slate-500 leading-6">
                  We focus on dependable construction solutions with
                  professionalism and attention to detail.
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes cardFade {
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

    </div>
  );
};

export default About;