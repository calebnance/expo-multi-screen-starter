import { StyleSheet } from 'react-native';
import colors from './colors';

// utility styles
// /////////////////////////////////////////////////////////////////////////////
export default {
  btn: {
    alignItems: 'center',
    backgroundColor: colors.brandPrimary,
    borderColor: colors.brandPrimary,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    height: 48,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 8
  },
  btnText: {
    color: colors.white,
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
  activeO: 0.8,
  activeOFull: 1,
  spacer80: {
    height: 80,
    width: '100%'
  },
  text: {
    color: colors.brandPrimary
  }
};
