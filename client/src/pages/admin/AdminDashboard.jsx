import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";

import {
  FaSignOutAlt,
  FaImages,
  FaBuilding,
  FaPlus,
  FaEdit,
  FaTrash,
  FaTimes,
  FaUsers,
  FaEnvelope,
} from "react-icons/fa";

/* ================= IMAGE VALIDATION ================= */

const isValidImagePath = (path) => {
  if (!path) return false;

  return /\.(jpg|jpeg|png|webp|gif)$/i.test(path);
};

/* ================= IMAGE PREVIEW ================= */

const ImagePreview = ({ path }) => {
  if (!path) {
    return (
      <div className="mt-4 h-48 flex items-center justify-center bg-slate-100 rounded-xl border">
        <p className="text-slate-400 text-sm">
          Image preview will appear here
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
      <img
        src={path}
        alt="Image Preview"
        className="w-full h-48 object-cover"
      />
    </div>
  );
};

/* ================= ADMIN DASHBOARD ================= */

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("dashboard");

  const [projects, setProjects] = useState([]);
  const [gallery, setGallery] = useState([]);

  /* ================= DASHBOARD STATS ================= */

  const [stats, setStats] = useState({
    visitors: 0,
    projects: 0,
    gallery: 0,
    enquiries: 0,
  });

  const [projectForm, setProjectForm] = useState({
    title: "",
    category: "",
    location: "",
    description: "",
    image: "",
  });

  const [galleryForm, setGalleryForm] = useState({
    title: "",
    image: "",
  });

  const [editingProject, setEditingProject] = useState(null);
  const [editingGallery, setEditingGallery] = useState(null);

  const [loading, setLoading] = useState(false);

  /* ================= LOGOUT ================= */

  const handleLogout = async () => {
    try {
      await signOut(auth);

      navigate("/admin/login", {
        replace: true,
      });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  /* ================= LOAD PROJECTS ================= */

  const loadProjects = async () => {
    try {
      const snapshot = await getDocs(
        collection(db, "projects")
      );

      const data = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));

      setProjects(data);
    } catch (error) {
      console.error("Error loading projects:", error);
    }
  };

  /* ================= LOAD GALLERY ================= */

  const loadGallery = async () => {
    try {
      const snapshot = await getDocs(
        collection(db, "gallery")
      );

      const data = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));

      setGallery(data);
    } catch (error) {
      console.error("Error loading gallery:", error);
    }
  };

  /* ================= LOAD DASHBOARD STATS ================= */

  const loadStats = async () => {
    try {
      const projectsSnapshot = await getDocs(
        collection(db, "projects")
      );

      const gallerySnapshot = await getDocs(
        collection(db, "gallery")
      );

      const enquiriesSnapshot = await getDocs(
        collection(db, "enquiries")
      );

      const visitorsSnapshot = await getDocs(
        collection(db, "visitors")
      );

      setStats({
        visitors: visitorsSnapshot.size,
        projects: projectsSnapshot.size,
        gallery: gallerySnapshot.size,
        enquiries: enquiriesSnapshot.size,
      });
    } catch (error) {
      console.error("Error loading dashboard stats:", error);

      setStats({
        visitors: 0,
        projects: 0,
        gallery: 0,
        enquiries: 0,
      });
    }
  };

  /* ================= INITIAL LOAD ================= */

  useEffect(() => {
    loadProjects();
    loadGallery();
    loadStats();
  }, []);

  /* ================= PROJECT FORM ================= */

  const handleProjectChange = (e) => {
    setProjectForm({
      ...projectForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();

    if (!projectForm.title || !projectForm.description) {
      alert("Please enter project title and description.");
      return;
    }

    if (!projectForm.image) {
      alert("Please enter project image path.");
      return;
    }

    if (!isValidImagePath(projectForm.image)) {
      alert("Please enter a valid image path.");
      return;
    }

    setLoading(true);

    try {
      if (editingProject) {
        await updateDoc(
          doc(db, "projects", editingProject),
          projectForm
        );

        alert("Project updated successfully.");
      } else {
        await addDoc(collection(db, "projects"), {
          ...projectForm,
          createdAt: new Date().toISOString(),
        });

        alert("Project added successfully.");
      }

      setProjectForm({
        title: "",
        category: "",
        location: "",
        description: "",
        image: "",
      });

      setEditingProject(null);

      await loadProjects();
      await loadStats();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  /* ================= EDIT PROJECT ================= */

  const editProject = (project) => {
    setEditingProject(project.id);

    setProjectForm({
      title: project.title || "",
      category: project.category || "",
      location: project.location || "",
      description: project.description || "",
      image: project.image || "",
    });

    setActiveSection("projects");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* ================= DELETE PROJECT ================= */

  const deleteProject = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "projects", id));

      await loadProjects();
      await loadStats();

      alert("Project deleted successfully.");
    } catch (error) {
      console.error(error);
      alert("Unable to delete project.");
    }
  };

  /* ================= GALLERY FORM ================= */

  const handleGalleryChange = (e) => {
    setGalleryForm({
      ...galleryForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleGallerySubmit = async (e) => {
    e.preventDefault();

    if (!galleryForm.title || !galleryForm.image) {
      alert("Please enter title and image path.");
      return;
    }

    if (!isValidImagePath(galleryForm.image)) {
      alert("Please enter a valid image path.");
      return;
    }

    setLoading(true);

    try {
      if (editingGallery) {
        await updateDoc(
          doc(db, "gallery", editingGallery),
          galleryForm
        );

        alert("Gallery image updated.");
      } else {
        await addDoc(collection(db, "gallery"), {
          ...galleryForm,
          createdAt: new Date().toISOString(),
        });

        alert("Gallery image added.");
      }

      setGalleryForm({
        title: "",
        image: "",
      });

      setEditingGallery(null);

      await loadGallery();
      await loadStats();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  /* ================= EDIT GALLERY ================= */

  const editGallery = (item) => {
    setEditingGallery(item.id);

    setGalleryForm({
      title: item.title || "",
      image: item.image || "",
    });

    setActiveSection("gallery");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* ================= DELETE GALLERY ================= */

  const deleteGallery = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this image?"
    );

    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "gallery", id));

      await loadGallery();
      await loadStats();

      alert("Gallery image deleted successfully.");
    } catch (error) {
      console.error(error);
      alert("Unable to delete image.");
    }
  };

  /* ================= CANCEL EDIT ================= */

  const cancelEdit = () => {
    setEditingProject(null);
    setEditingGallery(null);

    setProjectForm({
      title: "",
      category: "",
      location: "",
      description: "",
      image: "",
    });

    setGalleryForm({
      title: "",
      image: "",
    });
  };

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-slate-50">

      {/* HEADER */}

      <header className="bg-blue-950 text-white">

        <div className="max-w-7xl mx-auto px-5 py-5 flex items-center justify-between">

          <div>
            <h1 className="text-xl sm:text-2xl font-bold">
              Admin Dashboard
            </h1>

            <p className="text-slate-300 text-sm">
              Sai Builders and Contractors
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold transition"
          >
            <FaSignOutAlt />

            <span className="hidden sm:block">
              Logout
            </span>
          </button>

        </div>

      </header>

      {/* MAIN */}

      <main className="max-w-7xl mx-auto px-5 py-10">

        {/* ================= DASHBOARD ================= */}

        {activeSection === "dashboard" && (
          <>

            <h2 className="text-3xl font-bold text-blue-950">
              Welcome, Admin 👋
            </h2>

            <p className="mt-2 text-slate-500">
              Manage your website content from here.
            </p>

            {/* ================= STATS CARDS ================= */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

              {/* VISITORS */}

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">

                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FaUsers className="text-xl" />
                </div>

                <p className="mt-5 text-slate-500 font-medium">
                  Total Visitors
                </p>

                <h3 className="mt-1 text-3xl font-bold text-blue-950">
                  {stats.visitors}
                </h3>

                <p className="text-xs text-slate-400 mt-1">
                  Website visitors
                </p>

              </div>

              {/* PROJECTS */}

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">

                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                  <FaBuilding className="text-xl" />
                </div>

                <p className="mt-5 text-slate-500 font-medium">
                  Projects
                </p>

                <h3 className="mt-1 text-3xl font-bold text-blue-950">
                  {stats.projects}
                </h3>

                <p className="text-xs text-slate-400 mt-1">
                  Total projects
                </p>

              </div>

              {/* GALLERY */}

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">

                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <FaImages className="text-xl" />
                </div>

                <p className="mt-5 text-slate-500 font-medium">
                  Gallery
                </p>

                <h3 className="mt-1 text-3xl font-bold text-blue-950">
                  {stats.gallery}
                </h3>

                <p className="text-xs text-slate-400 mt-1">
                  Total gallery images
                </p>

              </div>

              {/* ENQUIRIES */}

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">

                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                  <FaEnvelope className="text-xl" />
                </div>

                <p className="mt-5 text-slate-500 font-medium">
                  Enquiries
                </p>

                <h3 className="mt-1 text-3xl font-bold text-blue-950">
                  {stats.enquiries}
                </h3>

                <p className="text-xs text-slate-400 mt-1">
                  Customer enquiries
                </p>

              </div>

            </div>

            {/* ================= MANAGEMENT CARDS ================= */}

            <div className="grid sm:grid-cols-2 gap-6 mt-8">

              {/* GALLERY */}

              <button
                onClick={() => setActiveSection("gallery")}
                className="text-left bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
              >

                <FaImages className="text-3xl text-red-500" />

                <h3 className="mt-5 text-xl font-bold text-blue-950">
                  Gallery
                </h3>

                <p className="mt-2 text-slate-500">
                  Add, edit and delete gallery images.
                </p>

              </button>

              {/* PROJECTS */}

              <button
                onClick={() => setActiveSection("projects")}
                className="text-left bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
              >

                <FaBuilding className="text-3xl text-red-500" />

                <h3 className="mt-5 text-xl font-bold text-blue-950">
                  Projects
                </h3>

                <p className="mt-2 text-slate-500">
                  Add, edit and delete construction projects.
                </p>

              </button>

            </div>

          </>
        )}

        {/* ================= PROJECTS ================= */}

        {activeSection === "projects" && (
          <section>

            <div className="flex items-center justify-between mb-8">

              <div>
                <h2 className="text-3xl font-bold text-blue-950">
                  Manage Projects
                </h2>

                <p className="text-slate-500 mt-1">
                  Add and manage construction projects.
                </p>
              </div>

              <button
                onClick={() => {
                  cancelEdit();
                  setActiveSection("dashboard");
                }}
                className="flex items-center gap-2 text-slate-600 hover:text-red-500"
              >
                <FaTimes />
                Close
              </button>

            </div>

            {/* PROJECT FORM */}

            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">

              <h3 className="text-xl font-bold text-blue-950 mb-6">
                {editingProject
                  ? "Edit Project"
                  : "Add New Project"}
              </h3>

              <form
                onSubmit={handleProjectSubmit}
                className="grid md:grid-cols-2 gap-5"
              >

                <input
                  name="title"
                  value={projectForm.title}
                  onChange={handleProjectChange}
                  placeholder="Project title"
                  className="border rounded-lg px-4 py-3 outline-none focus:border-red-500"
                  required
                />

                <input
                  name="category"
                  value={projectForm.category}
                  onChange={handleProjectChange}
                  placeholder="Category"
                  className="border rounded-lg px-4 py-3 outline-none focus:border-red-500"
                />

                <input
                  name="location"
                  value={projectForm.location}
                  onChange={handleProjectChange}
                  placeholder="Location"
                  className="border rounded-lg px-4 py-3 outline-none focus:border-red-500"
                />

                {/* PROJECT IMAGE PATH */}

                <div className="md:col-span-2">

                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Project Image Path
                  </label>

                  <input
                    name="image"
                    value={projectForm.image}
                    onChange={handleProjectChange}
                    placeholder="/projects/project1.png"
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:border-red-500"
                    required
                  />

                  <p className="text-xs text-slate-400 mt-2">
                    Example: /projects/project1.png
                  </p>

                  <ImagePreview path={projectForm.image} />

                </div>

                <textarea
                  name="description"
                  value={projectForm.description}
                  onChange={handleProjectChange}
                  placeholder="Project description"
                  rows="4"
                  className="md:col-span-2 border rounded-lg px-4 py-3 outline-none focus:border-red-500 resize-none"
                  required
                />

                <div className="md:col-span-2 flex gap-3">

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 disabled:opacity-60"
                  >

                    <FaPlus />

                    {loading
                      ? "Saving..."
                      : editingProject
                      ? "Update Project"
                      : "Add Project"}

                  </button>

                  {editingProject && (
                    <button
                      type="button"
                      onClick={cancelEdit}
                      className="border border-slate-300 px-6 py-3 rounded-lg font-semibold"
                    >
                      Cancel
                    </button>
                  )}

                </div>

              </form>

            </div>

            {/* PROJECT LIST */}

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              {projects.map((project) => (

                <div
                  key={project.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
                >

                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-52 object-cover"
                    />
                  ) : (
                    <div className="w-full h-52 bg-slate-100 flex items-center justify-center">
                      <span className="text-slate-400">
                        No image
                      </span>
                    </div>
                  )}

                  <div className="p-6">

                    <p className="text-red-500 text-sm font-semibold uppercase">
                      {project.category}
                    </p>

                    <h3 className="text-xl font-bold text-blue-950 mt-1">
                      {project.title}
                    </h3>

                    <p className="text-slate-500 mt-2">
                      {project.location}
                    </p>

                    <p className="text-slate-600 mt-3">
                      {project.description}
                    </p>

                    <div className="flex gap-3 mt-5">

                      <button
                        onClick={() => editProject(project)}
                        className="flex items-center gap-2 text-blue-950 font-semibold"
                      >
                        <FaEdit />
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          deleteProject(project.id)
                        }
                        className="flex items-center gap-2 text-red-500 font-semibold"
                      >
                        <FaTrash />
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </section>
        )}

        {/* ================= GALLERY ================= */}

        {activeSection === "gallery" && (
          <section>

            <div className="flex items-center justify-between mb-8">

              <div>
                <h2 className="text-3xl font-bold text-blue-950">
                  Manage Gallery
                </h2>

                <p className="text-slate-500 mt-1">
                  Add and manage gallery images.
                </p>
              </div>

              <button
                onClick={() => {
                  cancelEdit();
                  setActiveSection("dashboard");
                }}
                className="flex items-center gap-2 text-slate-600 hover:text-red-500"
              >
                <FaTimes />
                Close
              </button>

            </div>

            {/* GALLERY FORM */}

            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">

              <h3 className="text-xl font-bold text-blue-950 mb-6">
                {editingGallery
                  ? "Edit Gallery Image"
                  : "Add Gallery Image"}
              </h3>

              <form
                onSubmit={handleGallerySubmit}
                className="grid md:grid-cols-2 gap-5"
              >

                <input
                  name="title"
                  value={galleryForm.title}
                  onChange={handleGalleryChange}
                  placeholder="Image title"
                  className="border rounded-lg px-4 py-3 outline-none focus:border-red-500"
                  required
                />

                {/* GALLERY IMAGE PATH */}

                <div>

                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Gallery Image Path
                  </label>

                  <input
                    name="image"
                    value={galleryForm.image}
                    onChange={handleGalleryChange}
                    placeholder="/gallery/gallery1.jpg"
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:border-red-500"
                    required
                  />

                  <p className="text-xs text-slate-400 mt-2">
                    Example: /gallery/gallery1.jpg
                  </p>

                </div>

                <div className="md:col-span-2">

                  <ImagePreview path={galleryForm.image} />

                </div>

                <div className="md:col-span-2 flex gap-3">

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 disabled:opacity-60"
                  >

                    <FaPlus />

                    {loading
                      ? "Saving..."
                      : editingGallery
                      ? "Update Image"
                      : "Add Image"}

                  </button>

                  {editingGallery && (
                    <button
                      type="button"
                      onClick={cancelEdit}
                      className="border border-slate-300 px-6 py-3 rounded-lg font-semibold"
                    >
                      Cancel
                    </button>
                  )}

                </div>

              </form>

            </div>

            {/* GALLERY LIST */}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

              {gallery.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
                >

                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover"
                    />
                  ) : (
                    <div className="w-full h-56 bg-slate-100 flex items-center justify-center">
                      <span className="text-slate-400">
                        No image
                      </span>
                    </div>
                  )}

                  <div className="p-5">

                    <h3 className="font-bold text-blue-950">
                      {item.title}
                    </h3>

                    <div className="flex gap-4 mt-4">

                      <button
                        onClick={() => editGallery(item)}
                        className="flex items-center gap-2 text-blue-950 font-semibold"
                      >
                        <FaEdit />
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          deleteGallery(item.id)
                        }
                        className="flex items-center gap-2 text-red-500 font-semibold"
                      >
                        <FaTrash />
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </section>
        )}

      </main>

    </div>
  );
};

export default AdminDashboard;