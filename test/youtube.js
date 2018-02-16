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
      baseUrl: 'https://www.youtube.com',
      desiredCapabilities: {
        browserName: browserName
      }
    },
    getDesiredCapabilities(browserName)
  ));

  describe(`${browserName} - youtube.com`, function() {

    this.timeout(0);

    before(browser.init);
    after(browser.end);

    beforeEach(() => this.timeout(20000));

    Array.from(Array(iterations).keys()).forEach(() => {

      it('has a title', () => {
        return browser.url('/')
          .then(() => browser.pause(1000))
          .then(browser.getTitle)
          .then((value) => assert.equal(value, 'YouTube'));
      });

    });

  });

});
