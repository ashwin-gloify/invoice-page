// This component implements a card in which, through context, patient details are passed
// The aim of this component is to practice useContext
//This component along with Profile component will be connected to SectionlistConsultation screen for testing

import React, {useState, useEffect, useRef}  from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import ComponentB from './ComponentB';
import styles from './Header/Styles';

export const msgContext = React.createContext();
const ComponentA = () =>{
   const textRef = useRef();
   let toggled = useRef(false);
   const [message, setMessage] = useState('Hello world from A');
    useEffect(() => {
   textRef.current.focus();
  },);
    return (
      <View>
        <Text style={Styles.txt}>ALL I want to say is </Text>
        <msgContext.Provider value={{msg : message, changeSource : setMessage}}>
          <ComponentB ref={textRef} />
        </msgContext.Provider>
        <Text style={toggled ? Styles.txt :  Styles.redTxt}>Toggle text</Text>
        <Button title = "click to toggle" onPress = {()=> {toggled.current = !toggled.current}} />
      </View>
    );
};

const Styles = StyleSheet.create({
  txt:{
    color:'#000',
  },
  redTxt:{
    color:'red',
  },

});


export default ComponentA;
