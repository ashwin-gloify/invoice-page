/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, Button, SectionList, StyleSheet, DynamicColorIOS} from 'react-native';
import sectionData from '../../Data/sectionData';
// import Styles from './Styles';
import FabModule from '../../Components/FabModule/FabModule';
import UserData from '../../Data/UserData';

const SectionlistConsultation = ({navigation}) => {
  const footerItem = () => {
    return (
      <View>
        <Button title="Call" />
      </View>
    );
  };


 
  const renderList = ({item}) => {
    return (
      <View style={Styles.patientContainer}>
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
  };
  return (
    <View style={Styles.containerMain}>
      {/* <View style={Styles.containerHead}>
        <Text style={Styles.headText}>Consult Today</Text>
      </View> */}
      <View style={Styles.listContainer}>
        <SectionList
          sections={sectionData}
          renderItem={renderList}
          keyExtractor={(item) => item.id}
          renderSectionHeader={({section: {day}}) => (
            <Text style={Styles.headText}>{day}</Text>
          )}
          ListFooterComponent={footerItem}
        />
      </View>
      <FabModule />
      <View style={Styles.btnPrimary}>
        <Button
          title="Go to AddPatient"
          onPress={() => navigation.navigate('AddPatient')}
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    marginHorizontal: 12,
  },
  containerHead: {
    paddingVertical: 12,
    marginHorizontal: 12,
  },
  headText: {
    color: '#000',
    fontWeight: '500',
    fontFamily: 'Poppins',
    fontSize: 28,
    lineHeight: 42,
  },
  listContainer: {
    marginBottom: '20%',
  },

  patientContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 12,
    marginHorizontal: 12,
    alignItems: 'center',
    //   backgroundColor:'red',
  },
  col1: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageView: {
    borderRadius: 5,
  },
  imgStyle: {
    width: 56,
    height: 54,
    borderRadius: 20,
  },
  details: {
    flexDirection: 'row',
  },
  detailsView: {
    paddingHorizontal: 2,
  },
  detailsText: {
    fontSize: 16,
    color: '#9A9A9A',
    lineHeight: 19.5,
    fontWeight: '400',
    fontFamily: 'Poppins',
  },
  nameText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#000',
    fontFamily: 'Poppins',
  },
  userDetail: {
    paddingHorizontal: 15,
  },
  col2: {
    alignItems: 'flex-end',
    bottom: 10,
  },
  col2Text: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: '#247470',
    fontFamily: 'Poppins',
  },
});

export default SectionlistConsultation;
