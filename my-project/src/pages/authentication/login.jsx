import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminLoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle login
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill in all fields!");
      return;
    }

    setLoading(true);

    // Simulate login delay
    setTimeout(() => {
      setLoading(false);
      alert("Login successful! Redirecting...");
      navigate("/dashboard/admin"); // Redirect to dashboard
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-[#fbfdff] shadow rounded p-10 space-y-5 mt-20"
    >
      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-[#1E3A8A]">ERP Admin Login</h2>
        <p className="text-gray-600 text-sm mt-1">
          Access your college ERP portal — Admin
        </p>
      </div>

      {/* Email Field */}
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

      {/* Password Field */}
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
  );
}
