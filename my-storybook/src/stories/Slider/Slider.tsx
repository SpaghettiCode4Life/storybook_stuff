import React, { useState } from "react";
import { DotStyled, SlideImage, StyledSlider } from "./StyledSlider";

import {
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { ImageGallery } from "../../data/gallery";

interface SliderProps {
  slides: ImageGallery[]
  pagination: boolean
}

interface DotProps {
  index: number
  setSlideIndex: React.Dispatch<React.SetStateAction<number>>
  slideIndex: number
}

const Dot = ({index, setSlideIndex, slideIndex}: DotProps) => <DotStyled key={index} className={index === slideIndex ? "isActive": ""} onClick={() => setSlideIndex(index)}/>

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
      {pagination && slides.map((slide, index) => <Dot index={index} setSlideIndex={setCurrent} slideIndex={current}/>)}
      
      </div>
       <FaChevronRight
        className="right-arrow"
        onClick={nextSlide}
      />
    </StyledSlider>
  );
};

export default Slider;