import React, { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const texts = ["Web Developer", "Tech Enthusiast"];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[index % texts.length];

    const timer = setTimeout(
      () => {
        setCurrentText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        );

        if (!isDeleting && currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      },
      isDeleting ? 50 : 150
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, index]);

  return (
    <section
      id="about"
      className="p-5 mx-20 mb-10 font-medium max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-12 flex intro">
        {/* Profile Image */}
        <div className="myImg order-2 max-sm:order-1">
          <img src="https://i.ibb.co/mVxBcdQj/myImg.jpg" alt="Profile" />
        </div>

        {/* Introduction Text */}
        <div className="INTRO order-1 max-sm:order-2">
          <h5 className="text-[#00040f] dark:text-white">Hello, It's me</h5>
          <h3 className="text-[#00040f] dark:text-white">Faisal Sheikh</h3>
          <h5 className="text-[#00040f] dark:text-white">And I'm a</h5>

          {/* Typing Text with Cursor */}
          <span className="typing-text">
            {currentText}
            <span className="blinking-cursor">|</span>
          </span>

          <p className="ABOUT text-xl max-sm:text-[17px] bg-clip-text text-transparent bg-gradient-to-r from-[#00040f] to-slate-500 dark:from-slate-500 dark:to-slate-200 max-w-[470px] mt-5 pl-1">
            Programming enthusiast who often thinks about developing new things
            for solving real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
