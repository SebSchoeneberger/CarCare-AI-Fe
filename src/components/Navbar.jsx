import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
      <nav className="p-5 flex justify-center align-middle">
        <ul className="flex gap-2">
          <NavLink>
              <li><a href="#home">Home</a></li>
          </NavLink>
          <NavLink to='About'>
              <li><a href="#about">About</a></li>
          </NavLink>
          <NavLink to='Contact'>
              <li><a href="#contact">Contact</a></li>
          </NavLink>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;