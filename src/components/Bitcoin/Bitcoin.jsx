import React, { useEffect, useState } from "react";
import bc from "../../assets/Bitcoin.webp";
import { price } from "../config/api";
import axios from "axios";
import TradingViewWidget from "../TradingViewWidget";


function Bitcoin() {
  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    axios
      .get(price)
      .then((response) => {
        //console.log(response);
        setPriceData(response.data);
      })
      .catch((error) => console.log("Error"));
  }, []);

  if (priceData === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <img src={bc} style={{ width: "30px" }}></img>
      <h2>Bitcoin</h2> */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={bc} style={{ width: "30px", marginRight: "10px" }} alt="" />
        <h2 style={{ marginRight: "10px" }}>Bitcoin</h2>
        <h3 style={{ marginRight: "10px", color: "grey" }}>BTC</h3>
        <button
          style={{
            backgroundColor: "#768396",
            color: "white",
            padding: "10px 10px",
            borderRadius: "10px",
            marginLeft: "20px",
            fontSize: "17px",
          }}
        >
          Rank #1
        </button>
      </div>
      <h1>${priceData.bitcoin.usd}</h1>
      <h3>₹{priceData.bitcoin.inr}</h3>
      <TradingViewWidget />
    </div>
  );
}

export default Bitcoin;
