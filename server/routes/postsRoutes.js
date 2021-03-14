// Routes with posts

// basic imports
import express from 'express';
import auth from '../middleware/authMiddleware.js';

// controller imports
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/postsControllers.js';

// router
const router = express.Router();

// route for front page, executed when user visits route
// localhost:5000/posts
router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost); // we wish to know id before editing
router.delete("/:id", auth, deletePost); // we wish to know id before deleting
router.patch('/:id/likePost', auth, likePost); // we with to know the id and the number of likes

export default router;