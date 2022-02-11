import React from 'react';
import {useSelector} from 'react-redux'
import styled from 'styled-components';


export default function TopBrands() {
    const data = useSelector((state) => state.editorChoice)

  return (
<PopularContainer>
    <TopContainer>
    <Title>Top Brands</Title>
    <Description>We all know and love</Description>
    <RightContent>
        <Text>See More</Text>
        <RightArrow className="fa fa-arrow-right icon"></RightArrow>
    </RightContent>
    </TopContainer>
    <BottomContainer>
    {data.length > 0 ? data.map((el,i) => {
    return(
        <BrandBoxContainer key={i}>
            <BrandImage src={process.env.PUBLIC_URL + `/assets/brand-${i+1}.png`}/>
        </BrandBoxContainer>
    )
    }):<></>}
    </BottomContainer>
    <DescriptionContainer>
        <TitleDescription>
            Female Daily - Find everything you want to know about beauty on Female Daily
        </TitleDescription>
        <ContentDescription>
            Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty Tutorials, Discussions, Beauty Workshops, anything! We are here to be your friendly solution to all things beauty, inside and out!
        </ContentDescription>
    </DescriptionContainer>
</PopularContainer>
  );
}


const PopularContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
`


const TopContainer = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
width: 72%;
`
const BottomContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
width: 72%;
margin-top: 20px;
margin-bottom:20px;
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
const BrandBoxContainer = styled.div`
width:300px;
height:100px;
display:flex;
align-items:center;
justify-content:center;
`

const BrandImage = styled.img`
width:100px;
height:100px;
object-fit:contain;
`
const DescriptionContainer = styled.div`
width: 72%;
display:flex;
flex-direction:column;
align-items:flex-start;
margin-top: 40px;

`

const TitleDescription = styled.div`
font-weight: bold;
font-size:14px;
`

const ContentDescription = styled.div`
font-size:14px;
text-align:left;
margin-top: 10px;
`
