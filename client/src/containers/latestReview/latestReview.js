import React from 'react';
import {useSelector} from 'react-redux'
import styled from 'styled-components';
import ReviewCards from '../../components/reviewCards/reviewCards';


export default function LatestReview() {
    const data = useSelector((state) => state.latestReview)
    const dots = ['','',''] 
  return (
    <Container>  
    <ReviewContainer>
    <TopContainer>
    <Title>Latest Reviews</Title>
    <Description>So you can make better purchase decision</Description>
    <RightContent>
        <Text>See More</Text>
        <RightArrow className="fa fa-arrow-right icon"></RightArrow>
    </RightContent>
    </TopContainer>
    <BottomContainer>
    {data.length > 0 ? data.slice(0,2).map((el,i) => {
    return(
        <ReviewCards data={el} key={i}/>
    )
    })
    
    :<></>}
    </BottomContainer>
    <Pagination>
    <RightArrow className="fa fa-arrow-left icon"/>
    {dots.map((el,i) => <Dots active={i == 0} key={i} className="fa fa-circle icon"/> )}
    <RightArrow className="fa fa-arrow-right icon"/>
    </Pagination>
</ReviewContainer>
<BillboardContainer>
    <BillboardContent>
        <div>MR2</div>
        300X250
    </BillboardContent>
</BillboardContainer>
</Container> 

  );
}

const Container = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width: 95%;
`
const ReviewContainer = styled.div`
width:51%;
display:flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
`


const TopContainer = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
width: 90%;
`
const BottomContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
width: 90%;
margin-top: 20px;
flex-wrap: wrap;

`

const Title = styled.div`
font-weight: bold;
`

const Description = styled.div`
color:#CACACA;

`

const RightContent = styled.div`
display:flex;
justify-content: flex-end;
align-items:center;
width:85%;
`
const Text = styled.div`
color:#DB284E;
font-weight:bold;
margin-right: 20px;
`

const RightArrow = styled.i`
color:#DB284E;
height: 12px;
width: 12px;
margin-right: 10px;
`
const Pagination = styled.div`
width: 100%;
display:flex;
justify-content:center;
align-items:center;
`

const BillboardContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
font-size: 20px;
color:#5A5A5A;
`

const BillboardContent = styled.div`
width: 300px;
height: 250px;
display:flex;
flex-direction:column;
justify-content:center;
background-color:#D8D8D8;
border: 1px solid #9D9D9D;
`

const Dots = styled.i`
height: 12px;
width: 12px;
margin-right: 10px;
color:#DB284E;
opacity: ${props => props.active ? 1 : 0.3}
`