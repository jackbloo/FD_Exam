import React from 'react';
import styled from 'styled-components';


export default function ArticlesCard({data}) {
  return (
        <Card>
                <ContentImage src={data.image}></ContentImage>
                <DescriptionContainer>
                    <TitleDescription>
                        {data.title}
                    </TitleDescription>
                    <ContentDescription>
                    <Text username={true}>{data.author.charAt(0).toUpperCase() + data.author.slice(1)} </Text> 
                    <Text>|</Text> 
                    <Text>{data.published_at}</Text> 
                    </ContentDescription>
                </DescriptionContainer>
        </Card>
    )
}

const Card = styled.div`
width: 315px;
height: 300px;
margin-right: 15px;
`


const ContentImage = styled.img`
height: 150px;
width: 315px;
border-radius: 10px;
object-fit:cover ;
margin-top: 10px;
`

const DescriptionContainer = styled.div`
display: flex;
flex-direction: column;
text-align:left;
margin-left: 15px;
`

const TitleDescription = styled.div`
font-weight: bold;
font-size:17px;
`

const ContentDescription = styled.div`
font-size:15px;
width: 90%;
display:flex;

`

const Text = styled.div`
color:${props => props.username ? '#828282' : '#AFAFAF'};
font-weight:${props => props.username ? 'bold' : 'normal'};
margin-right: 5px;
`