do -> # To not pollute the namespace
  DEPENDENCIES = [
    require: 'aws-sdk'
    npm: 'git://github.com/peerlibrary/aws-sdk-js.git#7ba1def15e3e22cfd6af1439cf591e181a1443d4'
  ]

  require = __meteor_bootstrap__.require

  assert = require 'assert'
  child_process = require 'child_process'
  path = require 'path'

  endsWith = (string, suffix) ->
    string.indexOf(suffix, string.length - suffix.length) != -1

  baseDirectory = (directory) ->
    directory = directory.split path.sep
    assert.equal directory[directory.length-1], 'node_modules'
    directory[0...directory.length-1].join path.sep

  for directory in process.mainModule.paths
    directory = baseDirectory directory
    if endsWith directory, '.meteor'
      workingDirectory = directory
      break

  assert workingDirectory

  future = require 'fibers/future'

  # We set PATH so that Meteor's node.js binary is used when compiling dependencies and not system's
  process.env.PATH = "#{ path.dirname process.argv[0] }:" + process.env.PATH

  spawnSync = (file, args, options) ->
    wrapped = future.wrap (cb) ->
      options ?= {}
      options.stdio = 'inherit'

      proc = child_process.spawn file, args, options
      proc.on 'close', (code, signal) ->
        cb if code != 0 then "Command failed with exit code #{ code }" else null
      proc.on 'error', (error) ->
        cb error
    wrapped().wait()
    return # So that we do not return the results from wait

  for dependency in DEPENDENCIES
    try
      require dependency.require
    catch error
      console.log "Missing '#{ dependency.require }' dependency, installing..."
      spawnSync 'npm', ['install', dependency.npm], {cwd: workingDirectory}

      # Verify
      require dependency.require

  return # So that we do not return the results of the for-loop
