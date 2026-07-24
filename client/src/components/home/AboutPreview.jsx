import company from "../../data/company";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
            alt="Construction"
            className="rounded-2xl shadow-lg w-full h-[450px] object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-yellow-500 font-semibold uppercase">
            About Us
          </p>

          <h2 className="text-4xl font-bold mt-3 text-slate-900">
            {company.name}
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            We specialize in delivering high-quality residential,
            commercial, and infrastructure projects with a strong
            commitment to quality, safety, and client satisfaction.
          </p>

          <button className="mt-8 bg-yellow-500 text-white px-6 py-3 rounded-xl hover:bg-yellow-600 transition">
            Read More
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutPreview;