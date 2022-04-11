/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    marginHorizontal: 12,
  },
  containerHead: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 12,
  },
  headText: {
    color: '#000',
    fontWeight: '500',
    fontFamily: 'Poppins',
    fontSize: 28,
    lineHeight: 42,
  },
  listContainer: {
    flex: 1,
  },
  patientContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 12,
    marginHorizontal: 12,
    alignItems: 'center',
  },
  col1: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageView: {
    borderRadius: 5,
  },
  imgStyle: {
    width: 56,
    height: 54,
    borderRadius: 20,
  },
  details: {
    flexDirection: 'row',
  },
  detailsView: {
    paddingHorizontal: 2,
  },
  detailsText: {
    fontSize: 16,
    color: '#9A9A9A',
    lineHeight: 19.5,
    fontWeight: '400',
    fontFamily: 'Poppins',
  },
  nameText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#000',
    fontFamily: 'Poppins',
  },
  userDetail: {
    paddingHorizontal: 15,
  },
  col2: {
    alignItems: 'flex-end',
    bottom: 10,
  },
  col2Text: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: '#247470',
    fontFamily: 'Poppins',
  },
//   FabView: {
//     position: 'absolute',
//     left:'80%',
//     top: '80%',
//     zIndex: 100,
//     height: 68,
//     width: 68,
//   },
//   FabStyle: {
//     shadowColor: '#93BEBC',
//     color: '#247470',
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowOpacity: 0.27,
//     shadowRadius: 4.65,
//     elevation: 6,
//   },
});

export default Styles;
