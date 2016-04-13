
// based on patterns from Ghost - https://github.com/TryGhost/Ghost/blob/master/core/server/api/index.js 

var _ = require('lodash');

var achievements = require('./achievements');

var init;
var http;

init = function () {

};

http = function http(apiMethod) {
  return function apiHandler(req, res, next) {
    // We define 2 properties for using as arguments in API calls:
    var object = req.body,
      options = _.extend({}, req.files, req.query, req.params, {
        context: {
          user: (req.user && req.user.id) ? req.user.id : null
        }
      });

    // If this is a GET, or a DELETE, req.body should be null, so we only have options (route and query params)
    // If this is a PUT, POST, or PATCH, req.body is an object
    if (_.isEmpty(object)) {
      object = options;
      options = {};
    }

    return apiMethod(object, options).then(function onSuccess(response) {
    //  // Add X-Cache-Invalidate, Location, and Content-Disposition headers
    //  return addHeaders(apiMethod, req, res, (response || {}));
    //}).then(function then(response) {
      if (req.method === 'DELETE') {
        return res.status(204).end();
      }

      // Send a properly formatting HTTP response containing the data with correct headers
      res.json(response || {});
    }).catch(function onAPIError(error) {
      // To be handled by the API middleware
      next(error);
    });
  };
};

/**
 * ## Public API
 */
module.exports = {
    // Extras
    init: init,
    http: http,
    // API Endpoints
    achievements: achievements,
    // conditions:
    // stats:
    // achievementProgress:
    // statProgress:
};
