import { Dimensions, Platform } from 'react-native';

// device
// /////////////////////////////////////////////////////////////////////////////
const windowInfo = Dimensions.get('window');
const { height, width } = windowInfo;
const aspectRatio = height / width;

const isIOS = Platform.OS === 'ios';
const isWeb = Platform.OS === 'web';

let iPhoneX = false;
let isTablet = false;

if (isIOS) {
  // iphone screen breakdown
  // https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions
  // http://iosres.com
  if (height === 812 || width === 812 || (height === 896 || width === 896)) {
    iPhoneX = true;
  }

  // is tablet
  isTablet = Platform.isPad;
}

export default {
  aspectRatio,
  height,
  iPhoneX,
  isTablet,
  isWeb,
  width
};
