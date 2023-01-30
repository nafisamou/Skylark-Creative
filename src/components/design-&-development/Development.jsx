import React from "react";
import pencil from "../../assets/noun-pencil-1536964 1.png";
import camera from "../../assets/noun-camera-1537106 1.png";
import phone from "../../assets/noun-mobile-1537080 1.png";


import "./Development.css";
const Development = () => {
  return (
    <div className="development">
      <div className="parent-div">
        <div className="design">
          <img className="pencil" src={pencil} alt="" />
          <h1>Design</h1>
<hr className="line"/>
         
          <li>Branding</li>
          <li>Marketing collateral</li>
          <li>Presentation design</li>
          <li>UX/UI design</li>
          <button className="btn-1">LEARN MORE</button>
        </div>
        <div className="design1">
          <img className="camera" src={camera} alt="" />
          <h1>Web Development</h1>
          <hr className="line"/>
          <li>Wordpress</li>
          <li>Shopify</li>
          <li>Headless</li>

          <button className="btn">LEARN MORE</button>
        </div>
        <div className="design2">
          <img className="phone" src={phone} alt="" />
          <h1>App Development</h1>
          <hr className="line"/>
          <li>Web Apps</li>
          <li>Mobile Apps</li>

          <button className="btn">LEARN MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Development;
