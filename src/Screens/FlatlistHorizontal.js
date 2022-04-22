import React,{useState, useEffect} from 'react';
import {View, Text, FlatList, ScrollView, StyleSheet}  from 'react-native';
import { 
    widthPercentageToDP as wp ,
    heightPercentageToDP as hp} from 'react-native-responsive-screen';

import axios from 'axios';
const FlatlistHorizontal = () =>{
    const [patientData, setPatientData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      const fetchPatient = async () => {
        setLoading(true);
        await axios
          .get('http://localhost:3000/Patient/')
          .then((response) => setPatientData(response.data))
          .catch((err) => console.debug(err));
      };
      fetchPatient();

      return () => {
        setLoading(false);
      };
    }, []);

    // const renderList = ({item}) =>{
    //     return(
    //         <View style={Styles.itemCard}>
    //             <View style={Styles.renderHead}>
    //                 <Text style={Styles.nameText}>{item.name}</Text>
    //             </View>
    //             <View style={Styles.aboutContainer}>
    //                 <View style={Styles.col1}>
    //                     <Text style={Styles.itemDetails}>{item.age}</Text>
    //                 </View>
    //                  <View style={Styles.col1}>
    //                     <Text style={Styles.itemDetails}>{item.gender}</Text>
    //                 </View>
    //                  <View style={Styles.col1}>
    //                     <Text style={Styles.itemDetails}>{item.location}</Text>
    //                 </View>
    //             </View>
    //             <View style={Styles.messageContainer}>
    //                 <Text style={Styles.messageText}>This data was fetched by Axios</Text>
    //             </View>
    //         </View>
    //     )
    // }
    return (
      <ScrollView>
        <View style={Styles.wrapperContainer}>
          <View style={Styles.containerMain}>
            <View style={Styles.containerHead}>
              <Text style={Styles.textHeader}>A horizontal Map</Text>
            </View>

            <View style={Styles.listContainer}>
              {/* <FlatList
                            // horizontal
                            data={patientData}
                            renderItem={renderList}
                            keyExtractor={item=> item.id}
                            numColumns={2}
            /> */}

              {patientData.map((item) => {
                return (
                  <View style={Styles.itemCard} key={item.id}>
                    <View style={Styles.renderHead}>
                      <Text style={Styles.nameText}>{item.name}</Text>
                    </View>
                    <View style={Styles.aboutContainer}>
                      <View style={Styles.col1}>
                        <Text style={Styles.itemDetails}>{item.age}</Text>
                      </View>
                      <View style={Styles.col1}>
                        <Text style={Styles.itemDetails}>{item.gender}</Text>
                      </View>
                      <View style={Styles.col1}>
                        <Text style={Styles.itemDetails}>{item.location}</Text>
                      </View>
                    </View>
                    <View style={Styles.messageContainer}>
                      <Text style={Styles.messageText}>
                        This data was fetched by Axios
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    );
}
const Styles = StyleSheet.create({
  wrapperContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  containerMain: {
    flex: 1,
    marginHorizontal: wp('5%'),
    marginVertical: hp('5%'),
    // backgroundColor: 'red',
  },
  listContainer: {
    // alignItems:'center',
    // paddingBottom:hp('12%'),
    // backgroundColor: 'red',
    flex: 1,
    flexWrap:'wrap',
    flexDirection:'row',
    alignContent:'flex-start',
  },
  textHeader: {
    fontFamily: 'Poppins',
    fontWeight: '900',
    fontSize: wp('4%'),
    color: '#000',
    marginVertical: hp('3%'),
    paddingLeft: wp('2%'),
  },
  nameText: {
    fontWeight: '600',
    fontSize: wp('6%'),
    color: '#000',
    paddingLeft: wp('2%'),
    paddingTop: hp('3%'),
  },
  itemCard: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
    marginHorizontal: wp('1%'),
    marginVertical: hp('1%'),
    width: wp('40%'),
    height: hp('20%'),
    // backgroundColor: 'red',
  },
  renderedHead: {
    marginLeft: wp('2%'),
  },
  aboutContainer: {
    flexDirection: 'row',
  },
  itemDetails: {
    color: '#000',
    opacity: 0.5,
    paddingHorizontal: wp('0.5%'),
    paddingLeft: wp('3%'),
  },
  messageContainer: {
    flex: 1,
    paddingLeft: wp('2.5%'),
    paddingTop: hp('2.5%'),
  },
  messageText: {
    color: '#000',
    fontSize: wp('4%'),
  },
});
export default FlatlistHorizontal;