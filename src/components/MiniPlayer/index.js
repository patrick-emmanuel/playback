import React from 'react';
import songCover from './2014ForestHillsDrive.jpg';
import styled from 'styled-components';
import AlbumImage from './AlbumImage';

const Wrapper = styled.div`
  height: 60px;
  width: 100%;
  margin-top: 100px;
`;

const MiniPlayer = () => (
  <Wrapper>
    <AlbumImage src={songCover} alt="Album Cover" />
  </Wrapper>
);

export default MiniPlayer;
