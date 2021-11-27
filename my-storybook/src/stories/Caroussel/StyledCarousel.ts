import styled from "styled-components";


export const StyledCarousel = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
`

export const StyledContainer = styled.div`
display: flex;
width: 50%;
height: 350px;

`

export const StyledSlide = styled.div`
position: relative;
`
export const Wrapper = styled.div`
position: absolute;

&.prevSlide{
    top: 20px;
    z-index: 1;
    opacity: 0.2;
 
  }
  
  &.activeSlide {
    transform: translateX(+50%);
    z-index: 2;
  }

  &.notActiveSlide {
   display: none;
  }
  
  
  &.nextSlide {
    top: 20px;
    transform: translateX(+100%);
    z-index: 1;
    opacity: 0.2;
  
  }

`