import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminLogin from "./pages/authentication/login";
import AdminPage, { AdminDashboard } from "./pages/Dashboard/admin";
import AcademicPage from "./pages/Dashboard/staff";
import LandingPage from "./pages/Home/landingPage";
import StaffLoginForm from "./pages/authentication/stafflogin";
import StudentLoginForm from "./pages/authentication/studentlogin";
import Adminregistrationform from "./pages/authentication/adminregister";
import Studentregistrationform from "./pages/authentication/studentregister";// import StudentDashboard if you make it

export default function App() {
  return (
   
 <div>
   <Routes>
        {/* Public Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/register/admin" element={<Adminregistrationform/>} />
        <Route path="/signin/student" element={<Studentregistrationform />} />
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/login/staff" element={<StaffLoginForm />} />
        
        <Route path="/login-student" element={<StudentLoginForm />} />
        <Route path="/add-staff" element={<AddStaffForm/>} />
        {/* Dashboards */}
        <Route path="/dashboard/admin" element={<AdminPage />} />
        <Route path="/dashboard/academics" element={<AcademicPage />} />
        <Route path="/dashboard/staff/finance" element={<FinancePage />} />
        <Route path="/dashboard/student" element={<StudentDashboard/>} />
      </Routes>
 </div>
      
    
  );
}


