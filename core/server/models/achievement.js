var lifeBookshelf = require('./').lifeBookshelf;

var Achievement;
var Achievements;

Achievement = lifeBookshelf.Model.extend({
  tableName: 'achievements',
});

Achievements = lifeBookshelf.Collection.extend({
  model: Achievement
});

module.exports = {
  Achievement: lifeBookshelf.model(Achievement),
  Achievements: lifeBookshelf.collection(Achievements)
};
