import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await api.post("/auth/login", { email });

            const role = res.data.user.role;
            const token = res.data.token;

            localStorage.setItem("token", token);
            localStorage.setItem("role", role);

            if (role === "donor") navigate("/donor");
            if (role === "ngo") navigate("/ngo");
            if (role === "admin") navigate("/admin");
        } catch (err) {
            console.error("Login failed", err);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
