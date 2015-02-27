AWS SDK smart package
=====================

[AWS SDK](https://aws.amazon.com/javascript/) Meteor smart package for [node.js](https://aws.amazon.com/sdk-for-node-js/)
and [browser](https://aws.amazon.com/sdk-for-browser/) package, providing the SDK that helps
take the complexity out of coding by providing JavaScript objects for AWS services including
Amazon S3, Amazon EC2, DynamoDB, and Amazon SWF.

Adding this package to your [Meteor](http://www.meteor.com/) application adds `AWS` object into the global scope,
which you can then use [according to the documentation](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/index.html).

On the server-side, in addition to existing API, a [fibers](https://github.com/laverdet/node-fibers)-enabled
synchronous ([blocking](https://github.com/peerlibrary/meteor-blocking)) methods are added to objects. They
are named the same, but with a `Sync` suffix.

Server-side example using [CoffeeScript](http://coffeescript.org/):

```coffee
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
```

Both client and server side.

Installation
------------

```
meteor add peerlibrary:aws-sdk
```
