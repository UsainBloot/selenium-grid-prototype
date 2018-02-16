'use strict';

const chromeConfig = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};

const chromeHeadlessConfig = {
  desiredCapabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['headless', 'no-sandbox']
    }
  }
};

const firefoxConfig = {
  desiredCapabilities: {
    browserName: 'firefox'
  }
};

const firefoxHeadlessConfig = {
  desiredCapabilities: {
    browserName: 'firefox',
    'moz:firefoxOptions': {
      args: ['-headless']
    }
  }
};

function getHeadlessDesiredCapabilities(browser) {
  if (browser === 'firefox') {
    return firefoxHeadlessConfig;
  }

  return chromeHeadlessConfig;
}

function getDesiredCapabilities(browser) {
  if (process.env.HEADLESS) {
    return getHeadlessDesiredCapabilities(browser);
  }

  if (browser === 'firefox') {
    return firefoxConfig;
  }

  return chromeConfig;
}

module.exports = getDesiredCapabilities;
