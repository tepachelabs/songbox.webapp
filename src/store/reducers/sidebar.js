import { CHANGE_SIDEBAR_INDEX } from '../constants/constants';

const slideBarReducer = (state = 0, { type, payload = 0 }) => {
  switch (type) {
  case CHANGE_SIDEBAR_INDEX:
    return payload;

  default:
    return state;
  }
};

export default slideBarReducer;
