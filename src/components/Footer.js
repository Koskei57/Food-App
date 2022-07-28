 import React from "react";
import "./css/Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Contacts</h4>
          <div class="icons ">
            <i class="fa-brands fa-instagram-square "></i>
            <i class="fa-brands fa-facebook " id="facebook "></i>
            <i class="fa-brands fa-twitter-square " id="twitter "></i>
            </div>
           
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} MyFood | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;