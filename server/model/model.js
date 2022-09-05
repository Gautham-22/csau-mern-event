const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    name : String,
    location : String,
    image : String,
    caption : String,
});

const Post = mongoose.model("post",postSchema);

module.exports = Post;