import React from "react";

const StudentDashboard = () => {
  const student = {
    name: "Alex Johnson",
    enrollment: "CSE-2021-0234",
    department: "Computer Science",
    course: "B.Tech",
    attendance: 92,
    cgpa: 8.7,
    pendingFees: 15000,
    lastPayment: "12th March 2025",
    upcomingExams: 3,
    examResults: [
      { subject: "Data Structures", test: "Midterm", grade: "A" },
      { subject: "Operating Systems", test: "Quiz", grade: "B+" },
      { subject: "DBMS", test: "Assignment", grade: "A-" }
    ],
    holidays: [
      "26th Jan - Republic Day",
      "14th Apr - Summer Break",
      "1st May - Labor Day"
    ]
  };

  const logout = () => {
    alert("Logging out...");
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      {/* Header */}
      <header className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">🎓 Student Dashboard</h1>
        <button
          onClick={logout}
          className="bg-white text-blue-900 px-4 py-2 rounded-md font-medium hover:bg-gray-200"
        >
          Logout
        </button>
      </header>

      <main className="p-6 space-y-6">
        {/* Profile Card */}
        <secti
