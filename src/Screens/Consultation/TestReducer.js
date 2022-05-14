import React, {useReducer} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function reducer(state, action) {
  switch (action.type) {
    case 'increments1':
      return {
        counter1: state.counter1 + 1,
      };

    case 'decrements1':
      return {
        counter1: state.counter1 - 1,
      };
    case 'reset':
      return {
        counter1: (state.counter1 = 0),
      };
    default: {
      return {counter1: state.counter1};
    }
  }
}

const initialState = {
  counter1: 0,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
      <View>
        <View>
          <Text>{state.counter1}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => dispatch({type: 'increments1'})}>
            <Text>Increment</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch({type: 'decrements1'})}>
            <Text>Decrement</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch({type: 'reset'})}>
            <Text>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;
