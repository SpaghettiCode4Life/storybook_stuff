import styled from 'styled-components';

export const StyledNavBar = styled.nav`
 display: flex;
 position: relative;
 align-items: center;
 justify-content: space-between;
 height: 60px;
 background-color: white;
 z-index: 1;
 padding: 0% 3%;
 border-bottom: 1px solid lightgrey;
`

export const SectionList = styled.ul`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;

.container {
    display:none
};
`


export const SectionLink = styled.a`

  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 18px;
  line-height: 18px;
  font-weight: 800;
    color: blue;

  &:hover  {
    color: orangered;
    text-decoration: none;
  };
`

export const SectionText = styled.p`

  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 18px;
  line-height: 18px;
  font-weight: 800;
    color: blue;

  &:hover  {
    color: orangered;
    text-decoration: none;
  };
`

export const SectionItem = styled.li`
    display: flex;
    justify-content: center;
    color: rgb(105, 85, 85);
    border-bottom: 4px solid transparent;
    align-items: center;
    margin-bottom: 0;

    &:hover {
        border-bottom: 4px solid orangered;
        padding: 18px 0;
        cursor: pointer;
        color: orangered;

        .sectionIcon {
            -moz-transform: rotate(180deg);
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
            fill: orangered;
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
    border-right: 1px solid lightgrey;
`


export const BlockItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid lightgrey;
  height: 63px;

  &:hover { 
    ${SectionLink}, ${SectionText} {
      color: orangered;
      text-decoration: none;
    }
    .submenuIcon > path{
      fill: orangered;
    }
  }
`



export const BannerItem = styled.li`
    position: relative;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
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
  left: 0%;
  top: 40%;
  width: 100%;
  text-align: left;

  a {
    font-size: 18px;
    line-height: 40px;
    font-weight: 900;
     color: white;
     margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    line-height: 16px;
    font-weight: 800;
      color: white;
  
  }  
`