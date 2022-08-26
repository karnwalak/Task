import React from "react";
import one from "./1.jpg";
import two from "./2.jpg";
import three from "./3.jpg";
import four from "./4.jpg";
import five from "./5.jpg";
import six from "./6.jpg";
const Slider = () => {
  return (
    <div>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src={one} style={{ width: "100%" }} />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src={two} style={{ width: "100%" }} />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src={three} style={{ width: "100%" }} />
          <div className="text">Caption Three</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src={four} style={{ width: "100%" }} />
          <div className="text">Caption Three</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src={five} style={{ width: "100%" }} />
          <div className="text">Caption Three</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src={six} style={{ width: "100%" }} />
          <div className="text">Caption Three</div>
        </div>

      </div>
      <br />

     
    </div>
  );
};

export default Slider;
