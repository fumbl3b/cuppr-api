'use strict';

require('dotenv').config();
const supertest = require('supertest');
const knex = require('knex');
const app = require('../src/app');

describe('Testing all CuppR endpoints', () => {

  let db;

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.DATABASE_URL
    });
    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy());

  // before('clean the table', () => db('coffee_review').truncate());

  // afterEach('cleanup', () => db('coffee_review').truncate());

  const testReview = {
    author_id: 1,
    roaster_id: 1,
    display_name: 'David',
    roaster_name: 'Switchback Roasters',
    coffee_name: 'Ethiopia: YirgZ,',
    coffee_origin: 'Ethiopia',
    process_method: 'Washed/Wet',
    body: 'Scenester neutra truffaut, pug selfies cloud bread chambray DIY poke sed XOXO. Before they sold out fanny pack williamsburg, aute pariatur proident chicharrones retro helvetica bicycle rights ut exercitation hammock subway tile pug. Distillery tousled yuccie blue bottle aliquip. Kogi laboris man bun woke. Culpa quinoa raw denim palo santo bespoke iPhone authentic. Mustache mixtape keffiyeh pitchfork pug. Knausgaard id nulla, tumeric four loko adaptogen commodo bitters blue bottle ullamco.',
  };

  describe('GET /reviews', () => {

    it('should respond with status 200', () => {
      return supertest(app)
        .get('/reviews')
        .expect(200);
    });
  });

  describe('POST /reviews endpoint', () => {

    it('should respond 201 Resource Created with a correctly formatted coffee review', () => {
      return supertest(app)
        .post('/reviews')
        .send(testReview)
        .expect(201);
    });
  });
});