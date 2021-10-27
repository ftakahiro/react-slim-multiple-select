const path = require('path');
module.exports = {
  paths: function(paths, env) {
    paths.appIndexJs = path.resolve(__dirname, 'example/index.jsx');
    paths.appSrc = path.resolve(__dirname, 'example');
    return paths;
  },
}