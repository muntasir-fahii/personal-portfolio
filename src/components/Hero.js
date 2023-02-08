import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useImageReveal } from "../hooks/gsap";
import { useHeadlineReveal } from "../hooks/gsap";

const data = {
  img1: "https://res.cloudinary.com/dcgreqowu/image/upload/v1675713433/pp-test/hero-1_f8huel.jpg",

  img2: "https://res.cloudinary.com/dcgreqowu/image/upload/v1675713385/pp-test/hero-2_zydqmp.jpg",
};

const Hero = () => {
  const heroImageRef = useRef(null);
  const heroHeadLine1Ref = useRef(null);
  const heroHeadLine2Ref = useRef(null);

  const headlines = [heroHeadLine1Ref, heroHeadLine2Ref];

  useHoverEffect(heroImageRef, data.img1, data.img2);
  useImageReveal(heroImageRef, 0.5);
  useHeadlineReveal(headlines, 1.5);

  return (
    <div className="hero container mx-auto mt-20 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImageRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1 ref={heroHeadLine1Ref}>Front-End</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1 ref={heroHeadLine2Ref}>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
