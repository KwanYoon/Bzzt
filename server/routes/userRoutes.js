// Routes with user signin/signup

// basic imports
import express from 'express';

// controller imports
import { signin, signup } from '../controllers/userControllers.js';

// router
const router = express.Router();

// route for front page, executed when user visits route
// localhost:5000/posts
router.post('/signin', signin); // send information from login form to backend
router.post('/signup', signup);

export default router;