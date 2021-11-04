const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  active: {
    type: Boolean,
    default: false,
  },
}, { 
  timestamps: true,
});

const Post = mongoose.model("User", schema);

module.exports = Post;
