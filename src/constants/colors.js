// colors
// /////////////////////////////////////////////////////////////////////////////
const darkColor = '#2a2a2a';
const darkHighlightColor = '#3a3a3a';
const grey = '#d0ccd0';
const white20 = 'rgba(255, 255, 255, 0.2)';

export default {
  black: '#000000',
  white: '#ffffff',
  white20,

  darkColor,
  darkHighlightColor,
  grey,

  activeTintColor: {
    light: darkColor,
    dark: grey
  },
  inactiveTintColor: {
    light: grey,
    dark: white20
  }
};
