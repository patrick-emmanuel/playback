import React from 'react';
import ChartImage from './ChartImage';
import styled from 'styled-components';
import Title from './Title';
import Artist from './Artist';

const Wrapper = styled.div`
  width: 100%;
  background-color: black;
  color: white;
`;

const Card = ({ track }) => (
  <Wrapper>
    <ChartImage
      src={track.artist.picture_medium}
      alt="The editorial category"
    />
    <Title>{track.title}</Title>
    <Artist>{track.artist.name}</Artist>
  </Wrapper>
);

export default Card;
