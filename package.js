Package.describe({
  summary: "SDK for AWS services including Amazon S3, Amazon EC2, DynamoDB, and Amazon SWF",
  version: '2.531.0_1',
  name: 'peerlibrary:aws-sdk',
  git: 'https://github.com/peerlibrary/meteor-aws-sdk.git'
});

Npm.depends({
  'aws-sdk': '2.531.0'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.8.1');

  api.use([
    'peerlibrary:blocking@0.6.0',
    'underscore'
  ]);

  api.export('AWS');

  api.addFiles([
    'server.js'
  ], 'server');

  api.addFiles([
    'aws-sdk-js/dist/aws-sdk.js',
    'client.js'
  ], 'client');
});

Package.onTest(function (api) {
  api.versionsFrom('METEOR@1.8.1');

  api.use([
    'peerlibrary:aws-sdk',
    'tinytest',
    'test-helpers'
  ], ['client', 'server']);

  api.addFiles('client-tests.js', 'client');
  api.addFiles('server-tests.js', 'server');
});
