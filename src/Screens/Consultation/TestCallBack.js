import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
const App = () => {
  const [d, setD] = useState(1);
  const [c, setC] = useState(0);

  // No dependencies (i.e. []) for now
  const incrementD = useCallback(() => setD((d) => d + 1), []);
  const increment = useCallback(() => setC((c) => c + d), [d]);

  return (
    <View>
      <View>
        <Text> D is {d} </Text>
      </View>
      <View>
        {' '}
        <Text>Counter is {c}</Text>{' '}
      </View>

      <View>
        <TouchableOpacity onPress={incrementD}>
          <Text>Increment Delta</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={increment}>
          <Text>Increment Counter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default App;
