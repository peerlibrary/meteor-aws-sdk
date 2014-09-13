Package.describe({
  summary: "SDK for AWS services including Amazon S3, Amazon EC2, DynamoDB, and Amazon SWF",
  version: '2.0.17-1',
  name: 'mrt:aws-sdk',
  git: 'https://github.com/peerlibrary/meteor-aws-sdk.git'
});

Package.on_use(function (api) {
  api.imply('peerlibrary:aws-sdk@2.0.17-1');
});
