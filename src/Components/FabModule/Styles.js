/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';


const Styles = StyleSheet.create({
  FabView: {
    position: 'absolute',
    left: '80%',
    top: '90%',
    zIndex: 100,
    height: 68,
    width: 68,
  },
  FabStyle: {
    shadowColor: '#93BEBC',
    color: '#247470',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  touchableOption: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '10%',
    width: '60%',
  },
  ModalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundOpacity: 0.4,
  },
  optionContainer: {
    left: '30%',
    top: '25%',
    marginTop: '90%',
  },
  icons: {
    color: '#fff',
  },
  textStyle: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#fff',
  },
  optionButton: {
    flex: 1,
    width: 80,
    height: 80,
    backgroundColor: '#247470',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  optionText: {
    flex: 2,
    backgroundColor: '#247470',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    height: 50,
  },
});

export default Styles;