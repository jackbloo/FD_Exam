import React from 'react';
import {useSelector} from 'react-redux'
import styled from 'styled-components';
import EditorCard from '../../components/editorCard.js/editorCard';


export default function PinkContainer() {
    const data = useSelector((state) => state.editorChoice)

  return (
<Container>
<ContentContainer>
    <LeftContainer>
        <Title>Looking for products that are just simply perfect for you?</Title>
        <Description>Here are some products that we can believe match your skin, hair, and body! Have we mentioned that they solve your concerns too?</Description>
        <RedButtonContainer>
        <RedButton>
            See My Matches
        </RedButton>
        </RedButtonContainer>
    </LeftContainer>
    <RightContainer>
    {data.length > 0 ? data.slice(0,3).map((el,i) => {
    return(
        <EditorCard data={el} isEditor={false} key={i}></EditorCard>
    )
    }):<></>}
    </RightContainer>
    </ContentContainer>
</Container>
  );
}


const Container = styled.div`
height: 350px;
display:flex;
flex-direction: row;
align-items: center;
justify-content:center;
margin-top: 50px;
background-color:#FDDAE0;
`

const ContentContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
width: 70%;
`


const LeftContainer = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
width: 30%;
margin-right: 20px;
margin-top: 25px;
text-align:left;
`
const RightContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
width: 50%;
margin-top: 10px;
`

const Title = styled.div`
font-weight: bold;
font-size:22px;
`

const Description = styled.div`
margin-top: 10px;
color:black;
`
const RedButtonContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-end;
width:100%;
margin-top: 20px;
`


const RedButton = styled.div`
background-color:#DB284E;
width:150px;
height: 40px;
border-radius:5px;
display:flex;
flex-direction:row;
justify-content:center;
align-items: center;
color: white;
padding: 7px;
`