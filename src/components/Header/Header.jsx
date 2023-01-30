import arrowRight from "../../assets/right-arrow.png";
import arrowLeft from "../../assets/left-arrow.png";
import yellowButton from "../../assets/yellow-arrow.png";

import "./Header.css";
import { useState } from "react";
import Transactions from './../transactions/Transactions';

function Header() {
  const [modal, setModal] = useState(false);

      const toggleModal = () => {
        setModal(!modal);
      
      };
  return (
    <div className="header">
      <div className="slide">
        {/* <p className={ toggleState === 1?  'tabs active-tabs': "tabs"} onClick={()=> toggleDiv(1)}>s</p>
  <p className={ toggleState === 2?  'tabs active-tabs': "tabs"} onClick={toggleDiv(2)}>s</p>  */}
        <div className="bg">
          <div className="overly">
            <br></br>
            <div className="mainContainer">
              {/* navbar */}
              <div className="menu">
                <a href="#home" className="menu-item">
                  WHO WE ARE
                </a>

                <a href="#home" className="menu-item">
                  WHAT WE DO
                </a>

                <a href="#home" className="menu-item">
                  SECTORS
                </a>

                <a href="#home" className="menu-item">
                  TRANSACTIONS
                </a>

                <a href="#home" id="logo" className="menu-item">
                  SKYLARK
                </a>

                <a href="#home" className="menu-item">
                  OUR PEOPLE
                </a>

                <a href="#home" className="menu-item">
                  GLOBAL REACH
                </a>

                <a href="#home" className="menu-item">
                  NEWSLETTER
                </a>

                <a href="#home" className="menu-item">
                  CONTACT US
                </a>

                {/* <svg className="toggleNav" onClick={toggleModal} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg> */}
              </div>
            </div>
            {/* header middle */}
            <div className="header-middle">
              <div>
                <h4 className="customText-1">About Us</h4>
                <p className="customText-2">
                  Skylark is a dolor sit amet consectetur. Sem at pellentesque
                  in tellus. Eu nibh dolor erat egestas. Malesuada.
                </p>
                <p className="customText-3">
                  Lorem ipsum dolor sit amet consectetur. In enim aliquam
                  porttitor. Condimentum amet consectetur egestas vel libero
                  varius. Feugiat magna dolor odio penatibus consequat est
                  auctor. Ligula purus faucibus integer eget risus. Fermentum
                  aenean gravida netus et quis quis. Elit mattis quisque sed.
                </p>
                <div className="learnMore-area">
                  <div className="yellowButton">
                    <img
                      className="yellow-arrow"
                      src={yellowButton}
                      alt="yellowBtn"
                    ></img>
                  </div>
                  <p className="customText-4">Learn More</p>
                </div>
              </div>

              <div>
                <div className="actionButton">
                  <div className="action-flex">
                    <img className="" src={arrowLeft} alt="right"></img>
                    <img
                      onClick={toggleModal}
                      className="rightArrow"
                      src={arrowRight}
                      alt="left"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="last-container">
              <div>
                <p className="lastText customAbout">About</p>
                <hr className="hrTag"></hr>
              </div>
              <div>
                <p className="lastText2 customAbout">Our Team</p>
                <hr className="hrTag2"></hr>
              </div>
              <div>
                <p className="lastText2 customAbout"> Where we are</p>
                <hr className="hrTag2"></hr>
              </div>
              <div>
                <p className="lastText2 customAbout">Contact us</p>
                <hr className="hrTag2"></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>


      <>
        {modal && (
          <div className="modal">
            <div className="modal-content">
              <div className="logoDiv">
                <h4></h4>
                <h4 className="navLogo">SKYLARK</h4>
                <svg
                  className="close-modal"
                  onClick={toggleModal}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
              <div className="navMenu">
                <div className="navLink">
                  <div className="smallDiv">
                    <div>
                      <div className="navItem">
                        <h4 className="customText5">who we are</h4>
                        <img
                          className="rightArrow2"
                          src={yellowButton}
                          alt="left"
                        ></img>
                      </div>
                      <div className="navItem">
                        <h4 className="customText5">what we do</h4>
                        <img
                          className="rightArrow2"
                          src={yellowButton}
                          alt="left"
                        ></img>
                      </div>
                      <div className="navItem">
                        <h4 className="customText5">sectors</h4>
                        <img
                          className="rightArrow2"
                          src={yellowButton}
                          alt="left"
                        ></img>
                      </div>
                      <div className="navItem">
                        <h4 className="customText5">Transactions</h4>
                        <img
                          className="rightArrow2"
                          src={yellowButton}
                          alt="left"
                        ></img>
                      </div>
                    </div>
                    <div className="line2"></div>
                  </div>
                  <div className="smallDiv">
                    <div>
                   
                      <div className="navItem">
                        <h4 className="customText5">our people</h4>
                        <img
                          className="rightArrow2"
                          src={yellowButton}
                          alt="left"
                        ></img>
                      </div>
                      <div className="navItem">
                        <h4 className="customText5">global reach</h4>
                        <img
                          className="rightArrow2"
                          src={yellowButton}
                          alt="left"
                        ></img>
                      </div>
                      <div className="navItem">
                      <h4 className="customText5">newsletter</h4>
                      <img
                        className="rightArrow2"
                        src={yellowButton}
                        alt="left"
                      ></img>
                    </div>
                    <div className="navItem">
                      <h4 className="customText5">contact us</h4>
                      <img
                        className="rightArrow2"
                        src={yellowButton}
                        alt="left"
                      ></img>
                    </div>
                    </div>
                    <div className="line2"></div>
                  </div>

                  <div>
                
                    <div className="navItem">
                      <h4 className="customText5">careers</h4>
                      <img
                        className="rightArrow2"
                        src={yellowButton}
                        alt="left"
                      ></img>
                    </div>
                    <div className="navItem">
                      <h4 className="customText5">working with us</h4>
                      <img
                        className="rightArrow2"
                        src={yellowButton}
                        alt="left"
                      ></img>
                    </div>
                    <div className="navItem">
                      <h4 className="customText5">privacy</h4>
                      <img
                        className="rightArrow2"
                        src={yellowButton}
                        alt="left"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default Header;
