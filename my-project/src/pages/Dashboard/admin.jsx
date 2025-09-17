import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, Wallet, Home, FileText } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Dummy Data
const feeData = [
  { month: "Jan", amount: 40000 },
  { month: "Feb", amount: 55000 },
  { month: "Mar", amount: 70000 },
  { month: "Apr", amount: 65000 },
];

const hostelData = [
  { name: "Occupied", value: 70 },
  { name: "Vacant", value: 30 },
];

const COLORS = ["#1E3A8A", "#A0AEC0"];

// ------------------------- ADMIN DASHBOARD -------------------------
export function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <h2 className="text-2xl font-bold text-[#1E3A8A] mb-8">Admin Dashboard</h2>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Students</CardTitle>
            <Users className="h-6 w-6 text-[#1E3A8A]" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,250</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Fees Collected</CardTitle>
            <Wallet className="h-6 w-6 text-[#1E3A8A]" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">₹45,00,000</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Hostel Occupancy</CardTitle>
            <Home className="h-6 w-6 text-[#1E3A8A]" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">70%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Exams Scheduled</CardTitle>
            <FileText className="h-6 w-6 text-[#1E3A8A]" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Fee Collection Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={feeData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#1E3A8A" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Hostel Occupancy</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={hostelData} dataKey="value" outerRadius={80} label>
                  {hostelData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// ------------------------- STAFF DASHBOARD (ACCOUNTS EXAMPLE) -------------------------


// ------------------------- WRAPPER -------------------------
export default function Dashboard({ user }) {
  if (user.role === "admin") return <AdminDashboard />;
  if (user.role === "staff") return <StaffDashboard />;
  return <p className="text-center mt-10">Student Portal Coming Soon...</p>;
}
