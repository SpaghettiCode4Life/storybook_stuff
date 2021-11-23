import React, { useState } from "react";
import { Dot, SlideImage, StyledSlider } from "./StyledSlider";

import {
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { ImageGallery } from "../../data/gallery";

interface SliderProps {
    slides: ImageGallery[]
    pagination: boolean
}

const Slider = ({ slides, pagination }: SliderProps) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <StyledSlider>
      <FaChevronLeft
        className="left-arrow"
        onClick={prevSlide}
      />
      <div>
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <SlideImage src={slide.url} alt={slide.alt} />
            )}
          </div>
        );
      })}
      {pagination && slides.map((slide, index) => {
        return (
          <Dot key={index} onClick={() => setCurrent(index)}/>
        );
      })}
      
      </div>
       <FaChevronRight
        className="right-arrow"
        onClick={nextSlide}
      />
    </StyledSlider>
  );
};

export default Slider;