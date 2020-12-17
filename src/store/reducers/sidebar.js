import { Map } from 'immutable';

import { CHANGE_SIDEBAR_INDEX } from '../constants';

const initialState = Map({
  index: 0,
});

const slideBarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case CHANGE_SIDEBAR_INDEX:
    return state.set('index', payload);

  default:
    return state;
  }
};

export default slideBarReducer;
