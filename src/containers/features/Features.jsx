import React from "react";
import "./features.css";
import {Feature } from '../../components';

const featuresData = [
  {
    title: "Improving the way you do things",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec mollis sapien, quis vulputate urna. Proin lacus orci, fringilla ut egestas quis, varius non urna. Aliquam consectetur posuere velit, sed porttitor neque posuere vitae. Nulla facilisi.",
  },
  {
    title: "Become the number one",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec mollis sapien, quis vulputate urna. Proin lacus orci, fringilla ut egestas quis, varius non urna. Aliquam consectetur posuere velit, sed porttitor neque posuere vitae. Nulla facilisi.",
  },
  {
    title: "Communicate with everyone easily",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec mollis sapien, quis vulputate urna. Proin lacus orci, fringilla ut egestas quis, varius non urna. Aliquam consectetur posuere velit, sed porttitor neque posuere vitae. Nulla facilisi.",
  },
  {
    title: "The best response time you could have",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec mollis sapien, quis vulputate urna. Proin lacus orci, fringilla ut egestas quis, varius non urna. Aliquam consectetur posuere velit, sed porttitor neque posuere vitae. Nulla facilisi.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features_heading">
        <h1 className="gradient__text">
          Your future is now and you just need to realize it. Step into the
          future today & make it happen.
        </h1>
        <p>Request early access to get started!</p>
      </div>
      <div className="gpt3__features_container">
        {featuresData.map((item, index)=>
          <Feature title= {item.title} text={item.text} ley={item.title + index}/>
        )}
      </div>
    </div>
  );
};
export default Features;
