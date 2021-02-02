// Making api calls

// Allows making http requests to external resources
import axios from 'axios';

// url to backend
const url = 'http://localhost:5000/posts';

// Gets all posts in the database
export const fetchPosts = () => axios.get(url);