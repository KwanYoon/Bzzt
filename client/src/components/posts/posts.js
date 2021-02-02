import React from 'react';
import { Container } from '@material-ui/core';
import useStyles from './postsStyles';
import { useSelector } from 'react-redux'; // Allows access to the global store

import Post from './post/post';

const Posts = () => {
    // from the store (state), grab posts (.posts)
    // name of the posts is from indexReducers
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);

    return (
        <Container className={classes.mainContainer}>
            <h1>Posts</h1>
            <Post />
            <Post />
        </Container>
    )
}

export default Posts;