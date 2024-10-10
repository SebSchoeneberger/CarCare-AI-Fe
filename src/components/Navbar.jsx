import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <div className="navbar sticky top-0 bg-transparent z-50 gap-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/">Item 1</NavLink></li>
                            <li>
                                <NavLink to="/parent">Parent</NavLink>
                                <ul className="p-2">
                                    <li><NavLink to="/parent/submenu1">Submenu 1</NavLink></li>
                                    <li><NavLink to="/parent/submenu2">Submenu 2</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to="/item3">Item 3</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to="/" className="btn btn-ghost text-xl">Car Care AI</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/features">Features</NavLink></li>
                        <li><NavLink to="/pricing">Pricing</NavLink></li>
                        <li><NavLink to="/signup">Get Started</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to="/login" className="btn">Login</NavLink>
                </div>
            </div>
        </>
    );
  };
  
  export default Navbar;