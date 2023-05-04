// import {ADD_DATA} from '../constants';

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add_Data':
      return [...state, action.text];
    default:
      return state;
  }
};

export default reducer;
