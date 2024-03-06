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
  console.log(trendingCoins);
  console.log(topThreeCoins);
  // return <div>{trendingCoins.slice(0,3).map((coin, index) => (
  //   <div key={index}>
  //     <h2>{coin.name}</h2>
  //   </div>
  // ))}</div>;
  // return (
  //   <div>
  //     <h2>Trending Coins</h2>
  //     {trendingCoins ? (
  //       <div>
  //         {trendingCoins.slice(0, 3).map((coin) => (
  //           <div key={coin.id}>
  //             <h3>{coin.name}</h3>
  //             <p>Market Cap: {coin.data.market_cap}</p>
  //             {/* Add more details as needed */}
  //           </div>
  //         ))}
  //       </div>
  //     ) : (
  //       <p>Loading...</p>
  //     )}
  //   </div>
  // );
  return (
    <div>
      <h2>Trending Coins(24h)</h2>
      {topThreeCoins.map((coin, index) => (
        <div key={coin.item.id} className="trending-item">
          <img src={coin.item.small} alt={coin.item.name} />
          <div>
            <p>
              {coin.item.name}({coin.item.symbol})
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Trending;
