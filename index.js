var os = require('os');
var semver = require('semver');
var clone = require('lodash.clone');
var history = require('./history');

module.exports = function whichOSX(release) {
  var platform = os.platform();
  var found;

  if (!release && platform !== 'darwin') {
    return false;
  }

  release = release || os.release();

  found = history.filter(function filterHistory(item) {
    return semver.satisfies(release, item.semver);
  });

  if (found.length === 1) {
    return clone(found.shift());
  }

  return clone(found);
};
