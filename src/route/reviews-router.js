const express = require('express');
const RoutesService = require('./routes-service');

const reviewsRouter = express.Router();
const jsonParser = express.json();

reviewsRouter
  .route('/')
  .get((req, res, next) => {
    RoutesService.getAllReviewsRefactor(req.app.get('db'),'coffee_review')
      .then(reviews => {
        res.json(reviews);
      })
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const { 
      display_name,
      roaster_name,
      coffee_name,
      coffee_origin, 
      process_method,
      body,
      author_id,
      roaster_id } = req.body;
    const newReview = { 
      display_name,
      roaster_name,
      coffee_name,
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
          .location(`/Reviews/${review.id}`)
          .json(review);
      })
      .catch(next);
  });


module.exports = reviewsRouter;