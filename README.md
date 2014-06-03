# git-submodules

Get submodules data (name, path, url) for a git repo.

## Usage

```js
var gitSubmodules = require('git-submodules');
var path = require('path');
var repoPath = path.resolve(process.env.REPO || (__dirname + '/.git'));
var rev = process.env.REV || 'master';

gitSubmodules(repoPath, rev, function(err, submodules) {
  if (err) { throw err; }

  console.log(submodules);
});
```

Sample output:

```js
{
  "gitTree": {
    "path": "gitTree",
    "url": "git://github.com/alessioalex/git-tree.git"
  },
  "gitCommits": {
    "path": "gitCommits",
    "url": "git://github.com/alessioalex/git-commits.git"
  },
  "gitGrep": {
    "path": "gitGrep",
    "url": "git://github.com/alessioalex/git-grep.git"
  }
}
```

## Tests

```
npm test
```

## License

MIT
