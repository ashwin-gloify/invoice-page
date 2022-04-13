/* eslint-disable prettier/prettier */
import React, {useState} from  'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import {HeaderShownContext} from '@react-navigation/elements';


const Tab1 = ({navigation }) =>{
    const [inputText, onChangeInputText] = useState('');
    return (
      <View style={styles.Container}>
        <Text style={styles.text}>Something here </Text>
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={onChangeInputText}
        />
        <Button
          title="Go to tab2"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('tab2', {
              inputText : inputText,
            });
          }}
        />
      </View>
    );
};

const styles  = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'#000',
    },
    textInput:{
        color:'#000',
        borderWidth : 1,
        borderRadius:5,
    }
})
export default Tab1;