import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./coin.css";
import { trending } from "../config/api";


function YouMayLike() {
  // Add more items as needed

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const [trendingCoins, setTrendingCoins] = useState(null);
  const [allCoins, setAllCoins] = useState([]);
  useEffect(() => {
    const fetchTrendingData = async () => {
      try {
        const response = await axios.get(trending);
        console.log(response);
        setTrendingCoins(response.data);
      } catch (error) {
        console.log("Error fetching trending data:", error);
      }
    };

    fetchTrendingData();
  }, []);
  useEffect(() => {
    if (trendingCoins) {
      setAllCoins(trendingCoins.coins);
    }
  }, [trendingCoins]);
  console.log(allCoins);
  return (
    <>
      <div>
        <h1>You May Like</h1>
      </div>
      {/* <div class="card">
        <div className="coin">
          <img src={bc} style={{ width: "23px" }} />
          <a>btc</a>
        </div>
        <div>
          <h2 className="price">3432</h2>
          <img src={spark} style={{ width: "150px" }}></img>
        </div>
      </div> */}
      <AliceCarousel
        responsive={responsive}
        buttonsDisabled={true}
        disableDotsControls
      >
        {allCoins.map((coin, index) => (
          <div key={coin.item.id} class="card">
            <div className="coin">
              <img src={coin.item.small} style={{ width: "22px" }} />
              <a id="symbol">{coin.item.symbol}</a>
            </div>
            <div>
              {/* <h2 className="price">{coin.item.data.price}</h2> */}
              {coin.item.data.price.length > 10 ? (
                <h2 className="price">$6.50</h2>
              ) : (
                <h2 className="price">{coin.item.data.price}</h2>
              )}
              <img
                src={coin.item.data.sparkline}
                style={{ width: "150px" }}
              ></img>
            </div>
          </div>
        ))}
      </AliceCarousel>
    </>
  );
}

export default YouMayLike;
