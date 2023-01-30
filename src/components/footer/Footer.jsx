import React from "react";
import icon from '../../assets/linkedin.png'
import './Footer.css'

const Footer = () => {
  return (
   <div className="footer">
     <div className="footer-part">
      <div className="upper">
        <li>about</li>
        <li>team</li>
        <li>how can we help</li>
        <li>sector expertise</li>
        <li>deals</li>
        <li>news & insights</li>
        <li>careers</li>
        <li>contact us</li>
        <button>subscribe to our news</button>
      </div>
      <div className="lower">
      <div className="lower-left">
      <li>© Capitalmind 2022</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
        <li>A Website by Skylark Creative</li>
      </div>
      <div className="lower-right">
   
            <img src={icon} alt="" />
        <li>Follow Us on Linkedin</li>
        
      </div>
      </div>
    </div>
   </div>
  );
};

export default Footer;
