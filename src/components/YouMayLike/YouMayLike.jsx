import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import bc from "../../assets/Bitcoin.webp";
import "./coin.css";

function YouMayLike() {
  // Add more items as needed
  return (
    <>
      <div>
        <h2>You May Like</h2>
      </div>
      <div class="card">
        <div className="coin">
          <img src={bc} style={{ width: "30px" }} />
          <h3>bitcoin</h3>
        </div>
        <div>
          <h2 className="price">343242</h2>
          <img src={bc} style={{ width: "25px" }}></img>
        </div>
      </div>
    </>
  );
}

export default YouMayLike;
