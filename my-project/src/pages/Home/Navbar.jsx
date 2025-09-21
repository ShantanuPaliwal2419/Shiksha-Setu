import React, { useState } from "react";
import logo from "../../assets/setu.jpg"; // make sure it's a .png/.svg

const Navbar = () => {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo only */}
        
          <img
          src={logo}
          alt="Shiksha Setu Logo"
          className="w-[120px] h-12 transform scale-125 object-contain" // increased size
        />
        

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:space-x-6 items-center text-gray-700">
          <a href="#home" className="hover:text-[#2563EB] hover:underline transition-colors">
            Home
          </a>
          <a href="#features" className="hover:text-[#2563EB] hover:underline transition-colors">
            Features
          </a>
          <a href="#how" className="hover:text-[#2563EB] hover:underline transition-colors">
            How It Works
          </a>
          <a href="#benefits" className="hover:text-[#2563EB] hover:underline transition-colors">
            Benefits
          </a>

          {/* Register Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setRegisterOpen(!registerOpen);
                setLoginOpen(false);
              }}
              className="bg-[#1E3A8A] text-white px-4 py-2 rounded transition-all duration-300 hover:bg-[#2563EB] focus:outline-none"
            >
              Register
            </button>
            {registerOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow-lg z-10">
                <a href="/register/admin" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Register as Admin
                </a>
                <a href="/signin/student" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Register as Student
                </a>
              </div>
            )}
          </div>

            {/* Login Dropdown */}
           
              <button
                onClick={() => setOpen(!open)}
                className="bg-[#1E3A8A] text-white px-4 py-2 rounded transition-all duration-300 ease-in-out hover:bg-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:ring-opacity-50"
              >
                Login
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow-lg z-10">
                  <a href="/signin/admin" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">Signin as Admin</a>
                  <a href="/signin/student" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">Signin as Student</a>
                </div>
              )}
            </div>
          </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-6">
          <a href="#home" className="block py-2 text-gray-700 hover:text-[#2563EB]" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </a>
          <a href="#features" className="block py-2 text-gray-700 hover:text-[#2563EB]" onClick={() => setIsMobileMenuOpen(false)}>
            Features
          </a>
          <a href="#how" className="block py-2 text-gray-700 hover:text-[#2563EB]" onClick={() => setIsMobileMenuOpen(false)}>
            How It Works
          </a>
          <a href="#benefits" className="block py-2 text-gray-700 hover:text-[#2563EB]" onClick={() => setIsMobileMenuOpen(false)}>
            Benefits
          </a>
          <a href="#contact" className="block py-2 text-gray-700 hover:text-[#2563EB]" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </a>

          {/* Mobile Login */}
          <button
            onClick={() => setLoginOpen(!loginOpen)}
            className="mt-4 w-full text-left bg-[#1E3A8A] text-white px-4 py-2 rounded hover:bg-[#2563EB] transition-all duration-300"
          >
            Login
          </button>
          {loginOpen && (
            <div className="mt-2 ml-4">
              <a href="/login/admin" className="block py-2 text-gray-700 hover:text-[#2563EB]" onClick={() => setIsMobileMenuOpen(false)}>
                Login as Admin
              </a>
              <a href="/login/staff" className="block py-2 text-gray-700 hover:text-[#2563EB]" onClick={() => setIsMobileMenuOpen(false)}>
                Login as Staff
              </a>
              <a href="/login-student" className="block py-2 text-gray-700 hover:text-[#2563EB]" onClick={() => setIsMobileMenuOpen(false)}>
                Login as Student
              </a>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
