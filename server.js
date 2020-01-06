let AWS = Npm.require('aws-sdk');

var originalDefineMethods = AWS.Service.defineMethods;

function makeBlocking(proto, methodName) {
  var syncMethod = methodName + 'Sync';
  if (!proto[methodName]) return;
  if (!_.isFunction(proto[methodName])) return;
  if (proto[syncMethod]) return;
  proto[syncMethod] = blocking(proto[methodName]);
}

AWS.Service.defineMethods = function defineMethods(svc) {
  originalDefineMethods(svc);
  AWS.util.each(svc.prototype.api.operations, function iterator(methodName) {
    makeBlocking(svc.prototype, methodName);
  });
};

AWS.util.each(AWS, function iterator(name) {
  if (!(AWS[name].prototype instanceof AWS.Service)) return;

  AWS.util.each(AWS[name].prototype, function iterator(methodName) {
    makeBlocking(AWS[name].prototype, methodName);
  });
});

module.exports = { AWS };