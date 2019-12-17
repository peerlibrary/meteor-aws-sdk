Package.describe({
  summary: "SDK for AWS services including Amazon S3, Amazon EC2, DynamoDB, and Amazon SWF",
  version: '2.531.0_1',
  name: 'mrspark2591:aws-sdk',
  git: 'https://github.com/Fasal-Tech/meteor-aws-sdk.git'
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
});

Package.onTest(function (api) {
  api.versionsFrom('METEOR@1.8.1');

  api.use([
    'mrspark2591:aws-sdk',
    'tinytest',
    'test-helpers'
  ], ['server']);
  
  api.addFiles('server-tests.js', 'server');
});
