AWS = {}

do -> # To not pollute the namespace
  require = __meteor_bootstrap__.require

  AWS = require 'aws-sdk'
