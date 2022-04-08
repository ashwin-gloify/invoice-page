import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  StyleSheet,
} from 'react-native';
import HeaderAddPatient from './src/Components/Header/HeaderAddPatient';
// import Index from './Screens/InvoiceScreen/Index';
// import HeaderComponent from './src/Components/HeaderComponent';
import AddPatient from './src/Screens/AddPatient/AddPatient';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <HeaderAddPatient />
        {/* <HeaderComponent /> */}
        <View style={styles.container}>
          {/* <Index /> */}
          <AddPatient />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
