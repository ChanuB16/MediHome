import { Calendar, LayoutDashboard, UserCheck, Users } from "lucide-react";
import { useState } from "react";

export default function Appointments() {
    const [appointments] = useState([
        { id: 1, patient: "John Doe", doctor: "Dr. Sarah Lee", date: "March 15, 2025", status: "Confirmed" },
        { id: 2, patient: "Emma Brown", doctor: "Dr. Alex Kim", date: "March 17, 2025", status: "Pending" },
        { id: 3, patient: "Michael Smith", doctor: "Dr. Emily Ross", date: "March 20, 2025", status: "Completed" },
        { id: 4, patient: "Sophia Johnson", doctor: "Dr. Noah Carter", date: "March 22, 2025", status: "Confirmed" },
        { id: 5, patient: "Olivia Williams", doctor: "Dr. James Miller", date: "March 25, 2025", status: "Pending" },
        { id: 6, patient: "William Clark", doctor: "Dr. Lily Williams", date: "March 28, 2025", status: "Confirmed" },
        { id: 7, patient: "Charlotte Davis", doctor: "Dr. Benjamin Harris", date: "March 30, 2025", status: "Completed" },
        { id: 8, patient: "Jackson Lee", doctor: "Dr. Ethan Clark", date: "April 1, 2025", status: "Pending" },
        { id: 9, patient: "Amelia White", doctor: "Dr. Sophia Johnson", date: "April 3, 2025", status: "Confirmed" },
        { id: 10, patient: "Isabella Martinez", doctor: "Dr. Ava Lewis", date: "April 5, 2025", status: "Completed" },
        { id: 11, patient: "Mason Robinson", doctor: "Dr. Mason Lee", date: "April 7, 2025", status: "Pending" },
        { id: 12, patient: "Lucas Moore", doctor: "Dr. Mia Scott", date: "April 10, 2025", status: "Confirmed" },
        { id: 13, patient: "Ethan Taylor", doctor: "Dr. Lucas Walker", date: "April 12, 2025", status: "Completed" },
        { id: 14, patient: "Avery Young", doctor: "Dr. Harper Young", date: "April 15, 2025", status: "Pending" },
        { id: 15, patient: "Ella Garcia", doctor: "Dr. Sarah Lee", date: "April 18, 2025", status: "Confirmed" },
    ]);


    const [filterDate, setFilterDate] = useState("");

    // Filter appointments by date
    const filteredAppointments = filterDate
        ? appointments.filter((appt) => appt.date === filterDate)
        : appointments;

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
                        <li className="flex items-center space-x-3 p-3 rounded-lg bg-gray-700 cursor-pointer">
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
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Appointments</h1>

                {/* Date Filter */}
                <div className="mt-6 flex items-center space-x-4">
                    <label className="text-lg">Filter by Date:</label>
                    <input
                        type="date"
                        value={filterDate}
                        onChange={(e) => setFilterDate(e.target.value)}
                        className="bg-gray-800 p-2 rounded-lg border border-gray-600 text-white"
                    />
                    <button
                        onClick={() => setFilterDate("")}
                        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white"
                    >
                        Clear Filter
                    </button>
                </div>

                {/* Appointments Table */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-blue-400">Scheduled Appointments</h2>
                    <div className="bg-gray-800 p-6 mt-4 rounded-xl shadow-xl">
                        {filteredAppointments.length > 0 ? (
                            <table className="w-full">
                                <thead>
                                <tr className="text-left text-blue-400 border-b border-gray-700">
                                    <th className="p-2">Patient</th>
                                    <th className="p-2">Doctor</th>
                                    <th className="p-2">Date</th>
                                    <th className="p-2">Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {filteredAppointments.map((appt) => (
                                    <tr key={appt.id} className="border-b border-gray-700">
                                        <td className="p-2">{appt.patient}</td>
                                        <td className="p-2">{appt.doctor}</td>
                                        <td className="p-2">{appt.date}</td>
                                        <td className={`p-2 font-bold ${
                                            appt.status === "Confirmed" ? "text-green-400" :
                                                appt.status === "Pending" ? "text-yellow-400" :
                                                    "text-gray-400"
                                        }`}>
                                            {appt.status}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="text-center py-8">
                                <img src="../img/notfound.svg" alt="Not Found" className="mx-auto w-32" />
                                <p className="text-xl mt-4">No appointments found for this date!</p>
                                <button
                                    onClick={() => setFilterDate("")}
                                    className="bg-blue-500 hover:bg-blue-600 px-4 py-2 mt-4 rounded-lg text-white"
                                >
                                    Show All
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
