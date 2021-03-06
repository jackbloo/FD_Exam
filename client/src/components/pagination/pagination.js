import React from 'react';
import styled from 'styled-components';

export default function Pagination (){
    const dots = ['','',''] 
    return(
        <PaginationContainer data-testid="pagination-container">
        <RightArrow data-testid="pagination-right-arrow" className="fa fa-arrow-left icon"/>
        {dots.map((el,i) => <Dots active={i === 0}  data-testid={`pagination-dots-${i}`} key={i} className="fa fa-circle icon"/> )}
        <RightArrow data-testid="pagination-left-arrow" className="fa fa-arrow-right icon"/>
        </PaginationContainer>
    )



}

const RightArrow = styled.i`
color:#DB284E;
height: 12px;
width: 12px;
margin-right: 10px;
`
const PaginationContainer = styled.div`
width: 100%;
display:flex;
justify-content:center;
align-items:center;
`
const Dots = styled.i`
height: 12px;
width: 12px;
margin-right: 10px;
color:#DB284E;
opacity: ${props => props.active ? 1 : 0.3}
`