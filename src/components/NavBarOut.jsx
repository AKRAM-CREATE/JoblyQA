import { FaBookmark, FaUserCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
function NavBarOut() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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
          className={`transition-all duration-300 pt-5 md:pt-0 space-y-3 md:space-y-0 gap-4 font-bold text-[16px]
          ${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:justify-center
         `}
        >
          <li className="w-fit  md:hidden ">
            <NavLink to="/">Home</NavLink>
          </li>
          <li
            className="w-fit hidden md:block cursor-pointer border-3 border-blue-400 px-2"
            onClick={() => navigate("/login")}
          >
            SIGN-IN
          </li>

          <li className="w-fit md:hidden">
            <NavLink to="/">Home</NavLink>
          </li>
          <li
            className="w-fit md:hidden cursor-pointer"
            onClick={() => navigate("/login")}
          >
            LogIn
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBarOut;
