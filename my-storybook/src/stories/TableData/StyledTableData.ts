import styled from 'styled-components';

export const StyledTableData = styled.section`
padding: 20px;
max-width: 1440px;

.wrapper {
    display: flex;
    flex-direction: column;
    background-color: $co-white;
    border-radius: 20px;
}
`
export const StyledTableVideo = styled.div`
    margin-top: 60px;
    display: flex;
    align-items: center;
`
export const StyledTitle = styled.h1`
text-align: center;
font-size: 42px;
line-height: 48px;
font-weight: bold;
color: #333333
`

export const StyledDescription = styled.p`
margin-bottom: 20px;
font-size: 14px;
line-height: 26px;
font-weight: 400;
color: #333333
`

export const StyledVideo = styled.img`
display: block;
width: 360px;
height: 180px;
border-radius: 6px;
object-fit: cover;
flex-shrink: 0;
`

export const StyledTable = styled.table`
margin: auto;
margin-left: 52px;
`

export const StyledTableTitleRow = styled.td`
text-align: center;
padding: 10px 0px 10px 10px;
vertical-align: middle;
font-size: 14px;
line-height: 14px;
font-weight: bold;
color: #333333;

&.lastCol {
    display: table-cell;
}
`

export const StyledTableFirstRow = styled.tr`
border-top: 1px solid #333333;
`

export const StyledTableFirstColumn = styled.td`
text-align: left;
padding: 10px 10px 10px 0px;
font-size: 14px;
line-height: 14px;
font-weight: bold;
color: #333333;

.icon {
margin-right: 7px;
width: 15px;
display: inline-block;
vertical-align: middle;
}

.name {
display: inline-block;
vertical-align: middle;
}

&.lastCol {
display: table-cell;
}
`
export const StyledTableSecondColumn = styled.td`
text-align: center;
padding: 10px 0px 10px 10px;
vertical-align: middle;
font-size: 14px;
line-height: 14px;
font-weight: bold;
color: #333333
`

export const StyledTableThirdColumn = styled.td`
text-align: center;
vertical-align: middle;
font-size: 14px;
line-height: 14px;
font-weight: bold;
color: #333333
`