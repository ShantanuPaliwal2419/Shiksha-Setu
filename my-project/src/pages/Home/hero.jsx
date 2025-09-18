import React from 'react'
import collegeClassBro from "@/assets/college class-bro.svg";
const Hero = () => {
  return (
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
  )
}

export default Hero