/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import styles from './Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
const HeaderAddPatient = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerItem}>
        <AntDesign name="arrowleft" size={25} />
      </View>
      <View style={styles.headerItem}>
        <Text style={styles.textStyle}>Add Patient</Text>
      </View>
    </View>
  );
};
export default HeaderAddPatient;
