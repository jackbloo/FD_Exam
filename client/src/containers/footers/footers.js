import React from 'react';
import {useSelector} from 'react-redux'
import styled from 'styled-components'


export default function Footers() {
const data = useSelector((state) => state.linkData)
  return (
      <Container>
    <FootersContainer >
        <LeftContainer>
            <LeftTopContainer>
                {data.map((el,i) => <Box key={`${el}-${i}`}>{el.id}</Box>)}
            </LeftTopContainer>
            <LeftBottomContainer>
                <LogoImage src={process.env.PUBLIC_URL + '/assets/logo.png'} />
                <Description>Copyright © 205 - 2017 Female Daily Network • All Rights reserved</Description>
            </LeftBottomContainer>
        </LeftContainer>
        <RightContainer>
            <Title>Download Our Mobile App</Title>
            <MiddleContainer>
            <ButtonImage appStore={true} src={process.env.PUBLIC_URL + '/assets/app-store.png'} />
            <ButtonImage src={process.env.PUBLIC_URL + '/assets/play-store.png'} />
            </MiddleContainer>
            <SocialMediaContainer>
                <SocialMediaImage src={process.env.PUBLIC_URL + '/assets/facebook.png'}/>
                <SocialMediaImage src={process.env.PUBLIC_URL + '/assets/twitter.png'}/>
                <SocialMediaImage src={process.env.PUBLIC_URL + '/assets/instagram.png'}/>
                <SocialMediaImage src={process.env.PUBLIC_URL + '/assets/youtube.png'}/>
            </SocialMediaContainer>
        </RightContainer>
    </FootersContainer>
    <BillboardContainer>
        <Billboard>
            Bottom Frame 970x50, 480x60,320x50
        </Billboard>
    </BillboardContainer>
    </Container>
  );
}

const Container = styled.div`
width: 100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`

const FootersContainer = styled.div`
width: 80%;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
font-size: 20px;
color:#5A5A5A;
margin-top: 50px;
border-top: 2px solid #EFEFEF;
`
const LeftContainer = styled.div`
display:flex;
flex-direction:column;
width:72%;
margin-top: 20px;
`

const RightContainer = styled.div`
display:flex;
flex-direction: column;
align-items:flex-start;
`
const LeftTopContainer = styled.div`
width:88%;
display:flex;
flex-direction:row;
justify-content:flex-start;
flex-wrap: wrap;
`

const Box = styled.div`
text-align:left;
width:150px;
font-weight:bold;
font-size:12px;
color:black;
margin-top: 15px;
margin-right:70px;
`

const BillboardContainer = styled.div`
display:flex;
justify-content:center;

`
const Billboard =styled.div`
width: 970px;
height: 50px;
background-color:#D8D8D8;
border: 1px solid #9D9D9D;
display:flex;
justify-content:center;
align-items:center;
margin-top: 40px;
`

const LeftBottomContainer = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
margin-top:20px;
`

const LogoImage = styled.img`
`

const Description = styled.div`
font-size: 12px;
margin-top:5px;
`

const Title = styled.div`
font-size:12px;
color:black;
font-weight: bold;
`

const MiddleContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-end;
align-items:center;

`

const ButtonImage = styled.img`
height:${(props) => props.appStore ? '31px' : '46px'};
object-fit:contain;
`

const SocialMediaContainer = styled.div`
display:flex;
flex-direction: row;
justify-content:flex-start;
align-items:center;
margin-top:30px;
`

const SocialMediaImage = styled.img`
width: 25px;
object-fit:contain;
margin-right:10px;
`