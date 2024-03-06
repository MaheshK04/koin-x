import React from "react";
import dp from "../assets/image.png";
function Component1() {
  return (
    <div>
      <p>
        Get Started with KoinX <br></br> for FREE
      </p>
      <p>
        with our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <img src={dp} alt="" style={{ width: "300px", height: "250px" }} />
      <button>Get Started for FREE</button>
    </div>
  );
}

export default Component1;
