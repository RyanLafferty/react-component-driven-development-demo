/*
  mock for static assets
  source: https://jestjs.io/docs/en/webpack
*/

const path = require('path');

module.exports = {
  process(_src, filename) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};
