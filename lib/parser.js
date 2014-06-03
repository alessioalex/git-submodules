"use strict";

var iniparser = require('iniparser');

module.exports = function(content) {
  var output = iniparser.parseString(content);

  Object.keys(output).forEach(function(key) {
    var normalizedKey = key.replace(/"/g, '').replace('submodule ', '');
    output[normalizedKey] = output[key];
    delete output[key];
  });

  return output;
};
