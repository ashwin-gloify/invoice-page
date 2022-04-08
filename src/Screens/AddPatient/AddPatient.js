/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity, SegmentedControlIOSBase} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Style';

const AddPatient = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] =  useState('');
  const handleGender = (item) => {
    setGender(item);
  };
  return (
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
            gender === 'male' ? styles.genderCardSelected : styles.genderCard
          }
          onPress={() => handleGender('male')}>
          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="gender-male"
                size={25}
                style={gender === 'male' ? styles.iconStyle : ''}
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
            gender === 'female' ? styles.genderCardSelected : styles.genderCard
          }
          onPress={() => handleGender('female')}>
          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="gender-female"
                size={25}
                style={gender === 'female' ? styles.iconStyle : ''}
              />
            </View>
            <View style={styles.textContainer}>
              <Text
                style={
                  gender === 'female' ? styles.selectedText : styles.cardText
                }>
                Female
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            gender === 'other' ? styles.genderCardSelected : styles.genderCard
          }
          onPress={() => handleGender('other')}>
          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="gender-male-female-variant"
                size={25}
                style={gender === 'other' ? styles.iconStyle : ''}
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
      <View style={styles.bottomContainer}>
        <View style={styles.col1Bottom} />
        <View style={styles.col2Bottom}>
          <View style={styles.iconContainer}>
            <Ionicons name="add-circle" style={styles.iconStyle} size={25} />
          </View>
          <View>
            <Text style={styles.iconStyle}>Add Care Giver</Text>
          </View>
        </View>
      </View>
      {/* profile pic  */}
      <View style={styles.bottomContainer}>
        <View style={styles.col1Bottom} />
        <View style={styles.col2Bottom}>
          <View style={styles.iconContainer}>
            <Ionicons name="add-circle" style={styles.iconStyle} size={25} />
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
    </View>
  );
};
export default AddPatient;
