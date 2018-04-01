import { PLAY_MUSIC } from './actions';

const initialState = { index: 5 };

export function playerReducer(state = initialState, action) {
  switch (action.type) {
    case PLAY_MUSIC:
      return {
        index: action.index
      };
    default:
      return state;
  }
}
