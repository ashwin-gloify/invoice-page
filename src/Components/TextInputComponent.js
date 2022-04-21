import React, {useState} from 'react';
import {TextInput} from 'react-native';
const TextInputComponent = ({style, placeholder, placeholderTextStyle}) =>{
    const [name, setName]= useState('');
    return (
      <>
        <TextInput
          style={style}
          placeholder={placeholder}
          placeholderTextColor="#C4C4C4"
          placeholderTextStyle={placeholderTextStyle}
          onChangeText={(item)=> setName(item)}
        />
      </>
    );
}
export default TextInputComponent;