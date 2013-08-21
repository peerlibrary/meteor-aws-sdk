Tinytest.add('meteor-aws-sdk', function (test) {
  var isDefined = false;
  try {
    AWS;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "AWS is not defined");
  test.isTrue(Package['aws-sdk'].AWS, "Package.aws-sdk.AWS is not defined");

  test.isTrue(new AWS.S3());
});