import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ia from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header_content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          The first OpenAI for building powerful pages and websites Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Esse doloribus quisquam
          ex fugiat dolorem tempora sed velit aliquid cumque? Cumque dolore quam
          adipisci dignissimos quis optio repudiandae necessitatibus maxime
          ullam.
        </p>
        <div className="gpt3__header_content_input">
          <input type="email" placeholder="Your Email Adress" />
          <button type="button">Get Started!</button>
        </div>
        <div className="gpt3__header_content_people">
          <img src={people} alt="people" />
          <p>
            1600 people requested access to the platform in the last 24hours
          </p>
        </div>
      </div>
      <div className="gpt3__header_img">
        <img src={ia} alt="IA" />
      </div>
    </div>
  );
};
export default Header;
