import { List, Map } from 'immutable';

import { SONGS_QUEUE_ADD_BROKEN_LINK, SONGS_QUEUE_SET_SONGS, SONGS_QUEUE_SET_SONG_INDEX } from '../constants';

const initialState = Map({
  index: 0,
  queue: List(),
  brokenLinks: List(),
});

const songsQueueReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case SONGS_QUEUE_SET_SONG_INDEX:
    return state.set('index', payload);

  case SONGS_QUEUE_SET_SONGS:
    return state.set('queue', payload);

  case SONGS_QUEUE_ADD_BROKEN_LINK: {
    const brokenLinksUpdated = state.get('brokenLinks').push(payload);
    return state.set('brokenLinks', brokenLinksUpdated);
  }

  default:
    return state;
  }
};

export default songsQueueReducer;
