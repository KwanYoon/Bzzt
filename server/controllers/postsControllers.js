import mongoose from 'mongoose';
// model import
import Post from '../models/postModel.js';

// Controllers for posts route

// finding something takes time, so async
export const getPosts = async (req, res) => {
    try {
        // gets all the posts in the database
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error);
    }
};

export const createPost = async (req, res) => {
    // with post requests (index.js), we can do req.body
    const post = req.body;

    // Makes a new post with the schema given
    const newPost = new Post(post);

    try {
        // saves the created post
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updatePost = async (req, res) => {
    // because we set /:id in routes, the id will be in req.params
    const { id: _id } = req.params;

    // updated post sent from frontend
    const updatedPost = req.body;

    // Checking if mongoose object with the given id exists
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No posts with that id');

    // Finds the id and updates the post with the given updatedPost
    const updating = await Post.findByIdAndUpdate(_id, { ...updatedPost, _id }, { new: true });

    // Sends the json composed of the data
    res.json(updating);
};

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No posts with that id');

    await Post.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No posts with that id');

    const post = await Post.findById(id);
    const updatedPost = await Post.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

    res.json(updatedPost);
}