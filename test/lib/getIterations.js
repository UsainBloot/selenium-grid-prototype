'use strict';

function getIterations() {
  if (process.env.ITERATIONS) {
    return parseInt(process.env.ITERATIONS);
  }

  return 10;
}

module.exports = getIterations;
