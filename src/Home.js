import React from "react";
import "./home.css";
import Cards from "./Cards";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <>
    <Navbar/>
      <div className="mainbox">
        <div className="firsthalf">
          <img className="displayimg" src="displayimg.png" alt=""></img>
          <text className="imgheader">
            <h1>RENT BIKE IN PUNE</h1>
            <h4>Rent from India's Largest Fleet of Motorcycles.</h4>
          </text>
        </div>
        <div className="secondhalf">
          <text className="sechalfh-header">
            <h1>Book your bike now</h1>
            <h3> Trusted Bike Rentals</h3>
            <h4>Rent a bike for daily, weekly, monthly, and longterm basis.</h4>
          </text>
          <div className="btnbook">
            <a href="http://wa.me/+918669622232" target="_blank">
            <button className="bookingbtn1">
             connect us Via Whatsapp
            </button></a>
            <button className="bookingbtn2">Rent a Bike for 3-9 month</button>
          </div>
        </div>
      </div>
      <div className="firstfooter">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1, height: "1px", backgroundColor: "black" }} />

          <div>
            <p style={{ width: "150px", textAlign: "center" }}>
              Better Bikes for <br></br> Your Better Journey
            </p>
          </div>
                                                                                           
          <div style={{ flex: 1, height: "1px", backgroundColor: "black" }} />
        </div>
      </div>
    <Cards/>
      <Footer/>
   
    
    </>
  );
}

export default Home;
