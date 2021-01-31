// Routes with posts

// basic imports
import express from 'express';

// controller imports
import { getPosts, createPost } from '../controllers/postsControllers.js';

// router
const router = express.Router();

// route for front page, executed when user visits route
// localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPost);

export default router;