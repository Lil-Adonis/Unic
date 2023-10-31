import React, { useEffect } from 'react';
import { Footer, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import BlogArea from './blog-area';
import CreativeArea from './creative-area';
import HeroArea from './hero-area';
import NewsLetter from './news-letter';
import ProjectArea from './project-area';
import TeamArea from '../home/team-area';
import MissionArea from '../home/mission-area';

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, [])
  return (
    <Wrapper>
      <Header />
      <HeroArea />
      <CreativeArea />
      <MissionArea />
      <TeamArea />
      <ProjectArea />
      <BlogArea />
      <NewsLetter />
      <Footer />
    </Wrapper>
  );
};

export default Home;