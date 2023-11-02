import React, { useEffect, useState } from "react";
import {sliderData}  from "./Slider-data";
import {useNavigate}  from "react-router-dom";
import "./Slider.scss";
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();
    const slideLength = sliderData.length;
    const autoScroll = true;
    let slideInterval;
    const intervalTime = 5000;
  
  
    const nextSlide = () => {  
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1 )
       
    };

    const prevSlide = () => {
     setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide -1);
    };
  useEffect(() => {
    setCurrentSlide(0)
  },[])

  useEffect(() => {
if(autoScroll) {
  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  }
  auto();
}
return () => clearInterval(slideInterval)
  }, [currentSlide, intervalTime, autoScroll])

   
  return (
    <div className="slider">
      <i
        className="arrow prev fa-solid fa-arrow-left "
        style={{
          fontSize: "2.5rem",
      
        }}
      onClick={prevSlide}></i>

      <i
        className="arrow next fa-solid fa-arrow-right "
        style={{
          fontSize: "2.5rem",
       
        }}
         onClick={nextSlide}
      ></i>
      {sliderData.map((slide, index) => {
        const {image, heading, desc} = slide;

        return (
            <div key={index} className={index === currentSlide ? "slide current" : "slide"}>
                {index === currentSlide && (
                    <>
                    <img src={image} alt="slide" />
                    <div className="content">
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        <h2>{heading}</h2>
                        <p>{desc}</p>
                        <hr/>
                        <button className="--btn --btn-primary" onClick={() => navigate("/shop")}>Shop Now</button>
                    </div>
                    </>
                )}
            </div>
        )
      })}
    </div>

  );
};

export default Slider;
