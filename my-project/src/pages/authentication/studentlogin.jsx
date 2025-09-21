import { useState } from "react";
import { Mail, Lock, Building2, IdCard } from "lucide-react";
import { supabase } from "@/lib/superbaseclient";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function StudentLoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    college: "",
    enrollment: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Step 1: Auth login with Supabase
    const { error: loginError } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (loginError) {
      toast.error("❌ " + loginError.message);
      setLoading(false);
      return;
    }

    // Step 2: Check if student exists in students table
    const { data: studentData, error: studentError } = await supabase
      .from("students")
      .select("*")
      .eq("email", formData.email)
      .eq("college_name", formData.college)
      .eq("enrollment_number", formData.enrollment)
      .single();

    if (studentError || !studentData) {
      toast.error("⚠️ Invalid student credentials!");
      setLoading(false);
      return;
    }

    // Step 3: Redirect to dashboard
    toast.success("✅ Welcome back, Student!");
    navigate("/dashboard/student");
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow rounded p-10 space-y-5 mt-20"
    >
      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-[#1E3A8A]">
          ERP Student Login
        </h2>
        <p className="text-gray-600 text-sm mt-1">
          Access your college ERP portal — Student
        </p>
      </div>

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

      {/* College Name */}
      <div className="relative">
        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          name="college"
          value={formData.college}
          onChange={handleChange}
          placeholder="College Name"
          required
          className="w-full pl-10 pr-3 py-2 border rounded focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
        />
      </div>

      {/* Enrollment Number */}
      <div className="relative">
        <IdCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          name="enrollment"
          value={formData.enrollment}
          onChange={handleChange}
          placeholder="Enrollment Number"
          required
          className="w-full pl-10 pr-3 py-2 border rounded focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
        />
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

      {/* Submit */}
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
