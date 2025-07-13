import React, { useState } from "react";

const AdminLoginPanel: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-6 mx-4 w-80 h-80 rounded-2xl shadow-lg flex flex-col justify-center md:p-8 md:mx-0 md:w-[320px] md:h-auto">
                <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>
                <form className="space-y-4" method="POST" action="/login">
                    <input type="text" name="username" placeholder="Username" required
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 pr-10"
                        />
                        <button
                            type="button"
                            tabIndex={-1}
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <button type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
export default AdminLoginPanel;