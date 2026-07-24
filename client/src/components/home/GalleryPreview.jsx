const GalleryPreview = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="h-64 rounded-xl bg-gray-300 flex items-center justify-center"
            >
              Image {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;