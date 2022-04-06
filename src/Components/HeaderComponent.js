/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIconsles from 'react-native-vector-icons/SimpleLineIcons';
import styles from './Styles';

const HeaderComponent = () => {
  return (
    <View style={ styles.headerMain}>
      <View style={styles.col1}>
        <View  style={styles.colitem}>
          <AntDesign name="arrowleft" size={25} />
        </View>
        <View  style={styles.colitem}>
          <Text style= {styles.colHeader}>June 2</Text>
        </View>
      </View>
      <View style ={styles.col2}>
        <View style={styles.colitem}>
          <Feather name="send" size={25} />
        </View>
        <View style={styles.colitem}>
          <SimpleLineIconsles name="options-vertical" size={25} />
        </View>
      </View>
    </View>
  );
};

export default HeaderComponent;
