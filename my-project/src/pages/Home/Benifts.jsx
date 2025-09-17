import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile, ShieldCheck, Settings, Headphones } from "lucide-react";
import customer from "@/assets/Customer relationship management-rafiki.svg"

const Benefits = () => {
  return (
    <section id="benefits" className="max-w-8xl mx-auto py-16 px-6">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-[#1E3A8A]">Why This ERP?</h3>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-lg">
          Our ERP is designed to be simple, effective, and tailored for education.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
          
          {/* Card 1 */}
          <Card className="shadow hover:shadow-md transition-all duration-300">
            <CardHeader className="flex flex-row items-center space-x-3">
              <Smile className="h-8 w-8 text-[#1E3A8A]" />
              <CardTitle className="text-[#1E3A8A] text-xl">User Friendly</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-base">
                Our interface is designed with simplicity in mind. Staff, students, 
                and administrators can navigate effortlessly without requiring 
                extensive training. Everything is placed logically so daily 
                operations become faster and more intuitive.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="shadow hover:shadow-md transition-all duration-300">
            <CardHeader className="flex flex-row items-center space-x-3">
              <ShieldCheck className="h-8 w-8 text-[#1E3A8A]" />
              <CardTitle className="text-[#1E3A8A] text-xl">Secure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-base">
                Security is built in from day one. All sensitive student and 
                financial data is encrypted, role-based access ensures only the 
                right people see the right information, and regular backups 
                prevent data loss in emergencies.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="shadow hover:shadow-md transition-all duration-300">
            <CardHeader className="flex flex-row items-center space-x-3">
              <Settings className="h-8 w-8 text-[#1E3A8A]" />
              <CardTitle className="text-[#1E3A8A] text-xl">Customizable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-base">
                Every institution is unique. Our ERP can be tailored to match 
                your workflows—whether it’s admissions, hostel allocation, or 
                fee structures. Colleges can easily configure modules without 
                expensive development cycles.
              </p>
            </CardContent>
          </Card>

          {/* Card 4 */}
          <Card className="shadow hover:shadow-md transition-all duration-300">
            <CardHeader className="flex flex-row items-center space-x-3">
              <Headphones className="h-8 w-8 text-[#1E3A8A]" />
              <CardTitle className="text-[#1E3A8A] text-xl">Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-base">
                We provide round-the-clock technical assistance to ensure smooth 
                operations. From troubleshooting login issues to helping with 
                report generation, our support team ensures downtime is 
                minimized and productivity remains high.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Image (hidden on mobile) */}
        <div className="hidden md:block flex-1">
          <img
            src={customer}
            alt="Customer Support Illustration"
            className="max-h-[650px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Benefits
