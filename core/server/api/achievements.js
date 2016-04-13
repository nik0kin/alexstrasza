var Q = require('q');

var achievements = {};


/**
 * ## Add user
 * The newly added user is invited to join the blog via email.
 * @param {User} object the user to create
 * @param {{context}} options
 * @returns {Promise<User>} Newly created user
 */
achievements.add = function add(object, options) {
  return Q.promise(function (resolve, reject) {
    resolve({success: true});
  });
};

module.exports = achievements;
