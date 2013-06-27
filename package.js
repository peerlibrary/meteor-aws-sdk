Package.describe({
  summary: "Meteor smart package for AWS SDK node.js package"
});

Package.on_use(function (api) {
  api.add_files([
    'server.js'
  ], 'server');
});
