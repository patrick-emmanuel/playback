import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Chart from '../../components/Chart';
import { getEditorialRequest, getChartRequest } from './actions';
import {
  makeEditorialLoading,
  makeEditorial,
  makeChartLoading,
  makeChart
} from './selectors';

import styled from 'styled-components';

const Content = styled.div`
  margin: 30px 30px;
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
  editorial: makeEditorial(),
  chart: makeChart(),
  loadingEditorial: makeEditorialLoading()
});

const mapDispatchToProps = dispatch => {
  return {
    getEditorial: () => dispatch(getEditorialRequest()),
    getChart: id => dispatch(getChartRequest(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
