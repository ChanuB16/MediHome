import {Calendar, LayoutDashboard, UserCheck, Users} from "lucide-react";

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