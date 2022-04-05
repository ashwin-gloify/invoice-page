/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PatientInformation = () => (
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
  </View>
);

const styles = StyleSheet.create({
  contactsContainerMain: {
  
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contactsContainerLeft: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderLeftWidth: 0,
  },
  contactsContainerRight: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRightWidth: 0,
  },
  contactText: {
    fontSize: 17,
    color: '#000',
  },
  contactTextRight: {
    fontSize: 17,
    textAlign: 'right',
    color: '#000',
  },
  contact: {
    TextAlign: 'right',
    fontSize: 17,
    color: '#000',
  },
  historyContainer: {
    marginTop: 5,
    padding: 10,
    borderBottomWidth: 1,
  },
  nameText: {
    fontSize: 17,
    color: '#000',
  },
  emailContact: {
    fontSize: 17,
    color: '#000',
  },
  historyText: {
    fontSize: 17,
    color: '#000',
  },
});
export default PatientInformation;
