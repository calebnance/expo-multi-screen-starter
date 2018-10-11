import { Asset, Font } from 'expo';
import { Image } from 'react-native';

// preloading / caching functions
// /////////////////////////////////////////////////////////////////////////////
export const cacheFonts = fonts => {
  const mappedFonts = fonts.map(font => Font.loadAsync(font));

  return mappedFonts;
};

export const cacheImages = images => {
  Object.keys(images).forEach(lvl1 => {
    if (Object.prototype.hasOwnProperty.call(images[lvl1], 'img')) {
      const image = images[lvl1].img;
      if (typeof image === 'string') {
        return Image.prefetch(image);
      }

      return Asset.fromModule(image).downloadAsync();
    }

    Object.keys(images[lvl1]).forEach(lvl2 => {
      if (Object.prototype.hasOwnProperty.call(images[lvl1][lvl2], 'img')) {
        const image = images[lvl1][lvl2].img;
        if (typeof image === 'string') {
          return Image.prefetch(image);
        }

        return Asset.fromModule(image).downloadAsync();
      }

      Object.keys(images[lvl1][lvl2]).forEach(lvl3 => {
        if (
          Object.prototype.hasOwnProperty.call(images[lvl1][lvl2][lvl3], 'img')
        ) {
          const image = images[lvl1][lvl2][lvl3].img;
          if (typeof image === 'string') {
            return Image.prefetch(image);
          }

          return Asset.fromModule(image).downloadAsync();
        }

        return null;
      });

      return null;
    });

    return null;
  });

  return images;
};
