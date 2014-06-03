"use strict";

var proxyquire = require('proxyquire');
var should = require('should');

var parse = require('../lib/parser');
var fs = require('fs');

describe('git-submodules', function() {
  it('should parse the output', function() {
    parse(fs.readFileSync(__dirname + '/fixture.txt', 'utf8')).should.eql(require('./output.json'));
  });

  it('should delegate correctly', function(done) {
    var repoPath = '/home/node.git';
    var rev = 'master';

    var gitSubmodules = proxyquire.load('../', {
      'git-execute': function(path, args, cb) {
        path.should.eql(repoPath);
        args.should.eql(["show", rev + ":.gitmodules"]);

        cb(null, 'git-execute-response');
      },
      './lib/parser': function(content) {
        content.should.eql('git-execute-response');

        return 'parser-response';
      }
    });

    gitSubmodules(repoPath, rev, function(err, res) {
      res.should.eql('parser-response');

      done();
    });
  });
});
