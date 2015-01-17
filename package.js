Package.describe({
  summary: "SDK for AWS services including Amazon S3, Amazon EC2, DynamoDB, and Amazon SWF",
  version: '2.1.6_1',
  name: 'peerlibrary:aws-sdk',
  git: 'https://github.com/peerlibrary/meteor-aws-sdk.git'
});

Npm.depends({
  'aws-sdk': '2.1.6'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.0.2.1');
  api.use('peerlibrary:blocking@0.5.0');

  api.export('AWS');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['peerlibrary:aws-sdk', 'tinytest', 'test-helpers'], 'server');
  api.add_files('tests.js', 'server');
});
