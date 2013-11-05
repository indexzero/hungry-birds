
module.exports = function (client, options) {
  client.search(options.query, options, function (result) {
    return result instanceof Error
      ? callback(result)
      : callback(null, result);
  });
};