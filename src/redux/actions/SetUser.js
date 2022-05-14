import {SET_PATIENT}  from '../ActionTypes';

export const setUser = (user) => (dispatch) => {
  console.log('we here in action creator');
  dispatch({
    type: SET_PATIENT,
    payload: [user],
  });
};