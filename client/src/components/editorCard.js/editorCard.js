import React from 'react';
import styled from 'styled-components';


export default function EditorCard({data, isEditor}) {
   const stars = ['','','','',''] 
   const rating = Math.floor(data.product.rating) - 1
  return (
        <Card >
            {isEditor ?            <TopCard>
            <PhotoContainer>
            <Circle src={process.env.PUBLIC_URL + '/assets/dummy.png'}></Circle>
            </PhotoContainer>
            <TextContainer> 
            <NameText>{data.editor.charAt(0).toUpperCase() + data.editor.slice(1)}</NameText> 
            <RoleText>{data.role}</RoleText> 
            </TextContainer>
            </TopCard> :<></>}
            <BottomCard>
                <ContentImage src={'https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg'}></ContentImage>
                <RatingContainer>
                <LeftRatingContainer>
                    {data.product.rating}
                </LeftRatingContainer>
                <RightRatingContainer>
                    <StarsContainer>
                    {stars.map((el,i) => <Star key={i} active={i <=rating} className="fa fa-star icon"/> )}
                    </StarsContainer>
                    (7)
                </RightRatingContainer>
                </RatingContainer>
                <DescriptionContainer>
                    <TitleDescription>
                        {data.product.name}
                    </TitleDescription>
                    <ContentDescription>
                        {data.product.description}
                    </ContentDescription>
                </DescriptionContainer>
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
const TopCard = styled.div`
display:flex;
flex-direction: row;
align-items:center;
width:80%;
margin-bottom: 5px;

`

const BottomCard = styled.div`
border: 2px solid #EFEFEF;
width: 99%;
height:100%;
border-radius: 5px;
display:flex;
flex-direction:column;
align-items: center;

`

const NameText = styled.div`
font-size: 8px;
font-weight:bold;
`

const RoleText = styled.div`
font-size: 8px;
color: #D3D3D3;
`

const TextContainer = styled.div`
width:50%;
display:flex;
flex-direction:column;
align-items:flex-start;
`

const PhotoContainer = styled.div`
width: 50%;
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
object-fit:cover ;
`
const ContentImage = styled.img`
height: 150px;
width: 120px;
border-radius: 50%;
object-fit:cover ;
margin-top: 10px;
`

const RatingContainer = styled.div`
display: flex;
width:100%;
flex-direction:row;
align-items: center;
justify-content:flex-start;
margin-top: 5px;
margin-left: 25px;

`

const LeftRatingContainer = styled.div`
font-size: 12px;
font-weight: bold;
margin-right: 10px;

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
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical; 
`