import { Map } from 'immutable';

import { SIDEBAR_CHANGE_INDEX } from '../constants';

const initialState = Map({
  index: 0,
});

const slideBarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIDEBAR_CHANGE_INDEX:
      return state.set('index', payload);

    default:
      return state;
  }
};

export default slideBarReducer;
