import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectIndex } from './selectors';
import { playMusic } from './actions';
import SongTitle from './SongTitle';
import Artiste from './Artiste';
import Transparency from '../../components/Transparency';
import MediaIcon from './MediaIcon';
import MediaIcons from './MediaIcons';
import { makeChart, makeChartLoading } from '../HomePage/selectors';
import Heading from './Heading';
import styled from 'styled-components';
import MiniImage from './MiniImage';
import defaultSongCover from './2014ForestHillsDrive.jpg';
import { getChartRequest } from '../HomePage/actions';

const Wrapper = styled.div`
  width: 100%;
  height: 250px;
  order: 1;
  flex: 3;
  background-image: url(${props => props.background || defaultSongCover});
  background-size: cover;
`;

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = { mouseIn: false, playing: false, musicEnded: false };
  }

  componentDidMount() {
    this.props.getChart(0);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.index !== nextProps.index) {
      this.updateMusicSource(nextProps.index);
    }
  }

  updateMusicSource(index) {
    this.music.src = this.props.chart.tracks.data[index].preview;
    this.music.load();
    this.music.play();
  }

  handlePlay = () => {
    this.music.onended = this.playNext;
    if (this.music.paused) {
      this.music.play();
      this.setState({ playing: true });
    } else {
      this.music.pause();
      this.setState({ playing: false });
    }
  };

  playNext = () => {
    const { playIndex, chart } = this.props;
    let { index } = this.props;
    index += 1;
    index %= chart.tracks.total;
    playIndex(index);
  };

  playPrev = () => {
    const { playIndex } = this.props;
    let { index } = this.props;
    index -= 1;
    if (index < 0) {
      index = 0;
    }
    playIndex(index);
  };


  handlePlayerMouseEnter = () => {
    this.setState({ mouseIn: true });
  };
  handlePlayerMouseLeave = () => {
    this.setState({ mouseIn: false });
  };

  renderPlayButton = () => {
    if (!this.state.playing) {
      return (
        <MediaIcon
          className="fas fa-play"
          name="play"
          onClick={this.handlePlay}
        />
      );
    } else {
      return (
        <MediaIcon
          className="fas fa-pause"
          name="pause"
          onClick={this.handlePlay}
        />
      );
    }
  };

  render() {
    const { chart, index, chartLoading } = this.props;
    if (!chartLoading && chart) {
      return (
        <div>
          <Wrapper
            onMouseEnter={this.handlePlayerMouseEnter}
            onMouseLeave={this.handlePlayerMouseLeave}
            background={chart.tracks.data[index].artist.picture_big}
          >
            <Transparency>
              <MiniImage
                src={chart.tracks.data[index].artist.picture_medium}
                alt="Mini top right song cover"
                mouseIn={this.state.mouseIn}
              />
              <Heading mouseIn={this.state.mouseIn}>
                <SongTitle>{chart.tracks.data[index].title}</SongTitle>
                <Artiste>{chart.tracks.data[index].artist.name}</Artiste>
              </Heading>
              <audio
                ref={audio => {
                  this.music = audio;
                }}
              >
                <source
                  src={chart.tracks.data[index].preview}
                  type="audio/mpeg"
                />
              </audio>
              <MediaIcons>
                <MediaIcon
                  className="fas fa-backward"
                  name="backward"
                  onClick={this.playPrev}
                />
                {this.renderPlayButton()}
                <MediaIcon
                  className="fas fa-forward"
                  name="forward"
                  onClick={this.playNext}
                />
              </MediaIcons>
            </Transparency>
          </Wrapper>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = createStructuredSelector({
  chartLoading: makeChartLoading(),
  chart: makeChart(),
  index: makeSelectIndex()
});

const mapDispatchToProps = dispatch => {
  return {
    playIndex: index => dispatch(playMusic(index)),
    getChart: id => dispatch(getChartRequest(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
