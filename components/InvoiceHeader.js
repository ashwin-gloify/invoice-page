/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Invoiceheader = () => {
  return (
   <View style={styles.headerContainerMain}>
       <View style={styles.invoiceDetailsTop}>
            <Text style={styles.invoiceDetailsText}> By: Dr. Umesh Vaidya</Text>
            <Text style={styles.invoiceText}> Invoice number :  INV15 </Text>
       </View>
        <View style={styles.invoiceDetailsBottom}>
            <Text style={styles.invoiceHeading}> Invoices  </Text>
            <Text style={styles.invoiceText}> Date: 26/07/2021 </Text>
        </View>
    </View>
  );
};


const styles =  StyleSheet.create({
    headerContainerMain: {
        
        padding: 10,
        flexDirection:'column',
        justifyContent: 'space-evenly',
    },
    invoiceDetailsTop:{
        flexDirection:'row',
        justifyContent:'space-between',
        // paddingBottom:5,
    },
    invoiceDetailsBottom:{
        flexDirection:'row',
        justifyContent:'space-between',
        // paddingTop:5,
    },
    invoiceDetailsText:{
        fontSize:17,
        fontWeight:'bold',
        color: '#000',
    },
    invoiceText:{
        fontSize:17,
        color: '#000',
    },
    invoiceHeading:{
        fontSize:25,
        color: '#2aab03',
    },
});

export default Invoiceheader;