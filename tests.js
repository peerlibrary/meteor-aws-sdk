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
});

Tinytest.add('aws-sdk Future resolves', function (test) {
  // Test should always pass, check if meteor instance crashed
  var s3_1 = new AWS.S3({accessKeyId: 'fake', secretAccessKey: 'fakefake'});
  var s3_2 = new AWS.S3({accessKeyId: 'fake2', secretAccessKey: 'fake2fake2'});
  test.throws(function () {
    s3_1.headBucketSync({Bucket: 'fakeBucket'});
  });
  test.throws(function () {
    s3_2.headBucketSync({Bucket: 'fakeBucket2'});
  });
});
