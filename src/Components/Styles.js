import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  headerMain: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  },
  col1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  col2: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  colHeader: {
    color: '#000',
    fontWeight: 'bold',
  },
  colitem: {
    marginHorizontal:10,
  },
});
export default styles;
