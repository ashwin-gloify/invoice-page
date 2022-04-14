/* eslint-disable prettier/prettier */
import { NavigationHelpersContext } from '@react-navigation/native';
import React from 'react';
import {View, Text, Button, StyleSheet}  from 'react-native';
import ButtonComponent from './ButtonComponent';

const Profile = ({route, navigation}) =>{
   const { item  } =  route.params;
   const handleBack=()=>{
       navigation.goBack();
   }
    return (
      <View style={Styles.containerMain}>
        <View style={Styles.detailsMain}>
          <Text style={Styles.detailsText}>
            Taking details and callback through params
          </Text>
          <Text style={Styles.detailsText}>{item.name}</Text>
          <Text style={Styles.detailsText}>{item.time} </Text>
        </View>
        <View style={Styles.BtnPrimary}>
          <Button
            title="Drop Consultation with callback"
            style={Styles.cancelBTN}
            onPress={() => {
              
              navigation.navigate('SectionListConsultation',{ targetItem :  {item} });
            }}
          />
        </View>
        <View style={Styles.btnSecondary}>
          <Button
            title="Go back"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={Styles.btnSecondary}>
          <ButtonComponent
            title="this button takes title thourgh props and sends a callback from child"
            eventTrigger={handleBack}
          />
        </View>
      </View>
    );
};

const Styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    background: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsMain: {},
  detailsText: {
    color: '#000',
  },
  BtnPrimary: {
    width: '40%',
    marginVertical: 10,
  },
  btnSecondary: {
    borderRadius: 5,
    marginTop: 5,
    width: '40%',
    marginVertical: 10,
  },
  cancelBTN: {
    marginBottom: 5,
  },
});


export default Profile; 
