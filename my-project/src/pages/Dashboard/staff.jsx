import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, CalendarDays, CheckCircle, FileText } from "lucide-react";
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
import { useState,useEffect } from "react";
import { supabase } from "@/lib/superbaseclient";
import { useNavigate } from "react-router-dom";
// Layout wrapper (similar to Admin)
function StaffLayout({ staff, onLogout, children }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error.message);
    } else {
      navigate("/"); // redirect to login page
    }
  };
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
      {/* Header */}
      <header className="bg-white border-b shadow-sm p-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-[#1E3A8A]">
            {staff?.department} Dashboard
          </h1>
          <p className="text-gray-600 text-sm">Welcome, {staff?.full_name}</p>
        </div>
        <Button onClick={handleLogout} variant="destructive">
          Logout
        </Button>
      </header>

      {/* Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}

export function AcademicDashboard() {
  const stats = [
    { title: "Exams Scheduled", value: "12", icon: <CalendarDays className="h-6 w-6" /> },
    { title: "Results Published", value: "8", icon: <CheckCircle className="h-6 w-6" /> },
    { title: "Pending Evaluations", value: "4", icon: <FileText className="h-6 w-6" /> },
  ];

  const examsData = [
    { month: "Jan", exams: 3 },
    { month: "Feb", exams: 4 },
    { month: "Mar", exams: 2 },
    { month: "Apr", exams: 5 },
  ];

  const resultsData = [
    { month: "Jan", results: 2 },
    { month: "Feb", results: 3 },
    { month: "Mar", results: 1 },
    { month: "Apr", results: 4 },
  ];

  const examsTable = [
    { subject: "Mathematics", date: "2025-09-20", students: 120, status: "Scheduled" },
    { subject: "Physics", date: "2025-09-22", students: 110, status: "Scheduled" },
    { subject: "Chemistry", date: "2025-09-25", students: 100, status: "Results Pending" },
    { subject: "English", date: "2025-09-28", students: 130, status: "Published" },
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
            <CardContent className="text-2xl font-bold">{s.value}</CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Exams Scheduled Chart */}
        <Card className="shadow">
          <CardHeader>
            <CardTitle className="text-[#1E3A8A]">Exams Scheduled</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={examsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="exams" fill="#1E3A8A" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Results Published Chart */}
        <Card className="shadow">
          <CardHeader>
            <CardTitle className="text-[#1E3A8A]">Results Published</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={resultsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="results" stroke="#1E3A8A" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Exams Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-[#1E3A8A]">Exams Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border rounded">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2">Subject</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Students</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {examsTable.map((exam, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="p-2">{exam.subject}</td>
                    <td className="p-2">{exam.date}</td>
                    <td className="p-2">{exam.students}</td>
                    <td className="p-2">{exam.status}</td>
                    <td className="p-2 space-x-2">
                      <Button size="sm" variant="outline">
                        Add Marks
                      </Button>
                      <Button size="sm" className="bg-[#1E3A8A] text-white hover:bg-[#162D5C]">
                        Publish
                      </Button>
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
export default function AcademicPage() {
  const [staff, setStaff] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStaff = async () => {
      const { data: user } = await supabase.auth.getUser();

      if (!user?.user) {
        console.error("No authenticated user found");
        setLoading(false);
        return;
      }

      const userId = user.user.id;

      const { data: staffData, error } = await supabase
        .from("staff")
        .select("full_name, department")
        .eq("id", userId)
        .maybeSingle();

      if (error) {
        console.error("Error fetching staff:", error.message);
      } else if (staffData) {
        setStaff(staffData);
      }

      setLoading(false);
    };

    fetchStaff();
  }, []);
  return (
    <StaffLayout staff={staff} onLogout={() => console.log("Logout")}>
      <AcademicDashboard />
    </StaffLayout>
  );
}
