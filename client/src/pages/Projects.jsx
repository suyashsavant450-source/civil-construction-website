import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import BackButton from "../components/common/BackButton";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));

        const projectData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProjects(projectData);
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">

      <BackButton />

      {/* HEADER */}
      <section className="bg-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">

          <p className="text-red-400 font-semibold uppercase">
            Our Projects
          </p>

          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Our Recent Work
          </h1>

          <p className="mt-5 text-slate-300 max-w-2xl mx-auto">
            Explore our construction work and project experience.
          </p>

        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-5">

          {loading ? (
            <div className="text-center py-10">
              <p className="text-slate-500">
                Loading projects...
              </p>
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">
                No projects available yet.
              </p>
            </div>
          ) : (

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">

              {projects.map((project) => (

                <div
                  key={project.id}
                  className="rounded-2xl overflow-hidden border border-slate-200
                             bg-white shadow-sm hover:shadow-xl
                             hover:-translate-y-2 transition-all duration-300"
                >

                  {/* PROJECT IMAGE */}
                  <div className="h-64 bg-slate-100 overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover"
  />
</div>

                  {/* PROJECT DETAILS */}
                  <div className="p-7">

                    <p className="text-red-500 font-semibold text-sm uppercase">
                      {project.category}
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-blue-950">
                      {project.title}
                    </h2>

                    {project.location && (
                      <p className="mt-2 text-slate-500">
                        📍 {project.location}
                      </p>
                    )}

                    <p className="mt-4 text-slate-600 leading-7">
                      {project.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </section>

    </div>
  );
};

export default Projects;