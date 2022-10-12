import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility_img">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility_content">
        <h4>Request Early access to get started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond our imagination! Again!
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          nec mollis sapien, quis vulputate urna. Proin lacus orci, fringilla ut
          egestas quis, varius non urna. Aliquam consectetur posuere velit, sed
          porttitor neque posuere vitae. Nulla facilisi. In faucibus, eros ac
          tincidunt pellentesque, neque neque bibendum ligula, quis auctor
          sapien quam ut nunc.
        </p>
        <h4>Request early access to get started</h4>
      </div>
    </div>
  );
};
export default Possibility;
