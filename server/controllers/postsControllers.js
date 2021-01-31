// model import
import Post from '../models/postModel.js';

// Controllers for posts route

// finding something takes time, so async
export const getPosts = async (req, res) => {
    try {
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