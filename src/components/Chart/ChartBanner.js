import React from 'react';
import ChartImage from './ChartImage';
import Banner from '../Banner';
import styled from 'styled-components';
import BannerText from './BannerText';

const Wrapper = styled.div`
  position: relative;
  color: white;
`;

const ChartBanner = ({ data }) => (
  <Wrapper>
    <Banner>
      <ChartImage
        opacity="0.4"
        src={data.artist.picture_xl}
        alt="The chart banner image"
      />
    </Banner>
    <BannerText>TOP WORLD WIDE</BannerText>
  </Wrapper>
);

export default ChartBanner;
