import React from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import AboutUsMain from '../../components/about-us';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'About Us'} />
      <AboutUsMain />
    </Wrapper>
  );
};

export default index;