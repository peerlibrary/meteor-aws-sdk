Package.describe({
  summary: "Meteor smart package for AWS SDK node.js package"
});

Package.on_use(function (api) {
  api.use('coffeescript', 'server');

  api.add_files([
    'bootstrap.coffee',
    'server.coffee'
  ], 'server');
});
