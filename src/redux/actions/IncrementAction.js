import {INC} from '../ActionTypes';
const IncrementAction = (val) => (dispatch) => {
  dispatch({
    type: INC,
    payload: val,
  });
};

export default IncrementAction;
