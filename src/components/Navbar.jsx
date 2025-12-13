import React, { useState } from 'react'
import pic from "../../public/photo.avif"
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Contact" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-12 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex space-x-2 items-center">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer leading-tight">
              Chayan
              <p className="text-sm font-normal">Web Developer</p>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-125 duration-200 cursor-pointer"
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Icon */}
            <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
              {menu ? <IoIosClose size={28} /> : <IoMenu size={28} />}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="fixed top-12 left-0 w-full h-screen bg-white z-50 shadow-md transition-all duration-300">
            <ul className="flex flex-col items-center justify-center h-full space-y-6 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-110 duration-200 cursor-pointer font-semibold"
                  onClick={() => setMenu(false)}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
