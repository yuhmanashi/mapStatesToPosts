const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const USAStateSchema = new Schema({
  posts: {
    type: Array,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },

});

module.exports = USAState = mongoose.model('USAState', USAStateSchema);
