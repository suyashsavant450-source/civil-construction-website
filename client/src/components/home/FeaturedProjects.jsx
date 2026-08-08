import projects from "../../data/projects";

const FeaturedProjects = () => {
  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* HEADER */}
        <div className="text-center mb-14">

          <p className="text-red-500 font-semibold uppercase tracking-wide">
            Featured Projects
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 mt-2">
            Our Recent Work
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Explore some of our recent construction projects and work.
          </p>

        </div>

        {/* PROJECTS */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (

            <div
              key={project.id}
              className="overflow-hidden rounded-2xl bg-white
                         border border-slate-200 shadow-sm
                         hover:shadow-2xl
                         transition-all duration-500
                         hover:-translate-y-2
                         opacity-0 animate-[projectFade_0.8s_ease-out_forwards]"
              style={{ animationDelay: `${index * 150}ms` }}
            >

              {/* IMAGE */}
              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 sm:h-72 w-full object-cover
                             transition-transform duration-700
                             hover:scale-110"
                />

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-xl sm:text-2xl font-semibold text-blue-950">
                  {project.title}
                </h3>

                <p className="text-slate-500 mt-2">
                  📍 {project.location}
                </p>

                <button
                  className="mt-5 text-red-500 font-semibold
                             hover:text-red-600 transition"
                >
                  View Details →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

      <style>{`
        @keyframes projectFade {
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

export default FeaturedProjects;