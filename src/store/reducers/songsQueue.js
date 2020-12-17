import { List, Map } from 'immutable';

import { ADD_BROKEN_LINK, CHANGE_SONGS_QUEUE, SET_SONG_INDEX } from '../constants';

const initialState = Map({
  index: 0,
  queue: List(),
  brokenLinks: List(),
});

const songsQueueReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_SONG_INDEX:
    return state.set('index', payload);

  case CHANGE_SONGS_QUEUE:
    return state.set('queue', payload);

  case ADD_BROKEN_LINK: {
    const brokenLinksUpdated = state.get('brokenLinks').push(payload);
    return state.set('brokenLinks', brokenLinksUpdated);
  }

  default:
    return state;
  }
};

export default songsQueueReducer;
