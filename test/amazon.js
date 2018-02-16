'use strict';

const assert = require('assert');
const webdriverio = require('webdriverio');

const browser = webdriverio.remote({
  remote: 'local',
  baseUrl: 'https://www.amazon.com',
  desiredCapabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['headless', 'no-sandbox']
    }
  }
});

describe('amazon.com', () => {

  before(browser.init);
  after(browser.end);

  Array.from(Array(20).keys()).forEach(() => {

    it('has a title', () => {
      return browser.url('/')
        .then(() => browser.pause(1000))
        .then(browser.getTitle)
        .then((value) => assert.equal(value, 'Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more'));
    });

  });

});
