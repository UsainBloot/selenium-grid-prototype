'use strict';

const selenium = require('selenium-standalone');

function startSelenium() {
  const options = {
    version: '3.9.0'
  };

  console.log('Selenium: Starting');
  return new Promise((resolve, reject) => {
    selenium.start(options, (err, child) => {
      if (err) {
        console.log(`Selenium: Error during startup: ${err}`)
        reject(err);
      } else {
        selenium.child = child;
        resolve();
      }
    });
  });
}

const options = {
  version: '3.9.0'
};

console.log('Selenium: Installing');
selenium.install(options, (err) => {
  if (err) {
    console.error(`Selenium: Error during installation: ${err}`);
    return process.exit(1);
  } else {
    startSelenium()
      .then(() => {
        console.log('Selenium: Setup complete');
        return process.exit(0)
      });
  }
});
