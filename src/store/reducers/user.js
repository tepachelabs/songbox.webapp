import { Map } from 'immutable';
import { USER_SET_USER } from '../constants';

const initialState = Map({
  name: '',
  email: '',
  photo: '',
});

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case USER_SET_USER:
    return state.merge({ ...payload });
  default:
    return state;
  }
};

export default userReducer;
