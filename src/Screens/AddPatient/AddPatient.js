/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Style';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';

const AddPatient = ({ navigation }) =>{
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');
  const [show, setShow] = useState(false);
  const [age, setAge] = useState('');
  const [email, setEmail] =  useState('');
  const [relation, setRelation] = useState('');
  const [careGender, setCareGender] = useState('');

  const handleCareGender = (item) =>{
    setCareGender(item);
  }
  const handleGender = (item) => {
    setGender(item);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.containerMain}>
          <View style={styles.inputContainer}>
            <View style={styles.labelViewInput}>
              <Text style={styles.labelText}>
                First Name <Text style={styles.textRequired}>*</Text>{' '}
              </Text>
            </View>
            <View style={styles.labelMatch}>
              <View style={styles.textInputStyle}>
                <TextInput
                  value={fName}
                  onChangeText={(e) => setFName(e.target.value)}
                  style={styles.input}
                />
              </View>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.labelViewInput}>
              <Text style={styles.labelText}>
                Last Name <Text style={styles.textRequired}>*</Text>{' '}
              </Text>
            </View>
            <View style={styles.labelMatch}>
              <View style={styles.textInputStyle}>
                <TextInput
                  value={lName}
                  onChangeText={(e) => setLName(e.target.value)}
                  style={styles.input}
                />
              </View>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={[styles.labelViewInput, styles.labelMobile]}>
              <Text style={styles.labelText}>
                Mobile Number<Text style={styles.textRequired}> *</Text>{' '}
              </Text>
            </View>
            <View style={styles.labelMatch}>
              <View style={styles.textInputStyle}>
                <TextInput
                  value={contact}
                  onChangeText={(e) => setContact(e.target.value)}
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>
          <View style={styles.textView}>
            <View style={styles.textLeft}>
              <Text style={styles.textHeader}>
                Gender <Text style={styles.textRequired}>*</Text>
              </Text>
            </View>
            <View style={styles.textRight} />
          </View>
          {/* Gender Cards */}
          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={
                gender === 'male'
                  ? styles.genderCardSelected
                  : styles.genderCard
              }
              onPress={() => handleGender('male')}>
              <View style={styles.card}>
                <View style={styles.iconContainer}>
                  <MaterialCommunityIcons
                    name="gender-male"
                    size={25}
                    style={gender === 'male' ? styles.iconStyle : styles.icon}
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text
                    style={
                      gender === 'male' ? styles.selectedText : styles.cardText
                    }>
                    Male
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                gender === 'female'
                  ? styles.genderCardSelected
                  : styles.genderCard
              }
              onPress={() => handleGender('female')}>
              <View style={styles.card}>
                <View style={styles.iconContainer}>
                  <MaterialCommunityIcons
                    name="gender-female"
                    size={25}
                    style={gender === 'female' ? styles.iconStyle : styles.icon}
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text
                    style={
                      gender === 'female'
                        ? styles.selectedText
                        : styles.cardText
                    }>
                    Female
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                gender === 'other'
                  ? styles.genderCardSelected
                  : styles.genderCard
              }
              onPress={() => handleGender('other')}>
              <View style={styles.card}>
                <View style={styles.iconContainer}>
                  <MaterialCommunityIcons
                    name="gender-male-female-variant"
                    size={25}
                    style={gender === 'other' ? styles.iconStyle : styles.icon}
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text
                    style={
                      gender === 'other' ? styles.selectedText : styles.cardText
                    }>
                    Other
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* age and DOB  */}
          <View style={styles.dobContainer2}>
            <View style={styles.inputContainerMain}>
              <View style={styles.labelView}>
                <Text style={styles.labelText}>
                  Date of Birth <Text style={styles.textRequired}>*</Text>{' '}
                </Text>
              </View>
              <View style={styles.textInputStyle}>
                <TextInput style={styles.input} />
                <AntDesign name="calendar" size={25} style={styles.iconColor} />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.labelView}>
                <Text style={styles.labelText}>
                  Age <Text style={styles.textRequired}>*</Text>{' '}
                </Text>
              </View>
              <View style={styles.textInputStyle}>
                <TextInput
                  value={age}
                  onChangeText={(e) => setAge(e.target.value)}
                  style={styles.input}
                />
              </View>
            </View>
          </View>
          {/* email details */}
          <View style={styles.inputContainer}>
            <View style={styles.labelViewInput}>
              <Text style={styles.labelText}>
                Email <Text style={styles.textRequired}>*</Text>{' '}
              </Text>
            </View>
            <View style={styles.labelMatch}>
              <View style={styles.textInputStyle}>
                <TextInput
                  value={email}
                  onChangeText={(e) => setEmail(e.target.value)}
                  style={styles.input}
                />
              </View>
            </View>
          </View>
          {/* add care giver */}
          {show ? (
            <View style={styles.careContainer}>
              <View style={styles.formHead}>
                <View style={styles.formHeadCol1}>
                  <Text style={styles.textHeader}>
                    Care Giver
                    <Text style={styles.textRequired}> * </Text>
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.formHeadCol2}
                  onPress={() => {
                    setShow(!show);
                  }}>
                  <AntDesign name="minus" size={35} style={styles.iconClose} />
                </TouchableOpacity>
              </View>
              <View style={styles.formContainer}>
                <View style={styles.inputCareContainer}>
                  <View style={styles.labelCol}>
                    <View style={styles.careLabelInput}>
                      <Text style={styles.careLabelText}>
                        Care Giver's Mobile Number
                      </Text>
                    </View>
                    <View style={styles.col1Bottom} />
                  </View>
                  <View style={styles.textInputStyle}>
                    <TextInput style={styles.input} keyboardType="numeric" />
                  </View>
                </View>

                <View style={styles.inputCareContainer}>
                  <View style={styles.labelCol}>
                    <View style={styles.careLabelInput}>
                      <Text style={styles.careLabelText}>
                        Care Giver's Email
                      </Text>
                    </View>
                    <View style={styles.col1Bottom} />
                  </View>
                  <View style={styles.textInputStyle}>
                    <TextInput style={styles.input} />
                  </View>
                </View>
                <View style={styles.inputCareContainer}>
                  <View style={styles.labelCol}>
                    <View style={styles.careLabelInput}>
                      <Text style={styles.careLabelText}>
                        Care Giver's First Name
                      </Text>
                    </View>
                    <View style={styles.col1Bottom} />
                  </View>
                  <View style={styles.textInputStyle}>
                    <TextInput
                      // value={CareNumber}
                      // onChangeText={(e) => setFName(e.target.value)}
                      style={styles.input}
                    />
                  </View>
                </View>
                <View style={styles.inputCareContainer}>
                  <View style={styles.labelCol}>
                    <View style={styles.careLabelInput}>
                      <Text style={styles.careLabelText}>
                        Care Giver's Last Name
                      </Text>
                    </View>
                    <View style={styles.col1Bottom} />
                  </View>
                  <View style={styles.textInputStyle}>
                    <TextInput
                      // value={CareNumber}
                      // onChangeText={(e) => setFName(e.target.value)}
                      style={styles.input}
                    />
                  </View>
                </View>

                <View style={styles.inputCareContainer}>
                  <View style={styles.labelCol}>
                    <View style={styles.careLabelInput}>
                      <Text style={styles.careLabelText}>
                        Relationship with Patient
                      </Text>
                    </View>
                    <View style={styles.col1Bottom} />
                  </View>
                  <View style={styles.pickerStyle}>
                    <Picker
                      selectedValue={relation}
                      itemStyle={styles.itemStyle}
                      onValueChange={(itemValue, itemIndex) =>
                        setRelation(itemValue)
                      }>
                      <Picker.Item label="Brother" value="Brother" />
                      <Picker.Item label="Mother" value="Mother" />
                    </Picker>
                  </View>
                </View>
                <View style={styles.textLeft}>
                  <Text style={styles.careLabelText}>
                    Care Giver's Gender
                    <Text style={styles.textRequired}>*</Text>
                  </Text>
                </View>
                <View style={styles.genderCareContainer}>
                  <TouchableOpacity
                    style={
                      careGender === 'male'
                        ? styles.genderCareCardSelected
                        : styles.genderCareCard
                    }
                    onPress={() => handleCareGender('male')}>
                    <View style={styles.cardCare}>
                      <View style={styles.iconContainer}>
                        <MaterialCommunityIcons
                          name="gender-male"
                          size={25}
                          style={careGender === 'male' ? styles.iconStyle : ''}
                        />
                      </View>
                      <View style={styles.textContainer}>
                        <Text
                          style={
                            careGender === 'male'
                              ? styles.selectedText
                              : styles.cardText
                          }>
                          Male
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={
                      careGender === 'female'
                        ? styles.genderCareCardSelected
                        : styles.genderCareCard
                    }
                    onPress={() => handleCareGender('female')}>
                    <View style={styles.cardCare}>
                      <View style={styles.iconContainer}>
                        <MaterialCommunityIcons
                          name="gender-female"
                          size={25}
                          style={
                            careGender === 'female' ? styles.iconStyle : ''
                          }
                        />
                      </View>
                      <View style={styles.textContainer}>
                        <Text
                          style={
                            careGender === 'female'
                              ? styles.selectedText
                              : styles.cardText
                          }>
                          Female
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={
                      careGender === 'other'
                        ? styles.genderCareCardSelected
                        : styles.genderCareCard
                    }
                    onPress={() => handleCareGender('other')}>
                    <View style={styles.cardCare}>
                      <View style={styles.iconContainer}>
                        <MaterialCommunityIcons
                          name="gender-male-female-variant"
                          size={25}
                          style={careGender === 'other' ? styles.iconStyle : ''}
                        />
                      </View>
                      <View style={styles.textContainer}>
                        <Text
                          style={
                            careGender === 'other'
                              ? styles.selectedText
                              : styles.cardText
                          }>
                          Other
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.inputCareContainer}>
                  <View style={styles.labelCol}>
                    <View style={styles.careLabelInput}>
                      <Text style={styles.careLabelText}>
                        Care Giver's Age{' '}
                        <Text style={styles.textRequired}>*</Text>
                      </Text>
                    </View>
                    <View style={styles.col1Bottom} />
                  </View>
                  <View style={styles.textInputStyle}>
                    <TextInput
                      // value={CareNumber}
                      // onChangeText={(e) => setFName(e.target.value)}
                      style={styles.input}
                      keyboardType="numeric"
                    />
                  </View>
                </View>
              </View>
            </View>
          ) : (
            <View style={styles.bottomContainer}>
              <View style={styles.col1Bottom} />
              <TouchableOpacity
                style={styles.col2Bottom}
                onPress={() => setShow(!show)}>
                <View style={styles.iconContainer}>
                  <Ionicons
                    name="add-circle"
                    style={styles.iconStyle}
                    size={25}
                  />
                </View>
                <View>
                  <Text style={styles.iconStyle}>Add Care Giver</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}

          {/* profile pic  */}
          <View style={styles.bottomContainer}>
            <View style={styles.col1Bottom} />
            <View style={styles.col2Bottom}>
              <View style={styles.iconContainer}>
                <Ionicons
                  name="add-circle"
                  style={styles.iconStyle}
                  size={25}
                />
              </View>
              <View>
                <Text style={styles.iconStyle}>Add profile pic of patient</Text>
              </View>
            </View>
          </View>
          {/* Save and Appointment */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonPrimary}>
              <Text style={styles.buttonTextPrimary}>Save + Appointment</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnPrimary}>
            <Button
              title="Go to Investigations"
              onPress={() => navigation.navigate('Investigation')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default AddPatient;
