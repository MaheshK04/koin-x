import React from "react";
import "./About.css";
import img from "../../assets/2.jpeg";

function About() {
  return (
    <div className="body">
      <h2> About Bitcoin</h2>
      <p className="underline">
        <h3>What is Bitcoin</h3>
        Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to act as
        money and a form of payment outside the control of any one person,
        group, or entity, thus removing the need for third-party involvement in
        financial transactions.
      </p>

      <p>
        <h3>Heading bitcoin</h3>
        It is rewarded to blockchain miners for verifying transactions and can
        be purchased on several exchanges. Bitcoin was introduced to the public
        in 2009 by an anonymous developer or group of developers using the name
        Satoshi Nakamoto.
      </p>
      <p>
        It has since become the most well-known cryptocurrency in the world. Its
        popularity has inspired the development of many other cryptocurrencies.
        Learn more about the cryptocurrency that started it all—the history
        behind it, how it works, how to get it, and what it can be used for.
      </p>
      <p className="underline">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum et est
        non repellendus ipsa recusandae ea sed dolor consectetur accusantium
        minima laboriosam, aspernatur quidem sequi facilis. Tempore, ratione?
        Eaque, provident?
      </p>
      <h3>ALREADY holding bitcoin</h3>
      <div className="total">
        <div className="firstBox">
          <div className="image-container">
            <img src={img} alt="Your Image" />
          </div>
          <div className="text-container">
            <p>Calculate your Profits</p>
            <button>CLICK ME</button>
          </div>
        </div>

        <div className="secondBox">
          <div className="image-container">
            <img src={img} alt="Your Image" />
          </div>
          <div className="text-container">
            <p>Calculate your Liability</p>
            <button>CLICK ME</button>
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nisi
        doloremque voluptas tempora dolor perspiciatis modi dicta deleniti quas
        laudantium! Iusto ea saepe quas reprehenderit voluptates officiis sunt
        voluptate odio?
      </p>
    </div>
  );
}

export default About;
