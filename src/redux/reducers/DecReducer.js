import {INC, DEC} from '../ActionTypes';

const DecReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case INC:
      return {...state, count: state.count + action.payload};
    case DEC:
      return {...state, count: state.count - action.payload};
    default:
      return state;
  }
};
export default DecReducer;
