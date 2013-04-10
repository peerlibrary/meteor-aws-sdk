Package.describe({
  summary: "Meteor smart package for AWS SDK"
});

Package.on_use(function (api) {
  api.use('coffeescript', 'server');

  api.add_files([
    'bootstrap.coffee',
    'server.coffee'
  ], 'server');
});
