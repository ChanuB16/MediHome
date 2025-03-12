import { Routes, Route, Link } from "react-router-dom";
import Login from "./auth/Login.jsx";
import Register from "./auth/Register.jsx";
import Dashboard from "./Pages/DashBaord.jsx";
import Appointments from "./Pages/Appoinments.jsx";
import Doctors from "./Pages/Doctors.jsx";
import Session from "./Pages/mysessions.jsx";


export default function App() {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dash" element={<Dashboard />} />
                <Route path="/app" element={<Appointments/>} />
                <Route path="/doc" element={<Doctors/>} />
                <Route path="/sess" element={<Session/>} />
            </Routes>
        </>


    );
}
