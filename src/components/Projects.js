import Project from "./Project";
import SectionTitles from "./SectionTitles";

const data = [
  {
    id: 1,
    title: "TO-DO-APP",
    img1: "https://res.cloudinary.com/dcgreqowu/image/upload/v1675853296/pp-test/to-do-2_gnlshq.jpg",
    img2: "https://res.cloudinary.com/dcgreqowu/image/upload/v1675853285/pp-test/to-do-1_ift3qd.jpg",
    description:
      "A to-do web application built with React.js, JavaScript, and Tailwind CSS is a task management tool that allows users to create, edit, and track their to-do items in an interactive, dynamic user interface. React.js is a JavaScript library for building user interfaces, which provides a way to manage and update the application's state. JavaScript provides the logic for the application's functionality, while Tailwind CSS provides a highly customizable, modern design system for styling the application's layout and visual appearance. With this stack of technologies, developers can create a fast, responsive, and visually appealing to-do web application that can be used on any device.",
    tools: ["react.js", "javascript", "tailwind-css", "css"],
    liveLink: "https://react-to-to-app-fs.netlify.app",
    frontEndLink: "https://github.com/muntasir-fahii/to-do-app",
  },
  {
    id: 2,
    title: "Tech Alpha-An e-commerce webiste",
    img1: "https://res.cloudinary.com/dcgreqowu/image/upload/v1675853303/pp-test/alpha-1_pnv2ih.jpg",
    img2: "https://res.cloudinary.com/dcgreqowu/image/upload/v1675853306/pp-test/alpha-2_c5lg0x.jpg",
    description:
      "An e-commerce web application built with React.js, Redux, Redux Toolkit, JavaScript, and Tailwind CSS offers a powerful solution for online sales. React.js provides a fast and dynamic user interface, while Redux and Redux Toolkit offer centralized state management. JavaScript offers necessary logic for features such as shopping carts and payment systems. Tailwind CSS provides a customizable design system. This technology stack enables businesses to create an e-commerce website that offers customers a smooth and intuitive shopping experience, driving sales and growth.",
    tools: ["react.js", "redux", "redux-toolkit", "javascript", "gsap", "css"],
    liveLink: "https://tech-alpha-fs.netlify.app",
    frontEndLink: "https://github.com/muntasir-fahii/tech-alpha-fs",
  },
  {
    id: 3,
    title: "Food-Verse- A Food court Webiste",
    img1: "https://res.cloudinary.com/dcgreqowu/image/upload/v1675853311/pp-test/food-1_zjw3aw.jpg",
    img2: "https://res.cloudinary.com/dcgreqowu/image/upload/v1675853317/pp-test/food-2_jwbsez.jpg",
    description:
      "A food court website built using React.js, Redux, Redux Toolkit, GSAP, and Tailwind CSS is a modern and dynamic platform for discovering and ordering food from a variety of restaurants. With React.js for building user interfaces, Redux for managing state, Redux Toolkit for simplifying the setup and usage of Redux, GSAP for adding animations, and Tailwind CSS for styling, this website offers a seamless experience for users to browse menus, place orders, and track delivery. The combination of these technologies results in a fast, responsive, and visually appealing food court website.",
    tools: ["react", "javascript", "css", "html"],
    liveLink: "https://food-verse-fs.netlify.app",
    frontEndLink: "https://github.com/muntasir-fahii/food-verse-fs",
  },
];

const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <SectionTitles title={"Projects"} />
      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
