// Making api calls

// Allows making http requests to external resources
import axios from 'axios';

// url to backend
const API = axios.create({ baseURL: 'https://bzzt-social-media.herokuapp.com' });

// Gets all posts in the database
export const fetchPosts = () => API.get('/posts');

// Posts the new post into the backend url
export const createPost = (newPost) => API.post('/posts', newPost);

// Updates post and sends to backend url/id
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);

// Deletes posts
export const deletePost = (id) => API.delete(`/posts/${id}`);

// Likes posts
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

// Auth
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);