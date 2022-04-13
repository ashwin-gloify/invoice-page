/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const Tab2 = ({route, navigation}) =>{
    const {inputText} = route.params;
    return (
      <View style={styles.Container}>
        <Text style={styles.text}>
          Something here on Tab 2 and {JSON.stringify(inputText)}{' '}
        </Text>
        <Button
          title="Go to tab2"
          onPress={() => {
            navigation.setParams({
              inputText: route.params.inputText === 'ok' ? 'Not Okay' : 'ok',
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
})
export default Tab2;