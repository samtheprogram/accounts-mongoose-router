'use strict';

const assert = require('assert');
const request = require('supertest');
const app = require('../')

describe('module', function () {
  it('exports an express app', function () {
    assert.equal(typeof app.use, 'function' );
    assert.equal(typeof app.render, 'function');
  });
});

describe('/', function () {
  describe('GET /', function () {
    it('should return "Hello, world!"', function (done) {
      request(app)
        .get('/')
        .send({})
        .expect(200, "Hello, world!", done)
    });
  });
});

