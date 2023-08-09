import React from "react";
import "./help.css";
import { GiRocketThruster } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsFillFileEarmarkLock2Fill } from "react-icons/bs";
import { MdOutlineManageAccounts } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { SiXdadevelopers } from "react-icons/si";

function Help() {
  return (
    <>
      <div>
        <div className="Helpdash">
          <div className="helpheader">
            <h2 className="helptitle">How Can We Help?</h2>
            <input
              className="HPsearch"
              type="search"
              placeholder="Search"
            ></input>
          </div>
        </div>
      

      <h3 className="helptopicheader">Help Topics</h3>
      <div className="helpdash2">
        <div className="helpsections">
          <div className="Helptopicsection1">
            <div className="helptopic1">
              <div className="getstart">
                <GiRocketThruster className="helpicons" />
                <h4>Getting Started</h4>
              </div>
              <p>Articals to get you up and running quick andd easy</p>
            </div>
            <div className="helptopic1">
              <div className="getstart">
                <RiSecurePaymentLine className="helpicons" />
                <h4>Billing And Payments</h4>
              </div>
              <p>Information about how we charge you for our services</p>
            </div>
            <div className="helptopic1">
              <div className="getstart">
                <BsFillFileEarmarkLock2Fill className="helpicons" />
                <h4>Copyright And Legal</h4>
              </div>
              <p>
                Important information about how we handle yout privacy and data
              </p>
            </div>
          </div>

          <div className="Helptopicsection2">
            <div className="helptopic1">
              <div className="getstart">
                <MdOutlineManageAccounts className="helpicons" />
                <h4>My Account</h4>
              </div>
              <p>
                Important information about how we handle yout privacy and data
              </p>
            </div>
            <div className="helptopic1">
              <div className="getstart">
                <BsPhone className="helpicons" />
                <h4>Mobail App</h4>
              </div>
              <p>
                Important information about how we handle yout privacy and data
              </p>
            </div>
            <div className="helptopic1">
              <div className="getstart">
                <SiXdadevelopers className="helpicons" />
                <h4>Developers</h4>
              </div>
              <p>
                Important information about how we handle yout privacy and data
              </p>
            </div>
          </div>
        </div>

        <div className="support">
          <h4 className="supporttitle">Need Support?</h4>
          <p className="supportpara">
            Can't find the answer you're looking for? Don't worry we're here to
            help!
          </p>
          <button type="submit" className="suportbtn">
            CONTACT SUPPORT
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Help;
