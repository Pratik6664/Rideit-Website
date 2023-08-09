import React from "react";
import "./contactus.css";
import Navbar from "./Navbar";
import { GoLocation } from "react-icons/go";
import { BsTelephoneInbound } from "react-icons/bs";
import { Ri24HoursFill } from "react-icons/ri";

function Contactus() {
  return (
    <>
     <Navbar/>
<div className="contactus_dash">
 
    <div className="CUboxs">
     <h1 className="CUtitle">CONTACT US</h1>

      <div className="CUboxs1">
        <div className="CUicons">
            <BsTelephoneInbound className="CUicon1" />
            <h3 className="CUicontitle">CALL US</h3>
          </div>
          <p className="CUpara">
            <a className="CUno">+91 9623152178 </a> <br></br>
            <a className="CUno"> +91 8999020837 </a>
          </p>
      </div>


     <div className="CUboxs2">
          <div className="CUicons">
            <GoLocation className="CUicon1" />
            <h3 className="CUicontitle">LOCATION</h3>
          </div>
          
          <p className="CUpara">
            FR6M+5W3, Sinhgad Institute Rd, Vadgaon Budruk, Pune, Maharashtra
            411046
          </p>
     </div>


        <div className="CUboxs3">
          <div className="CUicons">
            <Ri24HoursFill className="CUicon1"/>
            <h3 className="CUicontitle">BUSINESS HOURS</h3>
          </div>
          <p className="CUpara">24 Hours</p>
        </div>
  </div>

        <div className="CUbox2">
          <div className="namesection">
            <div className="firstname">
              <label className="CUlable">First Name</label> <br/> 
              <input className="CUinput" type="text" placeholder="Enter Your First Name"></input>
            </div>
            <div className="lastname">
              <label className="CUlable">Last Name</label> <br/>
              <input className="CUinput" type="text" placeholder="Enter Your Last Name"></input>
            </div>
          </div>
         <div className="Mailsection">
            <label className="CUlable">Email Address</label> <br/>
            <input className="CUinputmail" type="text" placeholder="Enter Your Email Address"></input>
            </div> 
         <div className="Msgsection">
            <label className="CUlable">Write Your Message</label> <br/>
            <input className="CUinputmsg" type="text-area"  placeholder="Send Us Mgs"></input>
            </div> 
           <button type="submit" className="CUbtn">Submit</button>
        </div>
      </div>
   
    </>
  );
}

export default Contactus;
