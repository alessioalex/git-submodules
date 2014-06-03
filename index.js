"use strict";

// TODO: refactor to stream?

var gitExecute = require('git-execute');
var parse = require('./lib/parser');

function getSubmodules(repoPath, rev, callback) {
  var args = ["show", (rev || 'HEAD') + ":.gitmodules"];

  gitExecute(repoPath, args, function(err, stdout, stderr) {
    if (err) {
      // no submodules
      if (err.message.indexOf("'.gitmodules' does not exist") !== -1) {
        return callback(null, null);
      }

      return callback(err);
    }

    callback(null, parse(stdout));
  });
}

module.exports = getSubmodules;
