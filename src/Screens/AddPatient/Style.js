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
    height: 50,
    width: '90%',
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
  genderCard: {
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 12,
  },

  ageContainer: {
    flex: 1,
  },
  emailContainer: {
    marginHorizontal: 12,
  },
  emailTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  labelText: {
    color: '#000',
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
    width:'30%'
    // marginLeft: 35,
    // paddingRight: 15,
    // alignItems:'flex-start',
  },
  labelMobile:{
    width:'35%',
  },
});

export default styles;
