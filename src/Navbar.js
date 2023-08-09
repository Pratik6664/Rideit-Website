import React from "react";
import "./navbar.css";
import  {BiSearch}  from "react-icons/bi";

function Navbar() {
  return (
    <>
    <div className=" "> 
      <div className="mainbar">
      <a href="#" className="logotext">
            Ride it
          </a>
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <a className="nav-opt" href="/Home.js">
                Home
              </a>
            </li>
            <li>
              <a className="nav-opt" href="/Aboutus.js">
                About Us
              </a>
            </li>
            <li>
              <a className="nav-opt" href="#">
                Our Services
              </a>
            </li>
            <li>
              <a className="nav-opt" href="/Contctus.js">
                Contact Us
              </a>
            </li>
            <li>
              <a className="nav-opt" href="/Help.js">
                Help
              </a>
            </li>
          </ul>
        </nav>
   
       
      </div>
      </div>
    </>
  );
}

export default Navbar;
