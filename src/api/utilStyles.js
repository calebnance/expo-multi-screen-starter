import { StyleSheet } from 'react-native';
import colors from './colors';

// utility styles
// /////////////////////////////////////////////
export default {
  btn: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.brandPrimary,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 80,
    paddingHorizontal: 24,
    paddingVertical: 8
  },
  btnText: {
    color: colors.brandPrimary,
    textAlign: 'center'
  },
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 30
  },
  opacityActive: 0.8,
  opacityActiveFull: 1,
  spacer80: {
    height: 80,
    width: '100%'
  },
  text: {
    color: colors.brandPrimary
  }
};
