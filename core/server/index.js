// # Bootup

// Module dependencies
var express     = require('express');
var Q = require('q');

var Bookshelf = require('./dbconnect');
var i18n = require('./i18n');
var middleware  = require('./middleware');
var models = require('./models');
var LifeServer = require('./life-server');


// ## Initialise ProjectLife
// Sets up the express server instances, runs init on a bunch of stuff, configures views, helpers, routes and more
// Finally it returns an instance of LifeServer
function init(options) {
  // Get reference to an express app instance.
  var achieveApp = express();

  // ### Initialisation
  // The server and its dependencies require a populated config
  // It returns a promise that is resolved when the application
  // has finished starting up.

  // Initialize Internationalization
  i18n.init();

  // Load our config.js file from the local file system.
  return Q().then(function () {
    // Initialise the models
    models.init();
  }).then(function () {
      // ##Configuration

      // ## Middleware and Routing
      middleware(achieveApp);

      return new LifeServer(achieveApp);
  });
}

module.exports = init;
