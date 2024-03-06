import React from "react";
import dp from "../../assets/image.png";
import "./GetStarted.css";
function GetStarted() {
  return (
    <div>
      <p className="head">
        Get Started with KoinX <br></br> for FREE
      </p>
      <p className="para">
        with our range of features that you can equip for
        <br />
        free, KoinX allows you to be more educated and aware of your tax
        reports.
      </p>
      <img src={dp} alt="" style={{ width: "300px", height: "250px" }} />
      <div style={{ textAlign: "center" }}>
        <button className="btn">
          <p>Get Started for FREE</p>
        </button>
      </div>
    </div>
  );
}

export default GetStarted;
