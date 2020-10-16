const express = require('express');
const RoutesService = require('./routes-service');

const reviewsRouter = express.Router();
const jsonParser = express.json();

reviewsRouter
  .route('/')
  .get((req, res, next) => {
    RoutesService.getAllReviewsRefactor(req.app.get('db'),'coffee_review')
      .then(reviews => {
        console.log(reviews);
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
          .location(`/reviews/${review.id}`)
          .json(review);
      })
      .catch(next);
  });

reviewsRouter
  .route('/:review_id')
  .all(checkReviewExists)
  .get((req, res) => {
    res.json(res.review);
  });

reviewsRouter
  .route('/:review_id/comments')
  .all(checkReviewExists)
  .get((req, res, next) => {
    RoutesService.getCommentsForItem(
      req.app.get('db'),
      'comment',
      req.params.review_id
    )
    .then(comments => {
      res.json(comments)
    })
    .catch(next);
  });

async function checkReviewExists(req, res, next) {
  try {
    const review = await RoutesService.getItemById(
      req.app.get('db'),
      'coffee_review',
      req.params.review_id
    )

    if (!review)
      return res.status(404).json({
        error: `Review doesn't exist`
      })
    
    res.review = review;
    next();
  } catch (error) {
      next(error);
  }
}


module.exports = reviewsRouter;