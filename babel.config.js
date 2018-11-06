module.exports = function(api) {
  const presets = ['babel-preset-expo'];
  const plugins = [];

  if (api.env() === 'development') {
    // dev things here
  } else {
    plugins.push('transform-remove-console');
  }

  api.cache(true);

  return { presets, plugins };
};
