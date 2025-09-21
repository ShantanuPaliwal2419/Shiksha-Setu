import React, { useState } from "react";
import { Mail, Lock, User, Briefcase } from "lucide-react";

import { supabase } from "@/lib/superbaseclient"; // your client config

export default function AddStaffForm({admin}) {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    role: "",
    department: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1️⃣ Create staff user in Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      console.error("Error creating auth user:", error.message);
      return;
    }

    const userId = data.user?.id;

    // 2️⃣ Insert staff details into staff table
    const { error: insertError } = await supabase.from("staff").insert([
      {
        id: userId,
        full_name: formData.full_name,
        email: formData.email,
        role: formData.role,
        department: formData.department,
        college_code: admin?.college_code, // replace with dynamic from admin session
      },
    ]);

    if (insertError) {
      console.error("Error inserting staff:", insertError.message);
    } else {
      alert("Staff added successfully ✅");
      setFormData({
        full_name: "",
        email: "",
        role: "",
        department: "",
        password: "",
      });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow rounded p-6 space-y-4">
      <h2 className="text-xl font-bold text-[#1E3A8A] text-center mb-4">
        Add Staff Member
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            id="full_name"
            value={formData.full_name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full pl-10 pr-3 py-2 border rounded focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full pl-10 pr-3 py-2 border rounded focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
          />
        </div>

        {/* Role */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Select Role
          </label>
          <select
            id="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
          >
            <option value="">-- Select Role --</option>
            <option value="finance">Finance (Fees)</option>
            <option value="hostel">Hostel</option>
            <option value="academics">Academics</option>
          </select>
        </div>

        {/* Department */}
        <div className="relative">
          <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            id="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Department"
            required
            className="w-full pl-10 pr-3 py-2 border rounded focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full pl-10 pr-3 py-2 border rounded focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#1E3A8A] text-white py-2 rounded hover:bg-[#162D5C]"
        >
          Add Staff
        </button>
      </form>
    </div>
  );
}
