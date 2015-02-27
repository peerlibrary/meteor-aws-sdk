Tinytest.add('aws-sdk', function (test) {
  var isDefined = false;
  try {
    AWS;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "AWS is not defined");
  test.isTrue(Package['peerlibrary:aws-sdk'].AWS, "Package.peerlibrary:aws-sdk.AWS is not defined");

  var s3 = new AWS.S3();
  test.isTrue(s3);
  test.isTrue(s3.getObjectSync);
  test.isTrue(s3.getObjectSync._blocking);
  test.isTrue(s3.uploadSync);
  test.isTrue(s3.uploadSync._blocking);
});
