Tinytest.add('aws-sdk', function(test) {
  test.isFalse(Package['peerlibrary:aws-sdk'].AWS, "Package.peerlibrary:aws-sdk.AWS is not defined");
});