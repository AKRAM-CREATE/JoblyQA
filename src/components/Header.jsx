import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";
import NavBar from "./NavBar";
import NavBarOut from "./NavBarOut";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useLogout } from "../hooks/useLogout";
import { useUser } from "../hooks/useUser";

function Header({ className = "" }) {
  const [showProfile, setShowProfile] = useState(false);
  const user = useUser();

  const { logout } = useLogout();
  function handleLogout() {
    setShowProfile(!showProfile);
    logout();
  }

  return (
    <header
      className={`border-b-1 border-b-gray-400 bg-white px-3 md:px-40  min-h-12 relative ${className}`}
    >
      <div className=" h-full  md:flex flex-row sm:justify-between sm:p-4  md:items-center md:justify-between pt-2.5">
        <div className="flex items-center gap-x-8 flex-1 w-full sm:w-auto ">
          <Logo />
          <div className="hidden md:flex">
            <ul>
              <li className="list-none">
                <NavLink to="/">Home</NavLink>
              </li>
            </ul>
          </div>
        </div>
        {user?.aud ? (
          <NavBar setShowProfile={setShowProfile} showProfile={showProfile} />
        ) : (
          <NavBarOut />
        )}
      </div>
      {showProfile && (
        <div className="absolute right-5 top-12 bg-white border border-gray-300 shadow-lg rounded-xl p-3 w-40 z-30">
          <p className="text-gray-700 font-medium">
            Hello{" "}
            {user?.user_metadata?.firstName || user?.user_metadata?.lastName}👋
          </p>
          <button
            className="mt-2 text-sm text-red-500 hover:text-red-600 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
