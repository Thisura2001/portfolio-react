import {
    FaCss3Alt,
    FaJs,
    FaGithub,
    FaHtml5,
    FaReact,
    FaDatabase,
    FaNodeJs,
    FaDocker,
    FaJava,
    FaPython,
    FaAngular
} from "react-icons/fa";
import { Code2, Layout, Server } from "lucide-react";
import { SiExpress, SiMongodb, SiRedux, SiSpring, SiTailwindcss } from "react-icons/si";

type TechItem = {
    name: string;
    icon: React.ReactNode;
    description: string;
    category: "frontend" | "backend" | "tools";
};

export const TechStack = () => {
    const technologies: TechItem[] = [
        {
            name: "HTML",
            icon: <FaHtml5 className="w-8 h-8" />,
            description: "Semantic markup and modern web standards",
            category: "frontend",
        },
        {
            name: "CSS",
            icon: <FaCss3Alt className="w-8 h-8" />,
            description: "Styling and responsive design",
            category: "frontend",
        },
        {
            name: "JavaScript",
            icon: <FaJs className="w-8 h-8" />,
            description: "Dynamic and interactive functionality",
            category: "frontend",
        },
        {
            name: "React",
            icon: <FaReact className="w-8 h-8" />,
            description: "Component-based UI development",
            category: "frontend",
        },
        {
            name: "Redux",
            icon: <SiRedux className="w-8 h-8" />,
            description: "Structured front-end library",
            category: "frontend",
        },
        {
            name: "Angular",
            icon: <FaAngular className="w-8 h-8" />,
            description: "Structured front-end framework",
            category: "frontend",
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss className="w-8 h-8" />,
            description: "Utility-first CSS framework",
            category: "frontend",
        },
        {
            name: "Node.js",
            icon: <FaNodeJs className="w-8 h-8" />,
            description: "Server-side JavaScript runtime",
            category: "backend",
        },
        {
            name: "Express.js",
            icon: <SiExpress className="w-8 h-8" />,
            description: "Fast, unopinionated web framework for Node.js",
            category: "backend",
        },
        {
            name: "Spring Boot",
            icon: <SiSpring className="w-8 h-8" />,
            description: "Java-based backend framework",
            category: "backend",
        },
        {
            name: "Python",
            icon: <FaPython className="w-8 h-8" />,
            description: "Versatile programming language",
            category: "backend",
        },
        {
            name: "Java",
            icon: <FaJava className="w-8 h-8" />,
            description: "Object-oriented programming language",
            category: "backend",
        },
        {
            name: "MongoDB",
            icon: <SiMongodb className="w-8 h-8" />,
            description: "NoSQL database for modern apps",
            category: "backend",
        },
        {
            name: "Databases",
            icon: <FaDatabase className="w-8 h-8" />,
            description: "SQL and NoSQL data management",
            category: "backend",
        },
        {
            name: "GitHub",
            icon: <FaGithub className="w-8 h-8" />,
            description: "Code hosting and collaboration",
            category: "tools",
        },
        {
            name: "Docker",
            icon: <FaDocker className="w-8 h-8" />,
            description: "Containerization platform",
            category: "tools",
        },
    ];

    return (
        <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-gray-900 w-full">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Tech Stack
                    </h2>
                    <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                        Technologies and tools I work with
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="group relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center"
                        >
                            <div className="text-indigo-600 dark:text-indigo-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                {tech.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {tech.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                                {tech.description}
                            </p>
                            <div className="absolute inset-0 border-2 border-transparent hover:border-indigo-600 dark:hover:border-indigo-400 rounded-lg transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <Layout className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Frontend
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            Creating responsive and intuitive user interfaces with modern
                            frameworks and tools.
                        </p>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <Server className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Backend
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            Building robust server-side applications and APIs with scalable
                            architecture.
                        </p>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <Code2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Development Tools
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            Utilizing industry-standard tools for efficient development and
                            deployment.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
