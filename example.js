"use strict";

var gitSubmodules = require('./');
var path = require('path');
var repoPath = path.resolve(process.env.REPO || (__dirname + '/.git'));
var rev = process.env.REV || 'master';

gitSubmodules(repoPath, rev, function(err, submodules) {
  if (err) { throw err; }

  console.log(submodules);
});
