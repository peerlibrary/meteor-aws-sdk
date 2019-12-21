import { AWS } from 'meteor/peerlibrary:aws-sdk';

Tinytest.add('aws-sdk', function (test) {
  var isDefined = false;
  try {
    AWS;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "AWS is not defined");
  
  var s3 = new AWS.S3();
  test.isTrue(s3);
  test.isTrue(s3.getObject);
  test.isTrue(s3.upload);
});