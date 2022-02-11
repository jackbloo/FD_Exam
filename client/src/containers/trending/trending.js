import React from 'react';
import {useSelector} from 'react-redux'
import styled from 'styled-components';
import EditorCard from '../../components/editorCard.js/editorCard';
import Pagination from '../../components/pagination/pagination';


export default function EditorChoice() {
    const data = useSelector((state) => state.editorChoice)

  return (
<PopularContainer>
    <TopContainer>
    <Title>Trending This Week</Title>
    <Description>See our weekly most reviewed products</Description>
    </TopContainer>
    <BottomContainer>
    {data.length > 0 ? data.map((el,i) => {
    return(
        <EditorCard data={el} isEditor={false} key={i} number={i}/>
    )
    }):<></>}
    </BottomContainer>
    <Pagination />
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
