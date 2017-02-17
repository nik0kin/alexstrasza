var Q = require('q');

var dataProvider = require('../models');


var achievements = {};

/**
 * ## Add achievement
 *      :)
 * @param {Achievement} object to create
 * @param {{context}} options
 * @returns {Promise<Achievement>} Newly created achievement
 */
achievements.add = function add(object, context) {
  var newAchievement = dataProvider.Achievement.forge(object);
  return newAchievement.save()
    .then(function (savedAchievement) {
      return savedAchievement;
    });
};

achievements.browse = function browse(object, context) {
  return dataProvider.Achievement.fetchAll()
    .then(function (browsedAchievements) {
      return browsedAchievements;
    });
};

module.exports = achievements;
