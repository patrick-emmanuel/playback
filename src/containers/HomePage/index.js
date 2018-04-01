import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Chart from '../../components/Chart';
import {
  makeChartLoading,
  makeChart
} from './selectors';

import styled from 'styled-components';

const Content = styled.div`
  margin: 0 30px 0;
`;

class HomePage extends Component {
  render() {
    const { loadingChart, chart } = this.props;
    return (
      <div>
        <Content>{!loadingChart && <Chart {...chart} />}</Content>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loadingChart: makeChartLoading(),
  chart: makeChart(),
});

export default connect(mapStateToProps, null)(HomePage);
