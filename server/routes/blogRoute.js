// routes that connect to the server

// Basic imports
import express from 'express';
import { getBlogPosts, createBlogPost } from '../controllers/routeController.js';

// Setting up router
const router = express.Router();

// Routes
// Executes once someone visits the site/
router.get('/', getBlogPosts);
router.post('/', createBlogPost);

// exporting router
export default router;