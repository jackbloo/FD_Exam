import React from 'react';
import styled from 'styled-components';


export default function ReviewCards({data, number}) {
   const stars = ['','','','',''] 
   const rating = Math.floor(data.star) - 1
  return (
        <Card data-testid="review-card">
            <TopCard>
                <TopWrapper>
                <ContentImage data-testid="review-image" src={data.product.image}></ContentImage>
                <DescriptionContainer>
                    <TitleDescription data-testid="review-name">
                        {data.product.name}
                    </TitleDescription>
                    <ContentDescription data-testid="review-description-product">
                        {data.product.desc}
                    </ContentDescription>
                </DescriptionContainer>
                </TopWrapper>
                <RatingContainer>
                <RightRatingContainer>
                    <StarsContainer>
                    {stars.map((el,i) => <Star key={i} active={i <=rating} className="fa fa-star icon"/> )}
                    </StarsContainer>
                </RightRatingContainer>
                </RatingContainer>
                <>
                    <Comments data-testid="review-comments">{data.comment}</Comments>
                    <ReadMore>Read More</ReadMore>
                    
                </>
            </TopCard>
            <BottomCard>
            <PhotoContainer>
            <Circle src={process.env.PUBLIC_URL + `/assets/${number+1}.png`}></Circle>
            </PhotoContainer>
            <TextContainer> 
            <NameText data-testid="review-user">{data.user.charAt(0).toUpperCase() + data.user.slice(1)}</NameText> 
            <DescText data-testid="review-description">{`Combination skin, ${data.profile[3]}`}</DescText> 
            </TextContainer>
            </BottomCard>
        </Card>
    )
}

const Card = styled.div`
width: 250px;
height: 300px;
margin-right: 40px;
`
const BottomCard = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
width:100%;
margin-bottom: 5px;

`

const TopCard = styled.div`
border: 2px solid #EFEFEF;
width: 100%;
border-radius: 5px;
display:flex;
flex-direction:column;
align-items: center;
height:70%;
`

const NameText = styled.div`
font-size: 8px;
font-weight:bold;
`

const DescText = styled.div`
font-size: 8px;
color:#CACACA;
`

const TextContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
margin-top:40px;
`

const PhotoContainer = styled.div`
width: 70%;
display:flex;
justify-content:center;
position: relative;
`
const Circle = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
position: absolute;
bottom: -30px;
object-fit:cover;
border: 2px solid #EFEFEF;
`
const ContentImage = styled.img`
height: 80px;
width: 50px;
border-radius: 50%;
object-fit:cover ;
margin-top: 10px;
`

const RatingContainer = styled.div`
display: flex;
width:80%;
flex-direction:row;
align-items: center;
justify-content:flex-start;
margin-top: 5px;
margin-left: 25px;
border-top: 1px solid #EFEFEF;

`


const RightRatingContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
font-size:12px;
margin-top: 4px;
`

const Star = styled.i`
color: ${props => props.active ? '#DB284E':'#D0D0D0'};
height: 17px;
width: 17px;
`

const StarsContainer = styled.div`
display:flex;
flex-direction:row;
margin-right: 5px;
`

const DescriptionContainer = styled.div`
width: 80%;
display: flex;
flex-direction: column;
justify-content:center;
text-align:left;
margin-left: 15px;
`

const TitleDescription = styled.div`
font-weight: bold;
font-size:15px;
`

const ContentDescription = styled.div`
font-size:12px;
width: 95%;
`
const TopWrapper = styled.div`
display:flex;
flex-direction: row;
margin-top: 5px;
width: 80%;
`

const Comments = styled.div`
font-size:10px;
text-align:left;
display: -webkit-box;
max-width:180px;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden; 
`

const ReadMore = styled.div`
text-align:left;
font-size:10px;
color: #DB284E;
font-weight:bold;
`