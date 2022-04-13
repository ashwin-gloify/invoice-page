/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../../src/Screens/Consultation/Styles';
import  styles   from './Styles';

const Index = () => {

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
    <View>
      <View style={styles.contactsContainerMain}>
        <View style={styles.contactsContainerLeft}>
          <Text style={styles.contactText}>
            Dr. Umesh Vaidya, Pharmacologist, Family physician, M.B.B.S, in
            Health Education FRCP
          </Text>
        </View>

        <View style={styles.contactsContainerRight}>
          <Text style={styles.contactTextRight}>
            Shiv Vdananda clinic Satellite, Ahmaedabad, Gujrat, India
          </Text>
          <Text style={[styles.contact, styles.contactTextRight]}>
            9714980101
          </Text>
        </View>
      </View>
      <View style={styles.historyContainer}>
        <Text style={styles.nameText}>Sagar Rathod</Text>
        <Text style={styles.contact}>9714980101</Text>
        <Text style={styles.emailContact}>medeasysagar@gmail.com</Text>
        <Text style={styles.historyText}>
          Medical History: Acute Kidney Failure, Hypertension
        </Text>
      </View>
      {/* Invoice header */}
      <View style={styles.headerContainerMain}>
        <View style={styles.invoiceDetailsTop}>
          <Text style={styles.invoiceDetailsText}> By: Dr. Umesh Vaidya</Text>
          <Text style={styles.invoiceText}> Invoice number : INV15 </Text>
        </View>
        <View style={styles.invoiceDetailsBottom}>
          <Text style={styles.invoiceHeading}> Invoices </Text>
          <Text style={styles.invoiceText}> Date: 26/07/2021 </Text>
        </View>
      </View>
      {/* Invoice table */}
      <View style={styles.invoiceDetailsTable}>
        <View style={styles.invoiceDetailsTableRowOne}>
          <View style={styles.invoiceItems}>
            <Text style={styles.RowText}>No</Text>
          </View>
          <View style={styles.invoiceItems}>
            <Text style={styles.RowText}>Treatments & Products</Text>
          </View>
          <View style={styles.invoiceItems}>
            <Text style={styles.RowText}>Unit Cost INR</Text>
          </View>
          <View style={styles.invoiceItems}>
            <Text style={styles.RowText}>QTY</Text>
          </View>
          <View style={styles.invoiceItems}>
            <Text style={styles.RowText}>Total Cost INR</Text>
          </View>
        </View>
        <View style={styles.invoiceDetailsTableRowTwo}>
          {Data.map((item) => (
            <View style={styles.detailsRow} key={item.id}>
              <View style={styles.invoiceItems}>
                <Text style={styles.RowText}>{item.id}</Text>
              </View>
              <View style={styles.invoiceItems}>
                <Text style={styles.RowText}>{item.treatments}</Text>
              </View>
              <View style={styles.invoiceItems}>
                <Text style={styles.RowText}>
                  {parseFloat(item.UnitCost).toFixed(2)}
                </Text>
              </View>
              <View style={styles.invoiceItems}>
                <Text style={styles.RowText}>{item.Qty}</Text>
              </View>
              <View style={styles.invoiceItems}>
                <Text style={styles.RowText}>
                  {parseFloat(item.UnitCost * item.Qty).toFixed(2)}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.invoiceDetailsTableRowThree}>
          <View style={styles.invoiceItems}>
            <Text style={styles.RowText}>Total</Text>
          </View>
          {/* <View styles={styles.invoiceItems}>
                <Text style={styles.RowText}>100</Text>
              </View> */}
     
            <View style={styles.invoiceItems}>
              <Text style={styles.RowText}>750.00</Text>
            </View>
            <View style={styles.invoiceItems}>
              <Text style={styles.RowText}>2</Text>
            </View>
            <View style={styles.invoiceItems}>
              <Text style={styles.RowText}>750.00</Text>
            </View>
          
        </View>
        {/* Payment details Header */}
        <View style={styles.paymentHead}>
          <Text style={styles.invoiceHeading}>Payment Details</Text>
        </View>
        <View style={styles.paymentContianer}>
          <View style={styles.invoiceDetailsTableRowOne}>
            <View style={styles.invoiceItems}>
              <Text style={styles.RowText}>Date</Text>
            </View>
            <View style={styles.invoiceItems}>
              <Text style={styles.RowText}>Receipt Number</Text>
            </View>
            <View style={styles.invoiceItems}>
              <Text style={styles.RowText}>Mode of Payment</Text>
            </View>
            <View style={styles.invoiceItems}>
              <Text style={styles.RowText}>Amount Paid</Text>
            </View>
          </View>

          <View style={styles.paymentDetails}>
            <View style={styles.invoiceItems}>
              <Text style={styles.RowText}>26/07/2021</Text>
            </View>
            <View style={styles.invoiceItems}>
              <Text style={styles.RowText}>RCPT7057</Text>
            </View>
            <View style={styles.invoiceItems}>
              <Text style={styles.RowText}>Cash(0%)</Text>
            </View>
            <View style={styles.invoiceItems}>
              <Text style={styles.RowText}>750</Text>
            </View>
          </View>

          <View style={styles.invoiceDetailsTableRowOne}>
            <View style={styles.invoiceItems}>
              <Text style={styles.RowText}>Total</Text>
            </View>
            <View style={styles.invoiceItems}>
              <Text style={styles.RowText}>Mode of Payment Cash (0%)</Text>
            </View>
            <View style={styles.invoiceItems}>
              <Text style={styles.RowText}>Advance Recived Amount</Text>
            </View>
            <View style={styles.invoiceItems}>
              <Text style={styles.RowText}>Amount to Pay</Text>
            </View>
          </View>

          <View style={styles.paymentDetails}>
            <View style={styles.invoiceItems}>
              <Text style={styles.RowText}>750</Text>
            </View>
            <View style={styles.invoiceItems}>
              <Text style={styles.RowText}>0.00</Text>
            </View>
            <View style={styles.invoiceItems}>
              <Text style={styles.RowText}>-0.00</Text>
            </View>
            <View style={styles.invoiceItems}>
              <Text style={styles.RowText}>750</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};


export default Index;
