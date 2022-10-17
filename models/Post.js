const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  caption: {
    type: String,
    required: true
  },
  stateName: {
    type: String,
    required: true
  },
  photo: {
    type: Object
  },
  date: {
    type: Date,
    default: Date.now
  },

});

module.exports = Post = mongoose.model('post', PostSchema);

