import styled from 'styled-components';

export const StyledCard = styled.div`
width: 100%;
max-width: 310px;
height: 100%;
border-radius: 6px;
overflow: hidden;
box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
position: relative;
background-color: $co-white;
display: flex;
flex-direction: column;

&.isCover {
  box-shadow: none;
  padding: 100px 20px 40px;
  background: {
    position: center;
    repeat: no-repeat;
    size: cover;
  }
}
`

export const ImageCard = styled.img`
height: 180px;
width: 100%;
object-fit: cover;
display: block;
`

export const ButtonBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0 15px 15px;
margin-top: 20px;
button {
  padding: 17px 0px;
  width: 100%;
  text-align: center;
  margin: 5px 35px;
}
&.isCover {
  button {
    background: transparent;
    margin: 0 35px;
    border: 2px solid white;
    box-sizing: border-box;
    &:hover,
    &:active {
      padding: 16px 0px;
      border-width: 3px;
    }
  }
}
`

export const InfomationBlock = styled.div`
padding: 20px 15px 0;
  &.isCover {
    color: white;
    margin-bottom: 50px;
    line-height: 21px;
  }

`

export const HeaderCard = styled.header`
margin-bottom: 10px;
display: flex;
justify-content: space-between;
align-items: flex-end;

  .stars {
    display: flex;
    margin-bottom: 10px;
  }
  
  .star {
    width: 15px;
    height: 13px;
    & + & {
      margin-left: 5px;
    }
  }
`
export const TitleCard = styled.h3`
font-size: rem(21px);
line-height: 21px;
margin-right: 15px;
color: grey;
  &.isCover {
  height: auto;
  font-size: 40px;
  line-height: 44px;
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
}
`
export const PriceWrapper = styled.div`
flex-shrink: 0;
.offer_price {
    font-style: normal;
    font-weight: normal;
    font-size: rem(10px);
    line-height: 10px;
    text-align: right;
    color: grey;
  }
  
  .price {
    font-style: normal;
    line-height: 22px;
    font-weight: bold;
    color: grey;
  }
`
export const ListFeatures = styled.ul`
width: 100%;
padding: 0;
`

export const ItemFeature = styled.li`
display: flex;
align-items: center;
margin: 0;

  p {
    margin: 0;
    margin-top: 10px;
    
  }

 img {
    width: 15px;
    height: 15px;
    margin-right: 10px;
    flex-shrink: 0;
  }
  
`