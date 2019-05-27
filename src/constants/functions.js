import { Asset, Font } from 'expo';
import { Image } from 'react-native';

import preloadFonts from './preloadFonts';
import preloadImages from './preloadImages';

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

// preload async
// /////////////////////////////////////////////////////////////////////////////
const loadAssetsAsync = async () => {
  // preload assets
  const fontAssets = cacheFonts(preloadFonts);
  const imageAssets = cacheImages(preloadImages);

  // promise load all
  return Promise.all([...fontAssets, ...imageAssets]);
};

export default { cacheFonts, cacheImages, loadAssetsAsync };
