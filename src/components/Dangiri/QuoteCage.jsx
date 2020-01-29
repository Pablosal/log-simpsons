import React from "react";
import "./Think.css";
const QuoteCage = ({ image, quote, char }) => {
  return (
    <div className="quote">
      <div className="classyCage">
        <img src={image} alt="" />
      </div>
      <div className="more-classyCage">
        <h1>{quote}</h1>
        <small>{char}</small>
      </div>
    </div>
  );
};

export default QuoteCage;
