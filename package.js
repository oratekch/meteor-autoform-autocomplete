Package.describe({
  name: 'oratek:autoform-autocomplete',
  version: '0.0.2',
  summary: 'Autocomplete inputs for aldeed:autoform using mizzao:autocomplete',
  git: 'https://github.com/oratekch/meteor-autoform-autocomplete.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');

  api.use([
    'underscore',
    'templating',
    'mrt:copy-template@0.9.0',
    'mizzao:autocomplete@0.5.1',
    'aldeed:autoform@6.0.0'
  ], 'client');

  api.addFiles([
    'autocomplete.html',
    'autocomplete.js'
  ], 'client');

  api.export('helpers', { testOnly: true });
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('oratek:autoform-autocomplete');

  api.addFiles('tests/helpers.js', 'client');
});
