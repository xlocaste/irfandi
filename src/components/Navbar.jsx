import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`absolute w-full z-20 transition-all duration-300 ${isOpen ? 'bg-primary' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <button>
          <a href="./components/navbar">
          <img src="/assets/logo.png" alt="Logo" className="w-12 h-12" />
          </a>
        </button>

        <button
          onClick={toggleMenu}
          className="lg:hidden block focus:outline-none"
        >
          <svg
            className={`w-6 h-6 ${isOpen ? 'text-neutral' : 'text-neutral'}`}
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
        <ul className='hidden lg:flex'>
          <li>
            <a href="#home" className="py-2 px-4 text-neutral hover:underline">
              HOME
            </a>
          </li>
          <li>
            <a href="#about" className="py-2 px-4 text-neutral hover:underline">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#services" className="py-2 px-4 text-neutral hover:underline">
              SERVICES
            </a>
          </li>
          <li>
            <a href="#contact" className="py-2 px-4 text-neutral hover:underline">
              CONTACT
            </a>
          </li>
        </ul>
      </div>

      {/* HAMB */}
      <div className={`transition-all duration-300 w-full ${isOpen ? 'absolute translate-x-0 bg-primary' : 'absolute -translate-x-full'}`}>
        <ul className='lg:hidden text-center pb-4'>
          <li>
            <a href="#home" className="block py-2 px-4 text-neutral font-semibold hover:text-accent hover:bg-secondary">
              HOME
            </a>
          </li>
          <li>
            <a href="#about" className="block py-2 px-4 text-neutral font-semibold hover:text-accent hover:bg-secondary">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#services" className="block py-2 px-4 text-neutral font-semibold hover:text-accent hover:bg-secondary">
              SERVICES
            </a>
          </li>
          <li>
            <a href="#contact" className="block py-2 px-4 text-neutral font-semibold hover:text-accent hover:bg-secondary">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
