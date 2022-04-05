/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const InvoiceDetails = () => {
  const Data = [
    {
      id: 1,
      treatments: 'Consultation Charges',
      UnitCost: 250,
      Qty: 1,
    },
    {
      id: 2,
      treatments: 'Dressing for bleeding',
      UnitCost: 500,
      Qty: 1,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.invoiceDetailsTable}>
        <View style={styles.invoiceDetailsTableRowOne}>
          <Text style={styles.RowOneText}>No</Text>
          <Text style={styles.RowOneText}>Treatments & Products</Text>
          <Text style={styles.RowOneText}>Unit Cost INR</Text>
          <Text style={styles.RowOneText}>QTY</Text>
          <Text style={styles.RowOneText}>Total Cost INR</Text>
        </View>
        <View style={styles.invoiceDetailsTableRowTwo}>
          {Data.map(item =>
            <>
                <Text style={styles.RowTwoText}>{item.id}</Text>
                <Text style={styles.RowTwoText}>{item.treatments}</Text>
                <Text style={styles.RowTwoText}>
                    {item.UnitCost}</Text>
                <Text style={styles.RowTwoText}>{item.Qty}</Text>
                <Text style={styles.RowTwoText}>{item.UnitCost * item.Qty}</Text>
            </>
          )}
        </View>
        <View style={styles.invoiceDetailsTableRowThree}>
            <Text style={styles.RowThreeText}>Total</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    invoiceDetailsTable:{
        flexDirection:'column',
    },
    invoiceDetailsTableRowOne:{
        padding: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: '#b9bab8',
    },
    invoiceDetailsTableRowTwo:{
        padding: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
        BorderBottom:1,
    },
    RowOneText:{
        width: '20%',
        color:'#000',
        textAlign:'center',
    },
    RowTwoText:{
        width: '20%',
        color:'#000',
        textAlign:'center',
    },

});

export default InvoiceDetails;