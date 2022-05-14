/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import UserData from '../../Data/UserData';
import store from './../../redux/Store';
import Styles from './Styles';
import FabModule from '../../Components/FabModule/FabModule';
import {delUser} from '../../redux/actions/delUser';
// import { useNavigation } from '@react-navigation/native';

const ConsultationList = ({navigation}) => {
  // const navigation = useNavigation();
  //fetching state from store
  const data = useSelector((state) => state.PatientDataReducer);
  // console.log(data);
  // const data = useSelector(state=> state.PatientDataReducer);
  // console.log(data);
  const dispatch = useDispatch();
  const [selectData, setSelectData] = useState([]);
  //adding a local state as effect
  useEffect(() => {
    setSelectData(data);
  }, [data]);
  console.log(selectData);
  return (
    <View style={Styles.containerMain}>
      <View style={Styles.containerHead}>
        <Text style={Styles.headText}>Consult Today</Text>
      </View>
      <ScrollView>
        <View style={Styles.listContainer}>
          {/* mapping elements of data to render  */}
          {selectData.map((item, index) => {
            return (
              <TouchableOpacity
                style={Styles.patientContainer}
                key={index}
                onPress={() => dispatch(delUser(item.id))}>
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
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
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
export default ConsultationList;
