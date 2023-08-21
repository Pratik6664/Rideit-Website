import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
    <div className=" "> 
      <div className="mainbar">
      <NavLink to="/" className="logotext">
            Ride it
          </NavLink>
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <NavLink to="/" className="nav-opt" >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-opt" >
                About Us
              </NavLink>
            </li>
            {/* <li>
              <a className="nav-opt" >
                Our Services
              </a>
            </li> */}
            <li>
              <NavLink to="/contact" className="nav-opt">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/help" className="nav-opt" >
                Help
              </NavLink >
            </li>
          </ul>
        </nav>
   
       
      </div>
      </div>
    </>
  );
}

export default Navbar;
