import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const ContactPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">
          <p className="uppercase text-yellow-500 font-semibold">
            Contact Us
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Let's Build Something Great Together
          </h2>

          <p className="mt-4 text-gray-500">
            Reach out to us for residential, commercial and civil construction projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="space-y-6">

            <div className="flex gap-5 p-6 rounded-2xl shadow-lg">
              <FaPhoneAlt className="text-yellow-500 text-3xl" />
              <div>
                <h3 className="font-bold text-xl">Phone</h3>
                <p className="text-gray-600">+91 XXXXX XXXXX</p>
              </div>
            </div>

            <div className="flex gap-5 p-6 rounded-2xl shadow-lg">
              <FaWhatsapp className="text-green-500 text-3xl" />
              <div>
                <h3 className="font-bold text-xl">WhatsApp</h3>
                <p className="text-gray-600">+91 XXXXX XXXXX</p>
              </div>
            </div>

            <div className="flex gap-5 p-6 rounded-2xl shadow-lg">
              <FaEnvelope className="text-red-500 text-3xl" />
              <div>
                <h3 className="font-bold text-xl">Email</h3>
                <p className="text-gray-600">info@company.com</p>
              </div>
            </div>

            <div className="flex gap-5 p-6 rounded-2xl shadow-lg">
              <FaMapMarkerAlt className="text-blue-500 text-3xl" />
              <div>
                <h3 className="font-bold text-xl">Office Address</h3>
                <p className="text-gray-600">
                  Karnataka, India
                </p>
              </div>
            </div>

          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg min-h-[400px] bg-gray-200 flex items-center justify-center">
            <p className="text-gray-600 font-semibold">
              Google Map will be added here
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactPreview;