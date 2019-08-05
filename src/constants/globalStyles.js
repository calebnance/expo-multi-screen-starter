import colors from './colors';

// utility styles
// /////////////////////////////////////////////////////////////////////////////
export default {
  activeOpacity: 0.7,
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  btn: {
    alignItems: 'center',
    backgroundColor: colors.brandPrimary,
    borderColor: colors.brandPrimary,
    borderWidth: 1,
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
  contentContainer: {
    alignItems: 'center',
    paddingTop: 32
  },
  spacer80: {
    height: 80,
    width: '100%'
  },
  text: {
    color: colors.brandPrimary
  }
};
