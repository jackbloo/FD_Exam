import React from 'react';
import {useSelector} from 'react-redux'
import styled from 'styled-components';
import ArticlesCard from '../../components/articlesCard/articlesCard';


export default function LatestArticles() {
    const data = useSelector((state) => state.latestArticles)

  return (

<ArticlesContainer>
    <TopContainer>
    <Title>Latest Articles</Title>
    <Description>So you can make better purchase decision</Description>
    <RightContent>
        <Text>See More</Text>
        <RightArrow className="fa fa-arrow-right icon"></RightArrow>
    </RightContent>
    </TopContainer>
    <BottomContainer>
    {data.length > 0 ? data.map((el,i) => {
    return(
        <ArticlesCard data={el} key={i}/>
    )
    }):<></>}
    </BottomContainer>
</ArticlesContainer>

  );
}


const ArticlesContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
`


const TopContainer = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
width: 70%;
`
const BottomContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
width: 70%;
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
width:100%;
`
const Text = styled.div`
color:#DB284E;
font-weight:bold;
margin-right: 20px;
`

const RightArrow = styled.i`
color:#DB284E;
margin-right: 20px;
`

