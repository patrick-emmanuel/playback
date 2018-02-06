import React from 'react';
import Hero from './Hero';
import Wrapper from './Wrapper';
import HeroCaption from './HeroCaption';
import SubCaption from './SubCaption';

const HomeHero = () => (
  <Wrapper>
    <Hero>
      <HeroCaption>
        Spotify is currently not available <br />
        in your country.
      </HeroCaption>
      <SubCaption>
        Be the first to know when we launch.
      </SubCaption>
    </Hero>
  </Wrapper>
);

export default HomeHero;
