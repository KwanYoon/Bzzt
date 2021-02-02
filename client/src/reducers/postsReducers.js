// reducer for the posts

export default (posts = [], action) => {
    switch (action.type) {
        // fetches all posts
        case 'FETCH_ALL':
            // the payload for FETCH_ALL is all the posts from postsActions
            return action.payload;
        case 'CREATE':
            // returns array of all existing posts + new post from payload
            return [...posts, action.payload];
        default:
            return posts;
    }
}