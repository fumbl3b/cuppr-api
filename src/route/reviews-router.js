const express = require('express');
const RoutesService = require('./routes-service');

const reviewsRouter = express.Router();
const jsonParser = express.json();

reviewsRouter
  .route('/')
  .get((req, res, next) => {
    RoutesService.getAllItems(req.app.get('db'),'coffee_reviews')
      .then(reviews => {
        res.json(reviews);
      })
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const { 
      user_id,
      coffee_name, 
      roaster_name,
      roaster_id,
      coffee_origin,
      process_method,
      review_body } = req.body;
    const newReview = { user_id,
      coffee_name, 
      roaster_name,
      roaster_id,
      coffee_origin,
      process_method,
      review_body };

    for (const [key, value] of Object.entries(newReview)) {
      if (value == null) {
        return res.status(400).json({
          error: { message: `Missing '${key}' in request body` }
        });
      }
    }
    RoutesService
      .insertItem(req.app.get('db'), 'coffee_reviews', newReview)
      .then(review => {
        res
          .status(201)
          .location(`/reviews/${review.id}`)
          .json(review);
      })
      .catch(next);
  });

module.exports = reviewsRouter;