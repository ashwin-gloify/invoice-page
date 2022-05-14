import {SET_PATIENT, DEL_PATIENT} from '../ActionTypes';
import UserData from '../../Data/UserData';
const PatientDataReducer = (state = UserData, action) => {
  if (action.type === SET_PATIENT) {
    return [...state, ...action.payload];
  } else if (action.type === DEL_PATIENT) {
    return [ ...state.filter((item) => item.id !== action.payload)];
  } else {
    return state;
  }
};
export default PatientDataReducer;
