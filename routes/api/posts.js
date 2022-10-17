const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Post = require("../../models/Post");
const posts = require("../../validation/posts");
const validatePostInput = require("../../validation/posts")
const upload = require("../../services/photo_upload");


router.get("/test", (req, res) => res.json({ msg: "This is the posts route" }));

// retrieves all posts
router.get('/', (req, res) => {
  Post.find()
      .sort({ date: -1 })
      .then(posts => res.json(posts))
      .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
});

// retrieves single user's posts (user's posts index)
router.get('/user/:user_id', (req, res) => {
    Post.find({user: req.params.user_id})
        .then(posts => res.json(posts))
        .catch(err =>
            res.status(404).json({ nopostsfound: 'No posts found from that user' }
        )
    );
});

// retrieves individual post
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err =>
            res.status(404).json({ nopostfound: 'No post found with that ID' })
        );
});

// user can create posts, protected
  router.post('/upload', passport.authenticate('jwt', { session: false }), upload.single('photo'),
    async (req, res) => {
      const { errors, isValid } = validatePostInput(req.body);

      const user = await User.findById(req.user.id)

      if (!isValid) {
        return res.status(400).json(errors);
      }
      
      const newPost = new Post({
        caption: req.body.caption,
        user: req.user.id,
        photo: req.file,
        stateName: req.body.stateName

      }); 
      if (!req.file) {
        return res.status(401).json({ errors: [{ photo: "Please upload a file" }] })
      }

      newPost.save(); 
      res.json(newPost.toObject());
      // res.send('Successfully uploaded')
    }
  );

    // user can edit their existing post
    router.patch("/update/:id", upload.single('photo'), async (req, res) => {
      const post = await Post.findById(req.params.id)
      if (!post) return res.status(404).json({ nopostfound: 'No post found' })
  
    //   try {
    //   const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
    //     caption: req.body.caption,
    //     stateName: req.body.stateName,
    //     photo: req.file
    //   })
  
    //   res.send(updatedPost)
    // } catch (error) {
    //   res.status(422).json({ unprocessable: "Unable to update"})
    // } 
      post.caption = req.body.caption;
      post.stateName = req.body.stateName;
      post.save()
        .then(post => res.json(post))
        .catch(err => res.status(422).json(err))
    })
  
   // user deletes post
  router.delete('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => post.remove())
        .then(res.json("Post deleted"))
        .catch(err =>
            res.status(404).json({ nopostfound: 'No post found' })
        );
  });
  
module.exports = router;