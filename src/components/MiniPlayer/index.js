import React, { Component } from 'react';
import songCover from './2014ForestHillsDrive.jpg';
import SongTitle from './SongTitle';
import Artiste from './Artiste';
import Transparency from './Transparency';
import MediaIcon from './MediaIcon';
import MediaIcons from './MediaIcons';
import Heading from './Heading';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  order: 1;
  flex: 3;
  background-image: url(${songCover});
  background-size: cover;
`;

const MiniImage = styled.img`
  width: 100px;
  height: 100px;
  opacity: ${props => (props.mouseIn ? '1' : '0')};
  z-index: 99999;
  position: absolute;
  transition: all 0.5s;
`;

class MiniPlayer extends Component {
  constructor() {
    super();
    this.state = { mouseIn: false };
  }

  handlePlayerMouseEnter = () => {
    console.log('Mouse over y');
    this.setState({ mouseIn: true });
  };
  handlePlayerMouseLeave = () => {
    console.log('Mouse out o');
    this.setState({ mouseIn: false });
  };
  render() {
    return (
      <Wrapper
        onMouseEnter={this.handlePlayerMouseEnter}
        onMouseLeave={this.handlePlayerMouseLeave}
      >
        <Transparency>
          <MiniImage
            src={songCover}
            alt="Mini top right song cover"
            mouseIn={this.state.mouseIn}
          />
          <Heading mouseIn={this.state.mouseIn}>
            <SongTitle>No Role Modelz</SongTitle>
            <Artiste>J Cole</Artiste>
          </Heading>
          <MediaIcons>
            <MediaIcon className="fas fa-backward" name="backward" />
            <MediaIcon className="fas fa-play" name="play" />
            <MediaIcon className="fas fa-forward" name="forward" />
          </MediaIcons>
        </Transparency>
      </Wrapper>
    );
  }
}

export default MiniPlayer;
