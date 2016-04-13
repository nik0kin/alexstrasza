var serverInit = require('./core/server');

serverInit()
  .then(function (lifeServer) {
    return lifeServer.start()
      .then(function () {
        console.log('Life Server started.')
      });
  })
  .fail(function (err) {
    console.log('Life Server start fail:');
    console.log(err);
  })
