import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function StaffLoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate a successful login after validation
    setTimeout(() => {
      if (!formData.email || !formData.password || !formData.role) {
        alert("Please fill all fields!");
        setLoading(false);
        return;
      }

      // Redirect based on role
      switch (formData.role) {
        case "finance":
          navigate("/dashboard/staff/finance");
          break;
        case "hostel":
          navigate("/dashboard/academics");
          break;
        case "academics":
          navigate("/dashboard/academics");
          break;
        default:
          navigate("/dashboard/staff");
      }

      setLoading(false);
    }, 500); // simulate network delay
  };

  return (
    <Card className="max-w-md mx-auto bg-white shadow rounded p-6 mt-8 space-y-4">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-[#1E3A8A]">Staff Login</h2>
        <p className="text-gray-600 text-sm mt-1">Enter your credentials</p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full pl-10 pr-3 py-2 border rounded focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
          />
        </div>

        {/* Role */}
        <div className="relative">
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full pl-3 pr-3 py-2 border rounded focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
          >
            <option value="" disabled>Select Role</option>
            <option value="finance">Finance (Fees)</option>
            <option value="hostel">Hostel</option>
            <option value="academics">Academics</option>
          </select>
        </div>

        {/* Password */}
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full pl-10 pr-3 py-2 border rounded focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#1E3A8A] text-white py-2 rounded hover:bg-[#162D5C] transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </Card>
  );
}
