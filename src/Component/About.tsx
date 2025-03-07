
export const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-800 w-full">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4"></div>
                </div>
                <div className="max-w-3xl mx-auto">
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        Hello! I'm <strong>Thisura Liyanage</strong>, a passionate web and software developer with a
                        strong foundation in modern technologies. Currently, I'm pursuing a <strong>Graduate Diploma in
                        Software Engineering (GDSE)</strong> at the <strong>Institute of Java Software
                        Engineering</strong> and a <strong>BSc (Hons) in Computer Science</strong> at the <strong>University
                        of Bolton</strong>.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        My journey in technology began with a deep curiosity about how software works. Since then, I've
                        been continuously learning and improving my skills in full-stack development, cloud computing,
                        and emerging technologies to build high-quality, scalable applications that meet both user needs
                        and business goals.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        When I'm not coding, you can find me exploring new technologies, playing watching netflix or enjoying a casual drink with friends. These activities help me
                        maintain a creative mindset and bring fresh perspectives to my work.
                    </p>
                    <div className="mt-10 flex justify-center gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                                2+
                            </div>
                            <div className="text-gray-600 dark:text-gray-300">
                                Years Experience
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                                10+
                            </div>
                            <div className="text-gray-600 dark:text-gray-300">
                                Projects Completed
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                                10+
                            </div>
                            <div className="text-gray-600 dark:text-gray-300">
                                Happy Clients
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
