import styled from 'styled-components';

export const StyledNavBar = styled.nav`
 display: flex;
 position: relative;
 height: 60px;
 background-color: white;
 z-index: 1;
 width: 100%;
 box-shadow: inset 0px -5px 10px -5px rgba(152, 155, 155, 0.77);
`

export const SectionList = styled.ul`
width: 80%;
display: flex;
justify-content: space-between;
align-items: center;


.container {
    display:none
};
`

export const LogoItem = styled.li`
display: flex;
align-items: center;
border-bottom: 4px solid transparent;
margin-bottom: 0;

.logo {
  height: 40px;
  width: 40px;
}
`


export const SectionItem = styled.li`
display: flex;
align-items: center;
border-bottom: 4px solid transparent;
margin-bottom: 0;

  .sectionTitle {
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 18px;
    line-height: 18px;
    font-family: 'Fredericka the Great', cursive;
    color: black;
  }
  .sectionIcon {
    margin-left: 5px;
    color: grey;
  }
  &:hover {
      border-bottom: 4px solid black;
      padding: 18px 0;
      cursor: pointer;
      
      .sectionIcon {
          -moz-transform: rotate(180deg);
          -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
      }
      
      .container {
        display: block;
        position: absolute;
        width: 94%;
        left: 3%;
        background-color: white;
        border: 1px solid lightgrey;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        overflow: hidden;
        top:  60px;
      }
      
  }
`

export const Board = styled.div`
    display: flex;
    justify-content: space-between;

`

export const Block = styled.ul`
    width: 33.3%;
    padding-left: 0;
    border-right: 2px solid black;
`


export const BlockItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-radius: 4px;
  padding: 0px 20px;

  .sectionText {
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 22px;
    font-weight: 700;
    line-height: 18px;
    font-family: 'Annie Use Your Telescope', cursive;
    color: black;
  }

  &:hover {
    background-color: black;
    .sectionText {
      color: white;
    }

    .blockIcon {
      color: white
    }

  }
`



export const BannerItem = styled.li`
    position: relative;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 80%;
    padding-left: 40px;
    margin-top: 40px;
   margin-bottom: none;    
`
export const BannerImg = styled.div`
  border-radius: 8px;
  width: 100%;
  padding-top: 90%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    content: " ";
    border-radius: 8px;
  }
`
export const BannerText = styled.div`
  position: absolute;
  width: 90%;
  padding-left: 5px;
  left: 15%;
  top: 40%;
  width: 100%;
  text-align: left;

  a {
    font-size: 36px;
    line-height: 40px;
    font-weight: 900;
     color: white;
     margin-bottom: 10px;
  }
`