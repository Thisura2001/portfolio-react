import {useState} from "react";
import {Globe, Monitor, Smartphone} from "lucide-react";

type project = {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    category: "web" | "mobile" | "desktop";
}
export const Projects = ()=>{
    const [activeCategory, setActiveCategory] = useState<"web" | "mobile" | "desktop">("web");
    const projects:project[] = [
        {
            id:1,
            title:"Crop Management System",
            description:" This is an advanced ,web based platform designed to manage and monitor\n" +
                " agricultural activities efficiently",
            image: "../assets/1741101565563.jpeg",
            tags : ["React","Node js","mysql","Prisma"],
            link:" https://github.com/Thisura2001/GreenShadow-React.git",
            category:"web"
        },
        {
            id:2,
            title:"Green Shadow",
            description:" This is an advanced ,web based platform designed to manage and monitor\n" +
                " agricultural activities efficiently",
            image:"https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
            tags : ["Javascript","spring boot","mysql","hibernate"],
            link:" https://github.com/Thisura2001/Crop-monitoring-system-frontend.git",
            category:"web"
        },
        {
            id:3,
            title:"Recipe Finder",
            description:"  a mobile application using React Native with Native Paper backend using\n" +
                " Prisma ORM and Express.js, ensuring efficient database management and\n" +
                " seamless API integration. Implemented authentication, state management, and\n" +
                " RESTful APIs to enhance functionality.",
            image:"https://images.unsplash.com/photos-a-wooden-table-topped-with-plates-of-food-w8cM5oUVyHk",
            tags : ["Typescript","React native","mysql","Prisma"],
            link:"https://github.com/Thisura2001/Recipe_app_native.git",
            category:"mobile"
        },
        {
            id:4,
            title:"Thogakade Mobile",
            description:"  a mobile application using React Native with Native Paper backend using\n" +
                " Prisma ORM and Express.js, ensuring efficient database management and\n" +
                " seamless API integration. Implemented authentication, state management, and\n" +
                " RESTful APIs to enhance functionality.",
            image:"https://images.unsplash.com/a-stack-of-pancakes-with-blueberries-and-syrup-g4jSyttFc08",
            tags :  ["Typescript","React native","mysql","Prisma"],
            link:" https://github.com/Thisura2001/thogakade_frontend.git",
            category:"mobile"
        },
        {
            id:5,
            title:"LIYO (Garment Management System)",
            description:"A software solution designed to streamline garment business operations, including staff and employee management, sales tracking, and equipment monitoring. Ensures efficient workflow, inventory control, and seamless integration of production and sales processes. Implements automation, reporting, and financial management to enhance business efficiency.",
            image:"https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
            tags : ["Java","Mysql","Hibernate"],
            link:"https://github.com/Thisura2001/garment-management-system-Final-Project-.git",
            category:"desktop"
        },
        {
            id:6,
            title:"Chat Application",
            description:"A real-time chat application built using Java, enabling seamless group chat, emoji support, and image sharing. Utilizes Sockets/WebSockets for real-time messaging and JavaFX/Swing for an intuitive UI. Implements user authentication, message encryption, and file transfer protocols for a secure and interactive chatting experience..",
            image:"https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
            tags : ["Java","Mysql","Hibernate"],
            link:"https://github.com/Thisura2001/chat-application-course-work.git",
            category:"desktop"
        },
        {
            id:7,
            title:"Library Management System",
            description:"A Library Management System (LMS) is a software solution designed to manage and streamline library operations, including book management, student and staff records, borrowing, returns, and fines. By using a layered architecture, the system ensures modularity, maintainability, and scalability.",
            image:"https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
            tags : ["Java","Mysql","Hibernate"],
            link:"https://github.com/Thisura2001/book-worm-library-management-system.git",
            category:"desktop"
        },
        {
            id:8,
            title:"POS System",
            description:" This is an advanced ,web based platform designed to manage and monitor\n" +
                         " Sales activities efficiently",
            image:"https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
            tags : ["Java","Mysql","Hibernate","Javascript"],
            link:"https://github.com/Thisura2001/pos-frontEnd.git",
            category:"web"
        },
    ]
    const filteredProjects = projects.filter(
        (project) => project.category === activeCategory,
    );
    const categories = [
        {
            id: "web",
            label: "Web Applications",
            icon: Globe,
        },
        {
            id: "mobile",
            label: "Mobile Applications",
            icon: Smartphone,
        },
        {
            id: "desktop",
            label: "Desktop Applications",
            icon: Monitor,
        },
    ] as const;
    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 w-full">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        My Projects
                    </h2>
                    <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4"></div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                    {categories.map(({ id, label, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => setActiveCategory(id)}
                            className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${activeCategory === id ? "bg-indigo-600 dark:bg-indigo-500 text-white" : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"}`}
                        >
                            <Icon className="w-5 h-5 mr-2" />
                            <span className="font-medium">{label}</span>
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                    onError={(e) => {
                                        e.currentTarget.src = 'path/to/fallback/image.jpg';
                                    }}
                                />
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"/>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium flex items-center"
                                >
                                    View Project
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 ml-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};