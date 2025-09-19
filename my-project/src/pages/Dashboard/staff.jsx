// src/pages/Dashboard/staff.jsx
import React, { useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export const StaffDashboard = () => {
  // Students Data
  const students = [
    { id: "STU201", name: "Karan Mehta", course: "MCA", year: "1st Year", attendance: 85, grades: { Math: 78, CSE: 82 } },
    { id: "STU202", name: "Pooja Sharma", course: "MTECH(IT)", year: "2nd Year", attendance: 92, grades: { IT: 88, DBMS: 91 } },
    { id: "STU203", name: "Vikas Gupta", course: "MBA(TOURISM)", year: "1st Year", attendance: 78, grades: { Tourism: 80, Marketing: 75 } },
    { id: "STU204", name: "Ananya Singh", course: "MCA", year: "2nd Year", attendance: 88, grades: { Math: 85, CSE: 90 } },
    { id: "STU205", name: "Rohit Kumar", course: "MTECH(IT)", year: "1st Year", attendance: 81, grades: { IT: 79, DBMS: 85 } },
    { id: "STU206", name: "Sneha Verma", course: "MBA(TOURISM)", year: "2nd Year", attendance: 95, grades: { Tourism: 92, Marketing: 90 } },
    { id: "STU207", name: "Deepak Yadav", course: "MCA", year: "3rd Year", attendance: 90, grades: { Math: 88, CSE: 92 } },
    { id: "STU208", name: "Ritu Jain", course: "MTECH(IT)", year: "2nd Year", attendance: 87, grades: { IT: 85, DBMS: 90 } },
    { id: "STU209", name: "Saurabh Singh", course: "MBA(TOURISM)", year: "3rd Year", attendance: 82, grades: { Tourism: 80, Marketing: 82 } }
  ];

  // Courses Data
  const courses = [
    { name: "MCA", duration: "5 years", semester: "10", mentor: "Dr. Rajesh Verma" },
    { name: "MTECH(IT)", duration: "5 years", semester: "10", mentor: "Dr. Rupesh Sendre" },
    { name: "MBA(TOURISM)", duration: "5 years", semester: "10", mentor: "Dr. Vivek Srivastav" }
  ];

  useEffect(() => {
    // Student Attendance Chart
    const ctx1 = document.getElementById("studentChart");
    if (ctx1) {
      new Chart(ctx1, {
        type: "bar",
        data: {
          labels: students.map((s) => s.name),
          datasets: [
            {
              label: "Attendance %",
              data: students.map((s) => s.attendance),
              backgroundColor: "#1a3c8b"
            }
          ]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: { y: { beginAtZero: true, max: 100 } }
        }
      });
    }

    // Course Average Attendance Chart
    const ctx2 = document.getElementById("courseChart");
    if (ctx2) {
      const courseNames = courses.map((c) => c.name);
      const avgAttendance = courses.map((c) => {
        let s = students.filter((st) => st.course === c.name);
        return Math.round(s.reduce((sum, st) => sum + st.attendance, 0) / s.length || 0);
      });

      new Chart(ctx2, {
        type: "pie",
        data: {
          labels: courseNames,
          datasets: [
            {
              data: avgAttendance,
              backgroundColor: ["#1a3c8b", "#2563eb", "#3b82f6"]
            }
          ]
        },
        options: { responsive: true }
      });
    }
  }, []);

  // Search Handler
  const searchStudent = () => {
    let query = document.getElementById("searchId").value.trim().toLowerCase();
    let resultBox = document.getElementById("searchResult");
    let student = students.find(
      (s) => s.id.toLowerCase() === query || s.name.toLowerCase().includes(query)
    );

    if (!student) {
      resultBox.innerHTML = `<span style="color:red;">Student not found</span>`;
      return;
    }

    resultBox.innerHTML = `
      <b>${student.name}</b><br>
      ID: ${student.id}<br>
      Course: ${student.course}<br>
      Year: ${student.year}<br>
      Attendance: ${student.attendance}%<br>
      Grades: ${Object.entries(student.grades)
        .map((g) => g[0] + ": " + g[1])
        .join(", ")}
    `;
  };

  return (
    <div className="academics-dashboard">
      {/* Header */}
      <header className="top-bar">

import React, { useEffect, useState } from "react";

export const HostelStaffDashboard = () => {
  // Mock Data
  const [rooms, setRooms] = useState([
    { room: "101", occupied: true, student: "Rahul Sharma", roommate: "Amit Kumar", course: "B.Tech CSE", year: "3rd", attendance: 95, feeStatus: "Paid", facilities: { AC: "Yes", Fan: "Yes", WiFi: "Yes", Bathroom: "Yes" } },
    { room: "102", occupied: true, student: "Priya Verma", roommate: "Sneha Gupta", course: "BBA", year: "2nd", attendance: 90, feeStatus: "Pending", facilities: { AC: "No", Fan: "Yes", WiFi: "Yes", Bathroom: "Yes" } },
    { room: "103", occupied: false, student: "", roommate: "", course: "", year: "", attendance: "", feeStatus: "", facilities: { AC: "Yes", Fan: "Yes", WiFi: "Yes", Bathroom: "Yes" } },
    { room: "104", occupied: true, student: "Amit Singh", roommate: "Vikas Gupta", course: "MBA", year: "1st", attendance: 92, feeStatus: "Paid", facilities: { AC: "Yes", Fan: "Yes", WiFi: "No", Bathroom: "Yes" } },
    { room: "105", occupied: true, student: "Sneha Agarwal", roommate: "Pooja Sharma", course: "M.Tech IT", year: "2nd", attendance: 88, feeStatus: "Pending", facilities: { AC: "Yes", Fan: "Yes", WiFi: "Yes", Bathroom: "Yes" } },
    { room: "106", occupied: false, student: "", roommate: "", course: "", year: "", attendance: "", feeStatus: "", facilities: { AC: "Yes", Fan: "Yes", WiFi: "Yes", Bathroom: "Yes" } }
  ]);

  const [maintenanceRequests, setMaintenanceRequests] = useState([
    { room: "101", issue: "Light bulb broken", status: "Pending" },
    { room: "102", issue: "Plumbing leak", status: "Completed" },
    { room: "104", issue: "AC not working", status: "Pending" }
  ]);

  const [searchResult, setSearchResult] = useState(null);

  const totalRooms = rooms.length;
  const occupiedRooms = rooms.filter(r => r.occupied).length;
  const vacantRooms = totalRooms - occupiedRooms;
  const totalFeePaid = rooms.filter(r => r.feeStatus === "Paid").length * 20000;
  const totalFeePending = rooms.filter(r => r.feeStatus === "Pending").length * 20000;

  const searchStudent = (query) => {
    let student = rooms.find(r =>
      r.student.toLowerCase().includes(query.toLowerCase()) ||
      r.room.toLowerCase() === query.toLowerCase()
    );
    setSearchResult(student || "notfound");
  };

  const markMaintenanceCompleted = (index) => {
    let updated = [...maintenanceRequests];
    updated[index].status = "Completed";
    setMaintenanceRequests(updated);
    alert("Maintenance marked as completed!");
  };

  return (
    <div>
      {/* Header */}
      <header>
        <h1>Staff: Ramesh | Department: Hostel</h1>
        <button>Logout</button>
      </header>

      <main>
        {/* Cards */}
        <section className="cards">
          <div className="card"><h2>{totalRooms}</h2><p>Total Rooms</p></div>
          <div className="card"><h2>{occupiedRooms}</h2><p>Occupied Rooms</p></div>
          <div className="card"><h2>{vacantRooms}</h2><p>Vacant Rooms</p></div>
          <div className="card"><h2>₹{totalFeePaid}</h2><p>Total Fees Paid</p></div>
          <div className="card"><h2>₹{totalFeePending}</h2><p>Total Fees Pending</p></div>
        </section>

        {/* Search */}
        <section className="search-box">
          <input
            type="text"
            placeholder="Enter Student Name or Room"
            onKeyDown={(e) => e.key === "Enter" && searchStudent(e.target.value)}
          />
          <button onClick={() => {
            let input = document.querySelector(".search-box input").value;
            searchStudent(input);
          }}>Search</button>
          <div style={{ marginTop: "10px", fontSize: "14px" }}>
            {searchResult === "notfound" && <span style={{ color: "red" }}>Student or Room not found</span>}
            {searchResult && searchResult !== "notfound" && (
              <div>
                <b>{searchResult.student}</b><br />
                Room: {searchResult.room}<br />
                Roommate: {searchResult.roommate}<br />
                Course: {searchResult.year} / {searchResult.course}<br />
                Attendance: {searchResult.attendance}%<br />
                Fee Status: {searchResult.feeStatus}
              </div>
            )}
          </div>
        </section>

        {/* Students Table */}
        <section>
          <h2>Students & Roommates</h2>
          <table>
            <thead>
              <tr><th>Name</th><th>Room</th><th>Roommate</th><th>Year/Course</th><th>Attendance %</th><th>Fee Status</th></tr>
            </thead>
            <tbody>
              {rooms.filter(r => r.occupied).map((r, i) => (
                <tr key={i}>
                  <td>{r.student}</td>
                  <td>{r.room}</td>
                  <td>{r.roommate}</td>
                  <td>{r.year} / {r.course}</td>
                  <td>{r.attendance}%</td>
                  <td>{r.feeStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Facilities Table */}
        <section>
          <h2>Room Facilities</h2>
          <table>
            <thead>
              <tr><th>Room</th><th>AC</th><th>Fan</th><th>Wi-Fi</th><th>Attached Bathroom</th></tr>
            </thead>
            <tbody>
              {rooms.map((r, i) => (
                <tr key={i}>
                  <td>{r.room}</td>
                  <td>{r.facilities.AC}</td>
                  <td>{r.facilities.Fan}</td>
                  <td>{r.facilities.WiFi}</td>
                  <td>{r.facilities.Bathroom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Maintenance Table */}
        <section>
          <h2>Maintenance Requests</h2>
          <table>
            <thead>
              <tr><th>Room</th><th>Issue</th><th>Status</th><th>Action</th></tr>
            </thead>
            <tbody>
              {maintenanceRequests.map((m, i) => (
                <tr key={i}>
                  <td>{m.room}</td>
                  <td>{m.issue}</td>
                  <td>{m.status}</td>
                  <td>
                    <button
                      className="action-btn"
                      disabled={m.status === "Completed"}
                      onClick={() => markMaintenanceCompleted(i)}
                    >
                      Mark Completed
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Rules & Notices */}
        <section>
          <h2>Hostel Rules & Notices</h2>
          <ul>
            <li>Keep the room clean and tidy at all times.</li>
            <li>Visitors are allowed only during specified hours.</li>
            <li>Observe silence in the hostel after 10 PM.</li>
            <li>Use of electric appliances must be as per hostel guidelines.</li>
            <li>Report maintenance issues immediately to the hostel staff.</li>
          </ul>
          <h3>Notices</h3>
          <ul>
            <li>Mess Menu for the week uploaded on notice board.</li>
            <li>Fire drill on 25th September at 10 AM.</li>
            <li>Maintenance: Water shutdown on 20th September.</li>
            <li>Hostel cultural fest on 30th September.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};
import React, { useEffect, useState } from "react";

export const HostelStaffDashboard = () => {
  // Mock Data
  const [rooms, setRooms] = useState([
    { room: "101", occupied: true, student: "Rahul Sharma", roommate: "Amit Kumar", course: "B.Tech CSE", year: "3rd", attendance: 95, feeStatus: "Paid", facilities: { AC: "Yes", Fan: "Yes", WiFi: "Yes", Bathroom: "Yes" } },
    { room: "102", occupied: true, student: "Priya Verma", roommate: "Sneha Gupta", course: "BBA", year: "2nd", attendance: 90, feeStatus: "Pending", facilities: { AC: "No", Fan: "Yes", WiFi: "Yes", Bathroom: "Yes" } },
    { room: "103", occupied: false, student: "", roommate: "", course: "", year: "", attendance: "", feeStatus: "", facilities: { AC: "Yes", Fan: "Yes", WiFi: "Yes", Bathroom: "Yes" } },
    { room: "104", occupied: true, student: "Amit Singh", roommate: "Vikas Gupta", course: "MBA", year: "1st", attendance: 92, feeStatus: "Paid", facilities: { AC: "Yes", Fan: "Yes", WiFi: "No", Bathroom: "Yes" } },
    { room: "105", occupied: true, student: "Sneha Agarwal", roommate: "Pooja Sharma", course: "M.Tech IT", year: "2nd", attendance: 88, feeStatus: "Pending", facilities: { AC: "Yes", Fan: "Yes", WiFi: "Yes", Bathroom: "Yes" } },
    { room: "106", occupied: false, student: "", roommate: "", course: "", year: "", attendance: "", feeStatus: "", facilities: { AC: "Yes", Fan: "Yes", WiFi: "Yes", Bathroom: "Yes" } }
  ]);

  const [maintenanceRequests, setMaintenanceRequests] = useState([
    { room: "101", issue: "Light bulb broken", status: "Pending" },
    { room: "102", issue: "Plumbing leak", status: "Completed" },
    { room: "104", issue: "AC not working", status: "Pending" }
  ]);

  const [searchResult, setSearchResult] = useState(null);

  const totalRooms = rooms.length;
  const occupiedRooms = rooms.filter(r => r.occupied).length;
  const vacantRooms = totalRooms - occupiedRooms;
  const totalFeePaid = rooms.filter(r => r.feeStatus === "Paid").length * 20000;
  const totalFeePending = rooms.filter(r => r.feeStatus === "Pending").length * 20000;

  const searchStudent = (query) => {
    let student = rooms.find(r =>
      r.student.toLowerCase().includes(query.toLowerCase()) ||
      r.room.toLowerCase() === query.toLowerCase()
    );
    setSearchResult(student || "notfound");
  };

  const markMaintenanceCompleted = (index) => {
    let updated = [...maintenanceRequests];
    updated[index].status = "Completed";
    setMaintenanceRequests(updated);
    alert("Maintenance marked as completed!");
  };

  return (
    <div>
      {/* Header */}
      <header>
        <h1>Staff: Ramesh | Department: Hostel</h1>
        <button>Logout</button>
      </header>

      <main>
        {/* Cards */}
        <section className="cards">
          <div className="card"><h2>{totalRooms}</h2><p>Total Rooms</p></div>
          <div className="card"><h2>{occupiedRooms}</h2><p>Occupied Rooms</p></div>
          <div className="card"><h2>{vacantRooms}</h2><p>Vacant Rooms</p></div>
          <div className="card"><h2>₹{totalFeePaid}</h2><p>Total Fees Paid</p></div>
          <div className="card"><h2>₹{totalFeePending}</h2><p>Total Fees Pending</p></div>
        </section>

        {/* Search */}
        <section className="search-box">
          <input
            type="text"
            placeholder="Enter Student Name or Room"
            onKeyDown={(e) => e.key === "Enter" && searchStudent(e.target.value)}
          />
          <button onClick={() => {
            let input = document.querySelector(".search-box input").value;
            searchStudent(input);
          }}>Search</button>
          <div style={{ marginTop: "10px", fontSize: "14px" }}>
            {searchResult === "notfound" && <span style={{ color: "red" }}>Student or Room not found</span>}
            {searchResult && searchResult !== "notfound" && (
              <div>
                <b>{searchResult.student}</b><br />
                Room: {searchResult.room}<br />
                Roommate: {searchResult.roommate}<br />
                Course: {searchResult.year} / {searchResult.course}<br />
                Attendance: {searchResult.attendance}%<br />
                Fee Status: {searchResult.feeStatus}
              </div>
            )}
          </div>
        </section>

        {/* Students Table */}
        <section>
          <h2>Students & Roommates</h2>
          <table>
            <thead>
              <tr><th>Name</th><th>Room</th><th>Roommate</th><th>Year/Course</th><th>Attendance %</th><th>Fee Status</th></tr>
            </thead>
            <tbody>
              {rooms.filter(r => r.occupied).map((r, i) => (
                <tr key={i}>
                  <td>{r.student}</td>
                  <td>{r.room}</td>
                  <td>{r.roommate}</td>
                  <td>{r.year} / {r.course}</td>
                  <td>{r.attendance}%</td>
                  <td>{r.feeStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Facilities Table */}
        <section>
          <h2>Room Facilities</h2>
          <table>
            <thead>
              <tr><th>Room</th><th>AC</th><th>Fan</th><th>Wi-Fi</th><th>Attached Bathroom</th></tr>
            </thead>
            <tbody>
              {rooms.map((r, i) => (
                <tr key={i}>
                  <td>{r.room}</td>
                  <td>{r.facilities.AC}</td>
                  <td>{r.facilities.Fan}</td>
                  <td>{r.facilities.WiFi}</td>
                  <td>{r.facilities.Bathroom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Maintenance Table */}
        <section>
          <h2>Maintenance Requests</h2>
          <table>
            <thead>
              <tr><th>Room</th><th>Issue</th><th>Status</th><th>Action</th></tr>
            </thead>
            <tbody>
              {maintenanceRequests.map((m, i) => (
                <tr key={i}>
                  <td>{m.room}</td>
                  <td>{m.issue}</td>
                  <td>{m.status}</td>
                  <td>
                    <button
                      className="action-btn"
                      disabled={m.status === "Completed"}
                      onClick={() => markMaintenanceCompleted(i)}
                    >
                      Mark Completed
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Rules & Notices */}
        <section>
          <h2>Hostel Rules & Notices</h2>
          <ul>
            <li>Keep the room clean and tidy at all times.</li>
            <li>Visitors are allowed only during specified hours.</li>
            <li>Observe silence in the hostel after 10 PM.</li>
            <li>Use of electric appliances must be as per hostel guidelines.</li>
            <li>Report maintenance issues immediately to the hostel staff.</li>
          </ul>
          <h3>Notices</h3>
          <ul>
            <li>Mess Menu for the week uploaded on notice board.</li>
            <li>Fire drill on 25th September at 10 AM.</li>
            <li>Maintenance: Water shutdown on 20th September.</li>
            <li>Hostel cultural fest on 30th September.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};
