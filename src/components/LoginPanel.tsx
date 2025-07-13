import React, { useContext, useRef, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Globals } from "@/app/GlobalsProvider";
import type { GlobalContextType } from "@/app/GlobalsProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut, faX, faSignOutAlt, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { useNotification } from "@/components/Notification";

interface GlobalsContextType {
    loggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    showPanel: boolean;
    setShowPanel: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPanel: React.FC = () => {
    const router = useRouter();
    const { loggedIn, setLoggedIn, showPanel, setShowPanel } = useContext<GlobalContextType>(Globals);
    const { showNotification } = useNotification();
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    // Refs for animation
    const panelRef = useRef<HTMLDivElement | null>(null);
    const formDivRef = useRef<HTMLDivElement | null>(null);
    const formRef = useRef<HTMLFormElement | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && showPanel && panelRef.current && formDivRef.current) {
            gsap.fromTo(
                panelRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.3, ease: "power2.out" }
            );
            gsap.fromTo(
                formDivRef.current,
                { y: 50, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out", delay: 0.1 }
            );
        }
    }, [showPanel, loggedIn]);

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const username = (event.currentTarget.elements.namedItem("username") as HTMLInputElement).value;
        const password = (event.currentTarget.elements.namedItem("password") as HTMLInputElement).value;

        try {
            await axios.post("/api/login", { username, password }, { withCredentials: true });
            setLoggedIn(true);
            setShowPanel(false);
            showNotification("success", "Login successful!");
            router.push("/admin");
        } catch {
            showNotification("error", "Invalid credentials");
        }
    };

    const handleLogout = async () => {
        setShowLogoutModal(true);
    };

    const confirmLogout = async () => {
        setShowLogoutModal(false);
        try {
            await axios.post("/api/logout", {}, { withCredentials: true });
            showNotification("info", "Logged out successfully");
        } catch {
            showNotification("error", "Logout failed");
        }
        setLoggedIn(false);
        setShowPanel(false);
        router.push("/");
    };

    const cancelLogout = () => {
        setShowLogoutModal(false);
    };

    // Animate the floating button
    const buttonRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (typeof window !== 'undefined' && buttonRef.current) {
            gsap.fromTo(
                buttonRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
            );
        }
    }, [loggedIn]);

    return (
        <>
            <div
                ref={buttonRef}
                onClick={loggedIn ? handleLogout : () => setShowPanel(!showPanel)}
                className={`fixed flex items-center justify-center z-10 bottom-7 right-7 min-w-[40px] min-h-[40px] rounded-full border border-white cursor-pointer transition-colors
                ${loggedIn ? "bg-red-600 text-white hover:bg-red-700": "bg-black text-white hover:bg-sky-900"}`}
                title={loggedIn ? "Logout" : "Login"}
            >
                <FontAwesomeIcon icon={loggedIn ? faSignOutAlt : faUserAstronaut} />
            </div>

            {/* Logout Confirmation Modal (global) */}
            {showLogoutModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
                    <div className="min-h-[200px] min-w-[350px] bg-white p-8 rounded-xl border-1 border-gray-200 shadow-2xl flex flex-col justify-center items-center">
                        <h3 className="text-lg font-semibold mb-4">Are you sure you want to logout?</h3>
                        <div className="flex gap-4">
                            <button
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 font-bold"
                                onClick={confirmLogout}
                            >
                                Yes, Logout
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 font-bold"
                                onClick={cancelLogout}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showPanel && !loggedIn ? (
                <div
                    ref={panelRef}
                    className="fixed inset-0 flex items-center justify-center bg-black/10 z-50"
                    onClick={() => setShowPanel(false)}
                >
                    <div
                        ref={formDivRef}
                        className="overflow-hidden mx-4 w-80 h-80 rounded-2xl bg-white p-6 border-1 border-gray-200 shadow-2xl flex flex-col justify-center items-center transition-opacity duration-500 opacity-100 relative"
                        onClick={e => { e.stopPropagation(); }}
                    >
                        <button
                            className="absolute top-0 right-0 w-8 h-8 bg-red-600 rounded-bl-md text-gray-500 hover:text-gray-700 text-xl"
                            onClick={() => setShowPanel(false)}
                            aria-label="Close"
                            type="button"
                        >
                            <FontAwesomeIcon className="size-5 text-black" icon={faX} />
                        </button>
                        <h2 className="mb-4 text-2xl font-semibold">Admin Login</h2>
                        <form ref={formRef} onSubmit={handleLogin} className="w-full flex flex-col gap-4">
                            <input name="username" type="text" placeholder="Username" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                            <div className="relative">
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10 w-full"
                                    required
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    tabIndex={-1}
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="h-5 w-5" />
                                </button>
                            </div>
                            <button type="submit" className="px-6 py-2 rounded-lg border-none bg-indigo-600 text-white font-bold cursor-pointer transition-colors duration-300 hover:bg-indigo-700">Login</button>
                        </form>
                    </div>
                </div>
            ) : null}

            {showPanel && loggedIn ? (
                <div
                    ref={panelRef}
                    className="fixed inset-0 flex items-center justify-center bg-black/10 z-50"
                    onClick={() => setShowPanel(false)}
                >
                    <div
                        ref={formDivRef}
                        className="overflow-hidden min-h-[200px] min-w-[350px] bg-white p-8 rounded-xl border-1 border-gray-200 shadow-2xl flex flex-col justify-center items-center transition-opacity duration-500 opacity-100 relative"
                        onClick={e => { e.stopPropagation(); }}
                    >
                        <button
                            className="absolute top-0 right-0 w-8 h-8 bg-red-600 rounded-bl-md text-gray-500 hover:text-gray-700 text-xl"
                            onClick={() => setShowPanel(false)}
                            aria-label="Close"
                            type="button"
                        >
                            <FontAwesomeIcon className="size-5 text-black" icon={faX} />
                        </button>
                        <h2 className="mb-4 text-2xl font-semibold">Logged In</h2>
                        <button
                            className="px-6 py-2 rounded-lg border-none bg-red-600 text-white font-bold cursor-pointer transition-colors duration-300 hover:bg-red-700 flex items-center gap-2"
                            onClick={handleLogout}
                        >
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            Logout
                        </button>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default LoginPanel;