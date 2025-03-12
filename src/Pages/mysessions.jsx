import { Calendar, LayoutDashboard, UserCheck, Users } from "lucide-react";
import { useState } from "react";

export default function Sessions() {
    const [sessions] = useState([
        { id: 1, title: "Cardiology Session", date: "March 15, 2025", status: "Scheduled" },
        { id: 2, title: "Neurology Consultation", date: "March 17, 2025", status: "Completed" },
        { id: 3, title: "Orthopedic Checkup", date: "March 20, 2025", status: "Pending" },
        { id: 4, title: "Dermatology Screening", date: "March 22, 2025", status: "Scheduled" },
        { id: 5, title: "Pediatrics Consultation", date: "March 25, 2025", status: "Scheduled" },
        { id: 6, title: "Psychiatric Evaluation", date: "March 27, 2025", status: "Completed" },
        { id: 7, title: "Gastroenterology Screening", date: "March 29, 2025", status: "Pending" },
        { id: 8, title: "Endocrinology Consultation", date: "March 30, 2025", status: "Scheduled" },
        { id: 9, title: "General Checkup", date: "April 2, 2025", status: "Scheduled" },
        { id: 10, title: "Urology Consultation", date: "April 5, 2025", status: "Completed" },
        { id: 11, title: "Ophthalmology Screening", date: "April 8, 2025", status: "Pending" },
        { id: 12, title: "Oncology Consultation", date: "April 10, 2025", status: "Scheduled" },
        { id: 13, title: "Rheumatology Checkup", date: "April 12, 2025", status: "Completed" },
        { id: 14, title: "Pulmonology Consultation", date: "April 15, 2025", status: "Scheduled" },
        { id: 15, title: "Hematology Screening", date: "April 17, 2025", status: "Pending" },
        { id: 16, title: "Nephrology Consultation", date: "April 20, 2025", status: "Scheduled" },
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
                        <li className="flex items-center space-x-3 p-3 rounded-lg bg-gray-700 cursor-pointer">
                            <UserCheck className="text-green-400" /> <span>Patients</span>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">My Sessions</h1>

                {/* Sessions Table */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-blue-400">Scheduled Sessions</h2>
                    <div className="bg-gray-800 p-6 mt-4 rounded-xl shadow-xl">
                        <table className="w-full">
                            <thead>
                            <tr className="text-left text-blue-400 border-b border-gray-700">
                                <th className="p-2">Session Title</th>
                                <th className="p-2">Date</th>
                                <th className="p-2">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {sessions.map((session) => (
                                <tr key={session.id} className="border-b border-gray-700">
                                    <td className="p-2">{session.title}</td>
                                    <td className="p-2">{session.date}</td>
                                    <td className={`p-2 font-bold ${session.status === "Scheduled" ? "text-blue-400" : session.status === "Completed" ? "text-green-400" : "text-yellow-400"}`}>
                                        {session.status}
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
