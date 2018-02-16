'use strict';

const assert = require('assert');
const webdriverio = require('webdriverio');

const browsers = require('./lib/getBrowsers')();
const iterations = require('./lib/getIterations')();
const getDesiredCapabilities = require('./lib/getDesiredCapabilities');

browsers.forEach((browserName) => {

  const browser = webdriverio.remote(Object.assign(
    {
      remote: 'local',
      baseUrl: 'https://developer.mozilla.org',
      desiredCapabilities: {
        browserName: browserName
      }
    },
    getDesiredCapabilities(browserName)
  ));

  describe(`${browserName} - developer.mozilla.org`, () => {

    before(browser.init);
    after(browser.end);

    Array.from(Array(iterations).keys()).forEach(() => {

      it('has a title', () => {
        return browser.url('/')
          .then(() => browser.pause(1000))
          .then(browser.getTitle)
          .then((value) => assert.equal(value, 'MDN Web Docs'));
      });

    });

});

});