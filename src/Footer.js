import React from "react";
import "./footer.css";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { GrFacebook } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
function Footer() {
  return (
    <>
      <div className="mainfooter">
        <div className="dash3footer">
          <div className="footercontent1">
            <h3 className="footertitlecontent1">Ride It</h3>
            <div className="footercontentmail">
              <MdEmail className="footercontentmailicon" />{" "}
              <a className="footercontentbtn" href="">
                rideitservices@gmail.com
              </a>{" "}
            </div>{" "}
            <br />
            <div className="footercontentcall">
              {" "}
              <FiPhoneCall className="footercontentcallicon" />{" "}
              <a className="footercontentbtn" href="">
                9623152178
              </a>{" "}
              ,{" "}
              <a className="footercontentbtn" href="">
                7757039226
              </a>{" "}
            </div>
          </div>
          <div className="footercontent2">
            <h3 className="footertitlecontent1">COMPANY</h3>
            <a className="footercontentaboutus" href="Aboutus.js">
              About Us
            </a>{" "}
            <br />
            <a className="footercontentaboutus" href="Contact.js">
              Contact Us
            </a>{" "}
            <br />
            <a className="footercontentaboutus" href="Contact.js">
              Careers
            </a>
          </div>
          <div className="footercontent2">
            <h3 className="footertitlecontent1">POLICIES</h3>
            <a className="footercontentaboutus" href="Aboutus.js">
              Privacy Policy
            </a>{" "}
            <br />
            <a className="footercontentaboutus" href="Contact.js">
              Terms And Conditions
            </a>{" "}
            <br />
          </div>{" "}
          <br />
        </div>
        <div className="Followus">
          <div className="Followusleft">
            <h3 className="footertitlecontentdown1">Follow Us</h3>
           <div className="Followusleftdiv">
            <a className="Followuslefticonbtn" href="">
              {" "}
              <FiInstagram className="Followuslefticon" />{" "}
            </a>{" "}
            <a className="Followuslefticonbtn" href="">
              <GrFacebook className="Followuslefticon" />
            </a>{" "}
            <a className="Followuslefticonbtn" href="">
              <GrTwitter className="Followuslefticon" />
            </a>{" "}
            <a className="Followuslefticonbtn" href="">
              {" "}
              <BsLinkedin className="Followuslefticon" />{" "}
            </a>
            </div> 
          </div>
          <div className="Followusright">
            <h3 className="footertitlecontentdown2">Download Our App</h3>
            <div className="Followusrightdiv">
           <a href="https://play.google.com/store/games?device=windows&utm_source=apac_med&hl=en-IN&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700065205026415_creativeid_535350509927_device_c&gclid=CjwKCAjw8symBhAqEiwAaTA__OuAK9QxZNh7RLI3cbU53s8Dwa6CDTqiC-CrpUiIWqx41dSUxWJwGhoCe4YQAvD_BwE&gclsrc=aw.ds"><img className="playstoreicon" src="playstore.png"></img></a>  
            <a href="https://www.apple.com/in/app-store/"><img className="playstoreicon" src="applestore.png"></img></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
