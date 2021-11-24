import React, { useState } from "react";
import {
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { CardType } from "../../data/card";
import CardComponent from "../Card/Card";
import { StyledCarousel, StyledContainer, StyledSlide, Wrapper } from "./StyledCarousel";

interface CarouselProps {
  cards: CardType[]
}



const Carousel = ({ cards  }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const length = cards.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <StyledCarousel>
      <FaChevronLeft
        className="left-arrow"
        onClick={prevSlide}
      />
   
      <StyledContainer>
      {cards.map((card, index) => {
            let position = index > current ? "nextSlide" 
            : index === current ? "activeSlide" : "prevSlide";
          return (
          <StyledSlide >
            <Wrapper className={`${position}`}>
             <CardComponent cardInfo={card} />
            </Wrapper>
          </StyledSlide>
          )
        })}
       </StyledContainer>
    
       <FaChevronRight
        className="right-arrow"
        onClick={nextSlide}
      />
    </StyledCarousel>
  );
};

export default Carousel;