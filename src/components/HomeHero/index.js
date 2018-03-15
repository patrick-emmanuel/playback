import React from 'react';
import Hero from './Hero';
import Wrapper from './Wrapper';
import HeroCaption from './HeroCaption';
import NavBar from '../NavBar';

const HomeHero = ({children}) => (
  <Wrapper>
    <NavBar/>
    <Hero>
      <HeroCaption>What music will you listen to today?</HeroCaption>
      {children}
    </Hero>
  </Wrapper>
);

export default HomeHero;
