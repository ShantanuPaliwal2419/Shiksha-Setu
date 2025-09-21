import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Building2, User, Hash } from "lucide-react";

// --- UI Components ---
const Card = ({ className, ...props }) => (
  <div className={`bg-white text-gray-900 border border-gray-200 rounded-xl shadow-sm ${className}`} {...props} />
);
const CardHeader = ({ className, ...props }) => <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />;
const CardTitle = ({ className, ...props }) => <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />;
const CardDescription = ({ className, ...props }) => <p className={`text-sm text-gray-500 ${className}`} {...props} />;
const CardContent = ({ className, ...props }) => <div className={`p-6 pt-0 ${className}`} {...props} />;
const CardFooter = ({ className, ...props }) => <div className={`flex items-center p-6 pt-0 ${className}`} {...props} />;
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
const Label = ({ className, ...props }) => <label className={`text-sm font-medium leading-none ${className}`} {...props} />;
const Button = ({ className = "", type = "button", children, ...props }) => (
  <button
    type={type}
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2
      disabled:pointer-events-none disabled:opacity-50 bg-blue-900 text-white hover:bg-blue-900/90
      h-10 px-4 py-2 w-full ${className}`}
    {...props}
  >
    {children}
  </button>
);

// --- Main Component ---
export default function StudentRegistrationForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    collegeName: "",
    rollNo: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleRegister = () => {
    if (!form.fullName || !form.email || !form.collegeName || !form.rollNo || !form.password || !form.confirmPassword) {
      alert("Please fill all fields!");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);

    // Simulate registration delay
    setTimeout(() => {
      setLoading(false);
      alert("Registration successful! Redirecting...");
      navigate("/dashboard/student");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-blue-900">ERP Student Registration</CardTitle>
          <CardDescription>Create your account to access the student portal</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input id="fullName" type="text" value={form.fullName} onChange={handleChange} placeholder="John Doe" className="pl-10" />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input id="email" type="email" value={form.email} onChange={handleChange} placeholder="email@example.com" className="pl-10" />
            </div>
          </div>
          <div>
            <Label htmlFor="collegeName">College Name</Label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input id="collegeName" type="text" value={form.collegeName} onChange={handleChange} placeholder="Enter College Name" className="pl-10" />
            </div>
          </div>
          <div>
            <Label htmlFor="rollNo">Enrollment No.</Label>
            <div className="relative">
              <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input id="rollNo" type="text" value={form.rollNo} onChange={handleChange} placeholder="e.g., A123456789" className="pl-10" />
            </div>
          </div>
          <div>
            <Label htmlFor="password">Create New Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input id="password" type="password" value={form.password} onChange={handleChange} placeholder="••••••••" className="pl-10" />
            </div>
          </div>
          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input id="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} placeholder="••••••••" className="pl-10" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleRegister} disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
