// # Life Server
// Handles the creation of an HTTP Server for ProjectLife
var Q = require('q');
var chalk = require('chalk');
var fs = require('fs');

var errors = require('./errors');
var config = require('./config');
var i18n = require('./i18n');

/**
 * ## LifeServer
 * @constructor
 * @param {Object} rootApp - parent express instance
 */
function LifeServer(rootApp) {
  this.rootApp = rootApp;
  this.httpServer = null;
  this.connections = {};
  this.connectionId = 0;

  // Expose config module for use externally.
  this.config = config;
}

/**
 * ## Public API methods
 *
 * ### Start
 * Starts the ghost server listening on the configured port.
 * Alternatively you can pass in your own express instance and let Ghost
 * start listening for you.
 * @param  {Object} externalApp - Optional express app instance.
 * @return {Promise} Resolves once Ghost has started
 */
LifeServer.prototype.start = function (externalApp) {
  var self = this;
  var rootApp = externalApp ? externalApp : self.rootApp;

  return Q.promise(function (resolve) {
    self.httpServer = rootApp.listen(
      config.server.port,
      config.server.host
    );

//    self.httpServer.on('connection', self.connection.bind(self));
    self.httpServer.on('listening', function () {
//      self.logStartMessages();
      resolve(self);
    });
  });
};

/**
 * ### Stop
 * Returns a promise that will be fulfilled when the server stops. If the server has not been started,
 * the promise will be fulfilled immediately
 * @returns {Promise} Resolves once Ghost has stopped
 */
LifeServer.prototype.stop = function () {
  var self = this;

  return Q.promise(function (resolve) {
    if (self.httpServer === null) {
      resolve(self);
    } else {
      self.httpServer.close(function () {
//        self.httpServer = null;
//        self.logShutdownMessages();
        resolve(self);
      });

//      self.closeConnections();
    }
  });
};

/**
 * ### Restart
 * Restarts the ghost application
 * @returns {Promise} Resolves once Ghost has restarted
 */
LifeServer.prototype.restart = function () {
  return this.stop().then(this.start.bind(this));
};

module.exports = LifeServer;
