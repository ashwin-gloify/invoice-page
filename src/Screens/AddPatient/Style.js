/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 12,
  },
  inputContainer: {
    flex: 1,
    marginVertical: 12,
  },
  inputContainerMain: {
    flex: 2,
    marginVertical: 12,
  },
  textInputStyle: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 12,
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#c9c8c7',
  },
  textView: {
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  textLeft: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 25,
    justifyContent: 'flex-start',
  },
  textRight: {
    flx: 1,
    justifyContent: 'flex-end',
  },
  textHeader: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000',
  },
  textRequired: {
    color: 'red',
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 12,
  },
  genderCareContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 15,
    marginVertical: 12,
  },
  genderCard: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#c9c8c7',
  },
  genderCareCard: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#c9c8c7',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
  },
  cardCare: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 7,
    alignItems: 'center',
  },
  iconContainer: {
    paddingHorizontal: 2,
  },
  textContainer: {
    paddingHorizontal: 2,
  },
  genderCardSelected: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#078c3f',
    backgroundColor: '#e4f7ec',
  },
  genderCareCardSelected: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#078c3f',
    backgroundColor: '#e4f7ec',
  },
  iconStyle: {
    color: '#078c3f',
  },
  selectedText: {
    color: '#078c3f',
  },
  iconColor: {
    color: '#078c3f',
    position: 'absolute',
    bottom: 12,
    right: 20,
  },
  dobContainer2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  // ageContainer: {
  //   flex: 1,
  // },
  // emailContainer: {
  //   marginHorizontal: 12,
  // },
  // emailTextContainer: {
  //   flex: 1,
  //   alignItems: 'center',
  // },
  labelText: {
    color: '#000',
    zIndex: 100,
    backgroundColor: '#fff',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 5,
  },
  col1Bottom: {
    flex: 1,
  },
  col2Bottom: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 40,
    paddingHorizontal: 25,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  button: {
    borderWidth: 1,
    Flex: 1,
    borderColor: '#138061',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 25,
    margin: 10,
    alignItems: 'center',
  },
  buttonPrimary: {
    Flex: 1,
    backgroundColor: '#138061',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 25,
    margin: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#138061',
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonTextPrimary: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  labelMatch: {
    marginVertical: -20,
  },
  col1Label: {
    flex: 1,
    justifyContent: 'flex-start',
    zIndex: 100,
    backgroundColor: '#fff',
    flexDirection: 'row',
    // paddingHorizontal: 5,
  },
  col2Label: {
    flex: 2,
  },
  labelView: {
    Position: 'absolute',
    flex: 1,
    top: 20,
    zIndex: 100,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    marginLeft: 30,
    paddingHorizontal: 10,
    right: 10,
    width: '50%',
  },
  labelViewInput: {
    top: 2,
    left: 40,
    zIndex: 100,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    width: '30%',
    // backgroundColor:'red',
  },
  labelMobile: {
    width: '35%',
  },
  careContainer: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 12,
  },
  formContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#c9c8c7',
  },
  formHead: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formHeadCol1: {
    paddingHorizontal: 25,
    justifyContent: 'flex-start',
  },
  careLabelInput: {
    flex: 1.25,
    top: 20,
    left: 30,
    zIndex: 100,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  labelCol: {
    flex: 1,
    flexDirection: 'row',
  },
  inputCareContainer: {
    marginVertical: -5,
    marginBottom: 5,
  },
  pickerStyle: {
    borderWidth: 1,
    borderRadius: 5,
    width: '90%',
    borderColor: '#c9c8c7',
    marginLeft: 18,
    marginVertical: 12,
  },
  itemStyle: {
    color: '#000',
  },
});

export default styles;
