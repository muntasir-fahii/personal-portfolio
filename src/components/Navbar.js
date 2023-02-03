import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <HashLink smooth to="#home"></HashLink>
      </div>
    </nav>
  );
};

export default Navbar;
