import {
  LayoutDashboard,
  LogOut,
  BookOpen,
  Bed,
  CreditCard,
  BarChart3,
} from "lucide-react";
import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function StudentDashboard() {
  const [open, setOpen] = useState(false);

  const feesHistory = [
    { month: "Jan", paid: 2000 },
    { month: "Feb", paid: 1500 },
    { month: "Mar", paid: 1800 },
    { month: "Apr", paid: 2200 },
  ];

  const recentTransactions = [
    { id: 1, type: "Fee Payment", amount: "₹2000", date: "2025-01-15", status: "Paid" },
    { id: 2, type: "Hostel Fee", amount: "₹5000", date: "2025-01-10", status: "Pending" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar for desktop */}
      

      {/* Mobile Sheet */}
      

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#1E3A8A]">
            Welcome, Animesh 👋
          </h1>
          <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            <LogOut size={18} /> Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#1E3A8A]">
                <CreditCard size={20} /> Fees Paid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold">₹20,000</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#1E3A8A]">
                <CreditCard size={20} /> Pending Fees
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold">₹5,000</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#1E3A8A]">
                <Bed size={20} /> Hostel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold">Room No: A-203</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#1E3A8A]">
                <BookOpen size={20} /> Upcoming Exams
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold">3</p>
            </CardContent>
          </Card>
        </div>

        {/* Chart + Recent Transactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fees Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#1E3A8A]">
                <BarChart3 size={20} /> Fees History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={feesHistory}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="paid" stroke="#1E3A8A" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Transactions Table */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#1E3A8A]">Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-600">
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((tx) => (
                    <tr key={tx.id} className="border-t">
                      <td>{tx.type}</td>
                      <td>{tx.amount}</td>
                      <td>{tx.date}</td>
                      <td>{tx.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
