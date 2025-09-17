import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";


export function StaffDashboard() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <h2 className="text-2xl font-bold text-[#1E3A8A] mb-8">Accounts Staff Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Pending Fees</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-gray-700">
              <li>Rahul Sharma – ₹10,000</li>
              <li>Priya Verma – ₹8,500</li>
              <li>Amit Singh – ₹12,000</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Generate Receipt</CardTitle>
          </CardHeader>
          <CardContent>
            <button className="bg-[#1E3A8A] text-white px-4 py-2 rounded hover:bg-[#162D5C]">
              Download Receipt
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}