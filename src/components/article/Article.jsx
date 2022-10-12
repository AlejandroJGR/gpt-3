import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt3__blog_container_article">
      <div className="gpt3__blog_container_article_img">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="gpt3__blog_container_article_content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};
export default Article;
