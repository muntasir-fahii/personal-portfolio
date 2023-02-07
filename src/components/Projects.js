import Project from "./Project";
import SectionTitles from "./SectionTitles";

const data = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    img1: "https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/3143813/pexels-photo-3143813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa alias earum ipsum ducimus rerum esse voluptas labore dolore officiis consequuntur tenetur, beatae voluptatum assumenda illo error, consequatur quo minima?",
    tools: ["react", "javascript", "css", "html"],
    liveLink: "www.google.com",
    frontEndLink: "www.gooogle.com",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    img1: "https://images.pexels.com/photos/2657667/pexels-photo-2657667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/890065/pexels-photo-890065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa alias earum ipsum ducimus rerum esse voluptas labore dolore officiis consequuntur tenetur, beatae voluptatum assumenda illo error, consequatur quo minima?",
    tools: ["react", "javascript", "css", "html"],
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
