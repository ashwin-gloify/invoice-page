import React, {useContext, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {msgContext} from './ComponentA';
import {contextB2D} from './ComponentB';

const ComponentD = React.forwardRef((props, ref) => {
 
  const message = useContext(msgContext);
  const message2 = useContext(contextB2D);
  const calValue = useRef(0);

  return (
    <View>
      <Text style={Styles.txt}>
        {message.msg} - this was passed via context from Component A
      </Text>
      <Button
        title="Tap to change message source"
        onPress={() => message.changeSource('Hello world from D')}
      />
      <Text style={Styles.txt}>
        {message2} - this was passed via context from Component B
      </Text>
      <Text style={Styles.txt}>{calValue.current}</Text>
      <Button
        title="increase calValue without re-render"
        onPress={() => (calValue.current += 1)}
      />
      <TextInput ref={ref}></TextInput>
    </View>
  );
});

const Styles = StyleSheet.create({
  txt: {
    color: '#000',
  },
});

export default ComponentD;
