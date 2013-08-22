AWS = Npm.require('aws-sdk');

var originalDefineMethods = AWS.Service.defineMethods;

AWS.Service.defineMethods = function defineMethods(svc) {
  originalDefineMethods(svc);
  AWS.util.each(svc.prototype.api.operations, function iterator(method) {
    var syncMethod = method + 'Sync';
    if (!svc.prototype[method]) return;
    if (svc.prototype[syncMethod]) return;
    svc.prototype[syncMethod] = blocking(svc.prototype[method]);
  });
};