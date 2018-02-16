'use strict';

const selenium = require('selenium-standalone');

function startHub() {
  const options = {
    version: '3.9.0',
    seleniumArgs: ['-role', 'hub']
  };

  console.log('Selenium: Starting hub');
  return new Promise((resolve, reject) => {
    selenium.start(options, (err, child) => {
      if (err) {
        console.log(`Selenium: Error in hub: ${err}`)
        reject(err);
      } else {
        selenium.hub = child;
        resolve();
      }
    });
  });
}

function startNode(index) {
  const port = 5555 + index;

  const options = {
    version: '3.9.0',
    seleniumArgs: ['-role', 'node', '-hub', 'http://localhost:4444/grid/register', '-port', port]
  };

  selenium.children = [];

  console.log(`Selenium: Starting node ${index + 1}`);
  return new Promise((resolve, reject) => {
    selenium.start(options, (err, child) => {
      if (err) {
        console.log(`Selenium: Error in node ${index + 1}: ${err}`)
        reject(err);
      } else {
        selenium.children.push(child);
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
    startHub()
      .then(() => startNode(0))
      .then(() => startNode(1))
      .then(() => {
        console.log('Selenium: Setup complete');
        return process.exit(0)
      });
  }
});
