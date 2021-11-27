import styled from "styled-components";


export const StyledContainer = styled.div`
position: fixed;
display: flex;
top: 0;
left: 0;
height: 100%;
width: 100%;
overflow-y: auto;
background-color: lightgrey;
`

export const StyledWrapper = styled.div`
width: 450px;
background-color: #efeff5;
height: auto;
`
  
export const StyledButtonWrapper = styled.div`
display: flex;  
padding: 15px; 

`

export const StyledButton = styled.button`
border: none;
width: 30px;
height: 30px;
  
  &.push {
    margin-left: auto;
  }
`

export const StyledNavList = styled.nav`
display: flex;
flex-direction: column;

ul{
  padding-inline-start: 0px;
}
`

export const StyledNavSection = styled.li`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0px 15px;
font-size: rem(21px);
font-weight: bold;
font-family: 'Fredericka the Great', cursive;
`

export const StyledTitle = styled.p`
color: $co-black;

`
  
export const StyledSectionLink = styled.a`
color: blue;
`
  
export const StyledPromoItem = styled.li`
display: flex;
align-items: center;
justify-content: flex-start;
padding: 30px 15px;
background-color: orange;
font-family: 'Fredericka the Great', cursive;
img {
  margin-right: 10px;
  height: 25px;
  width: 25px;
}
`
export const StyledNavItem = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
padding: 30px 15px;
font-family: 'Annie Use Your Telescope', cursive;


img {
  margin-right: 10px;
  height: 25px;
  width: 25px;
}
`

export const StyledNextSection = styled.button`
border: none;
width: 100%;
display: flex;
font-size: rem(21px);
height: 30px;
font-family: 'Annie Use Your Telescope', cursive;
svg {
  margin-left: auto;
  margin-right: 0;
}
`

export const StyledLink = styled.a`
font-size: rem(21px);
color:black;
`




