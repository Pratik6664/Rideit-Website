import React from "react";
import "./aboutus.css";
import Navbar from "./Navbar";

function Aboutus() {
  return (
    <>
      <div className="Aboutus-main-dash">
        <Navbar />
        <div className="aboutusheader">
          <h2 className="aboutusheader1">ABOUT US</h2>
        </div>
        <div className="aboutusmid">
          <div className="aboutuslefttsection">
            <h2 className="aboutusleftheader">OUR VISION</h2>
            <p>
              I will strive to build a business that aligns with my values and
              creates opportunities for others.” “My personal vision is to be a
              leader in my field, using my expertise to create positive change
              in the world. I will work towards developing my skills and
              building meaningful connections with others in my industry.”
            </p>
          </div>
          <div className="aboutusrightsection">
            <img className="aboutusleftectionimg" src="ourvision.png"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
