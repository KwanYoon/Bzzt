// Basic imports
import mongoose from 'mongoose';

// Schemas give uniformity to documents by giving what each document requies
const blogPostSchema = mongoose.Schema({
    title: String,
    message: String,
    tags: [String],
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;