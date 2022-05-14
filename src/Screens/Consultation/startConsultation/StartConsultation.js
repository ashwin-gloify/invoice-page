import React from 'react';
import {View, Text, ScrollView, Image, FlatList, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from './Styles';

const StartConsultation =  () =>{
    const cardDetails = [
      {
        id: 1,
        name: 'Vitals',
        icon: 'body',
        iconLib: 'Ionicons',
      },
      {
        id: 2,
        name: 'KCO',
        icon: 'add-business',
        iconLib: 'MaterialIcons',
      },
      {
        id: 3,
        name: 'Complaints',
        icon: 'pencil',
        iconLib: 'Ionicons',
      },
      {
        id: 4,
        name: 'Observations',
        icon: 'add - to - photos',
        iconLib: 'MaterialIcons',
      },
      {
        id: 5,
        name: 'Diagnosis',
        icon: 'user-check',
        iconLib: 'Feather',
      },
      {
        id: 6,
        name: 'Diagnosis',
        icon: 'user-check',
        iconLib: 'Feather',
      },
      {
        id: 7,
        name: 'Diagnosis',
        icon: 'user-check',
        iconLib: 'Feather',
      },
      {
        id: 8,
        name: 'Diagnosis',
        icon: 'user-check',
        iconLib: 'Feather',
      },
    
    ];

    return (
      <ScrollView contentContainerStyle={Styles.scrollContainer}>
        <View style={Styles.containerMain}>
          <View style={Styles.headerPanel}>
            <View style={Styles.headerCol1}>
              <View style={Styles.headerCol1Item}>
                <AntDesign name="arrowleft" size={25} color={'#2A2A2A'} />
              </View>
              <View style={Styles.headerText}>
                <Text style={Styles.headerText}>Start Consultation</Text>
              </View>
            </View>
            <View style={Styles.headerCol2}>
              <View style={Styles.headerCol2Item}>
                <AntDesign name="search1" size={25} color={'#247470'} />
              </View>
              <View style={Styles.headerCol2Item}>
                <Feather name="video" size={25} color={'#247470'} />
              </View>
            </View>
          </View>
          {/* name and details section */}
          <View style={Styles.detailsContainer}>
            <View style={Styles.detailsCol1}>
              <View style={Styles.detailsCol1Item1}>
                <Text style={Styles.nameText}>Rahul Kottara</Text>
              </View>
              <View style={Styles.detailsCol1Item2}>
                <Text style={Styles.detailsText}>M 30Y. Diabetes</Text>
              </View>
            </View>
            <View style={Styles.detailsCol2}>
              <Image
                source={require(`../../../../assets/image.jpg`)}
                style={Styles.imgStyle}
              />
            </View>
          </View>
        </View>
        {/*Appointment banner */}
        <View style={Styles.bannerView}>
          <Text style={Styles.bannerText}>
            Appointment is starting in 2 mins
          </Text>
        </View>
        {/* Consultation cards */}
        <View style={Styles.containerMain}>
          <View style={Styles.containerLabel}>
            <Text style={Styles.containerLabelText}>
              Consultation on 05, Apr, 21
            </Text>
          </View>
          <View style={Styles.cardContainerWrapper}>
            {cardDetails.map((item) => {
              return (
                <View style={Styles.cardContainer} key={item.id}>
                  <View style={Styles.cardHead}>
                    <View style={Styles.cardIcon}>
                      <Ionicons name="body" size={15} />
                    </View>
                    <View style={Styles.cardName}>
                      <Text style={Styles.cardNameText}>{item.name}</Text>
                    </View>
                  </View>
                  {/* <View style={Styles.separator}/> */}
                  <View style={Styles.cardFooter}>
                    <View style={Styles.footerIcon}>
                      <Ionicons name="add" size={15} color={'#247470'} />
                    </View>
                    <View style={Styles.footerOption}>
                      <Text style={Styles.footerText}>New</Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
          <View style={Styles.footerButtons}>
            {/* <View style={Styles.btnContainer}> */}
              <TouchableOpacity style={Styles.btnSec}>
                <Text style={Styles.btnSecText}>CANCEL</Text>
              </TouchableOpacity>
            {/* </View> */}
            {/* <View style={Styles.btnContainer}> */}
              <TouchableOpacity style={Styles.btnPrimary}>
                <Text style={Styles.btnPrimaryText}>MARK AS COMPLETE</Text>
              </TouchableOpacity>
            {/* </View> */}
          </View>
        </View>
      </ScrollView>
    );
}
export default StartConsultation;