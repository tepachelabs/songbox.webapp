export const selectIndex = (state) => state.songsQueue.get('index');
export const selectSongsQueue = (state) => state.songsQueue.get('queue');

export const selectQueueSize = (state) => selectSongsQueue(state).size;

export const canPlayNextSong = (state) => {
  const index = selectIndex(state);
  const queueSize = selectQueueSize(state);
  return index + 1 < queueSize;
};

export const canPlayPreviousSong = (state) => {
  const index = selectIndex(state);
  return index - 1 >= 0;
};

export const selectSongPathAtIndex = (state, index) => {
  const songsQueue = selectSongsQueue(state);
  return songsQueue.getIn([index, 'path_lower']);
};
