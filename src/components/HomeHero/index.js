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
        Check out your Deezer flow,<br/>or browse curated music collections by genre.
      </SubCaption>
    </Hero>
  </Wrapper>
);

export default HomeHero;
