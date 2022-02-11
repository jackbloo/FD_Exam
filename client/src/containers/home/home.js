import React from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import Navbar from '../../components/navbar/navbar';
import Billboard from '../billboard/billboard';
import EditorChoice from '../editorChoice/editorChoice';
import PinkContainer from '../PinkContainer/pinkContainer';
import LatestArticles from '../latestArticles/latestArticles';
import LatestReview from '../latestReview/latestReview';
import PopularGroups from '../popularGroups/popularGroups';
import Trending from '../trending/trending';
import TopBrands from '../topBrands/topBrands';
import Footers from '../footers/footers';
import {fetchData} from '../../store/action'



function Home() {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchData())
    },[dispatch])

  return (
    <HomeContainer >
      <Navbar/>
      <Billboard internal={false}/>
      <EditorChoice/>
      <PinkContainer/>
      <Billboard internal={true}/>
      <LatestArticles />
      <LatestReview />
      <PopularGroups/>
      <Trending/>
      <TopBrands/>
      <Footers/>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;

`