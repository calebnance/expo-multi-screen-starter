import { Asset, Font } from 'expo';
import { Image } from 'react-native';

// cache fonts
// /////////////////////////////////////////////////////////////////////////////
const cacheFonts = fonts => {
  const mappedFonts = fonts.map(font => Font.loadAsync(font));

  return mappedFonts;
};

// cache images
// /////////////////////////////////////////////////////////////////////////////
const cacheImages = images => {
  const imagesArray = Object.values(images);

  return imagesArray.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }

    return Asset.fromModule(image).downloadAsync();
  });
};

export default { cacheFonts, cacheImages };
