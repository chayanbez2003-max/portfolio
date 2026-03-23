import React, { useState, useEffect } from 'react'
import pic from "../../public/photo.avif"
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Contact" },
  ];

  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass shadow-lg shadow-purple-900/20'
            : 'bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex space-x-3 items-center group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 blur-sm opacity-70 group-hover:opacity-100 transition-opacity" />
              <img src={pic} className="relative h-10 w-10 rounded-full border-2 border-purple-500/50 object-cover" alt="Chayan" />
            </div>
            <div>
              <h1 className="font-bold text-white text-lg leading-none">Chayan</h1>
              <p className="text-xs text-purple-400 font-medium">Web Developer</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center">
            {navItems.map(({ id, text }) => (
              <li key={id} className="cursor-pointer">
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="nav-link text-gray-300 hover:text-white font-medium transition-colors duration-200 text-sm tracking-wide"
                >
                  {text}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/Chayan Bez_resume.pdf"
                download
                className="px-5 py-2 rounded-full text-sm font-semibold text-white gradient-border hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.2))' }}
              >
                Resume ↓
              </a>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer text-gray-300 hover:text-white transition-colors">
            {menu ? <IoIosClose size={30} /> : <IoMenu size={28} />}
          </div>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="fixed top-16 left-0 w-full h-screen bg-[#060912]/95 backdrop-blur-xl z-50 border-t border-purple-900/30">
            <ul className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="cursor-pointer font-semibold text-gray-300 hover:text-white transition-all duration-200"
                  onClick={() => setMenu(false)}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="nav-link"
                  >
                    {text}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/Chayan Bez_resume.pdf"
                  download
                  className="px-8 py-3 rounded-full font-semibold"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', color: 'white' }}
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
