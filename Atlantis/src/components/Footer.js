import React from "react";
import "./css/footer.css";
import gmail from "./Images/footer/gmail.png";
import twitter from "./Images/footer/twitter.png";
import instagram from "./Images/footer/instagram.png";

function Footer() {
  return (
    <div className="footer">
      <footer className="container-footer" id="contact-us">
        <hr />
        <div className="contact-id">
          Contact Us
          <p className="contact-number">
            033 000 000
          </p>
          <hr />
        </div>
        <div className="links">
          <a href="mailto:atlantis.smartcity@gmail.com" target="_blank" className="contact" rel="noreferrer">
            <img src={gmail} alt="" className="logo-contact gmail" />
          </a>
          <a href="https://twitter.com/theatlantis_sc" target="_blank" className="contact" rel="noreferrer">
            <img src={twitter} alt="" className="logo-contact twitter" />
          </a>
          <a href="https://www.instagram.com/theatlantis_sc/" target="_blank" className="contact" rel="noreferrer">
            <img src={instagram} alt="" className="logo-contact insta" />
          </a>
        </div>
        <p>
          &copy; 2022 by La Martiniere for Boys, Kolkata for Hackathon- Youthopia 2022.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
