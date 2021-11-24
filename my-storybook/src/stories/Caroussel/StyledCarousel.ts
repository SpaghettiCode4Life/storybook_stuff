import styled from "styled-components";


export const StyledCarousel = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-around;
`

export const StyledContainer = styled.div`
display: flex

`

export const StyledSlide = styled.div`
position: relative;
display: flex
`
export const Wrapper = styled.div`
position: absolute;

&.prevSlide{
    left: calc(0% + 2rem);
    z-index: 1;
    opacity: 0.2;
 
  }
  
  &.activeSlide {
  
    transform: translateX(-50%);
    z-index: 2;
  }
  
  &.nextSlide {
    left: 100%;
    transform: translateX(calc(-100% - 2rem));
    z-index: 1;
    opacity: 0.2;
  
  }

`