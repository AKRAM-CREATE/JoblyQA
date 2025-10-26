import { IoSearchOutline } from "react-icons/io5";
import { useJobProvider } from "../hooks/useJobProvider";
import { useState } from "react";

function SearchBar() {
  const { setSearchQuery } = useJobProvider();
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSearchQuery(inputValue.trim());
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <IoSearchOutline
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
        size={20}
      />

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Find your perfect job"
        className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 border-none focus:ring-2 focus:ring-blue-400 outline-none text-sm"
      />
    </div>
  );
}

export default SearchBar;
