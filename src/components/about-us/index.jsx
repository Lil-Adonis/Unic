import React, { useEffect } from 'react';
import { Header, Footer, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import AboutContact from './about-contact';
import MissionArea from '../home/mission-area'
import AboutUsArea from './about-us-area';
import ExperienceArea from './experience-area';


const AboutUs = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb showContact={true} title="About Us" />
      {/* <AboutUsArea /> */}
      <MissionArea />
      {/* <ExperienceArea/> */}
      <AboutContact />
      <Footer />
    </Wrapper>
  );
};

export default AboutUs;