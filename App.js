import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Text,
  StyleSheet,
  Modal,
} from 'react-native';
// import HeaderAddPatient from './src/Components/Header/HeaderAddPatient';
// import Index from './Screens/InvoiceScreen/Index';
// import HeaderComponent from './src/Components/HeaderComponent';
// import AddPatient from './src/Screens/AddPatient/AddPatient';
import ConsultationList from './src/Screens/Consultation/ConsultationList';
import {FAB} from '@rneui/base/dist/FAB';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import InvestigationForm from './src/Screens/Investigations/InvestigationForm';
const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        {/* <HeaderAddPatient /> */}
        {/* <HeaderComponent /> */}
        <View style={styles.container}>
          {/* <Index /> */}
          {/* <AddPatient /> */}
          <ConsultationList />
          {/* <InvestigationForm /> */}
        </View>
      </ScrollView>
      <View style={styles.FabView}>
        <FAB
          icon={{name: 'add', color: 'white'}}
          color="#247470"
          style={styles.FabStyle}
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
        <View style={styles.ModalContainer}>
          <View style={styles.optionContainer}>
            <View style={styles.touchableOption}>
              <View style={styles.optionButton}>
                <AntDesign name="adduser" size={20} style={styles.icons} />
              </View>
              <View style={styles.optionText}>
                <Text style={styles.textStyle}>Add Patient</Text>
              </View>
            </View>
            <View style={styles.touchableOption}>
              <View style={styles.optionButton}>
                <AntDesign name="calendar" size={25} style={styles.icons} />
              </View>
              <View style={styles.optionText}>
                <Text style={styles.textStyle}>Add Appointment</Text>
              </View>
            </View>
          </View>
          <View style={styles.FabView}>
            <FAB
              icon={{name: 'close', color: 'white'}}
              color="#247470"
              style={styles.FabStyle}
              onPress={() => {
                setVisible(!visible);
              }}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  FabView: {
    position: 'absolute',
    left: '80%',
    top: '90%',
    zIndex: 100,
    height: 68,
    width: 68,
  },
  FabStyle: {
    shadowColor: '#93BEBC',
    color: '#247470',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  touchableOption: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '10%',
    width: '60%',
  },
  ModalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundOpacity: 0.4,
  },
  optionContainer: {
    left: '30%',
    top: '25%',
    marginTop: '90%',
  },
  icons: {
    color: '#fff',
  },
  textStyle: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#fff',
  },
  optionButton: {
    flex: 1,
    width: 80,
    height: 80,
    backgroundColor: '#247470',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  optionText: {
    flex: 2,
    backgroundColor: '#247470',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    height: 50,
  },

});

export default App;
