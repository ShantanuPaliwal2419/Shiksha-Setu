import { useState , useEffect} from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Users, BookOpen, IndianRupee, Building } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from "recharts";
import AddStaffForm from "./AddStaffform";
import { supabase } from "@/lib/superbaseclient";
function AdminLayout({ admin, onLogout, onAddStaff, children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
      {/* Header */}
      <header className="bg-white border-b shadow-sm p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          {/* Mobile Sidebar Toggle */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-6">
              <h2 className="text-lg font-bold text-[#1E3A8A] mb-6">Actions</h2>
              <Button className="mb-3 bg-[#1E3A8A] hover:bg-[#162D5C] w-full" onClick={onAddStaff}>
                + Add Staff
              </Button>
              <Button variant="outline" className="w-full mt-2">Add Student</Button>
            </SheetContent>
          </Sheet>

          {/* Title */}
          <div>
            <h1 className="text-xl font-bold text-[#1E3A8A]">
              Admin Dashboard – IIPS
            </h1>
            <p className="text-gray-600 text-sm">Welcome, Shantanu</p>
          </div>
        </div>

        <Button onClick={onLogout} variant="destructive">
          Logout
        </Button>
      </header>

      <div className="flex flex-1">
        {/* Sidebar for lg+ screens */}
        <aside className="hidden lg:flex w-64 bg-white border-r shadow-sm p-6 flex-col">
          <h2 className="text-lg font-bold text-[#1E3A8A] mb-6">Actions</h2>
          <Button className="mb-3 bg-[#1E3A8A] hover:bg-[#162D5C]" onClick={onAddStaff}>
            + Add Staff
          </Button>
          <Button variant="outline" className="mt-2">Add Student</Button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

export function AdminDashboard() {
  const stats = [
    { title: "Total Students", value: "2,350", icon: <Users className="h-6 w-6" /> },
    { title: "Total Staff", value: "120", icon: <BookOpen className="h-6 w-6" /> },
    { title: "Fees Collected", value: "₹45,00,000", icon: <IndianRupee className="h-6 w-6" /> },
    { title: "Hostel Occupancy", value: "78%", icon: <Building className="h-6 w-6" /> },
  ];

  const recentActivity = [
    { action: "Staff Registered", details: "Mr. Sharma (Accounts)", date: "2025-09-15" },
    { action: "Fee Payment", details: "₹15,000 by Rahul Verma", date: "2025-09-16" },
    { action: "Hostel Allocation", details: "Room 102 → Amit Singh", date: "2025-09-16" },
  ];

  const feeData = [
    { month: "Jan", fees: 300000 },
    { month: "Feb", fees: 420000 },
    { month: "Mar", fees: 500000 },
    { month: "Apr", fees: 450000 },
    { month: "May", fees: 600000 },
  ];

  const hostelData = [
    { block: "A", occupied: 80 },
    { block: "B", occupied: 65 },
    { block: "C", occupied: 90 },
    { block: "D", occupied: 70 },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <Card key={i} className="shadow hover:shadow-md transition">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-[#1E3A8A] text-sm font-semibold">{s.title}</CardTitle>
              <div className="text-[#1E3A8A]">{s.icon}</div>
            </CardHeader>
            <CardContent className="text-2xl font-bold">{s.value}</CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="shadow">
          <CardHeader>
            <CardTitle className="text-[#1E3A8A]">Monthly Fees Collection</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={feeData} >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="fees" stroke="#1E3A8A" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow">
          <CardHeader>
            <CardTitle className="text-[#1E3A8A]">Hostel Occupancy</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%" >
              <BarChart data={hostelData} outline="none">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="block" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="occupied" fill="#1E3A8A" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-[#1E3A8A]">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border rounded">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2">Action</th>
                  <th className="p-2">Details</th>
                  <th className="p-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((a, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="p-2">{a.action}</td>
                    <td className="p-2">{a.details}</td>
                    <td className="p-2">{a.date}</td>
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

export default function AdminPage() {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  

  // Fetch admin data from Supabase
  useEffect(() => {
    const fetchAdmin = async () => {
      setLoading(true);
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          console.log("No logged-in user");
          setLoading(false);
          return;
        }

        const { data: adminData, error } = await supabase
          .from("admins")
          .select("*")
          .eq("id", user.id)
          .maybeSingle();

        if (error) {
          console.error("Error fetching admin:", error.message);
        } else {
          setAdmin(adminData);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdmin();
  }, []);

  const [isAddStaffOpen, setIsAddStaffOpen] = useState(false);

  return (
    <>
      {/* Add Staff Sheet */}
      <Sheet open={isAddStaffOpen} onOpenChange={setIsAddStaffOpen}>
        <SheetContent side="right" className="w-96 pt-20">
          
          <AddStaffForm admin={admin} />
        </SheetContent>
      </Sheet>

      <AdminLayout
        admin={admin}
        onLogout={() => console.log("Logout")}
        onAddStaff={() => setIsAddStaffOpen(true)}
      >
        <AdminDashboard />
      </AdminLayout>
    </>
  );
}