import React from 'react';
import {useSelector} from 'react-redux'
import styled from 'styled-components';
import PopularCard from '../../components/popularCard/popularCard';


export default function PopularGroups() {
    const data = useSelector((state) => state.editorChoice)
  return (
    <Container>
    <PopularContainer>
    <TopContainer>
    <Title>Popular Groups</Title>
    <Description>Where the beauty TALK are</Description>
    <RightContent>
        <Text>See More</Text>
        <RightArrow className="fa fa-arrow-right icon"></RightArrow>
    </RightContent>
    </TopContainer>
    <BottomContainer>
    {data.length > 0 ? data.map((el,i) => {
    return(
        <PopularCard data={el} key={i} number={i}/>
    )
    })
    
    :<></>}
    </BottomContainer>
</PopularContainer>
</Container>

  );
}
const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width: 100%;
margin-top: 40px;
`
const PopularContainer = styled.div`
width:78%;
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
width:96%;
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
