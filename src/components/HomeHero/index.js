import React from 'react';
import Hero from './Hero';
import Wrapper from './Wrapper';
import HeroCaption from './HeroCaption';
import Header from '../Header';

const HomeHero = ({children}) => (
  <Wrapper>
    <Header/>
    <Hero>
      <HeroCaption>What music will you listen to today?</HeroCaption>
      {children}
    </Hero>
  </Wrapper>
);

export default HomeHero;
