const path = require('path');

module.exports = {
  webpack: {
    alias: {
      setter$: path.resolve(__dirname, './src/setter.js'),
    },
  },
};
