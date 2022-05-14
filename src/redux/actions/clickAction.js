import {CLICK} from '../ActionTypes';

const ClickAction = (val) => (dispatch) => {
  dispatch({
    type: CLICK,
    payload: val,
  });
};
export default ClickAction;
