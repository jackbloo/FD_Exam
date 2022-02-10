import React from 'react';
import {useSelector} from 'react-redux'
import styled from 'styled-components';
import EditorCard from '../../components/editorCard.js/editorCard';


export default function EditorChoice() {
    const data = useSelector((state) => state.editorChoice)

  return (
<EditorContainer>
    <TopContainer>
    <Title>Editor's Choice</Title>
    <Description>Curated with Love</Description>
    </TopContainer>
    <BottomContainer>
    {data.length > 0 ? data.map((el,i) => {
    return(
        <EditorCard data={el} isEditor={true} key={i}/>
    )
    }):<></>}
    </BottomContainer>
</EditorContainer>
  );
}


const EditorContainer = styled.div`
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
`

const Title = styled.div`
font-weight: bold;
`

const Description = styled.div`
color:#CACACA;

`