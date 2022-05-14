import {CLICK} from '../ActionTypes';

const ClickReducer = (state = {click: 0}, action) => {
  switch (action.type) {
    case CLICK:
      return {...state, click: state.click + action.payload};
    default:
      return state;
  }
};
export default ClickReducer;
