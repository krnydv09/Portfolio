import React from "react";
import Image from "next/image";
import Photo from "../assets/Photo.jpg";
import ContactForm from "../components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LoginPanel from "../components/LoginPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { NotificationProvider } from "../components/Notification";


const Home: React.FC = () => {

    return (
        <main>

            <LoginPanel />
            <Navbar />

            {/* Profile Section */}
            <section id="home" className="min-h-screen flex items-center justify-center gradient-bg text-white pt-16">
                <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
                        <p className="text-indigo-200 text-lg mb-4">Hello, I&apos;m</p>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Karanveer</h1>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Full Stack Developer</h2>
                        <p className="text-lg md:text-xl mb-8 text-indigo-100 max-w-lg">I build exceptional digital experiences with
                            modern technologies for web and mobile applications.</p>
                        <div
                            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                            <a href="#projects"
                                className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition duration-300 text-center">View
                                My Work</a>
                            <a href="#contact"
                                className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-indigo-600 transition duration-300 text-center">Contact
                                Me</a>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div style={{ objectFit: "fill", padding: "15px 15px 0 15px" }}
                            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#0088eb] flex items-center justify-center overflow-hidden">
                            {/* <svg className="absolute w-full h-full text-indigo-600" viewBox="0 0 200 200"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor"
                                    d="M40.8,-70.7C52.1,-64.5,60.4,-52.4,67.7,-39.5C75,-26.6,81.3,-13.3,81.9,0.3C82.5,14,77.5,27.9,69.5,39.5C61.5,51.1,50.5,60.3,38.1,66.5C25.7,72.7,12.8,75.8,-0.7,77C-14.3,78.2,-28.5,77.5,-40.5,71.3C-52.5,65.1,-62.2,53.4,-69.5,40.3C-76.8,27.2,-81.6,13.6,-82.1,-0.3C-82.6,-14.2,-78.8,-28.3,-71.2,-40.2C-63.6,-52.1,-52.2,-61.7,-39.7,-67.1C-27.2,-72.5,-13.6,-73.7,0.5,-74.5C14.5,-75.3,29.5,-76.9,40.8,-70.7Z"
                                    transform="translate(100 100)" />
                            </svg>
                            <svg className="relative w-40 h-40 md:w-48 md:h-48 text-white" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clip-rule="evenodd"></path>

                            </svg> */}
                            <Image priority src={Photo} alt="Profile photo" className="pointer-events-none select-none" />
                        </div>
                    </div>
                </div>
                {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <a href="#about" className="scroll-down text-white flex flex-col items-center">
                        <span className="mb-2 text-sm">Scroll Down</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </a>
                </div> */}
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white ">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="hidden md:block md:w-1/2 mb-10 md:mb-0">
                            <div className="relative">
                                <div className="w-full h-80 md:h-96 bg-indigo-100 rounded-lg"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-48 h-48 text-indigo-500" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:pl-12 ">
                            <div className="flex flex-col items-center">
                                <h2 className="text-3xl font-bold mb-2 text-gray-800 bg-red">About Me</h2>
                                <div className="w-20 h-1 bg-indigo-600 mb-6"></div>
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                I&apos;m a passionate Full Stack Developer with over 1.5 years of experience building web and mobile
                                applications. I specialize in JavaScript technologies across the stack and have a strong
                                foundation in modern frameworks and libraries.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                My journey in software development started when I built my first website at 15. Since then, I&apos;ve
                                worked with startups and established companies to create efficient, scalable, and user-friendly
                                applications. I&apos;m constantly learning new technologies and methodologies to stay at the
                                forefront of web development.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Experience</h3>
                                        <p className="text-gray-600">1+ Years</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Projects</h3>
                                        <p className="text-gray-600">30+ Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-2 text-gray-800">My Skills</h2>
                        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-lg mx-auto">I&apos;ve worked with a variety of technologies in the web
                            development world. Here are my main areas of expertise:</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Frontend */}
                        <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-300">
                            <div className="w-16 h-16 rounded-lg bg-indigo-100 flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                    </path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">Frontend Development</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                <span
                                    className="skill-pill px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm transition duration-300">React</span>
                                <span
                                    className="skill-pill px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm transition duration-300">Vue.js</span>
                                <span
                                    className="skill-pill px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm transition duration-300">JavaScript</span>
                                <span
                                    className="skill-pill px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm transition duration-300">TypeScript</span>
                                <span
                                    className="skill-pill px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm transition duration-300">HTML5</span>
                                <span
                                    className="skill-pill px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm transition duration-300">CSS3</span>
                                <span
                                    className="skill-pill px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm transition duration-300">Tailwind
                                    CSS</span>
                            </div>
                        </div>

                        {/* Backend */}
                        <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-300">
                            <div className="w-16 h-16 rounded-lg bg-indigo-100 flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01">
                                    </path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">Backend Development</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                <span
                                    className="skill-pill px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm transition duration-300">Node.js</span>
                                <span
                                    className="skill-pill px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm transition duration-300">Express</span>
                                <span
                                    className="skill-pill px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm transition duration-300">Python</span>
                                <span
                                    className="skill-pill px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm transition duration-300">Django</span>
                                <span
                                    className="skill-pill px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm transition duration-300">MongoDB</span>
                                <span
                                    className="skill-pill px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm transition duration-300">PostgreSQL</span>
                                <span
                                    className="skill-pill px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm transition duration-300">GraphQL</span>
                            </div>
                        </div>

                        {/* Tools & Others */}
                        <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-300">
                            <div className="w-16 h-16 rounded-lg bg-indigo-100 flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">Tools & Others</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                <span
                                    className="skill-pill px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm transition duration-300">Git</span>
                                <span
                                    className="skill-pill px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm transition duration-300">Docker</span>
                                <span
                                    className="skill-pill px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm transition duration-300">AWS</span>
                                <span
                                    className="skill-pill px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm transition duration-300">CI/CD</span>
                                <span
                                    className="skill-pill px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm transition duration-300">Jest</span>
                                <span
                                    className="skill-pill px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm transition duration-300">Figma</span>
                                <span
                                    className="skill-pill px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm transition duration-300">Agile</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-2 text-gray-800">My Projects</h2>
                        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-lg mx-auto">Here are some of my recent projects. Each one presented unique
                            challenges and opportunities for growth.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <div
                            className="project-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                            <div className="h-48 bg-indigo-200 relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-20 h-20 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">E-commerce Platform</h3>
                                <p className="text-gray-600 mb-4">A full-featured online store with product management, cart
                                    functionality, and payment processing.</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">React</span>
                                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Node.js</span>
                                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">MongoDB</span>
                                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Stripe</span>
                                </div>
                                <div className="flex space-x-2">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                                        <span>View Demo</span>
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                            </path>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-gray-800 font-medium flex items-center">
                                        <span>Code</span>
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Project 2  */}
                        <div
                            className="project-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                            <div className="h-48 bg-indigo-200 relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-20 h-20 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">Task Management App</h3>
                                <p className="text-gray-600 mb-4">A collaborative task management application with real-time updates
                                    and team workspaces.</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Vue.js</span>
                                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Express</span>
                                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Socket.io</span>
                                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">PostgreSQL</span>
                                </div>
                                <div className="flex space-x-2">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                                        <span>View Demo</span>
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                            </path>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-gray-800 font-medium flex items-center">
                                        <span>Code</span>
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div
                            className="project-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                            <div className="h-48 bg-indigo-200 relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-20 h-20 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">Fitness Tracking Mobile App</h3>
                                <p className="text-gray-600 mb-4">A cross-platform mobile app for tracking workouts, nutrition, and
                                    fitness progress.</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">React Native</span>
                                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Firebase</span>
                                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Redux</span>
                                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Chart.js</span>
                                </div>
                                <div className="flex space-x-2">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                                        <span>View Demo</span>
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                            </path>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-gray-800 font-medium flex items-center">
                                        <span>Code</span>
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <a href="#"
                            className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300">View
                            All Projects</a>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-2 text-gray-800">Get In Touch</h2>
                        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-lg mx-auto">Have a project in mind or want to discuss potential
                            opportunities? Feel free to reach out!</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        <ContactForm />

                        <div className="md:w-1/2">
                            <div className="bg-white rounded-lg shadow-md p-8 h-full">
                                <h3 className="text-xl font-semibold mb-6 text-gray-800">Contact Information</h3>

                                <div className="flex items-start mb-6">
                                    <div
                                        className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                                        <a href="mailto:ydv.krn09@gmail.com"
                                            className="text-indigo-600 hover:underline">ydv.krn09@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start mb-6">
                                    <div
                                        className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                                        <p className="text-gray-600">+91 8115283434</p>
                                    </div>
                                </div>

                                <div className="flex items-start mb-8">
                                    <div
                                        className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                            </path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-800 mb-1">Location</h4>
                                        <p className="text-gray-600">New Delhi, India</p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact Me</h3>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://github.com/krnydv09"
                                        target="_blank"
                                        className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-300 active:scale-90"
                                    >
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/krnydv09"
                                        target="_blank"
                                        className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-300 active:scale-90"
                                    >
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                    <a
                                        href="https://x.com/krnydv09"
                                        target="_blank"
                                        className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-300 active:scale-90"
                                    >
                                        <FontAwesomeIcon icon={faXTwitter} />
                                    </a>
                                    <a
                                        href="/Karanveer_CV.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"   
                                        className="w-30px h-10 p-5 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-300 active:scale-95"
                                    >
                                        <h4 className="font-bold">RESUME</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default function HomeWithProvider() {
    return (
        <NotificationProvider>
            <Home />
        </NotificationProvider>
    );
}