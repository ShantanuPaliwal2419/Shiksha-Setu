import { Card } from "@/components/ui/card";
import { Mail, Lock, Building2 } from "lucide-react";

export default function StaffLoginForm() {
  return (
    <Card className="max-w-md mx-auto bg-white shadow rounded p-6 mt-8 space-y-2 ">
      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-[#1E3A8A]">
          ERP Staff Login
        </h2>
        <p className="text-gray-600 text-sm mt-1">
          Access your college ERP portal — Staff
        </p>
      </div>

      {/* Email Field */}
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full pl-10 pr-3 py-2 border rounded focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
        />
      </div>

      {/* College Name Field */}
      <div className="relative">
        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="College Name"
          className="w-full pl-10 pr-3 py-2 border rounded focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
        />
      </div>

      {/* Department Dropdown */}
      <div className="relative">
        <select
          className="w-full pl-3 pr-3 py-2 border rounded text-gray-600 focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
          defaultValue=""
        >
          <option value="" disabled>
            Select Department
          </option>
          <option value="hostel">Hostel</option>
          <option value="academics">Academics</option>
          <option value="account">Account</option>
        </select>
      </div>

      {/* Password Field */}
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="password"
          placeholder="Password"
          className="w-full pl-10 pr-3 py-2 border rounded focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
        />
      </div>

      {/* Button */}
      <button className="w-full bg-[#1E3A8A] text-white py-2 rounded hover:bg-[#162D5C]">
        Login
      </button>
    </Card>
  );
}
