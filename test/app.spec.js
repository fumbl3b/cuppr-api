'use strict';

const app = require('../src/app');

describe('App', () => {

  describe('GET / endpoint', () => {

    it('should respond with status 200 and "Hello, boilerplate!"', () => {
      return supertest(app)
        .get('/')
        .expect(200, 'Hello, boilerplate!');
    });

  });

});