import {DEC} from '../ActionTypes';

const DecrementAction = (val) => (dispatch) => {
  //perform decrement action
  dispatch({
    type: DEC,
    payload: val,
  });
};
export default DecrementAction;
