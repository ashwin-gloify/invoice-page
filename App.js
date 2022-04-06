import React from 'react';
import {SafeAreaView,ScrollView, StatusBar, View, StyleSheet} from 'react-native';
import HeaderComponent from './src/Components/HeaderComponent';
import Index from './Screens/InvoiceScreen/Index';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <HeaderComponent />
        <View style={styles.container}>
          <Index />
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
