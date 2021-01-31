// model for the posts

// basic imports
import mongoose from 'mongoose';

// schema (what every post will have)
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

// Creating and exporting a mongoose model of a Post
const Post = mongoose.model('Post', postSchema);

export default Post;