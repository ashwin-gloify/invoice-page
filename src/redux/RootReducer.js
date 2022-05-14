import React from 'react';
import {combineReducers} from 'redux';
import PatientDataReducer from './reducers/PatientDataReducer';
import DecReducer from './reducers/DecReducer';
import  ClickReducer from './reducers/ClickReducer';
// const rootReducer =( state, action ) =>{
//    if (action.type === SET_PATIENT) {
//      console.log(action);
//      console.log(...state,...action.payload);
//      return [...state, ...action.payload];
//    } else {
//      console.log('this is it ');
//      return state;
//    }
// }

const rootReducer = combineReducers({
  PatientDataReducer,
  PatientDataReducer,
  DecReducer,
  ClickReducer,
});

export default rootReducer;
