import React, { useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from "next/navigation";
import { Globals } from "@/app/GlobalsProvider";

interface GlobalsContextType {
    loggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    showPanel: boolean;
    setShowPanel: React.Dispatch<React.SetStateAction<boolean>>;
}

const navLinks = [
    { href: "/#home", label: "Home", id: "home" },
    { href: "/#about", label: "About", id: "about" },
    { href: "/#skills", label: "Skills", id: "skills" },
    { href: "/#projects", label: "Projects", id: "projects" },
    { href: "/#contact", label: "Contact", id: "contact" },
];

const Navbar: React.FC = () => {
    const { loggedIn } = useContext<GlobalsContextType>(Globals);
    const router = useRouter();
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Check if we're on the admin page
    const isAdminPage = pathname === '/admin';

    useEffect(() => {
        // If we're on admin page, set active section to 'admin'
        if (isAdminPage) {
            setActiveSection('admin');
            return;
        }

        const handleScroll = () => {
            let current = 'home';
            for (const link of navLinks) {
                const section = document.getElementById(link.id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 80) {
                        current = link.id;
                    }
                }
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isAdminPage]);

    const handleNavClick = (href: string, id: string) => {
        setMobileOpen(false);
        setActiveSection(id);
        if (typeof window !== 'undefined') {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                router.push(href);
            }
        }
    };

    return (
        <nav className="fixed top-0 w-full bg-white bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-indigo-600 font-[mmd]">KV<span className="text-gray-800">.</span></a>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-10">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleNavClick(link.href, link.id)}
                            className={`nav-link text-gray-800 hover:text-indigo-600 transition duration-300${activeSection === link.id ? ' active' : ''}`}
                            style={{ background: "none", border: "none", padding: 0, cursor: "pointer", position: 'relative' }}
                        >
                            {link.label}
                            {activeSection === link.id && (
                                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-300 shadow-md" />
                            )}
                        </button>
                    ))}
                    {loggedIn && (
                        <button
                            key="/admin"
                            onClick={() => router.push("/admin")}
                            className={`nav-link text-gray-800 hover:text-indigo-600 transition ease-in duration-500${activeSection === 'admin' ? ' active' : ''}`}
                            style={{ background: "none", border: "none", padding: 0, cursor: "pointer", position: 'relative' }}
                        >
                            Messages
                            {activeSection === 'admin' && (
                                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-300 shadow-md" />
                            )}
                        </button>
                    )}
                </div>

                {/* Hamburger Button */}
                <button
                    className="md:hidden text-gray-800 focus:outline-none"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileOpen && (
                <div className="md:hidden bg-white bg-opacity-95 px-6 py-4 flex flex-col space-y-4 shadow">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleNavClick(link.href, link.id)}
                            className={`text-left text-gray-800 hover:text-indigo-600 transition duration-300${activeSection === link.id ? ' font-bold' : ''}`}
                            style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                        >
                            {link.label}
                        </button>
                    ))}
                    {loggedIn && (
                        <button
                            key="/admin"
                            onClick={() => handleNavClick("/admin", "admin")}
                            className={`text-left text-gray-800 hover:text-indigo-600 transition duration-300${activeSection === 'admin' ? ' font-bold' : ''}`}
                            style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                        >
                            Messages
                        </button>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;