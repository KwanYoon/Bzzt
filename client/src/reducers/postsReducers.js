// reducer for the posts

export default (posts = [], action) => {
    switch (action.type) {
        // fetches all posts
        case 'FETCH_ALL':
            return posts;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}