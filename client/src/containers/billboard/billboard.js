import React from 'react';
import styled from 'styled-components'


export default function Billboard({internal}) {

  return (
    <BillboardContainer >
        {internal ?<></>: <TopFrame >
            Top Frame 970x50
        </TopFrame>}

        <BillboardContent >
           <div>{`${internal ? 'Horizontal': 'Billboard'}  970x250` }</div>
           {internal ? '(Internal campaign only)': ''} 
        </BillboardContent>
    </BillboardContainer>
  );
}

const BillboardContainer = styled.div`
width: 100%;
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
font-size: 20px;
color:#5A5A5A;
margin-top: 10px;
`
const TopFrame = styled.div`
width: 970px;
height: 50px;
display:flex;
flex-direction:column;
justify-content:center;
background-color:#D8D8D8;
border: 1px solid #9D9D9D;
`
const BillboardContent = styled.div`
margin-top: 20px;
width: 970px;
height: 250px;
display:flex;
flex-direction:column;
justify-content:center;
background-color:#D8D8D8;
border: 1px solid #9D9D9D;
`
