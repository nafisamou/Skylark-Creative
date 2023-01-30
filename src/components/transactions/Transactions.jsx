import React from "react";
import img1 from "../../assets/Group 3 1.png";
import img2 from "../../assets/Group 5 1.png";
import img3 from "../../assets/Group 6 1.png";
import "./transactions.css";
const Transactions = () => {
  return (
    <div className="parent">
      <div className="first-child">
        <h3>Transactions</h3>
        <button><span className="btn-text">VIEW ALL TRANSACTIONS</span></button>
      </div>
      <div className="transaction">
        <div className="card">
          <img src={img1} alt="" />
        </div>
        <div className="card">
          <img src={img2} alt="" />
        </div>
        <div className="card">
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
