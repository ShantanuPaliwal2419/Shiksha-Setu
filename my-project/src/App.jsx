import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminLogin from "./pages/authentication/login";
import { AdminDashboard } from "./pages/Dashboard/admin";
import { StaffDashboard } from "./pages/Dashboard/staff";
import LandingPage from "./pages/Home/landingPage";
import StaffLoginForm from "./pages/authentication/stafflogin";
import StudentLoginForm from "./pages/authentication/studentlogin";
import Adminregistrationform from "./pages/authentication/adminregister";
import Studentregistrationform from "./pages/authentication/studentregister";// import StudentDashboard if you make it

export default function App() {
  return (
    
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin/admin" element={<Adminregistrationform/>} />
        <Route path="/signin/student" element={<Studentregistrationform />} />
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/login/staff" element={<StaffLoginForm />} />
        <Route path="/login/student" element={<StudentLoginForm />} />
        <Route path="//student" element={<StudentLoginForm />} />

        {/* Dashboards */}
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/staff" element={<StaffDashboard />} />
      </Routes>
    
  );
}
