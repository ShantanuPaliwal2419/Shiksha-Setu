import { useState } from "react";
import collegeClassBro from "@/assets/college class-bro.svg";
import man from "@/assets/e493d6228689551.6857ba98bf44a.png"
import customer from "@/assets/Customer relationship management-rafiki.svg"
import { Features } from "./pages/Home/Features";
import { HowItWorks } from "./pages/Home/How-it-works";
import Benifts from "./pages/Home/Benifts";
import { AdminDashboard } from "./pages/Dashboard/admin";
import { StaffDashboard } from "./pages/Dashboard/staff";
export default function LandingPage() {
  const [open, setOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-800 font-sans">
      {/* Govt Header Strip */}
      <div className="bg-[#1E3A8A] text-white text-sm py-2 text-center">
        XYZ College ERP Portal | Govt Initiative Prototype
      </div>

      {/* Navbar */}
      <header className="border-b bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold text-[#1E3A8A]">College ERP</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-6 items-center text-gray-700">
            <a href="#home" className="hover:text-[#2563EB] hover:underline transition-colors">Home</a>
            <a href="#features" className="hover:text-[#2563EB] hover:underline transition-colors">Features</a>
            <a href="#how" className="hover:text-[#2563EB] hover:underline transition-colors">How It Works</a>
            <a href="#benefits" className="hover:text-[#2563EB] hover:underline transition-colors">Benefits</a>
            <a href="#contact" className="hover:text-[#2563EB] hover:underline transition-colors">Contact</a>

            {/* Login Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="bg-[#1E3A8A] text-white px-4 py-2 rounded transition-all duration-300 ease-in-out hover:bg-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:ring-opacity-50"
              >
                Login
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow-lg z-10">
                  <a href="/login/admin" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">Login as Admin</a>
                  <a href="/login/staff" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">Login as Staff</a>
                  <a href="/login/student" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">Login as Student</a>
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

      {/* Hero Section */}
      <section id="home" className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[#1E3A8A] mb-4">
            Unified ERP for Colleges
          </h2>
          <p className="text-gray-600 text-lg">
            Admissions, Fees, Hostel & Exams — all in one place. Simple, secure and affordable solution for institutions.
          </p>
          <button className="mt-6 bg-[#1E3A8A] text-white px-6 py-3 rounded text-lg transition-all duration-300 ease-in-out hover:bg-[#2563EB] hover:shadow-md">
            Get Started
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={collegeClassBro}
            alt="College illustration"
            className="max-h-full w-full object-contain"
          />
        </div>
      </section>

      {/* Features Section (Timeline Style) */}
      <Features/>

      {/* How It Works */}
      <HowItWorks/>

      {/* Benefits */}
       <Benifts/>
      {/* Footer */}
      <footer id="contact" className="border-t bg-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">© 2025 XYZ College ERP | All Rights Reserved</p>
          <p className="text-gray-600 mt-2">Contact: erp-support@xyz.edu | +91-9876543210</p>
          <p className="text-[#1E3A8A] mt-2 font-semibold">Powered by Hackathon Team</p>
          <p className="text-gray-500 text-sm mt-2">
            Illustration credit:{" "}
            <a href="https://storyset.com/education" target="_blank" rel="noopener noreferrer" className="underline">
              Education illustrations by Storyset
            </a>
           
          </p>
        </div>
      </footer>
    </div>
  );
}
