import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import ComponentC from './ComponentC';
export const otherContext =  React.createContext();
export const contextB2D = React.createContext();
const ComponentB = React.forwardRef((props, ref) => {
  return (
    <View>
      <otherContext.Provider value="this is from componentB to component C context">
        <contextB2D.Provider value="this is from component B to D context">
          <ComponentC ref={ref}/>
        </contextB2D.Provider>
      </otherContext.Provider>
      
    </View>
  );
});

const Styles = StyleSheet.create({});

export default ComponentB;
