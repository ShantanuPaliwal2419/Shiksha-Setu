import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Database, Users, BarChart } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      title: "Step 1: Online Forms",
      text: "Students complete admission and fee forms directly online. This removes the need for long queues at counters and ensures that student data is collected accurately from the start without redundant paperwork.",
      icon: <FileText className="h-10 w-10 text-[#1E3A8A]" />,
    },
    {
      title: "Step 2: Central Database",
      text: "Once submitted, all details are stored in a single, secure central database. This eliminates duplication of records, allows fast retrieval of information, and ensures consistency across departments.",
      icon: <Database className="h-10 w-10 text-[#1E3A8A]" />,
    },
    {
      title: "Step 3: Staff Portal",
      text: "Faculty and administrative staff manage daily operations through one portal. From fee tracking and hostel allocation to examination updates, all records are entered directly into the system in real time.",
      icon: <Users className="h-10 w-10 text-[#1E3A8A]" />,
    },
    {
      title: "Step 4: Live Dashboards",
      text: "Administrators view real-time dashboards with key statistics like fee collection, admission numbers, and hostel occupancy. This enables data-driven decision making without waiting for manual reports.",
      icon: <BarChart className="h-10 w-10 text-[#1E3A8A]" />,
    },
  ];

  return (
    <section id="how" className="max-w-6xl mx-auto py-16 px-6">
      <h3 className="text-3xl font-bold text-[#1E3A8A] mb-12 text-center">
        How It Works
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        {steps.map((item, idx) => (
          <Card
            key={idx}
            className="relative shadow-sm hover:shadow-md transition-all duration-300 ease-in-out p-6"
          >
            {/* Icon Top-Right */}
            <div className="absolute top-4 right-4">{item.icon}</div>

            {/* Title + Content */}
            <CardHeader className="p-0 mb-3">
              <CardTitle className="text-[#1E3A8A] text-lg font-semibold">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
