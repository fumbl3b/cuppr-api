const express = require('express');
const path = require('path');
const RoutesService = require('./routes-service');

const commentsRouter = express.Router();
const jsonBodyParser = express.json();

commentsRouter
  .route('/')
  .post(jsonBodyParser, (req, res, next) => {
    const { author_id, review_id, body } = req.body;
    const newComment = { author_id, review_id, body };

    for(const [key, value] of Object.entries(newComment)) {
      if (value == null) {
        return res.status(400).json({
          error: `Missing ${key} in request body`
        });
      }
    }

    // newComment.author_id = req.author_id;

    RoutesService.insertItem(
      req.app.get('db'),
      'comment',
      newComment
    )
      .then(comment => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${comment.id}`))
          .json(comment);
      });
  });

module.exports = commentsRouter;