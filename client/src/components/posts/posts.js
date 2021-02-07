import React from 'react';
import { Container, CircularProgress, Grid, Button } from '@material-ui/core';
import useStyles from './postsStyles';
import { useSelector, useDispatch } from 'react-redux'; // Allows access to the global store

import Post from './post/post';
import { reversePosts } from './../../actions/postsActions';

const Posts = ({ setCurrentId }) => {
    // from the store (state), grab posts (.posts)
    // name of the posts is from indexReducers
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    const dispatch = useDispatch();

    const buttonOldFirst = () => {
        dispatch(reversePosts(true));
    }

    const buttonNewFirst = () => {
        dispatch(reversePosts(false));
    }

    return (
        // if no posts, spinning circle
        // If there are posts, loop through the posts and return
        //   each post separately into post.js
        (posts.length === 0) ? <CircularProgress /> : (
            <Container className={classes.mainContainer}>
                <Button onClick={buttonOldFirst} />
                <Button onClick={buttonNewFirst} />
                {posts.map((post) => (  
                    <Grid key={post._id}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Container>
        )
    )
}

export default Posts;