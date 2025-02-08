import { CgMenuRightAlt } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="NAVBAR p-5 mx-20 mt-5 font-['Poppins'] max-sm:p-2 max-sm:mx-5 max-sm:max-h-[48px]">
        <div className="NAVBAR flex justify-between capitalize">
          <div className="LOGO">
            <a
              href="#"
              className="text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:text-cyan-500 max-sm:text-2xl"
            >
              {"<Faisal/>"}
            </a>
          </div>
          <div className="NAVLINKS text-[20px] ml-auto max-sm:hidden flex gap-12 text-[#00040f] dark:text-[#e1e1e1] ">
            <a
              href="#about"
              className="hover:text-cyan-500"
              onClick={(e) => scrollToSection(e, "#about")}
            >
              Home
            </a>
            <a
              href="#experience"
              className="hover:text-cyan-500"
              onClick={(e) => scrollToSection(e, "#experience")}
            >
              Skills
            </a>
            <a
              href="#education"
              className="hover:text-cyan-500 "
              onClick={(e) => scrollToSection(e, "#education")}
            >
              Education
            </a>
            <a
              href="#projects"
              className="hover:text-cyan-500 "
              onClick={(e) => scrollToSection(e, "#projects")}
            >
              Projects
            </a>
            {/* <a
              href="#contact"
              className="hover:text-cyan-500 "
              onClick={(e) => scrollToSection(e, "#contact")}
            >
              Contact
            </a> */}
            <button onClick={handleTheme}>
              {theme === "dark" ? (
                <HiMoon className="-translate-y-1 text-2xl" />
              ) : (
                <HiSun className="-translate-y-1 text-2xl" />
              )}
            </button>
          </div>

          <button onClick={() => setNav(!nav)}>
            <CgMenuRightAlt className="hidden max-sm:block text-[#00040f] dark:text-[#e1e1e1] text-[32px]" />
          </button>
        </div>
        {nav && <Menu />}
      </section>
    </>
  );
};
export default Navbar;
