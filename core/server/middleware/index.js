var bodyParser  = require('body-parser');
var express = require('express');
var path = require('path');

var errors = require('../errors');
var routes = require('../routes');

var middleware;
var setupMiddleware;

middleware = {
  api: {
    errorHandler: errors.handleAPIError
  }
};

setupMiddleware = function setupMiddleware(achieveApp) {

  // Body parsing
  achieveApp.use(bodyParser.json({limit: '1mb'}));
  achieveApp.use(bodyParser.urlencoded({extended: true, limit: '1mb'}));

  // ### Routing

  achieveApp.use(express.static(path.join(__dirname, '../../webapp/dist/')))

  // Set up API routes
  achieveApp.use(routes.apiBaseUri, routes.api(middleware));


  // ### Error handling
  // 404 Handler
  //achieveApp.use(errors.error404);

  // 500 Handler
  //achieveApp.use(errors.error500);
};

module.exports = setupMiddleware;
// Export middleware functions directly
module.exports.middleware = middleware;
