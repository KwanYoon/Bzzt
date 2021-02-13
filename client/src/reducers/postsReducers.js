// reducer for the posts

const postActions = (posts = [], action) => {
    switch (action.type) {
        // fetches all posts
        case 'FETCH_ALL':
            // the payload for FETCH_ALL is all the posts from postsActions
            return action.payload;
        case 'CREATE':
            // returns array of all existing posts + new post from payload
            return [...posts, action.payload];
        case 'UPDATE':
        case 'LIKE':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
}

export default postActions;