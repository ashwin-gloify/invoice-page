/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Modal} from 'react-native';
import Styles  from './Styles' ;
import {FAB} from '@rneui/base/dist/FAB';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FabModule = () => {
    const [visible, setVisible] = useState(false);
  return (
    <>
      <View style={Styles.FabView}>
        <FAB
          icon={{name: 'add', color: 'white'}}
          color="#247470"
          style={Styles.FabStyle}
          onPress={() => {
            setVisible(!visible);
          }}
        />
      </View>
      <Modal
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}>
        <View style={Styles.ModalContainer}>
          <View style={Styles.optionContainer}>
            <View style={Styles.touchableOption}>
              <View style={Styles.optionButton}>
                <AntDesign name="adduser" size={20} style={Styles.icons} />
              </View>
              <View style={Styles.optionText}>
                <Text style={Styles.textStyle}>Add Patient</Text>
              </View>
            </View>
            <View style={Styles.touchableOption}>
              <View style={Styles.optionButton}>
                <AntDesign name="calendar" size={25} style={Styles.icons} />
              </View>
              <View style={Styles.optionText}>
                <Text style={Styles.textStyle}>Add Appointment</Text>
              </View>
            </View>
          </View>
          <View style={Styles.FabView}>
            <FAB
              icon={{name: 'close', color: 'white'}}
              color="#247470"
              style={Styles.FabStyle}
              onPress={() => {
                setVisible(!visible);
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};
export default FabModule;