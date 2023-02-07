import { useRef } from "react";
import SectionTitles from "./SectionTitles";
import { useHoverEffect } from "../hooks/useHoverEffect";

const data = {
  img1: "https://res.cloudinary.com/dcgreqowu/image/upload/v1675811157/pp-test/hero-3_dnh0se.jpg",
  img2: "https://res.cloudinary.com/dcgreqowu/image/upload/v1675811135/pp-test/hero-4_fjlu8o.jpg",
};

const About = () => {
  const aboutLeftRef = useRef(null);

  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  return (
    <div className="about container mx-auto mt-40" id="about">
      <SectionTitles title={"About"} />

      <div className="about-wrapper mt-40 grid grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left" ref={aboutLeftRef}></div>
        <div className="about-right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            illum dolor adipisci? Consequatur in nemo animi suscipit nisi,
            similique mollitia id dicta illum totam ad, aliquid, eos architecto
            tenetur quo.
          </p>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            beatae sit quidem atque id sint, corporis, architecto temporibus
            expedita, qui minus. Deleniti, omnis expedita maxime quasi odit eius
            commodi quisquam!
          </p>
          <a
            href="https://www,google.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-rose-400/20 hover:border-rose-400/20 duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
