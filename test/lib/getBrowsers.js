'use strict';

function getBrowsers() {
  if (process.env.BROWSERS) {
    return process.env.BROWSERS.split(',');
  }

  return ['chrome'];
}

module.exports = getBrowsers;
