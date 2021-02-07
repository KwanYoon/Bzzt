// Making api calls

// Allows making http requests to external resources
import axios from 'axios';

// url to backend
const url = 'http://localhost:5000/posts';

// Gets all posts in the database
export const fetchPosts = () => axios.get(url);

// Posts the new post into the backend url
export const createPost = (newPost) => axios.post(url, newPost);

// Updates post and sends to backend url/id
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);