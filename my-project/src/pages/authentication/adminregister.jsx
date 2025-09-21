import React, { useState } from 'react';
import { Mail, Lock, Building2, User, Hash } from "lucide-react";
import { useNavigate } from 'react-router-dom';

// --- UI Components ---
const Card = ({ className, ...props }) => (
  <div className={`bg-white text-gray-900 border border-gray-200 rounded-xl shadow-sm ${className}`} {...props} />
);
const CardHeader = ({ className, ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
);
const CardTitle = ({ className, ...props }) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
);
const CardDescription = ({ className, ...props }) => (
  <p className={`text-sm text-gray-500 ${className}`} {...props} />
);
const CardContent = ({ className, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
);
const CardFooter = ({ className, ...props }) => (
  <div className={`flex items-center p-6 pt-0 ${className}`} {...props} />
);
const Input = React.forwardRef(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm
      placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2
      disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    ref={ref}
    {...props}
  />
));
const Label = ({ className, ...props }) => (
  <label className={`text-sm font-medium leading-none ${className}`} {...props} />
);
const Button = ({ className, ...props }) => (
  <button
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2
      disabled:pointer-events-none disabled:opacity-50 bg-blue-900 text-white hover:bg-blue-900/90
      h-10 px-4 py-2 w-full ${className}`}
    {...props}
  />
);

// --- Main Component ---
export default function AdminRegistrationForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    collegeName: "",
    collegeCode: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);

    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      
      navigate("/dashboard/admin"); // redirect to dashboard
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-blue-900">
            ERP Admin Registration
          </CardTitle>
          <CardDescription>
            Create an admin account for the ERP portal
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {/* Full Name */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input type="text" id="name" value={form.name} onChange={handleChange} placeholder="John Doe" className="pl-10" />
              </div>
            </div>

            {/* Email */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input type="email" id="email" value={form.email} onChange={handleChange} placeholder="admin@example.com" className="pl-10" />
              </div>
            </div>

            {/* College Name */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="collegeName">College Name</Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input type="text" id="collegeName" value={form.collegeName} onChange={handleChange} placeholder="Enter College Name" className="pl-10" />
              </div>
            </div>

            {/* College Code */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="collegeCode">College Code</Label>
              <div className="relative">
                <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input type="text" id="collegeCode" value={form.collegeCode} onChange={handleChange} placeholder="e.g., C-12345" className="pl-10" />
              </div>
            </div>

            {/* Password */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="password">Create New Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input type="password" id="password" value={form.password} onChange={handleChange} placeholder="••••••••" className="pl-10" />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input type="password" id="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="••••••••" className="pl-10" />
              </div>
            </div>
          </CardContent>

          <CardFooter>
            <Button type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register Admin"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
