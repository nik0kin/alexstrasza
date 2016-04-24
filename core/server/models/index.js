/**
 * Dependencies
 */

var _ = require('lodash');

var models;

/**
 * Expose all models
 */

exports = module.exports;

models = [
  'achievement',
];

function init () {
  //exports.Base = require('./base');
  exports.Bookshelf = require('../dbconnect');

  models.forEach(function (name) {
    _.extend(exports, require('./' + name));
  });
}

/**
 * Expose `init`
 */

exports.init = init;
