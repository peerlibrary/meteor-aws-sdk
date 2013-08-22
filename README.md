AWS SDK smart package
=====================

Meteor smart package for [AWS SDK](https://aws.amazon.com/sdkfornodejs/) node.js package.

Adding this package to your [Meteor](http://www.meteor.com/) application adds `AWS` object into the global scope,
which you can then use [according to the documentation](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/frames.html).
In addition to existing API, a fibers-enabled synchronous ([blocking](https://github.com/peerlibrary/meteor-blocking))
methods are added to objects. They are named the same, but with a `Sync` suffix.

Example using [CoffeeScript](http://coffeescript.org/):

    if Meteor.settings.AWS
      AWS.config.update
        accessKeyId: Meteor.settings.AWS.accessKeyId
        secretAccessKey: Meteor.settings.AWS.secretAccessKey
    else
      console.warn "AWS settings missing"

    s3 = new AWS.S3()

    list = s3.listObjectsSync
      Bucket: 'bucketname'
      Prefix: 'subdirectory/'

    for file in list.Contents
      # ...
