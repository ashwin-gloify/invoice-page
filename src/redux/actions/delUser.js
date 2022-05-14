import {DEL_PATIENT} from '../ActionTypes';

export const delUser = (item) => (dispatch) => {
  console.log('delUser', item);
  dispatch({
    type: DEL_PATIENT,
    payload: item,
  });
};
