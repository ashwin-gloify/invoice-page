import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Styles = StyleSheet.create({
  wrapperContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerMain: {
    flex: 1,
    marginHorizontal: wp('3.5%'),
    marginTop: hp('3%'),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp('1%'),
    paddingBottom: hp('4%'),
  },
  headerText: {
    fontFamily: 'Poppins',
    color: '#2B2B2B',
    fontWeight: '600',
    fontSize: wp('4.5%'),
  },
  iconContainer: {
    paddingRight: hp('1%'),
  },
  inputContainer: {
    marginHorizontal: wp('2.5%'),
    paddingBottom: hp('1%'),
    paddingTop: hp('0.5%'),
  },
  twoContainers: {
    flexDirection: 'row',
  },
  textInputContainer1: {
    flex: 2,
    marginRight: wp('2%'),
  },
  textInputContainer2: {
    flex: 1,
    marginLeft: wp('2%'),
  },

  inputLabel: {
    position: 'absolute',
    zIndex: 100,
    backgroundColor: '#fff',
    left: wp('2%'),
    top: wp('-2%'),
    paddingHorizontal: wp('2%'),
  },
  inputLabel2: {
    // paddingHorizontal: wp('2.5%'),
  },
  labelText: {
    fontFamily: 'Roboto',
    color: '#000',
    opacity: 0.4,
    fontSize: wp('3.5%'),
  },
  labelText2: {
    fontFamily: 'Roboto',
    color: '#000',
    fontWeight: '500',
    // opacity: 0.4,
    fontSize: wp('3.5%'),
    lineHeight: hp('4%'),
  },
  textInput: {
    borderColor: '#BEC2C4',
    borderWidth: 1,
    borderRadius: 6,
    height: hp('5.5%'),
    paddingLeft: wp('4.5%'),
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: wp('4%'),
    color: '#000',
  },
  textInputSelector: {
    borderColor: '#BEC2C4',
    borderWidth: 1,
    borderRadius: 6,
    height: hp('5.5%'),
    paddingLeft: wp('10%'),
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: wp('4%'),
    color: '#000',
  },
  iconContainer2: {
    position: 'absolute',
    right: wp('5%'),
    top: hp('1.7%'),
  },
  iconContainer5: {
    position: 'absolute',
    right: wp('5%'),
    top: hp('1.2%'),
  },

  editableForm: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#E5E5E8',
    marginTop: hp('4%'),
    paddingBottom: hp('2%'),
  },
  iconContainer3: {
    width: wp('8%'),
    height: hp('4%'),
    backgroundColor: '#E3F5F4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('5%'),
    alignSelf: 'flex-end',
    marginVertical: hp('1%'),
    marginHorizontal: wp('3%'),
  },
  iconContainer4: {
    position: 'absolute',
    right: wp('5%'),
    top: hp('6%'),
  },
  colItem: {
    flex: 1,
    flextDirection: 'row',
    paddingVertical: hp('2%'),
    justifyContent: 'space-between',
  },
  col1: {
    flex: 1,
  },
  col2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginRight:wp('2%'),
  },
  textCol2: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: wp('3%'),
    color: '#247470',
    paddingHorizontal: wp('1%'),
  },
  receiptContainer: {
    marginHorizontal: wp('6%'),
  },
  receiptHeadText: {
    fontFamily: 'Metropolis',
    fontWeight: '600',
    color: '#1C1C1C',
    fontSize: wp('3.5%'),
  },
  receiptItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('2%'),
  },
  receiptLabel: {
    color: '#686B77',
    fontFamily: 'roboto',
    fontSize: wp('3.5%'),
    fontWeight: '400',
  },
  receiptAmount: {
    color: '#454547',
    fontFamily: 'Roboto',
    fontSize: wp('3.5%'),
    fontWeight: '400',
  },
  receiptSeparator: {
    borderWidth: 0.5,
    borderColor: '#BEBFC5',
    opacity: 0.4,
  },
  labelText3: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: wp('3.5%'),
    color: '#000',
    lineHeight: hp('4%'),
  },
  paymentContainer: {
    paddingVertical: hp('1%'),
    marginHorizontal: wp('4.5%'),
  },
  btnPrimary: {
    backgroundColor: '#247470',
    height: hp('6%'),
    width:wp('85%'),
    borderRadius: 6,
    justifyContent:'center',
    alignItems:'center',
  },
  btnView: {
    flex:1,
    paddingVertical: hp('2%'),
    alignItems:'center',
  },
  btnTitle:{
      fontFamily:'Poppins',
      color:'#FFF',
      fontSize:wp('3.5%'),
      fontWeight:'600',
      textTransform: 'uppercase',
  }
});

export default Styles; 