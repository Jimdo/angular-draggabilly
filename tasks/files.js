var files = {
  grunt: 'Gruntfile.js',

  source: [
    'src/js/helper.module.js',
    'src/js/directive.directive.js',
  ],

  dist: 'dist/<%= pkg.name %>.js',
  distMin: 'dist/<%= pkg.name %>.min.js',
  dists: 'dist/*',

  unitTests: 'test/unit/**/*.+(js|coffee)',
  e2eTests: [
    'test/e2e/SpecHelper.+(js|coffee)',
    'test/e2e/*Spec.+(js|coffee)'
  ],
  e2eAdditionalWatched: [
    'test/e2e/env/app.js',
    'test/e2e/env/config.js',
    'test/e2e/env/index.html'
  ],
  testEnvKarma: [
    'bower_components/angular/angular.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'bower_components/classie/classie.js',
    'bower_components/eventEmitter/EventEmitter.js',
    'bower_components/eventie/eventie.js',
    'bower_components/get-style-property/get-style-property.js',
    'bower_components/get-size/get-size.js',
    'bower_components/draggabilly/draggabilly.js'
  ],

  package: ['package.json', 'bower.json']
};

/* Prepare environments */
files.testEnvKarma = files.testEnvKarma.concat(files.source);

files.testEnv = JSON.parse(JSON.stringify(files.testEnvKarma));
files.demoEnv = JSON.parse(JSON.stringify(files.testEnv));

files.testEnvKarma.splice(0, 0, 'bower_components/jquery/dist/jquery.js');

if (typeof module === 'object') {
  module.exports = files;
}
