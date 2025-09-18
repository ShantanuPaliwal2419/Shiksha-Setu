import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminLogin from "./pages/authentication/login";
import { AdminDashboard } from "./pages/Dashboard/admin";
import { StaffDashboard } from "./pages/Dashboard/staff";
import LandingPage from "./pages/Home/landingPage";

// import StudentDashboard if you make it

export default function App() {
  return (
    
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/login/staff" element={<StaffDashboard />} />
        {/* Add Student login if needed */}
        {/* Dashboards */}
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/staff" element={<StaffDashboard />} />
      </Routes>
    
  );
}
