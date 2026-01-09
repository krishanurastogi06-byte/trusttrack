import { BrowserRouter, Routes, Route } from "react-router-dom";
import DonorDashboard from "../pages/donor/Dashboard";
import NgoDashboard from "../pages/ngo/Dashboard";
import AdminDashboard from "../pages/admin/Dashboard";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/donor" element={<ProtectedRoute role="donor"><DonorDashboard /></ProtectedRoute>} />
                <Route path="/ngo" element={<ProtectedRoute role="ngo"><NgoDashboard /></ProtectedRoute>} />
                <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}
