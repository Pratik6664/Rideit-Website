import React from "react";
import "./cards.css";


function Cards() {
  return (
    <>
    
        <div className="cardcontainer">
          <div className="card">
            <img className="cardimg1" src="../flexibleowneship.png" alt=""></img>
            <h3 className="cardheader">Flexible Ownership</h3>
            <p className="cardpara">Enjoy the the freedom of owning Tow-wheler without any hefty Downpayments , EMI and Paperwork . Now choose from ren-o-own monhly/quartely bookings and even daily plans</p>
          </div>
          <div className="card">
            <img className="cardimg2" src="../smartermobility.png" alt=""></img>
            <h3 className="cardheader">Smarter Mobility</h3>
            <p className="cardpara">With your trusty ONN app, you can choose any bike, make instant payments, get offers, and manage all aspect of your ONN experience right from the comfort and ease of your mobile app</p>
          </div>
          <div className="card">
            <img className="cardimg3" src="../noridinglimits.jpg" alt=""></img>
            <h3 className="cardheader">No Riding Limits</h3>
            <p className="cardpara">Odometer Won't Scare You Anymore</p>
          </div>
          <div className="card">
            <img className="cardimg4" src="../verifidedealers.png" alt=""></img>
            <h3 className="cardheader">Verified Dealers</h3>
            <p className="cardpara">Every Single Dealers Committed to Quality Service </p>
          </div>  
        </div>
        <div className="space">
           <p>----------------------------------------------------------------------------------------------</p>
            <p className="flowheader">HOW TO USE?</p>
            <p>----------------------------------------------------------------------------------------------</p>
            </div>
       <div className="cardcontiner2">
            <div className="flowcard">
            <img className="flowcardimg1" src="../bike.jpg" alt=""></img>
            <h3 className="cardheader">Select Your Bike</h3>
            <p className="cardpara">You can search & select bike from our wide range.</p>
          </div>
           <img className="flowarrow" src="arrow.png" alt=""></img>
            <div className="flowcard">
            <img className="flowcardimg2" src="../cart.png" alt=""></img>
            <h3 className="cardheader">Book a Trip</h3>
            <p className="cardpara">Easily add multiple bike in your cart or direct book from "BookNow" button.</p>
          </div>
          <img className="flowarrow" src="arrow.png" alt=""></img>
            <div className="flowcard">
            <img className="flowcardimg3" src="../pick.png" alt=""></img>
            <h3 className="cardheader">Pick Your Bike</h3>
            <p className="cardpara">Find the pickup location and pick a bike.</p>
          </div>
          <img className="flowarrow" src="arrow.png" alt=""></img>
            <div className="flowcard">
            <img className="flowcardimg4" src="../location.png" alt=""></img>
            <h3 className="cardheader">Go Anywhere</h3>
            <p className="cardpara">We do not have kms limit.</p>
          </div>
        </div> 
      
    <div className="container3">
      <div className="containerleft">
        <img className="leftimg" src="dash3.png" alt=""></img>
        <p className="leftimgheader">We Check Bike After Every Ride..!!</p>
      </div>
      <div className="containerright">
        <p className="cont3rightheader">WHY CHOOSE US?</p>
        <p className="cont3rightheader1">We simplified bike rentals, so you can focus on what's important to you.</p>
          <div className="cont3card1">
            <div className="helmet">
              <img className="helmetimg" src="helmet1.png" alt="">
              </img>
              <div className="helmettext">
              <h>Complementary Helmet</h>
              <p>Your Safety is our priority. We Provide complementary helmets with every ride</p>
              </div>
            </div>
            <div className="helmet">
              <img className="helmetimg" src="deposit.png" alt="">
              </img>
              <div className="helmettext">
              <h>Zero Deosit</h>
              <p>At Ride it you pay only for what you use. We don't take any deposit.</p>
              </div>
            </div>
            <div className="helmet">
              <img className="helmetimg" src="lowcost.png" alt="">
              </img>
              <div className="helmettext">
              <h>Lowest Price Guarantee</h>
              <p>You can count on us for the best bike rental prices in the city!</p>
              </div>
            </div>
          </div>
      </div>
    </div>


    </>
  );
}

export default Cards;
