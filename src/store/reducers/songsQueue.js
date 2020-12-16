import { ADD_BROKEN_LINK, CHANGE_SONGS_QUEUE, SET_SONG_INDEX } from '../constants/songsQueue';

const initialState = {
  index: 0,
  queue: [],
  brokenLinks: [],
};

const songsQueueReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_SONG_INDEX:
    return payload;

  case CHANGE_SONGS_QUEUE:
    return payload;

  case ADD_BROKEN_LINK:
    return [...state, payload];

  default:
    return state;
  }
};

export default songsQueueReducer;
