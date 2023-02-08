import Project from "./Project";
import SectionTitles from "./SectionTitles";

const data = [
  {
    id: 1,
    title: "TO-DO-APP",
    img1: "https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/3143813/pexels-photo-3143813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "A to-do web application built with React.js, JavaScript, and Tailwind CSS is a task management tool that allows users to create, edit, and track their to-do items in an interactive, dynamic user interface. React.js is a JavaScript library for building user interfaces, which provides a way to manage and update the application's state. JavaScript provides the logic for the application's functionality, while Tailwind CSS provides a highly customizable, modern design system for styling the application's layout and visual appearance. With this stack of technologies, developers can create a fast, responsive, and visually appealing to-do web application that can be used on any device.",
    tools: ["react.js", "javascript", "tailwind-css", "css"],
    liveLink: "www.google.com",
    frontEndLink: "www.gooogle.com",
  },
  {
    id: 2,
    title: "Tech Alpha-An e-commerce webiste",
    img1: "https://images.pexels.com/photos/2657667/pexels-photo-2657667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/890065/pexels-photo-890065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "An e-commerce web application built with React.js, Redux, Redux Toolkit, JavaScript, and Tailwind CSS offers a powerful solution for online sales. React.js provides a fast and dynamic user interface, while Redux and Redux Toolkit offer centralized state management. JavaScript offers necessary logic for features such as shopping carts and payment systems. Tailwind CSS provides a customizable design system. This technology stack enables businesses to create an e-commerce website that offers customers a smooth and intuitive shopping experience, driving sales and growth.",
    tools: ["react.js", "redux", "redux-toolkit", "javascript", "gsap", "css"],
    liveLink: "www.google.com",
    frontEndLink: "www.gooogle.com",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    img1: "https://images.pexels.com/photos/2657667/pexels-photo-2657667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/890065/pexels-photo-890065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa alias earum ipsum ducimus rerum esse voluptas labore dolore officiis consequuntur tenetur, beatae voluptatum assumenda illo error, consequatur quo minima?",
    tools: ["react", "javascript", "css", "html"],
    liveLink: "www.google.com",
    frontEndLink: "www.gooogle.com",
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
