// A file for route functions

// importing model
import BlogPost from '../models/blogPost.js';

// These functions are async as finding BlogPost takes time

// grabbing blog posts
export const getBlogPosts = async (req, res) => {
    try {
        const blogPosts = await BlogPost.find();

        res.status(200).json(blogPosts);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

// creating a blog post
export const createBlogPost = async (req, res) => {
    const blogPost = req.body;
    const newBlogPost = new BlogPost(blogPost);

    try {
        await newBlogPost.save();

        res.status(201).json(newBlogPost);
    } catch (error) {
        res.status(409).json({ message: error });
    }
};