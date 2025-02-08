import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="education"
      className="EXPERIENCE p-5 mx-20 mb-0 min-h-screen font-['Poppins'] max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10 flex flex-col items-center">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-10 max-sm:text-4xl">
          Education
        </h1>

        <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
          {/* First Card */}
          <div
            className="bg-white bg-opacity-30 backdrop-blur-md dark:bg-slate-800 dark:bg-opacity-30 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-[500px]"
            data-aos="fade-right"
          >
            <div className="p-6">
              <div className="flex gap-4 items-center mb-4">
                <img
                  src="https://i.ibb.co/ZpCztkXJ/college-Logo.png"
                  alt="College Logo"
                  className="w-[70px] h-[70px] rounded-lg"
                />
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl tracking-wider">
                  J D College Of Engineering
                </h1>
              </div>

              <div className="space-y-3 border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="capitalize text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg font-medium">
                  Bachelor of Technology
                </h3>
                <p className="italic capitalize text-gray-500 dark:text-slate-400 text-lg">
                  November 2022 - May 2026
                </p>
                <p className="capitalize text-gray-500 dark:text-slate-400 text-lg">
                  Computer Science and Engineering
                </p>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div
            className="bg-white bg-opacity-30 backdrop-blur-md dark:bg-slate-800 dark:bg-opacity-30 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-[500px]"
            data-aos="fade-right"
          >
            <div className="p-6">
              <div className="flex gap-4 items-center mb-4">
                <img
                  src="https://i.ibb.co/gbnnw3XH/jvv.png"
                  alt="JVV"
                  className="w-[70px] h-[70px] rounded-lg"
                />
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl tracking-wider">
                  Jeevan Vikas Vidyalaya
                </h1>
              </div>

              <div className="space-y-3 border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="capitalize text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg font-medium">
                  Higher Secondary Education (12th)
                </h3>
                <p className="italic capitalize text-gray-500 dark:text-slate-400 text-lg">
                  June 2020 - March 2022
                </p>
                <p className="capitalize text-gray-500 dark:text-slate-400 text-lg">
                  Science Stream
                </p>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div
            className="bg-white bg-opacity-30 backdrop-blur-md dark:bg-slate-800 dark:bg-opacity-30 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-[500px]"
            data-aos="fade-right"
          >
            <div className="p-6">
              <div className="flex gap-4 items-center mb-4">
                <img
                  src="https://i.ibb.co/gbnnw3XH/jvv.png"
                  alt="JVV"
                  className="w-[70px] h-[70px] rounded-lg"
                />
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl tracking-wider">
                  Jeevan Vikas Vidyalaya
                </h1>
              </div>

              <div className="space-y-3 border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="capitalize text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg font-medium">
                  Secondary School Certificate (10th)
                </h3>
                <p className="italic capitalize text-gray-500 dark:text-slate-400 text-lg">
                  June 2019 - March 2020
                </p>
                <p className="capitalize text-gray-500 dark:text-slate-400 text-lg">
                  Maharashtra State Board of Secondary & Higher Secondary
                  Education
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="WRAPPER mt-10">
        <div
          className="EDUCATION flex gap-7 justify-between flex-row-reverse max-sm:flex-col"
          data-aos="fade-right"
        ></div>
      </div>
    </section>
  );
};

export default Education;
