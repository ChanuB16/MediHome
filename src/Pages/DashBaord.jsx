import { useState } from "react";
import { Calendar, Users, UserCheck, LayoutDashboard } from "lucide-react";

export default function Dashboard() {
    const [appointments] = useState([
        { id: 1, doctor: "Dr. Sarah Lee", date: "March 15, 2025", status: "Confirmed" },
        { id: 2, doctor: "Dr. Alex Kim", date: "March 17, 2025", status: "Pending" },
        { id: 3, doctor: "Dr. Emily Ross", date: "March 20, 2025", status: "Completed" },
    ]);

    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 p-6 shadow-lg flex flex-col">
                <h2 className="text-3xl font-bold text-center text-blue-400">E-Channel</h2>
                <nav className="mt-10">
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer">
                            <LayoutDashboard className="text-blue-400" /> <span>Dashboard</span>
                        </li>
                        <li className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer">
                            <Calendar className="text-purple-400" /> <span>Appointments</span>
                        </li>
                        <li className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer">
                            <Users className="text-pink-400" /> <span>Doctors</span>
                        </li>
                        <li className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer">
                            <UserCheck className="text-green-400" /> <span>Patients</span>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Dashboard</h1>

                {/* Overview Cards */}
                <div className="grid grid-cols-3 gap-6 mt-6">
                    <div className="bg-gray-800 p-6 rounded-xl shadow-xl border border-blue-500">
                        <h3 className="text-xl font-semibold text-blue-400">Total Appointments</h3>
                        <p className="text-3xl font-bold mt-2">120</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl shadow-xl border border-purple-500">
                        <h3 className="text-xl font-semibold text-purple-400">Doctors Available</h3>
                        <p className="text-3xl font-bold mt-2">35</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl shadow-xl border border-pink-500">
                        <h3 className="text-xl font-semibold text-pink-400">Registered Users</h3>
                        <p className="text-3xl font-bold mt-2">560</p>
                    </div>
                </div>

                {/* Appointments Table */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-blue-400">Upcoming Appointments</h2>
                    <div className="bg-gray-800 p-6 mt-4 rounded-xl shadow-xl">
                        <table className="w-full">
                            <thead>
                            <tr className="text-left text-blue-400 border-b border-gray-700">
                                <th className="p-2">Doctor</th>
                                <th className="p-2">Date</th>
                                <th className="p-2">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {appointments.map((appt) => (
                                <tr key={appt.id} className="border-b border-gray-700">
                                    <td className="p-2">{appt.doctor}</td>
                                    <td className="p-2">{appt.date}</td>
                                    <td className={`p-2 font-bold ${appt.status === "Confirmed" ? "text-green-400" : appt.status === "Pending" ? "text-yellow-400" : "text-gray-400"}`}>
                                        {appt.status}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
