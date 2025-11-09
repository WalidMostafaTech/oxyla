import { NavLink } from "react-router-dom";

const NavBar = ({ setActiveNav, links }) => {


  return (
    <nav className="hidden lg:flex items-center justify-center gap-10">
      {links.map((link) => (
        <NavLink
          to={link.path}
          key={link.name}
          className="navLink"
          onClick={() => {
            setActiveNav(false);
          }}
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
