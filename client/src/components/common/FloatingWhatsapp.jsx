import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsapp = () => {
  return (
    <a
      href="https://wa.me/910000000000"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl hover:scale-110 transition"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default FloatingWhatsapp;