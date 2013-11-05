/*
 * index.js: Top-level include to the hungry-birds module
 *
 * (C) 2011, Charlie Robbins
 *
 */

var fs = require('fs'),
    path = require('path'),
    Twitter = require('twitter');

exports.execute = function (options, callback) {
  var action   = options.action,
      filename = options.filename,
      twitter  = options.twitter,
      auth     = options.auth,
      client   = new Twitter(options.auth);

  exports[action](client, options, function (err, data) {
    if (err) {
      return callback(err);
    }

    fs.writeFile(filename, JSON.stringify(data, null, 2), 'utf8', callback);    
  });
};

exports.search = require('./search');