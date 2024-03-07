import React from "react";
import "./Home.css";
import About from "./components/About/About";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import Team from "./components/Team/Team";
import YouMayLike from "./components/YouMayLike/YouMayLike";
import Bitcoin from "./components/Bitcoin/Bitcoin";
import Performance from "./components/Performance/Performance";
import Sentiment from "./components/Sentiment/Sentiment";
import Trending from "./components/TrendingCoins/Trending";
import GetStarted from "./components/GetStarted/GetStarted";
import Navbar from "./components/Navbar/Navbar";



function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <p className="bitcoin">
        Cryptocurrencies {">>"} <a>Bitcoin</a>
      </p>
      <div className="page">
        <div className="container1">
          <div className="box">
            <Bitcoin />
          </div>
          <div className="box">
            <Performance />
          </div>
          <div className="box">
            <Sentiment />
          </div>
          <div className="box">
            <About />
          </div>
          <div className="box">
            <Tokenomics />
          </div>
          <div className="box">
            <Team />
          </div>
        </div>
        <div className="container2">
          <div className="sideBox1">
            <GetStarted />
          </div>
          <div className="sideBox">
            <Trending />
          </div>
        </div>
      </div>
      <div className="last">
        <YouMayLike />
      </div>
    </>
  );
}

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: "0",
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "red",
};
const boxStyle = {
  width: "60%",
  margin: "20px 0",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  backgroundColor: "white",
};

export default Home;
