import React from 'react';
import SongTitle from './SongTitle';
import Artiste from './Artiste';
import Transparency from './Transparency';
import MediaIcon from './MediaIcon';
import MediaIcons from './MediaIcons';
import Heading from './Heading';
import styled from 'styled-components';
import MiniImage from './MiniImage';
import defaultSongCover from './2014ForestHillsDrive.jpg';

const Wrapper = styled.div`
  width: 100%;
  height: 250px;
  order: 1;
  flex: 3;
  background-image: url(${props => props.background || defaultSongCover});
  background-size: cover;
`;

const Player = ({
  song,
  mouseEnterHandler,
  mouseLeaveHandler,
  mouseIn
}) => {
  const handlePlay = () => {
    if (this.music.paused) {
      this.music.play();
    } else {
      this.music.pause();
    }
  };
  return (
    <div>
      <Wrapper
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        background={song.artist.picture_big}
      >
        <Transparency>
          <MiniImage
            src={song.artist.picture_medium}
            alt="Mini top right song cover"
            mouseIn={mouseIn}
          />
          <Heading mouseIn={mouseIn}>
            <SongTitle>{song.title}</SongTitle>
            <Artiste>{song.artist.name}</Artiste>
          </Heading>
          <audio
            ref={audio => {
              this.music = audio;
            }}
          >
            <source src={song.preview} type="audio/mpeg" />
          </audio>
          <MediaIcons>
            <MediaIcon className="fas fa-backward" name="backward" />
            <MediaIcon
              className="fas fa-play"
              name="play"
              onClick={handlePlay}
            />
            <MediaIcon className="fas fa-forward" name="forward" />
          </MediaIcons>
        </Transparency>
      </Wrapper>
    </div>
  );
};

export default Player;
