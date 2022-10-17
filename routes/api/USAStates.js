const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const USAState = require("../../models/USAState");

router.get("/test", (req, res) => res.json({ msg: "This is the states route" }));

// retrieves all states
router.get('/', (req, res) => {
  USAState.find()
      .sort({ date: -1 })
      .then(USAStates => res.json(USAStates))
      .catch(err => res.status(404).json({ nostatesfound: 'No states found' }));
});

// retrieves individual state
router.get('/:id', (req, res) => {
  USAState.findById(req.params.id)
      .then(USAState => res.json(USAState))
        .catch(err =>
            res.status(404).json({ nostatefound: 'No state found with that ID' })
        );
});

// we create states on the backend, don't need to be logged in and no validation errors generated
router.post('/', (req, res) => {
  
  const newUSAState = new USAState({
    posts: req.body.posts,
    name: req.body.name,
  });
  
  newUSAState.save().then(USAState => res.json(USAState));
}
);

module.exports = router;