export const PLAY_MUSIC = 'PLAY_MUSIC';

export function playMusic(index) {
  return { type: PLAY_MUSIC, index };
}
