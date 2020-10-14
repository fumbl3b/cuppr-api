const express = require('express');
const app = require('../app');
const RoutesService = require('./routes-service');

const reviewsRouter = express.Router();
const jsonParser = express.json();

reviewsRouter
  .route('/')
  .get((req, res, next) => {
    RoutesService.getAllItems(req.app.get('db'),'coffee_review')
      .then(reviews => {
        console.log(reviews);
        res.json(reviews);
      })
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const { 
      coffee_name,
      coffee_origin, 
      process_method,
      body,
      author_id,
      roaster_id } = req.body;
    const newReview = { coffee_name,
      coffee_origin, 
      process_method,
      body,
      author_id,
      roaster_id };

    for (const [key, value] of Object.entries(newReview)) {
      if (value == null) {
        return res.status(400).json({
          error: { message: `Missing '${key}' in request body` }
        });
      }
    }
    RoutesService
      .insertItem(req.app.get('db'), 'coffee_review', newReview)
      .then(review => {
        res
          .status(201)
          .location(`/reviews/${review.id}`)
          .json(review);
      })
      .catch(next);
  });

module.exports = reviewsRouter;