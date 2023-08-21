import React from "react";
import "./aboutus.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Aboutus() {
  return (
    <>
      <div>
        {/* fist div heading  */}
        <div className="Aboutus-main-dash">
          <Navbar />
          <div className="aboutusheader">
            <h2 className="aboutusheader1">ABOUT US</h2>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="ourVision">
            <h2>Our Vision</h2>
            <p>
              Rideit Services Pvt Ltd is a cutting-edge bike rental service
              provider based in Pune, India. We offer a convenient and flexible
              bike rental platform that allows users to access bikes on an
              hourly basis. With our user-friendly app and website, customers
              can easily book rides, pick up bikes from designated locations,
              and seamlessly drop them off after their ride duration is
              complete. At Rideit, we are passionate about revolutionizing urban
              transportation by providing a sustainable and efficient
              alternative for short-distance travel
            </p>
          </div>
          <img
            className="aboutusleftectionimg"
            src="ourvision.png"
            alt=""
          ></img>
        </div>
<div className="ourServices">
        <h2 className="servicesTital">Our Services</h2>
        <h3 className="servicesheading">Hourly Bike Rentals:</h3>
        <p>
          We offer bikes on an hourly rental basis, allowing users to pick up a
          bike from any of our designated locations and use it for short trips
          or commutes.
        </p>
        <h3 className="servicesheading">User-Friendly App & Website:</h3>
        <p>
          Our intuitive mobile app and website enable users to easily book and
          manage their bike rentals,making the entire process hassle-free and
          convenient.
        </p>
        <h3 className="servicesheading">Flexible Drop-off Locations:</h3>
        <p>
          Riders have the flexibility to drop off the bikes at any of our
          designated locations, making itconvenient for them to end their ride
          without any hassles.
        </p>
        <h3 className="servicesheading">Quality and Safety:</h3>
        <p>
          At Rideit, safety is our top priority. We regularly inspect and
          maintain our bike fleet to ensureeach ride is comfortable and secure.
        </p>
        <h3 className="servicesheading">Customer Support:</h3>
        <p>
          Our dedicated customer support team is available round-the-clock to
          assist users with anyqueries or concerns, ensuring a smooth rental
          experience.
        </p>
  </div>
  <Footer/>
      </div>
    </>
  );
}

export default Aboutus;
