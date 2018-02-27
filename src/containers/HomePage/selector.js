import { createSelector } from 'reselect';

const selectHome = state => state.home;

export const makeSelectLoading = () => createSelector(
  [selectHome],
  homeState => homeState.loading
);
