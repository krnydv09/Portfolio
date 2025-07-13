import React from "react";

const AdminLoginPanel: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md md:w-[320px]">
                <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>
                <form className="space-y-4" method="POST" action="/login">
                    <input type="text" name="username" placeholder="Username" required
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
                    <input type="password" name="password" placeholder="Password" required
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
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