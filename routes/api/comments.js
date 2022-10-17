const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Comment = require("../../models/Comment");
const comments = require("../../validation/comments");
const validateCommentInput = require("../../validation/comments")
const upload = require("../../services/photo_upload");
const { findOneAndUpdate } = require("../../models/Comment");

router.get("/test", (req, res) => res.json({ msg: "This is the comments route" }));

// retrieves all comments - temporary
router.get('/', (req, res) => {
  Comment.find()
      .then(comments => res.json(comments))
      .catch(err => res.status(404).json({ nocommentsfound: 'No comments found' }));
});

// retrieves all comments on an individual post
router.get('/post/:post_id', (req, res) => {
    Comment.find({post: req.params.post_id})
        .then(comments => res.json(comments))
        .catch(err =>
            res.status(404).json({ nocommentsfound: 'No comments found on that post' }
        )
    );
});

// retrieves individual comment
router.get('/:id', (req, res) => {
    Comment.findById(req.params.id)
        .then(comment => res.json(comment))
        .catch(err =>
            res.status(404).json({ nocommentfound: 'No comment found' })
        );
});

// user can create comments, protected
  router.post('/', passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateCommentInput(req.body);
      
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newComment = new Comment({
        body: req.body.body,
        author: req.user.id,
        post: req.body.post
      });
      
      newComment.save().then(comment => res.json(comment));
    }
  );

  // user can edit their existing comment
  router.patch("/update/:id", async (req, res) => {
    const comment = await Comment.findById(req.params.id)
    if (!comment) return res.status(404).json({ nocommentfound: 'No comment found' })
    
    comment.body = req.body.body
    comment.save()
      .then(comment => res.json(comment))
      .catch(err => res.status(422).json(err))
  })

 // user deletes comment
router.delete('/:id', (req, res) => {
  Comment.findById(req.params.id)
      .then(comment => comment.remove())
      .then(res.json("Comment deleted"))
      .catch(err =>
          res.status(404).json({ nocommentfound: 'No comment found' })
      );
});


module.exports = router;