import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, CreditCard, Home, BarChart, BookOpen, FileText } from "lucide-react";

export const Features = () => {
  return (
    <section id="features" className="max-w-6xl mx-auto py-16 px-6">
      <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-12 text-center">
        Key Features of Our ERP
      </h3>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Feature 1 - Admissions */}
        <Card className="w-full shadow hover:shadow-md transition-all duration-300">
          <CardHeader className="flex items-center space-x-3">
            <GraduationCap className="h-7 w-7 text-[#1E3A8A]" />
            <CardTitle className="text-[#1E3A8A]">Admissions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm">
              Digital admission forms reduce paperwork and queues. Data flows
              directly into the central student database, minimizing manual
              errors and duplicate entries.
            </p>
          </CardContent>
        </Card>

        {/* Feature 2 - Fees */}
        <Card className="w-full shadow hover:shadow-md transition-all duration-300">
          <CardHeader className="flex items-center space-x-3">
            <CreditCard className="h-7 w-7 text-[#1E3A8A]" />
            <CardTitle className="text-[#1E3A8A]">Fees</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm">
              Integrated fee collection system generates instant digital
              receipts. Finance staff can track real-time payments with
              automated reconciliation and reports.
            </p>
          </CardContent>
        </Card>

        {/* Feature 3 - Hostel */}
        <Card className="w-full shadow hover:shadow-md transition-all duration-300">
          <CardHeader className="flex items-center space-x-3">
            <Home className="h-7 w-7 text-[#1E3A8A]" />
            <CardTitle className="text-[#1E3A8A]">Hostel</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm">
              Live hostel occupancy dashboard with room allocation,
              waitlisting, and digital record-keeping ensures transparency and
              better space management.
            </p>
          </CardContent>
        </Card>

        {/* Feature 4 - Dashboard */}
        <Card className="w-full shadow hover:shadow-md transition-all duration-300">
          <CardHeader className="flex items-center space-x-3">
            <BarChart className="h-7 w-7 text-[#1E3A8A]" />
            <CardTitle className="text-[#1E3A8A]">Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm">
              Centralized dashboard for administrators with key insights on
              admissions, finances, and hostel occupancy — updated in real-time
              for quick decision-making.
            </p>
          </CardContent>
        </Card>

        {/* Feature 5 - Examinations */}
        <Card className="w-full shadow hover:shadow-md transition-all duration-300">
          <CardHeader className="flex items-center space-x-3">
            <FileText className="h-7 w-7 text-[#1E3A8A]" />
            <CardTitle className="text-[#1E3A8A]">Examinations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm">
              Online exam schedules, mark sheets, and results — all stored
              securely in the ERP to ensure accuracy and reduce paper-based
              inefficiencies.
            </p>
          </CardContent>
        </Card>

        {/* Feature 6 - Library */}
        <Card className="w-full shadow hover:shadow-md transition-all duration-300">
          <CardHeader className="flex items-center space-x-3">
            <BookOpen className="h-7 w-7 text-[#1E3A8A]" />
            <CardTitle className="text-[#1E3A8A]">Library</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm">
              Track book issues and returns in real time. Students and staff
              can check availability instantly, reducing queues and lost
              records.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
