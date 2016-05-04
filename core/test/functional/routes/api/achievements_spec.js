/*global describe, it, before, after */

var should = require('should');
var supertest = require('supertest');
var _ = require('lodash');

var initLife = require('../../../../../core');
var testUtils = require('../../../utils');

var request;

describe('Achievement API', function () {
  //var accesstoken = '';

  before(function (done) {
    initLife().then(function (ghostServer) {
      request = supertest.agent(ghostServer.rootApp);
      done();
    }).catch(done);
  });


  describe('Add', function () {
    it('can create a simple achievement', function (done) {
      var simpleCondition = {
        achieved: false,
        description: 'create a new achievement with a mocha test'
      };
      var newAchievement = {
        title: 'Add Simple Achievement',
        description: '',
        category_id: 0,
        achieved: false,
        conditions: [simpleCondition]
      };

      request.post(testUtils.API.getApiQuery('achievements/'))
        .send(newAchievement)
        .expect(200)
        .end(function (err, res) {
          var jsonResponse = res.body;

          console.log(jsonResponse);

          done()
        });

    });
  });
});