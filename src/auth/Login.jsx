import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (data.success) {
                toast.success("Login successful! ✅");
                setTimeout(() => navigate("/dash"), 2000);
            } else {
                toast.error(data.error || "Invalid email or password ❌");
            }
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            toast.error("Server error. Please try again later ⚠️");
        }

        setIsLoading(false);
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen relative bg-gray-900"
            style={{
                background: "url('https://images.unsplash.com/photo-1527409335569-f0e5c91fa707?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center / cover",
            }}
        >
            {/* Blur Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

            <Toaster position="top-center" reverseOrder={false} />

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md p-8 bg-gray-800 border border-gray-700 shadow-lg rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-md opacity-30 pointer-events-none"></div>
                <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-6 relative">
                    <div>
                        <label className="block text-gray-400">Email</label>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/50"
                        disabled={isLoading}
                    >
                        {isLoading ? "Signing In..." : "Sign In"}
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-400">
                    Don't have an account?{" "}
                    <a href="/register" className="text-blue-400 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    );
}
