import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsapp = () => {
  return (
    <a
      href="https://wa.me/919916129353"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed bottom-20 right-6 z-45 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center text-3xl shadow-xl transition-all duration-300 hover:scale-110"
    >
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsapp;