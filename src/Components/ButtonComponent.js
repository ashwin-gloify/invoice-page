/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Button} from 'react-native';

const  ButtonComponent = ({title, eventTrigger}) =>{
    return (
      <>
        <Button title={title}  onPress={eventTrigger}  />
      </>
    );
  
}

export default ButtonComponent;