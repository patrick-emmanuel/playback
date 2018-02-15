import React from 'react';
import Hero from './Hero';
import Wrapper from './Wrapper';
import HeroCaption from './HeroCaption';
import SubCaption from './SubCaption';

const HomeHero = () => (
  <Wrapper>
    <Hero>
      <HeroCaption>
        What music will you listen to today?
      </HeroCaption>
      <SubCaption>
        Be the first to know when we launch.
      </SubCaption>
    </Hero>
  </Wrapper>
);

export default HomeHero;
