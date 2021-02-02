import React from 'react';
import {  Container } from '@material-ui/core';
import useStyles from './postsStyles';

import Post from './post/post';

const Posts = () => {
    const classes = useStyles();

    return (
        <Container className={classes.mainContainer}>
            <h1>Posts</h1>
            <Post />
            <Post />
        </Container>
    )
}

export default Posts;