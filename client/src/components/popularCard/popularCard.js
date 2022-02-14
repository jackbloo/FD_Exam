import React from 'react';
import styled from 'styled-components';


export default function PopularCard({data,number}) {

  return (
        <Card data-testid="popular-card">
            <BottomCard>
                <ContentImage data-testid="popular-image" src={process.env.PUBLIC_URL + `/assets/${number+1}.png`}></ContentImage>
                <NameContainer>
                    <TitleDescription data-testid="popular-title">
                        Embrace the Curl
                    </TitleDescription>
                </NameContainer>
                <BottomContainer>
                    <FollowersContainer>
                    <Box data-testid="popular-user">
                    <Icon className="fa fa-user icon"/> 
                     -
                    </Box>
                    <Box data-testid="popular-list">
                    <Icon className="fa fa-list icon"/> 
                     -
                    </Box>
                    <Box data-testid="popular-comment">
                    <Icon className="fa fa-comment icon"/> 
                    -
                    </Box>
                    </FollowersContainer>
                <ContentDescription data-testid="popular-description">
                       May our curls pop and never stop!
                    </ContentDescription>
                </BottomContainer>

            </BottomCard>
        </Card>
    )
}

const Card = styled.div`
width: 200px;
height: 300px;
margin-right: 40px;
background-color:white;
`

const BottomCard = styled.div`
border: 2px solid #EFEFEF;
width: 100%;
border-radius: 5px;
display:flex;
flex-direction:column;
align-items: center;
padding: 5px;
`

const ContentImage = styled.img`
height: 120px;
width: 120px;
border-radius: 50%;
object-fit:cover ;
margin-top: 10px;
`
const NameContainer = styled.div`
display: flex;
flex-direction: column;
text-align:center;
margin-top: 5px;
`

const TitleDescription = styled.div`
font-weight: bold;
font-size:14px;
`

const ContentDescription = styled.div`
font-size:11px;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical; 
`

const BottomContainer = styled.div`
margin-top: 30px;
margin-bottom:20px;
`

const FollowersContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
align-items:center;
`
const Box = styled.div`
`

const Icon = styled.i`
margin-right: 3px;
`