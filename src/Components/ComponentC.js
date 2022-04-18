import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ComponentD from './ComponentD';
import { otherContext } from './ComponentB';
const ComponentC = React.forwardRef((props, ref) => {
    const messageB2C = useContext(otherContext);
  return (
    <View>
      <Text style={Styles.txt}>{messageB2C}</Text>
      <Text style={Styles.txt}> This text is coming from ComponentC</Text>
      <ComponentD ref={ref} />
    </View>
  );
});

const Styles = StyleSheet.create({
    txt:{
        color:'#000',
    }
});

export default ComponentC;
