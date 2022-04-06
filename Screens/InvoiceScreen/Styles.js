import {StyleSheet} from 'react-native';

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
    textAlign: 'left',
    fontSize: 17,
    color: '#000',
  },
  historyContainer: {
    // marginTop: 5,
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
  headerContainerMain: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  invoiceDetailsTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingBottom:5,
  },
  invoiceDetailsBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    alignItems: 'center',
  },
  invoiceDetailsText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  invoiceText: {
    fontSize: 17,
    color: '#000',
  },
  invoiceHeading: {
    fontSize: 25,
    color: '#2aab03',
  },
  invoiceDetailsTable: {
    flexDirection: 'column',
  },
  invoiceDetailsTableRowOne: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap:'wrap',
    backgroundColor: '#b9bab8',
  },
  invoiceDetailsTableRowTwo: {
    padding: 10,
  },
  detailsRow: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    borderBottom: 1,
  },
  RowText: {
    flex: 1,
    color: '#000',
    textAlign: 'center',
  },
  invoiceDetailsTableRowThree: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalLabel: {
    flex: 1,
    justifyContent:'flex-start',
  },
  paymentHead:{
    marginTop: 15,
    padding:10,
  },
  paymentDetails: {
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginBottom:25,
    padding:10,
  },
  paymentContainer:{
    margin:10,
  },
  invoiceItems:{
    alignItems:'center',
    justifyContent:'space-around',
    flex:1,
  }

});

export default styles;
