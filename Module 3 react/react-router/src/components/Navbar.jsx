import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const header = (
    <header>
      <nav>
        <ul>
          <li className="menuItems">
            <NavLink to="/" data-item="Home">
              Home
            </NavLink>
          </li>
          <li className="menuItems">
            <NavLink to="/" data-item="About">
              About
            </NavLink>
          </li>
          <li className="menuItems">
            <NavLink to="/" data-item="Projects">
              Projects
            </NavLink>
          </li>
          <li className="menuItems">
            <NavLink to="/" data-item="Contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );

  return (
    <header className=" bg-inherit h-24 w-full text-xl fixed flex justify-center text-white z-50">
      <nav className="w-[1200px] text-red-900 h-full flex items-center gap-7 ml-[10%]">
        <NavLink to="/"> Home </NavLink>
        <NavLink to="about"> About </NavLink>
        <NavLink to="services"> Services </NavLink>
        <NavLink to="contact"> Contact </NavLink>
      </nav>
    </header>

    // <header className="bg-inherit h-24 w-full text-xl fixed flex justify-center text-white z-50">
    //   <nav className="w-[1200px] text-red-900 h-full flex items-center gap-7 ml-[10%]">
    //     <ul>
    //       <li className="menuItems">
    //         <NavLink to="/" data-item="Home" className="a">
    //           Home
    //         </NavLink>
    //       </li>
    //       <li className="menuItems">
    //         <NavLink to="/" data-item="About" className="a">
    //           About
    //         </NavLink>
    //       </li>
    //       <li className="menuItems">
    //         <NavLink to="/" data-item="Projects" className="a">
    //           Projects
    //         </NavLink>
    //       </li>
    //       <li className="menuItems">
    //         <NavLink to="/" data-item="Contact" className="a">
    //           Contact
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
}

export default Navbar;
