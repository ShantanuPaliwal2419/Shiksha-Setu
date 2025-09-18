import React from 'react';
import { Mail, Lock, Building2, User, Hash } from "lucide-react";

// --- shadcn/ui Component Mocks ---
// In a real shadcn/ui setup, these would be imported from your components/ui directory.
// For this self-contained example, we'll define basic mock components.

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
    className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    ref={ref}
    {...props}
  />
));

const Label = ({ className, ...props }) => (
  <label className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`} {...props} />
);

const Button = ({ className, ...props }) => (
  <button
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-900 text-white hover:bg-blue-900/90 h-10 px-4 py-2 w-full ${className}`}
    {...props}
  />
);

// --- Main Application Component ---

export default function Studentregistrationform() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-blue-900">
            ERP Student Registration
          </CardTitle>
          <CardDescription>
            Create your account to access the student portal
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input type="text" id="name" placeholder="John Doe" className="pl-10" />
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input type="email" id="email" placeholder="email@example.com" className="pl-10" />
            </div>
          </div>
           <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="college-name">College Name</Label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input type="text" id="college-name" placeholder="Enter College Name" className="pl-10" />
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="enrollment">Enrollment No.</Label>
            <div className="relative">
              <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input type="text" id="enrollment" placeholder="e.g., A123456789" className="pl-10" />
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="password">Create New Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input type="password" id="password" placeholder="••••••••" className="pl-10" />
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input type="password" id="confirm-password" placeholder="••••••••" className="pl-10" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Register</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
