// import React from 'react';
// import { shallow } from 'enzyme';

import { cacheFonts, cacheImages } from '../../api/util';

import preloadFonts from '../../api/preloadFonts';
import preloadImages from '../../api/preloadImages';

describe('util.js', () => {
  it('cacheFonts()', () => {
    const fontAssets = cacheFonts(preloadFonts);

    expect(fontAssets).toHaveLength(1);
  });

  it('cacheImages()', async () => {
    const imageAssets = cacheImages(preloadImages);

    expect(imageAssets).toHaveLength(2);
  });
});
