import React from "react";
import Navbar from "./Navbar";

function RequestAccountRemoval() {
  return (
    <>
      <Navbar />
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <h1>Want to Remove Your Account Details and Data</h1>
        <p>send us a mail at support@rideitservices.com</p>
        <p>
          In 24 hours Your Account and all your collected data will be deleted
          from our system
        </p>
      </div>
    </>
  );
}

export default RequestAccountRemoval;
