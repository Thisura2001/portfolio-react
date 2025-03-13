import { motion } from "framer-motion";
import profileImage from "../assets/1741101565563.jpeg";
import resume from "../assets/thisura_cv.pdf";

export const Hero = () => {
    return (
        <section
            id={"home"}
            className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 pt-24 pb-16"
        >
            <div className="container mx-auto px-4 md:px-6 pt-16 flex flex-col md:flex-row items-center justify-between">
                <motion.div
                    className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                        Hi, I'm{" "}
                        <motion.span
                            className="text-indigo-600 dark:text-indigo-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                        >
                            THISURA LIYANAGE
                        </motion.span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                        A passionate developer focused on creating beautiful and functional
                        web experiences....
                    </p>
                    <motion.div
                        className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                                document.getElementById("contact")?.scrollIntoView({
                                    behavior: "smooth",
                                })
                            }
                            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
                        >
                            Contact Me
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg border border-indigo-600 dark:border-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            onClick={() => {
                                const link = document.createElement("a");
                                link.href = resume;
                                link.download = "Thisura_Liyanage_Resume.pdf";
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                        >
                            Download Resume
                        </motion.button>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="md:w-1/2 flex justify-center md:justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                        <motion.img
                            src={profileImage}
                            alt="Your Name"
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
