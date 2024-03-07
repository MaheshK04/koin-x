import React from "react";
import img from "../../assets/1.jpeg";
import "./Team.css";

function Team() {
  return (
    <div>
      <h2>Team</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
        recusandae facere nam sit harum repellat, minima accusantium architecto.
        Quas qui doloribus consequatur architecto distinctio. Quidem quasi
        aliquid architecto quae quo.
      </p>
      <div className="container">
        <div className="image-container">
          <img src={img} alt="Your Image" />
          <a>John K</a>
          <br />
          <a>SDE-1</a>
        </div>
        <div className="text-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            itaque nemo magni sint, dolore ab in, possimus adipisci iusto
            dignissimos vitae expedita repudiandae hic saepe distinctio at esse
            consectetur eveniet?
          </p>
        </div>
      </div>
      <div className="container">
        <div className="image-container">
          <img src={img} alt="Your Image" />
          <a>John K</a>
          <br />
          <a>SDE-1</a>
        </div>
        <div className="text-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            itaque nemo magni sint, dolore ab in, possimus adipisci iusto
            dignissimos vitae expedita repudiandae hic saepe distinctio at esse
            consectetur eveniet?
          </p>
        </div>
      </div>
      <div className="container">
        <div className="image-container">
          <img src={img} alt="Your Image" />
          <a>John K</a>
          <br />
          <a>SDE-1</a>
        </div>
        <div className="text-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            itaque nemo magni sint, dolore ab in, possimus adipisci iusto
            dignissimos vitae expedita repudiandae hic saepe distinctio at esse
            consectetur eveniet?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
