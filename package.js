Package.describe({
  summary: "Meteor smart package for AWS SDK node.js package"
});

Npm.depends({
  'aws-sdk': "1.5.0"
});

Package.on_use(function (api) {
  api.export('AWS');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['aws-sdk', 'tinytest', 'test-helpers'], ['server']);
  api.add_files('tests.js', ['server']);
});
