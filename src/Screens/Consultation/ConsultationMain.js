import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  SectionList,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import sectionData from '../../Data/sectionData';
import FabModule from '../../Components/FabModule/FabModule';
import UserData from '../../Data/UserData';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
import TextInputComponent from '../../Components/TextInputComponent';
import { SearchBar } from 'react-native-screens';

const ConsultationMain = ({route, navigation}) => {
    const [isSearch, setIsSearch] = useState(false);
    const [patientData, setPatientData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchName, setSearchName]  = useState('');
    const [sectionsData, setSectionsData]   = useState([]);
    const [modelData, setModelData]  = useState([]);
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


useEffect(()=>{
  let patientModel = [];
    const DataModel = () =>{
        let tempObj = {};
        patientData.map((item) => {
          if (tempObj[item.date]) {
            tempObj[item.date].push(item);
          } else {
            tempObj[item.date] = [];
            tempObj[item.date].push(item);
          }
          patientModel.push(tempObj);
        });
      
      
    }
    DataModel();
    setSectionsData(patientModel);
},[patientData])


useEffect(()=>{
  let dataSection = [];
  let keySection = [];
  let sectionArr =[];
  
  sectionsData.map(item=>{
     keySection = Object.keys(item);
     dataSection = Object.values(item);
     
  } )
  // console.log(keySection);
  // console.log(dataSection);
  for(let i = 0; i<keySection.length;  i++){
    let tempObj = {};
     tempObj['date'] = keySection[i];
     tempObj['data'] = dataSection[i];
    sectionArr.push(tempObj);
    // console.log(tempObj);
  }
  
  setModelData(sectionArr);

},[sectionsData])


//     const DataModel = () =>{
//         let tempObj = {};
//         let patientModel = [];
//         patientData.map((item) => {
//           if (tempObj[item.date]) {
//             tempObj[item.date].push(item);
//           } else {
//             tempObj[item.date] = [];
//             tempObj[item.date].push(item);
//           }
//         });
//         patientModel.push(tempObj);
//         console.log(patientModel[0]);

//       setSectionsData(patientModel);
     
//     }
// DataModel();
    // console.log(sectionsData);
      



  

    
  const handleNameSearch = () =>{
    const searchResults =  patientData.filter(item => item.name.toLowerCase().includes(searchName.toLowerCase()) );
    setIsSearch(false);
    setSearchData(searchResults);
  }
  

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


  // const RenderSectionList = () =>{
  //   console.log(sectionsData.map(item=> Object.keys(item)))
  //   return (

  //   )

  // }
  // RenderSectionList();
  return (
    <View style={Styles.containerMain}>
      <View style={Styles.listContainer}>
        <View style={Styles.headerContainer}>
          <View style={Styles.headerTabs}>
            <View style={Styles.headerItems}>
              <Ionicons
                name="md-mail-open"
                style={Styles.iconStyle}
                size={25}
              />
            </View>
            <View style={Styles.headerItems}>
              <Feather name="calendar" style={Styles.iconStyle} size={25} />
            </View>
            <View style={Styles.headerItems}>
              <Feather name="bell" style={Styles.iconStyle} size={25} />
            </View>
            <View style={Styles.headerItems}>
              <Feather name="settings" style={Styles.iconStyle} size={25} />
            </View>
          </View>
          <View style={Styles.headerSearch}>
            <TextInput
              style={Styles.searchBar}
              placeholder="Search Name / Mobile "
              placeholderTextColor="#C4C4C4"
              placeholderTextStyle={Styles.placeholderText}
              defaultValue={searchName}
              onChangeText={(text) => {
                setIsSearch(true);
                setSearchName(text);
                handleNameSearch();
              }}
            />

            <View style={Styles.searchIcon}>
              <Feather name="search" style={Styles.iconStyle} size={20} />
            </View>
          </View>
        </View>
        {searchName.length > 0  ? (
            <FlatList 
              data={searchData} 
              renderItem={renderList}
              keyExtractor={item=> item.id} 
            />
         
        ) : (
        <SectionList
          sections={modelData}
          renderItem={renderList}
          keyboardShouldPersistTaps="always"
          renderSectionHeader={({section:{date} }) => (
            <Text style={Styles.headText}>{date}</Text>
          )}
        />)}
      </View>
      <FabModule />
    </View>
  );
};

const Styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    marginHorizontal: wp('5%'),
  },

  headText: {
    color: '#000',
    fontWeight: '600',
    fontFamily: 'Poppins',
    fontSize: wp('8%'),
    lineHeight: hp('5%'),
  },
  listContainer: {
    paddingBottom: hp('15%'),
  },

  patientContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: hp('1.5%'),
    marginHorizontal: wp('1%'),
    alignItems: 'center',
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
    width: wp('13%'),
    height: hp('6.5%'),
    borderRadius: 20,
  },
  details: {
    flexDirection: 'row',
  },
  detailsView: {
    paddingHorizontal: wp('0.5%'),
  },
  detailsText: {
    fontSize: wp('3.5%'),
    color: '#9A9A9A',
    lineHeight: hp('2%'),
    fontWeight: '400',
    fontFamily: 'Poppins',
  },
  nameText: {
    fontWeight: '600',
    fontSize: wp('4%'),
    lineHeight: hp('2.6%'),
    color: '#000',
    fontFamily: 'Poppins',
  },
  userDetail: {
    paddingHorizontal: wp('4%'),
  },
  col2: {
    alignItems: 'flex-end',
  },
  col2Text: {
    fontWeight: '600',
    fontSize: wp('3.5%'),
    lineHeight: hp('2.1%'),
    color: '#247470',
    fontFamily: 'Poppins',
  },
  iconStyle: {
    color: '#C2B4B4',
  },
  headerContainer: {
    height: hp('15%'),
  },
  headerTabs: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: hp('1%'),
  },
  searchBar: {
    borderColor: '#C2B4B4',
    borderRadius: 15,
    height: hp('5%'),
    marginVertical: hp('1%'),
    backgroundColor: '#E5E5E5',
    paddingHorizontal: wp('8.5%'),
    color: '#000',
  },
  placeholderText: {
    color: '#c4c4c4',
    fontWeight: 300,
    fontFamily: 'Poppins',
  },
  searchIcon: {
    position: 'absolute',
    top: hp('2.25%'),
    zIndex: 100,
    marginLeft: wp('2%'),
  },
});

export default ConsultationMain;
