import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { CgMenu } from "react-icons/cg";
import Navlogo from "../../../assets/NavLogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

    return (
      <div className=" bg-base-100 shadow-md px-4 md:px-10 sticky top-0 z-50">
        <div className="container mx-auto navbar ">
          {/* LEFT - LOGO */}
          <div className="flex-1">
            <a href="/" className="flex items-center">
              <img
                src={Navlogo}
                alt="logo"
                className="w-[120px] md:w-[160px]"
              />
            </a>
          </div>

          {/* RIGHT - DESKTOP MENU */}
          <div className="hidden md:flex gap-6">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-semibold hover:text-primary"
              >
                {link}
              </a>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <RxCross1 className="w-6 h-6" />
            ) : (
              <CgMenu className="w-6 h-6" />
            )}
          </div>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col p-4 gap-3 md:hidden">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 border-b"
                >
                  {link}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    );
};

export default Navbar;
