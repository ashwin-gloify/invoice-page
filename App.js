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
import FabModule from './src/Components/FabModule/FabModule';
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
      <FabModule />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
