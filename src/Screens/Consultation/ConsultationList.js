/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, Button, ScrollView} from 'react-native';
import UserData from '../../Data/UserData';
import Styles from './Styles';
import FabModule from '../../Components/FabModule/FabModule';
// import { useNavigation } from '@react-navigation/native';

const ConsultationList = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <View style={Styles.containerMain}>
      <View style={Styles.containerHead}>
        <Text style={Styles.headText}>Consult Today</Text>
      </View>
      <ScrollView>
        <View style={Styles.listContainer}>
          {UserData.map((item, index) => {
            return (
              <View style={Styles.patientContainer} key={index}>
                <View style={Styles.col1}>
                  <View style={Styles.imageView}>
                    <Image
                      style={Styles.imgStyle}
                      source={require(`../../../assets/image.jpg`)}
                    />
                  </View>
                  <View style={Styles.userDetail}>
                    <View style={Styles.nameView}>
                      <Text style={Styles.nameText}>{item.name}</Text>
                    </View>
                    <View style={Styles.details}>
                      <View style={Styles.detailsView}>
                        <Text style={Styles.detailsText}>{item.gender}</Text>
                      </View>
                      <View style={Styles.detailsView}>
                        <Text style={Styles.detailsText}>{item.age}Y.</Text>
                      </View>
                      <View style={Styles.detailsView}>
                        <Text style={Styles.detailsText}>{item.location}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={Styles.col2}>
                  <Text style={Styles.col2Text}>{item.time}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <FabModule/>
      <View style={Styles.btnPrimary}>
        <Button
          title="Go to AddPatient"
          onPress={() => navigation.navigate('AddPatient')}
        />
      </View>
    </View>
  );
};
export default ConsultationList;
