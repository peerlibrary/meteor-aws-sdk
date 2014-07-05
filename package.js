Package.describe({
  summary: "Meteor smart package for AWS SDK node.js package"
});

Npm.depends({
  'aws-sdk': '2.0.4'
});

Package.on_use(function (api) {
  api.use('blocking');

  api.export('AWS');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['aws-sdk', 'tinytest', 'test-helpers'], 'server');
  api.add_files('tests.js', 'server');
});
