import React from 'react';
import styled from 'styled-components';
import songCover from '../../components/MiniPlayer/2014ForestHillsDrive.jpg';
import Blur from './Blur';

const Wrapper = styled.div`
  margin: 8px 10px;
  background-image: url(${songCover});
  background-size: cover;
  background-position: center center;
  height: 250px;
  width: 990px;
  position: fixed;
`;

const FlowPlayer = () => (
  <Wrapper>
    <Blur>
      <img src={songCover} alt="Song cover" width="160" height="160" />
    </Blur>
  </Wrapper>
);

export default FlowPlayer;
