import React from 'react';
import {SafeAreaView, StatusBar, View, Text, StyleSheet} from 'react-native';
import Header from './components/Header';
import PatientInformation from './components/PatientInformation';
import InvoiceHeader from './components/InvoiceHeader';
import InvoiceDetails from './components/InvoiceDetails';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Header />
      <View style={styles.container}>
        <PatientInformation />
        <InvoiceHeader />
        <InvoiceDetails />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
  },
});

export default App;
