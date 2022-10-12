import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whgpt3">
      <div className="gpt3__whatgpt3_feature">
        <Feature
          title="What is GPT3"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ornare risus, at malesuada arcu. Morbi mollis lacinia urna ac vestibulum. Etiam non facilisis erat. Duis vitae tellus tempor, porta ante eget, facilisis quam. Vivamus porta pretium turpis, ac vehicula massa ullamcorper et. Nunc laoreet ac diam malesuada fringilla. Nam tempor libero a lectus tristique ultricies. Sed vel dolor non nibh cursus facilisis eget nec ex. Nam sit amet lacus a neque tincidunt aliquet imperdiet sed sem."
        />
      </div>
      <div className="gpt3__whatgpt3_heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3_container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ornare risus, at malesuada arcu. Morbi mollis lacinia urna ac vestibulum. Etiam non facilisis erat. Duis vitae tellus tempor, porta ante eget, facilisis quam. "
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ornare risus, at malesuada arcu. Morbi mollis lacinia urna ac vestibulum. Etiam non facilisis erat. Duis vitae tellus tempor, porta ante eget, facilisis quam. "
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ornare risus, at malesuada arcu. Morbi mollis lacinia urna ac vestibulum. Etiam non facilisis erat. Duis vitae tellus tempor, porta ante eget, facilisis quam. "
        />
      </div>
    </div>
  );
};
export default WhatGPT3;
