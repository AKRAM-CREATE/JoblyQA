import { FaBookmark, FaUserCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
function NavBar({ setShowProfile, showProfile }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      <button
        className="text-2xl md:hidden absolute right-5 -top-5 z-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      <div>
        <ul
          className={`md:flex  md:items-center gap-4 font-bold text-[16px]   md:justify-center  transition-all duration-300 pt-5 md:pt-0 space-y-3 md:space-y-0
            ${isOpen ? "block" : "hidden md:flex"}
            
            `}
        >
          <li className="w-fit  md:hidden ">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="w-fit ">
            <NavLink to="/myjobs">
              <span className="md:hidden">My Jobs</span>

              <FaBookmark
                size={24}
                color="gray"
                className="hidden  md:inline-block"
              />
            </NavLink>
          </li>
          <li
            className="w-fit  cursor-pointer "
            onClick={() => setShowProfile((prev) => !prev)}
          >
            <CgProfile
              size={30}
              className={`hidden md:inline-block transition-colors duration-200 ${
                showProfile ? "text-blue-500" : "text-gray-700"
              }`}
            />
            <span className="md:hidden">My Profile</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
