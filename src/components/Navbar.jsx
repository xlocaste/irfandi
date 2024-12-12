import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <img src="./public/assets/logo.png" alt="" className="w-12 h-12"/>

        <button
          onClick={toggleMenu}
          className="lg:hidden block text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:space-x-8 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent lg:items-center`}
        >
          <li>
            <a href="#home" className="block py-2 px-4 hover:bg-gray-700">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="block py-2 px-4 hover:bg-gray-700">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="block py-2 px-4 hover:bg-gray-700">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="block py-2 px-4 hover:bg-gray-700">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
