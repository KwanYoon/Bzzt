// Routes with posts

// basic imports
import express from 'express';

// controller imports
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/postsControllers.js';

// router
const router = express.Router();

// route for front page, executed when user visits route
// localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost); // we wish to know id before editing
router.delete("/:id", deletePost); // we wish to know id before deleting
router.patch('/:id/likePost', likePost); // we with to know the id and the number of likes

export default router;