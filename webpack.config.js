const { withExpo } = require('@expo/webpack-config');

module.exports = (env, argv) => {
  return withExpo(env, argv);
};
