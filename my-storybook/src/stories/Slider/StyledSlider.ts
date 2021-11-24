import styled from "styled-components";

export const SlideImage = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
`;

export const StyledSlider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DotStyled = styled.span`
cursor: pointer;
height: 15px;
width: 15px;
margin: 0 2px;
background-color: #bbb;
border-radius: 50%;
display: inline-block;
transition: background-color 0.6s ease;

  &.isActive, &:hover {
  background-color: #717171;
  }
 

`