import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import IncrementAction from '../../redux/actions/IncrementAction';
import DecrementAction from '../../redux/actions/DecrementAction';
import ClickAction from '../../redux/actions/clickAction';

const CombinedReducers = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.DecReducer.count);
  const clicks = useSelector((state) => state.ClickReducer.click);
  const [val, setVal] = useState(1);
  console.log(count, clicks);
  return (
    <View style={Styles.containerMain}>
      <View style={Styles.textView}>
        <Text style={Styles.textStyle}>Inc and Dec : {count}</Text>
      </View>
      <View style={Styles.textView}>
        <Text style={Styles.textStyle}>Clicks : {clicks}</Text>
      </View>
      <TouchableOpacity
        style={Styles.btn}
        onPress={() => {
          dispatch(IncrementAction(val));
        }}>
        <Text style={Styles.textStyle}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.btn}
        onPress={() => {
          dispatch(DecrementAction(val));
        }}>
        <Text style={Styles.textStyle}>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.btn}
        onPress={() => {
          dispatch(ClickAction(val));
        }}>
        <Text style={Styles.textStyle}>Click Counter</Text>
      </TouchableOpacity>
    </View>
  );
};
const Styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  textStyle: {
    color: '#000',
  },
  btn: {
    backgroundColor: '#CC4411',
    marginVertical: 5,
    padding:'5%',
  },
});
export default CombinedReducers;
