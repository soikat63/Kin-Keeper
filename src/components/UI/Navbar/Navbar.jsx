import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { CgMenu } from "react-icons/cg";
import Navlogo from "../../../assets/NavLogo.png";
import { GrHomeRounded } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa";
import { PiChartLine } from "react-icons/pi";
import { NavLink } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    {
      name: "Home",
      path: "/",
      icon: <GrHomeRounded />,
    },
    {
      name: "Timeline",
      path: "/timeline",
      icon: <FaRegClock />,
    },
    {
      name: "Stats",
      path: "/stats",
      icon: <PiChartLine />,
    },
  ];

  return (
    <div className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <div>
            <a href="/" className="flex items-center">
              <img
                src={Navlogo}
                alt="logo"
                className="w-[120px] md:w-[150px]"
              />
            </a>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-4">
            {links.map((item) => (
              <NavLink
                to={item.path}
                key={item.name}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-5 py-2 rounded-lg transition-all duration-200
              ${
                isActive
                  ? "bg-[#2D5B4A] text-white"
                  : "text-gray-500 hover:text-black"
              }`
                }
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </NavLink>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <RxCross1 className="w-6 h-6" />
              ) : (
                <CgMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute  w-full  transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 border-y " : "max-h-0 "
        }`}
      >
        <div className="bg-white px-4 py-20 shadow-md flex flex-col gap-2 ">
          {links.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 px-4 py-3 rounded-lg w-[50%] mx-auto
            ${
              isActive
                ? "bg-[#2D5B4A] text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

