
// # API routes
var express = require('express');

var api = require('../api');
   
var apiRoutes;

apiRoutes = function apiRoutes(middleware) {
  var router = express.Router();

  // alias delete with del
  router.del = router.delete;

  router.get('/heartbeat', api.http(api.heartbeat));

  // ## Achievements
  //router.get('/achievements', authenticatePublic, api.http(api.posts.browse));

  router.post('/achievements', api.http(api.achievements.add));
  //router.get('/achievements/:id', authenticatePublic, api.http(api.achievements.read));
  //router.put('/achievements/:id', authenticatePrivate, api.http(api.achievements.edit));
  //router.del('/achievements/:id', authenticatePrivate, api.http(api.achievements.destroy));


  // API Router middleware
  router.use(middleware.api.errorHandler);

  return router;
};

module.exports = {
  apiBaseUri: '/projectlife/api',
  api: apiRoutes
};
