import { createSelector } from 'reselect';

export const selectIndex = state => state.player.index;

export const makeSelectIndex = () => {
  return createSelector(selectIndex, index => index);
};
