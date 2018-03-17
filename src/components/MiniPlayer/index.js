import React from 'react';
import songCover from './2014ForestHillsDrive.jpg';
import SongTitle from './SongTitle';
import Artiste from './Artiste';
import Transparency from './Transparency';
import MediaIcon from './MediaIcon';
import MediaIcons from './MediaIcons';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 230px;
  width: 100%;
  margin-top: 100px;
  background-image: url(${songCover});
  background-size: cover;
`;

const MiniPlayer = () => (
  <Wrapper>
    <Transparency>
      <SongTitle>No Role Modelz</SongTitle>
      <Artiste>J Cole</Artiste>
    </Transparency>
    <MediaIcons>
      <MediaIcon className="fas fa-backward" name="backward" size="2x" />
      <MediaIcon className="fas fa-play" name="play" size="3x" />
      <MediaIcon className="fas fa-forward" name="forward" size="2x" />
    </MediaIcons>
  </Wrapper>
);

export default MiniPlayer;
