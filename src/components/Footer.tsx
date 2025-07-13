import React from "react";


const Footer: React.FC = () => {
 return (
  <footer className="bg-gray-900 text-white py-12 w-full">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <a href="#KV" className="text-2xl font-bold font-[mmd]">KV<span className="text-indigo-400">.</span></a>
                            <p className="mt-2 text-gray-400">Full Stack Developer</p>
                        </div>

                        <div className="hidden md:flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 mb-6 md:mb-0">
                            <a href="#home" className="text-gray-300 hover:text-white transition duration-300">Home</a>
                            <a href="#about" className="text-gray-300 hover:text-white transition duration-300">About</a>
                            <a href="#skills" className="text-gray-300 hover:text-white transition duration-300">Skills</a>
                            <a href="#projects" className="text-gray-300 hover:text-white transition duration-300">Projects</a>
                            <a href="#contact" className="text-gray-300 hover:text-white transition duration-300">Contact</a>
                        </div>

                        <div className="flex flex-row items-center">
                            <p className="text-gray-400">©2025 <span className="font-[mmd]">KV.</span><span>All rights reserved.</span></p>
                        </div>
                    </div>
                </div>
            </footer>
)};

export default Footer;
