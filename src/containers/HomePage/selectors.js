import { createSelector } from 'reselect';

export const selectEditorialLoading = state => state.editorial.loading;
export const selectEditorial = state => state.editorial.payload;

export const makeEditorialLoading = () => {
  return createSelector(selectEditorialLoading, loading => loading);
};

export const makeEditorial = () => {
  return createSelector(selectEditorial, editorial => editorial);
};

export const selectChartLoading = state => state.chart.loading;
export const selectChart = state => state.chart.payload;

export const makeChartLoading = () => {
  return createSelector(selectChartLoading, loading => loading);
};

export const makeChart = () => {
  return createSelector(selectChart, chart => chart);
};
