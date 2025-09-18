import React from 'react'

const Footer = () => {
  return (
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
  )
}

export default Footer