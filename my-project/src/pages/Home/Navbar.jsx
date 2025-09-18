import React from 'react'
import { useState } from 'react';
const Navbar = () => {
    const [open, setOpen] = useState(false);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="border-b bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold text-[#1E3A8A]">College ERP</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-6 items-center text-gray-700">
            <a href="#home" className="hover:text-[#2563EB] hover:underline transition-colors">Home</a>
            <a href="#features" className="hover:text-[#2563EB] hover:underline transition-colors">Features</a>
            <a href="#how" className="hover:text-[#2563EB] hover:underline transition-colors">How It Works</a>
            <a href="#benefits" className="hover:text-[#2563EB] hover:underline transition-colors">Benefits</a>
            
            {/* Register Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="bg-[#1E3A8A] text-white px-4 py-2 left-margin-4  rounded transition-all duration-300 ease-in-out hover:bg-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:ring-opacity-50"
              >
                Register
              </button>
              {open && (
                <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow-lg z-10">
                  <a href="/signin/admin" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">Register as Admin</a>
                  
                  <a href="/signin/student" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"> as Student</a>
                </div>
              )}

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
            <a href="#home" className="block py-2 text-gray-700 hover:text-[#2563EB]" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#features" className="block py-2 text-gray-700 hover:text-[#2563EB]" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#how" className="block py-2 text-gray-700 hover:text-[#2563EB]" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
            <a href="#benefits" className="block py-2 text-gray-700 hover:text-[#2563EB]" onClick={() => setIsMobileMenuOpen(false)}>Benefits</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-[#2563EB]" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <button
              onClick={() => { setOpen(!open); setIsMobileMenuOpen(false); }}
              className="mt-4 w-full text-left bg-[#1E3A8A] text-white px-4 py-2 rounded hover:bg-[#2563EB] transition-all duration-300 ease-in-out"
            >
              Login
            </button>
            {open && (
              <div className="mt-2 ml-4">
                <a href="/login/admin" className="block py-2 text-gray-700 hover:text-[#2563EB]" onClick={() => setIsMobileMenuOpen(false)}>Login as Admin</a>
                <a href="/login/staff" className="block py-2 text-gray-700 hover:text-[#2563EB]" onClick={() => setIsMobileMenuOpen(false)}>Login as Staff</a>
                <a href="/login/student" className="block py-2 text-gray-700 hover:text-[#2563EB]" onClick={() => setIsMobileMenuOpen(false)}>Login as Student</a>
              </div>
            )}
          </div>
        )}
      </header>
  )
}

export default Navbar