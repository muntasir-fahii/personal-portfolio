import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between container mx-auto mt-20 uppercase">
      <div>
        <HashLink smooth to="#home" className="link-item">
          Muntasir Fahim
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-3">
        <li>
          <HashLink smoooth to="#home" className="link-item">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smoooth to="#projects" className="link-item">
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink smoooth to="#skills" className="link-item">
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink smoooth to="#about" className="link-item">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smoooth to="#contact" className="link-item">
            Contact
          </HashLink>
        </li>
        <li>
          <a
            href="https://www.google.com"
            target="_balnk"
            rel="noreferrer"
            className="link-item"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
