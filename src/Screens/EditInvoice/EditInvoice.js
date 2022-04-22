import React from 'react';
import { ScrollView,View, TouchableOpacity, Text , TextInput} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Styles from './Styles';


const EditInvoice = () =>{
    return (
      <SafeAreaProvider>
        <ScrollView>
          <View style={Styles.wrapperContainer}>
            <View style={Styles.containerMain}>
              <View style={Styles.headerContainer}>
                <View style={Styles.iconContainer}>
                  <AntDesign name="arrowleft" size={25} color={'#000'} />
                </View>
                <Text style={Styles.headerText}>Edit Invoice </Text>
              </View>

              <View style={Styles.inputContainer}>
                <View style={Styles.inputLabel}>
                  <Text style={Styles.labelText}>Invoice Date</Text>
                </View>
                <View style={Styles.textInputContainer}>
                  <TextInput
                    style={Styles.textInput}
                    placeholder={'27/05/1997'}
                    placeholderTextColor={'#000'}
                  />
                </View>
                <View style={Styles.iconContainer2}>
                  <Feather name="calendar" size={25} color={'#247470'} />
                </View>
              </View>
              <View style={Styles.editableForm}>
                <View style={Styles.iconContainer3}>
                  <AntDesign name="minus" size={25} color={'#247470'} />
                </View>
                <View style={Styles.inputContainer}>
                  <View style={Styles.inputLabel}>
                    <Text style={Styles.labelText}>Treatment Name</Text>
                  </View>
                  <View style={Styles.textInputContainer}>
                    <TextInput
                      style={Styles.textInput}
                      placeholder={'Consultation'}
                      placeholderTextColor={'#000'}
                    />
                  </View>
                </View>
                <View style={Styles.inputContainer}>
                  <View style={Styles.inputLabel2}>
                    <Text style={Styles.labelText2}>Unit</Text>
                  </View>
                  <View style={Styles.textInputContainer}>
                    <TextInput
                      style={Styles.textInput}
                      placeholder={'1'}
                      placeholderTextColor={'#000'}
                    />
                  </View>
                </View>
                <View style={Styles.inputContainer}>
                  <View style={Styles.inputLabel2}>
                    <Text style={Styles.labelText2}>Amount</Text>
                  </View>
                  <View style={Styles.textInputContainer}>
                    <TextInput
                      style={Styles.textInput}
                      keyboardType="numeric"
                      placeholder={'1000'}
                      placeholderTextColor={'#000'}
                    />
                  </View>
                </View>
                {/* Discount  */}
                <View style={Styles.inputContainer}>
                  <View style={Styles.inputLabel2}>
                    <Text style={Styles.labelText2}>Discount</Text>
                  </View>
                  <View style={Styles.twoContainers}>
                    <View style={Styles.textInputContainer1}>
                      <TextInput
                        style={Styles.textInput}
                        keyboardType="numeric"
                        placeholder={'100'}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={Styles.textInputContainer2}>
                      <TextInput
                        style={Styles.textInputSelector}
                        // keyboardType="numeric"
                        placeholder={'₹'}
                        placeholderTextColor={'#000'}
                        editable={false}
                      />
                    </View>
                    <View style={Styles.iconContainer5}>
                      <Entypo
                        name="triangle-down"
                        size={25}
                        color={'#A4A4A4'}
                      />
                    </View>
                  </View>
                </View>
                <View style={Styles.inputContainer}>
                  <View style={Styles.inputLabel2}>
                    <Text style={Styles.labelText2}>Tax</Text>
                  </View>
                  <View style={Styles.textInputContainer}>
                    <TextInput
                      style={Styles.textInput}
                      // keyboardType="numeric"
                      placeholder={'GST'}
                      placeholderTextColor={'#000'}
                      editable={false}
                    />
                  </View>
                  <View style={Styles.iconContainer4}>
                    <Entypo name="triangle-down" size={25} color={'#A4A4A4'} />
                  </View>
                </View>
                <View style={Styles.inputContainer}>
                  <View style={Styles.inputLabel2}>
                    <Text style={Styles.labelText2}>Total (₹) </Text>
                  </View>
                  <View style={Styles.textInputContainer}>
                    <TextInput
                      style={Styles.textInput}
                      keyboardType="numeric"
                      placeholder={'950'}
                      placeholderTextColor={'#000'}
                    />
                  </View>
                </View>
              </View>
              <View style={Styles.colItem}>
                <View style={Styles.col1} />
                <View style={Styles.col2}>
                  <View style={Styles.iconCol2}>
                    <AntDesign name="pluscircle" color={'#247470'} size={25} />
                  </View>
                  <View style={Styles.textViewCol2}>
                    <Text style={Styles.textCol2}>Add More </Text>
                  </View>
                </View>
              </View>
              {/* Bill area */}
              <View style={Styles.receiptContainer}>
                <View style={Styles.receiptHead}>
                  <Text style={Styles.receiptHeadText}>Bill Details</Text>
                </View>
                <View style={Styles.receiptItem}>
                  <View style={Styles.receiptCol1}>
                    <Text style={Styles.receiptLabel}>Total Cost (₹)</Text>
                  </View>
                  <View style={Styles.receiptCol2}>
                    <Text style={Styles.receiptAmount}>₹1000</Text>
                  </View>
                </View>
                <View style={Styles.receiptSeparator} />
                <View style={Styles.receiptItem}>
                  <View style={Styles.receiptCol1}>
                    <Text style={Styles.receiptLabel}>Total Discount (₹)</Text>
                  </View>
                  <View style={Styles.receiptCol2}>
                    <Text style={Styles.receiptAmount}>₹100</Text>
                  </View>
                </View>
                <View style={Styles.receiptSeparator} />
                <View style={Styles.receiptItem}>
                  <View style={Styles.receiptCol1}>
                    <Text style={Styles.receiptLabel}>Total Tax (₹)</Text>
                  </View>
                  <View style={Styles.receiptCol2}>
                    <Text style={Styles.receiptAmount}>₹50</Text>
                  </View>
                </View>
                <View style={Styles.receiptSeparator} />
                <View style={Styles.receiptItem}>
                  <View style={Styles.receiptCol1}>
                    <Text style={Styles.receiptLabel}>Grand Total (₹)</Text>
                  </View>
                  <View style={Styles.receiptCol2}>
                    <Text style={Styles.receiptAmount}>₹950</Text>
                  </View>
                </View>
                <View style={Styles.receiptSeparator} />
                <View style={Styles.receiptItem}>
                  <View style={Styles.receiptCol1}>
                    <Text style={Styles.receiptHeadText}>Payable</Text>
                  </View>
                  <View style={Styles.receiptCol2}>
                    <Text style={Styles.receiptHeadText}>₹950</Text>
                  </View>
                </View>
                <View style={Styles.receiptSeparator} />
              </View>
              <View style={Styles.paymentContainer}>
                <View style={Styles.inputContainer}>
                  <View style={Styles.inputLabel2}>
                    <Text style={Styles.labelText3}>Mode of Payment</Text>
                  </View>
                  <View style={Styles.textInputContainer}>
                    <TextInput
                      style={Styles.textInput}
                      keyboardType="numeric"
                      placeholder={'By Cash'}
                      placeholderTextColor={'#000'}
                      editable={false}
                    />
                  </View>
                  <View style={Styles.iconContainer4}>
                    <Entypo name="triangle-down" size={25} color={'#A4A4A4'} />
                  </View>
                </View>
                <View style={Styles.inputContainer}>
                  <View style={Styles.inputLabel2}>
                    <Text style={Styles.labelText3}>Payable (₹)</Text>
                  </View>
                  <View style={Styles.textInputContainer}>
                    <TextInput
                      style={Styles.textInput}
                      keyboardType="numeric"
                      placeholder={'950'}
                      placeholderTextColor={'#000'}
                    />
                  </View>
                </View>
                <View style={Styles.inputContainer}>
                  <View style={Styles.inputLabel2}>
                    <Text style={Styles.labelText3}>From Advance (₹) </Text>
                  </View>
                  <View style={Styles.textInputContainer}>
                    <TextInput
                      style={Styles.textInput}
                      keyboardType="numeric"
                      placeholder={'100'}
                      placeholderTextColor={'#000'}
                    />
                  </View>
                </View>
                <View style={Styles.inputContainer}>
                  <View style={Styles.inputLabel2}>
                    <Text style={Styles.labelText3}>Pay Now (₹)</Text>
                  </View>
                  <View style={Styles.textInputContainer}>
                    <TextInput
                      style={Styles.textInput}
                      keyboardType="numeric"
                      placeholder={'850'}
                      placeholderTextColor={'#000'}
                    />
                  </View>
                </View>
              </View>
              <View style={Styles.btnView}>
                <TouchableOpacity style={Styles.btnPrimary}>
                  <Text style={Styles.btnTitle}>Create Invoice</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    );
}
export default EditInvoice;  