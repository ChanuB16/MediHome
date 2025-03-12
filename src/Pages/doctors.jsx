import { Users, Calendar, LayoutDashboard, UserCheck } from "lucide-react";
import { useState } from "react";

export default function Doctors() {
    const [doctors] = useState([
        { id: 1, name: "Dr. Sarah Lee", specialty: "Cardiology", status: "Available", experience: 12, location: "New York", rating: 4.8 },
        { id: 2, name: "Dr. Alex Kim", specialty: "Neurology", status: "On Leave", experience: 8, location: "Los Angeles", rating: 4.5 },
        { id: 3, name: "Dr. Emily Ross", specialty: "Orthopedics", status: "Available", experience: 10, location: "Chicago", rating: 4.7 },
        { id: 4, name: "Dr. Noah Carter", specialty: "Dermatology", status: "Available", experience: 15, location: "San Francisco", rating: 4.9 },
        { id: 5, name: "Dr. Olivia Morgan", specialty: "Pediatrics", status: "Available", experience: 6, location: "Miami", rating: 4.6 },
        { id: 6, name: "Dr. James Miller", specialty: "Psychiatry", status: "On Leave", experience: 20, location: "Boston", rating: 4.4 },
        { id: 7, name: "Dr. Lily Williams", specialty: "Gastroenterology", status: "Available", experience: 10, location: "Dallas", rating: 4.8 },
        { id: 8, name: "Dr. Benjamin Harris", specialty: "Endocrinology", status: "Available", experience: 7, location: "Seattle", rating: 4.7 },
        { id: 9, name: "Dr. Sophia Johnson", specialty: "General Medicine", status: "On Leave", experience: 5, location: "Atlanta", rating: 4.6 },
        { id: 10, name: "Dr. Ethan Clark", specialty: "Oncology", status: "Available", experience: 14, location: "Houston", rating: 4.9 },
        { id: 11, name: "Dr. Ava Lewis", specialty: "Rheumatology", status: "Available", experience: 9, location: "San Diego", rating: 4.7 },
        { id: 12, name: "Dr. Mason Lee", specialty: "Pulmonology", status: "Available", experience: 11, location: "Denver", rating: 4.8 },
        { id: 13, name: "Dr. Mia Scott", specialty: "Hematology", status: "On Leave", experience: 13, location: "Phoenix", rating: 4.6 },
        { id: 14, name: "Dr. Lucas Walker", specialty: "Nephrology", status: "Available", experience: 10, location: "Charlotte", rating: 4.7 },
        { id: 15, name: "Dr. Harper Young", specialty: "Ophthalmology", status: "Available", experience: 7, location: "Portland", rating: 4.9 },
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
                        <li className="flex items-center space-x-3 p-3 rounded-lg bg-gray-700 cursor-pointer">
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
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Doctors</h1>

                {/* Doctors Table */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-blue-400">Doctors List</h2>
                    <div className="bg-gray-800 p-6 mt-4 rounded-xl shadow-xl">
                        <table className="w-full">
                            <thead>
                            <tr className="text-left text-blue-400 border-b border-gray-700">
                                <th className="p-2">Doctor</th>
                                <th className="p-2">Specialty</th>
                                <th className="p-2">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {doctors.map((doctor) => (
                                <tr key={doctor.id} className="border-b border-gray-700">
                                    <td className="p-2">{doctor.name}</td>
                                    <td className="p-2">{doctor.specialty}</td>
                                    <td className={`p-2 font-bold ${doctor.status === "Available" ? "text-green-400" : "text-red-400"}`}>
                                        {doctor.status}
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
