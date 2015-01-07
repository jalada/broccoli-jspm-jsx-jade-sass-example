var mergeTrees = require('broccoli-merge-trees'),
    filterReact = require('broccoli-react'),
    sass = require('broccoli-sass'),
    jade = require('broccoli-jade'),
    pickFiles = require('broccoli-static-compiler');

/////////////////
// App JavaScript
var app = 'app';

// React JSX
app = filterReact(app, {
  extensions: ['js.jsx']
});

// Move to /app
app = pickFiles(app, {
  srcDir: '/',
  destDir: '/app'
});

// Pick config.js, put in /
configJs = pickFiles('config', {
  srcDir: '/',
  destDir: '/',
  files: ['config.js']
});

// Pick jspm_packages, put in /jspm_packages
jspm = pickFiles('jspm_packages', {
  srcDir: '/',
  destDir: '/jspm_packages'
});

// Merge
app = new mergeTrees([app, configJs, jspm], {overwrite: true});

//////////
// App CSS

// Our styles
var styles = 'styles';

// Process with SASS
styles = sass([styles], 'app.sass', 'app.css');


////////
// App views (JADE)
var views = 'views';
views = jade(views);

var sourceTrees = [app, styles, views];

var everything = new mergeTrees(sourceTrees, { overwrite: true });


module.exports = everything;
