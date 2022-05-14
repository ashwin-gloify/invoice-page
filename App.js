/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './src/redux/Store';
import HeaderAddPatient from './src/Components/Header/HeaderAddPatient';
import Index from './Screens/InvoiceScreen/Index';
// import HeaderComponent from './src/Components/HeaderComponent';
import AddPatient from './src/Screens/AddPatient/AddPatient';
import ConsultationList from './src/Screens/Consultation/ConsultationList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {getHeaderTitle} from '@react-navigation/elements';
import InvestigationForm from './src/Screens/Investigations/InvestigationForm';
import { TabItem } from '@rneui/base/dist/Tab/Tab.Item';
// import { Tab } from '@rneui/base';
import Tab1 from './src/Screens/tab1/Tab1';
import Tab2 from './src/Screens/tab2/Tab2';
import FlatConsultation from './src/Screens/Consultation/FlatlistConsultation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SectionlistConsultation  from './src/Screens/Consultation/SectionlistConsultation';
import Profile from './src/Components/Profile';
import ComponentA from './src/Components/ComponentA';
import TestComponent from './src/Components/TestComponent';
import ConsultationMain from './src/Screens/Consultation/ConsultationMain';
import EditInvoice from './src/Screens/EditInvoice/EditInvoice';
import FlatlistHorizontal from './src/Screens/FlatlistHorizontal';
import StartConsultation from './src/Screens/Consultation/startConsultation/StartConsultation';
import CombinedReducers from './src/Screens/ReduxPractice/CombinedReducers';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {

  const ConsultationNav = () =>{
    return (
      <Stack.Navigator
        initialRouteName="StartConsultation"
        options={{headerShown: false}}>
        <Stack.Screen
          name="SectionListConsultation"
          component={SectionlistConsultation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          options={{headerShown: true}}
          component={Profile}
        />
        <Stack.Screen
          name="StartConsultation"
          options={{headerShown: false}}
          component={StartConsultation}
        />
      </Stack.Navigator>
    );
  };

  const DrawerNav = () =>{
    return (
      // <NavigationContainer>
      <Drawer.Navigator initialRouteName="AddPatient">
        <Drawer.Screen name="AddPatient" component={AddPatient} />
        <Drawer.Screen
          name="Consultation"
          options={{headerShown: false}}
          component={ConsultationNav}
        />
        <Drawer.Screen
          name="ConsultationMain"
          component={ConsultationMain}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="FlatListConsultation"
          component={FlatConsultation}
        />
        <Drawer.Screen name="ConsultationList" component={ConsultationList} />
        <Drawer.Screen name="Tabs" component={TabNav} />
        <Drawer.Screen
          name="EditInvoice"
          options={{headerShown: false}}
          component={EditInvoice}
        />
        <Drawer.Screen
          name="FlatlistHorizontal"
          options={{headerShown: false}}
          component={FlatlistHorizontal}
        />
        <Drawer.Screen
          name="CombinedRedux"
          options={{headerShown: false}}
          component={CombinedReducers}
        />
      </Drawer.Navigator>
      // </NavigationContainer>
    );
  };

  const TabNav = () =>{
    return (
      // <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{headerShown: false}}
          name="tab1"
          component={Tab1}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="tab2"
          component={Tab2}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="tab3"
          component={ComponentA}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="tab4"
          component={TestComponent}
        />
      </Tab.Navigator>
      // </NavigationContainer>
    );
  };
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={DrawerNav}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="InvoiceScreen"
          component={Index}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddPatient"
          component={AddPatient}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Investigation"
          component={InvestigationForm}
          option={{title: 'Investigation Form'}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
