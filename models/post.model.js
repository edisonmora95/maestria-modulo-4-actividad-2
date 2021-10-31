const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  text: {
    type: String,
    required: true,
    maxlength: 300,
    minlength: 5,
  },
  title: {
    type: String,
    required: true,
    maxlength: 300,
    minlength: 5,
  },
  author: {
    type: String,
    required: true,
  },
}, { 
  timestamps: true,
});

const Post = mongoose.model("Post", schema);

module.exports = Post;
