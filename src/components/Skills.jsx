import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "./Img_prop";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="EXPERIENCE p-5 mx-20 mb-10  font-['Poppins']  max-sm:p-2 max-sm:mx-5">
        <div
          className="IMG grid place-content-center p-5 grid-cols-3 gap-4 max-sm:p-2 mt-10"
          data-aos="zoom-out-up"
        >
          <Image img="https://i.ibb.co/tM2pkdVL/HTML.png"></Image>
          <Image img="https://i.ibb.co/RT3TqbVf/CSS.png"></Image>
          <Image img="https://i.ibb.co/PzgKW58F/Javascript.png"></Image>
          <Image img="https://i.ibb.co/cKRtDV2T/React.png"></Image>
          <Image img="https://i.ibb.co/cXZ12zbn/Tailwind-CSS.png"></Image>
          <Image img="https://i.ibb.co/fVCM7LrL/Vue.png"></Image>
          <Image img="https://i.ibb.co/93w5TQDz/CPP.png"></Image>
          <Image img="https://i.ibb.co/s9TmZJJ0/C.png"></Image>
          <Image img="https://i.ibb.co/kVgkfLm4/imgbhsgdf-removebg-preview.png"></Image>
          <Image img="https://i.ibb.co/xSb57fvQ/Vite.png"></Image>
          <Image img="https://i.ibb.co/Qv7wZCYK/Git.png"></Image>
          <Image img="https://i.ibb.co/vx7Yj0LZ/Github.png"></Image>
        </div>
      </section>
    </>
  );
};
export default Skills;
