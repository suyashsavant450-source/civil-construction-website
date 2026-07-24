import projects from "../../data/projects";

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">
          <p className="text-yellow-500 font-semibold uppercase">
            Featured Projects
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Our Recent Work
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-72 w-full object-cover hover:scale-105 transition duration-500"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  📍 {project.location}
                </p>

                <button className="mt-5 text-yellow-600 font-semibold hover:underline">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;