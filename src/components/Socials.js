import { useRef } from "react";
import { useSocialReveal } from "../hooks/gsap";

const data = [
  {
    id: 1,
    title: "Faceboook",
    url: "https://www.facebook.com/mdmuntasir.fahim/",
  },
  {
    id: 2,
    title: "Linkedin",
    url: "https://www.linkedin.com/in/muntasir-fahim-379260267/",
  },
  {
    id: 2,
    title: "Twitter",
    url: "https://twitter.com/muntasir6785",
  },
  {
    id: 3,
    title: "Github",
    url: "https://github.com/muntasir-fahii",
  },
  {
    id: 4,
    title: "Leetcode",
    url: "https://leetcode.com/muntasir-fahim/",
  },
];

const Socials = () => {
  const socialRef = useRef(null);

  useSocialReveal(socialRef, 2);
  return (
    <div
      className="socials flex gap-5 uppercase text-sm fixed left-10 top-[75%] -rotate-90 origin-left text-white/30 bg-black/30 p-5 backdrop-blur-xl z-50"
      ref={socialRef}
    >
      {data.map((social) => (
        <a
          href={social.url}
          target="_blank"
          rel="noreferrer"
          key={social.id}
          className="hover:text-rose-400 duration-500"
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;
