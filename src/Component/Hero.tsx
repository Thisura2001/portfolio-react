import profileImage from '../assets/1741101565563.jpeg';
export const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6 pt-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Hi, I'm{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              THISURA LIYANAGE
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-lg">
            A passionate developer focused on creating beautiful and functional
            web experiences....
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
            >
              Contact Me
            </button>
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg border border-indigo-600 dark:border-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              View Projects
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
            <img
                src={profileImage}
              alt="Your Name"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
