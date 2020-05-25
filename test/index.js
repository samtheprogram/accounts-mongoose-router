'use strict';

const assert = require('assert');
const request = require('supertest');
require('should');
const app = require('../');

const MONGODB_ID_LENGTH = 24;

after(function () {
  return new Promise((resolve, reject) => {
    const task = app.closeDatabase();
    task.then(resolve);
    task.catch(reject);
  });
});

describe('module', function () {
  it('exports an express app', function () {
    assert.equal(typeof app.use, 'function' );
    assert.equal(typeof app.render, 'function');
  });
});

describe('/', function () {
  describe('GET /', function () {
    it('should return a list', function (done) {
      request(app)
        .get('/')
        .send({})
        .expect(200)
        .end((_, res) => {
          res.body.should.be.Array();
          done();
        });
    });
  });

  describe('POST /', function () {
    it('should create a document', function (done) {
      request(app)
        .post('/')
        .send({ name: 'foobar' })
        .expect(201)
        .end((_, res) => {
          res.body._id.should.be.String();
          res.body._id.should.have.length(MONGODB_ID_LENGTH);
          res.body.name.should.be.eql('foobar');
          done();
        });
    });
  });
});

