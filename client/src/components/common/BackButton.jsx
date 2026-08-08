import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      aria-label="Back to Home"
      className="
        fixed
        top-24
        left-5
        sm:left-8
        z-40
        w-10
        h-10
        flex
        items-center
        justify-center
        bg-red-500
        hover:bg-red-600
        text-white
        rounded-full
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
      "
    >
      <FaArrowLeft className="text-sm" />
    </button>
  );
};

export default BackButton;