import { FiZap } from "react-icons/fi";

function EasyApplyBtn({ url = "#" }) {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <button
      className="
      cursor-pointer
        px-1 py-1
        bg-blue-400 font-semibold
        rounded-sm
        shadow-md
        hover:bg-blue-500
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-green-300
        text-white
        w-28
        h-8
      "
      onClick={handleClick}
    >
      <span className="flex items-center justify-center text-[12px] gap-x-1 font-bold">
        <FiZap size={18} /> Easy Apply
      </span>
    </button>
  );
}

export default EasyApplyBtn;
