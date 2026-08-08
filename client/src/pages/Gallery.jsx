import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import BackButton from "../components/common/BackButton";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "gallery"));

        const galleryData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setGallery(galleryData);
      } catch (error) {
        console.error("Error loading gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">

      <BackButton />

      {/* HEADER */}
      <section className="bg-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">

          <p className="text-red-400 font-semibold uppercase">
            Our Gallery
          </p>

          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Construction Work
          </h1>

          <p className="mt-5 text-slate-300 max-w-2xl mx-auto">
            A glimpse of our construction activities and completed work.
          </p>

        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-5">

          <div className="text-center mb-12">

            <p className="text-red-500 font-semibold uppercase">
              Project Gallery
            </p>

            <h2 className="mt-2 text-4xl font-bold text-blue-950">
              Our Work
            </h2>

          </div>

          {loading ? (

            <div className="text-center py-12">
              <p className="text-slate-500">
                Loading gallery...
              </p>
            </div>

          ) : gallery.length === 0 ? (

            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">
                No gallery images available yet.
              </p>
            </div>

          ) : (

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {gallery.map((item) => (

                <div
                  key={item.id}
                  className="group bg-white rounded-2xl overflow-hidden
                             border border-slate-200 shadow-sm
                             hover:shadow-xl transition-all duration-300"
                >

                  {/* IMAGE */}
                  <div className="h-72 overflow-hidden bg-slate-100">

                    <img
                      src={item.image}
                      alt={item.title || "Construction project"}
                      className="w-full h-full object-cover
                                 group-hover:scale-105
                                 transition duration-500"
                    />

                  </div>

                  {/* DETAILS */}
                  <div className="p-5">

                    {item.title && (
                      <h3 className="text-xl font-bold text-blue-950">
                        {item.title}
                      </h3>
                    )}

                    {item.description && (
                      <p className="mt-2 text-slate-600">
                        {item.description}
                      </p>
                    )}

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

export default Gallery;