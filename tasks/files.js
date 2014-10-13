var files = {
  grunt: 'Gruntfile.js',

  source: [
    'src/js/helper.module.js',
    'src/js/directive.directive.js',
  ],
  sourceStyle: [
    'src/less/style.less'
  ],

  distStyle: 'dist/<%= pkg.name %>.css',
  distStyleMin: 'dist/<%= pkg.name %>.min.css',
  dist: 'dist/<%= pkg.name %>.js',
  distMin: 'dist/<%= pkg.name %>.min.js',
  dists: 'dist/*',

  partialsDir: 'src/partials',
  allHTML: '*.html',
  allPartials: 'src/partials/*.html',
  allPartialsCombined: 'test/e2e/env/all-partials.js',

  unitTests: 'test/unit/**/*.+(js|coffee)',
  e2eTests: ['test/e2e/SpecHelper.+(js|coffee)', 'test/e2e/*Spec.+(js|coffee)'],

  environments: {},

  demo: 'demo/*',

  package: ['package.json', 'bower.json']
};

var baseEnvironment = [].concat(
  'bower_components/angular/angular.js',
  files.source,
  files.allPartialsCombined
);

var demoEnvironment = JSON.parse(JSON.stringify(baseEnvironment));
demoEnvironment.unshift('bower_components/less/dist/less-1.7.4.js');

var karmaEnvironment = JSON.parse(JSON.stringify(baseEnvironment));
karmaEnvironment.unshift('bower_components/jquery/dist/jquery.js');
karmaEnvironment.unshift('bower_components/jasmine-moar-matchers/*.js');
karmaEnvironment.push('bower_components/angular-mocks/angular-mocks.js');


files.environments.demo = demoEnvironment;
files.environments.karma = karmaEnvironment;

if (typeof module === 'object') {
  module.exports = files;
}
