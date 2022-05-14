/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TextInput,StyleSheet, TouchableOpacity, SafeAreaView, Button} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from '../AddPatient/Style';
import { ScrollView } from 'react-native-gesture-handler';

const InvestigationForm = ({navigation}) =>{
    // const [select, setSelect] = useState('');
    const [labTest, setLabTest] = useState('');
    const [custom , setCustom] = useState(false);
    const [instruction, setInstruction] = useState('Before Food');
    const selectionInstruction  = {
        item1: 'Before Food',
        item2: 'After Food',
        item3: 'Empty Stomach', 
    }

    const handleInstrucion  = (item) =>{
        setInstruction(item);
    };

    return (
      <SafeAreaView>
        <ScrollView>
          <View style={Styles.containerMain}>
            {/* input form */}
            <View style={Styles.formInput}>
              <View style={Styles.formLabel}>
                <Text style={Styles.labelText}>
                  Lab Test <Text style={Styles.isRequired}>*</Text>
                </Text>
              </View>
              <View style={Styles.inputField}>
                <TextInput
                  defaultValue={labTest}
                  onChangeText={() => setLabTest(labTest)}
                  style={Styles.input}
                />
              </View>
            </View>
            {/* Instructions */}
            <View style={Styles.titleLabel}>
              <Text style={Styles.titleText}>Instructions</Text>
            </View>
            <View style={Styles.instructionsContainer}>
              <View style={Styles.row}>
                <TouchableOpacity
                  style={
                    instruction === 'Before Food'
                      ? Styles.SelectedItem
                      : Styles.item1
                  }
                  onPress={() => handleInstrucion(selectionInstruction.item1)}>
                  <Text style={Styles.itemText}>Before Food</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    instruction === 'After Food'
                      ? Styles.SelectedItem
                      : Styles.item2
                  }
                  onPress={() => handleInstrucion(selectionInstruction.item2)}>
                  <Text style={Styles.itemText}>After Food</Text>
                </TouchableOpacity>
              </View>
              <View style={Styles.row}>
                <TouchableOpacity
                  style={
                    instruction === 'Empty Stomach'
                      ? Styles.SelectedItem
                      : Styles.item1
                  }
                  onPress={() => handleInstrucion(selectionInstruction.item3)}>
                  <Text style={Styles.itemText}>Empty Stomach</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={custom ? Styles.SelectedItem : Styles.item2}
                  onPress={() => setCustom(!custom)}>
                  <Text style={Styles.itemText}>Custom Instruction</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* custom instruction input */}
            <View style={Styles.formInput}>
              <View style={Styles.formLabel}>
                <Text style={Styles.labelText}>Custom Instruction</Text>
              </View>
              <View style={Styles.inputField}>
                <TextInput
                  editable={custom}
                  onChangeText={() => setInstruction(instruction)}
                  style={Styles.input}
                />
              </View>
            </View>
            {/* breakLine */}
            <View style={Styles.breakLine} />
            <View style={styles.btnPrimary}>
              <Button
                title="Go to Invoices"
                onPress={() => navigation.navigate('InvoiceScreen')}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}


const Styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  // },
  containerMain: {
    flex: 1,
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('5%'),
    backgroundColor: '#fff',
  },
  labelText: {
    fontFamily: 'Roboto',
    fontSize: wp('4%'),
    fontWeight: '400',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000',
    opacity: 0.4,
  },
  formInput: {
    marginVertical: hp('2%'),
  },
  formLabel: {
    position: 'absolute',
    zIndex: 100,
    backgroundColor: '#fff',
    left: wp('2%'),
    top: wp('-2%'),
    paddingHorizontal: wp('2%'),
  },
  isRequired: {
    color: '#FF0000',
    opacity: 1,
    fontWeight: '400',
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#BEC2C4',
    borderRadius: 6,
  },
  input: {
    color: '#000',
    paddingLeft: wp('2%'),
  },
  titleLabel: {
    marginTop: hp('3%'),
    marginHorizontal: wp('1%'),
  },
  titleText: {
    fontFamily: 'Poppins',

    fontWeight: '400',
    fontSize: wp('4%'),
    lineHeight: wp('4%'),
    color: '#000',
  },
  instructionsContainer: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp('2%'),
  },
  item1: {
    width: wp('42%'),
    height: hp('7%'),
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item2: {
    width: wp('42%'),
    height: hp('7%'),
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    color: '#333333',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: wp('4%'),
    lineHeight: wp('5%'),
  },
  SelectedItem: {
    borderColor: '#247470',
    width: wp('42%'),
    height: hp('7%'),
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0FFFE',
  },
  breakLine: {
    borderWidth: 0.5,
    borderColor: '#c6cacb',
    marginVertical: hp('2%'),
    marginHorizontal: wp('-5%'),
  },
});
export default InvestigationForm;
