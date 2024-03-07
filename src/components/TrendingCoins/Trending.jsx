import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { trending } from "../config/api";
import "./Trending.css";

function Trending() {
  const [trendingCoins, setTrendingCoins] = useState(null);
  const [topThreeCoins, setTopThreeCoins] = useState([]);
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
      setTopThreeCoins(trendingCoins.coins.slice(0, 3));
    }
  }, [trendingCoins]);
  // console.log(trendingCoins);
  // console.log(topThreeCoins);
  return (
    <div>
      <h2>Trending Coins(24h)</h2>
      {topThreeCoins.map((coin, index) => (
        <div key={coin.item.id} className="trending-item">
          <img
            src={coin.item.small}
            alt={coin.item.name}
            style={{ marginTop: "10px" }}
          />
          <div>
            <p style={{ marginBottom: "5px" }}>
              {coin.item.name}({coin.item.symbol})
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Trending;
