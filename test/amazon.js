'use strict';

const assert = require('assert');
const webdriverio = require('webdriverio');

const browsers = require('./lib/getBrowsers')();
const iterations = require('./lib/getIterations')();
const getDesiredCapabilities = require('./lib/getDesiredCapabilities');

  const browser = webdriverio.remote({
    remote: 'browserstack',
    baseUrl: 'https://www.amazon.com',
    user: 'SOME_USERNAME',
    key: 'SOME_KEY',
    host: 'SOME_URL',
    port: 80,
    desiredCapabilities: {
      'os' : 'Windows',
      'os_version' : '10',
      'browser' : 'IE',
      'browser_version' : '11.0',
      'browserstack.local' : 'false',
      'browserstack.user' : 'SOME_USERNAME',
      'browserstack.key' : 'SOME_KEY'
    }
  });

describe(`Internet Explorer - amazon.com`, function() {

  this.timeout(0);

  before(browser.init);
  after(browser.end);

  beforeEach(() => this.timeout(20000));

  Array.from(Array(iterations).keys()).forEach(() => {

    it('has a title', () => {
      return browser.url('/')
        .then(() => browser.pause(1000))
        .then(browser.getTitle)
        .then((value) => assert.equal(value, 'Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more'));
    });

  });

});
