import { useState } from "react";
import { Link } from "react-scroll";
import Footer from "./Footer";

const AnuragNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="flex justify-between relative">
        <a href="/">
          {/* Show the first logo in both desktop and mobile versions */}
          <img
            src="/images/IConclave.png"
            className="h-24 p-4"
            alt="Iconclavebg"
          />
        </a>
        {/* Desktop Menu */}
        <div className="hidden lg:flex pl-32">
          <div className="text-white text-xl flex items-center">
            <ul className="flex gap-24 ">
              <Link to="about" smooth={true} duration={500}>
                <li className="hover:border-b-2 pb-1 ">ABOUT</li>
              </Link>
              <Link to="guidelines" smooth={true} duration={500}>
                <li className="hover:border-b-2 pb-1 ">GUIDELINES</li>
              </Link>
              <Link to="getintouch" smooth={true} duration={500}>
                <li className="hover:border-b-2 pb-1 ">GET IN TOUCH</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="lg:hidden flex items-center px-4">
          {/* Mobile menu button */}
          <button className="p-4 focus:outline-none" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <div></div>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex">
          {/* Show the second logo only in the desktop version */}
          <div className="flex flex-col justify-center">
            <a href="/cult">
              <h1
                className="font-smarkan text-3xl m-0 p-6 text-center text-white font-normal"
                id="anurag"
              >
                CULTURAL EVENTS
              </h1>
            </a>
          </div>
        </div>
      </nav>
      {/* Black overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black z-50 flex flex-col items-center justify-center">
          {/* Cross button to close the mobile menu */}
          <button
            className="absolute top-4 right-4 p-4 text-white"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="text-white text-2xl flex-grow justify-center flex flex-col ">
            <div className="flex items-center justify-center">
              <ul className="flex flex-col text-center gap-8">
                <Link
                  to="about"
                  onClick={closeMobileMenu}
                  smooth={true}
                  duration={500}
                >
                  <li className="hover:border-b-2 pb-1 ">ABOUT</li>
                </Link>
                <Link
                  to="guidelines"
                  onClick={closeMobileMenu}
                  smooth={true}
                  duration={500}
                >
                  <li className="hover:border-b-2 pb-1 ">GUIDELINES</li>
                </Link>
                <Link
                  to="getintouch"
                  onClick={closeMobileMenu}
                  smooth={true}
                  duration={500}
                >
                  <li className="hover:border-b-2 pb-1 ">GET IN TOUCH</li>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <Footer textColor={"white"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AnuragNav;
