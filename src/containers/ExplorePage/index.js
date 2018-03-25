import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { Route, Switch } from 'react-router-dom';
import menuData from '../../helpers/menuData';
import SideBar from '../../components/SideBar';
import { makeChart, makeChartLoading } from '../HomePage/selectors';
import { getChartRequest } from '../HomePage/actions';
import LoadingBar from 'react-redux-loading-bar';

const MainPage = styled.div`
  padding-left: 270px;
`;

class ExplorePage extends Component {
  constructor() {
    super();
    this.state = { mouseIn: false };
  }
  componentWillMount() {
    this.props.getChart(0);
  }

  handlePlayerMouseEnter = () => {
    this.setState({ mouseIn: true });
  };
  handlePlayerMouseLeave = () => {
    this.setState({ mouseIn: false });
  };

  render() {
    return (
      <div>
        <LoadingBar/>
        {!this.props.chartLoading && (
          <SideBar
            menus={menuData}
            song={this.props.chart.tracks.data[0]}
            mouseEnterHandler={this.handlePlayerMouseEnter}
            mouseLeaveHandler={this.handlePlayerMouseLeave}
            mouseIn={this.state.mouseIn}
          />
        )}

        <MainPage>
          <Switch>
            {menuData.map((menu, index) => (
              <Route
                key={index}
                path={menu.path}
                exact={menu.exact}
                component={menu.component}
              />
            ))}
          </Switch>
        </MainPage>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  chart: makeChart(),
  chartLoading: makeChartLoading()
});

const mapDispatchToProps = dispatch => {
  return { getChart: (id) => dispatch(getChartRequest(id)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExplorePage);
