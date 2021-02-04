import React from 'react';
import { Container, CircularProgress, Grid, Button } from '@material-ui/core';
import useStyles from './postsStyles';
import { useSelector } from 'react-redux'; // Allows access to the global store

import Post from './post/post';

const Posts = () => {
    // from the store (state), grab posts (.posts)
    // name of the posts is from indexReducers
    const posts = useSelector((state) => state.posts);
    const reversePosts = posts.reverse();
    const classes = useStyles();
    var reverse = true;

    const reverseButton = () => {
        reverse = !reverse;
        console.log(reverse);
    }

    return (
        // if no posts, spinning circle
        // If there are posts, loop through the posts and return
        //   each post separately into post.js
        (posts.length === 0) ? <CircularProgress /> : (
            <Container className={classes.mainContainer}>
                <Button onClick={reverseButton} />
                {reverse 
                    ? posts.map((post) => (  
                        <Grid key={post._id}>
                            <Post post={post} />
                        </Grid>
                    ))
                    : posts.reverse().map((post) => (
                        <Grid key={post._id}>
                            <Post post={post} />
                        </Grid>
                    ))
                }
            </Container>
        )
    )
}

export default Posts;