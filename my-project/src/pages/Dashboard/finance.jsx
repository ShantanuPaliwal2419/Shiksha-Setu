import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IndianRupee, FileText, Clock } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

// Layout wrapper (shared for staff dashboards)
function StaffLayout({ staff, onLogout, children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
      {/* Header */}
      <header className="bg-white border-b shadow-sm p-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-[#1E3A8A]">
            {staff.department} Dashboard
          </h1>
          <p className="text-gray-600 text-sm">Welcome, {staff.full_name}</p>
        </div>
        <Button onClick={onLogout} variant="destructive">
          Logout
        </Button>
      </header>

      {/* Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}

export function FinanceDashboard() {
  const stats = [
    { title: "Total Fees Collected", value: "₹45,00,000", icon: <IndianRupee className="h-6 w-6" /> },
    { title: "Pending Fees", value: "₹5,20,000", icon: <Clock className="h-6 w-6" /> },
    { title: "Receipts Issued", value: "1,230", icon: <FileText className="h-6 w-6" /> },
  ];

  const feesTrend = [
    { month: "Jan", collected: 800000 },
    { month: "Feb", collected: 950000 },
    { month: "Mar", collected: 700000 },
    { month: "Apr", collected: 1200000 },
    { month: "May", collected: 900000 },
  ];

  const pendingVsCollected = [
    { type: "Collected", amount: 4500000 },
    { type: "Pending", amount: 520000 },
  ];

  const transactions = [
    { student: "Rahul Verma", amount: "₹15,000", status: "Paid", date: "2025-09-15" },
    { student: "Anita Singh", amount: "₹10,000", status: "Pending", date: "2025-09-16" },
    { student: "Vikram Patel", amount: "₹12,500", status: "Paid", date: "2025-09-16" },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <Card key={i} className="shadow hover:shadow-md transition">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-[#1E3A8A] text-sm font-semibold">
                {s.title}
              </CardTitle>
              <div className="text-[#1E3A8A]">{s.icon}</div>
            </CardHeader>
            <CardContent className="text-xl font-bold">{s.value}</CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Monthly Fees Trend */}
        <Card className="shadow">
          <CardHeader>
            <CardTitle className="text-[#1E3A8A]">Monthly Fees Collection</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={feesTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="collected" stroke="#1E3A8A" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pending vs Collected */}
        <Card className="shadow">
          <CardHeader>
            <CardTitle className="text-[#1E3A8A]">Pending vs Collected Fees</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pendingVsCollected}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#1E3A8A" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Transactions Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-[#1E3A8A]">Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border rounded">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2">Student</th>
                  <th className="p-2">Amount</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="p-2">{t.student}</td>
                    <td className="p-2">{t.amount}</td>
                    <td className="p-2">{t.status}</td>
                    <td className="p-2">{t.date}</td>
                    <td className="p-2 space-x-2">
                      <Button size="sm" variant="outline">Receipt</Button>
                      {t.status === "Pending" && (
                        <Button size="sm" className="bg-[#1E3A8A] text-white hover:bg-[#162D5C]">
                          Mark Paid
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Example Usage
export default function FinancePage() {
  const staff = { full_name: "Mr. Rajesh Gupta", department: "Finance" };

  return (
    <StaffLayout staff={staff} onLogout={() => console.log("Logout")}>
      <FinanceDashboard />
    </StaffLayout>
  );
}
