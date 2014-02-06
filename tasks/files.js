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
  testEnvKarma: [
    'bower_components/angular/angular.js',
    'bower_components/angular-mocks/angular-mocks.js'
  ],

  package: ['package.json', 'bower.json']
};

/* Prepare environments */
files.testEnvKarma = files.testEnvKarma.concat(files.source);
files.testEnvKarma.push(files.allPartialsCombined);

files.testEnv = JSON.parse(JSON.stringify(files.testEnvKarma));
files.testEnv.splice(0, 0, 'bower_components/less/dist/less-1.6.1.js');
files.demoEnv = JSON.parse(JSON.stringify(files.testEnv));

files.testEnvKarma.splice(0, 0, 'bower_components/jquery/jquery.js');

if (typeof module === 'object') {
  module.exports = files;
}
