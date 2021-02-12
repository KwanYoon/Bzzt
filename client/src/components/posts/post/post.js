import React from 'react';
import { Card, CardMedia, Button } from '@material-ui/core';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import useStyles from './postStyles';
import { deletePost } from '../../../actions/postsActions';

// receives post from posts.js and adds logic to the data
const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <div>
            <Card className={classes.postCard}>
                <CardMedia className={classes.media} image={post.selectedFile} />
                <div className={classes.content}>
                    <h1>{post.title}</h1>
                    <h2>By: {post.creator}</h2>
                    <h5>{moment(post.createdAt).fromNow()}</h5>
                    <h4>{post.message}</h4>
                    <h4>{post.tags.map((tag) => `#${tag} `)}</h4>
                </div>
                <Button style={{color: 'white'}} onClick={() => setCurrentId(post._id)} className={classes.button}>EDIT</Button>
                <Button style={{color: 'white'}} onClick={() => dispatch(deletePost(post._id))} className={classes.button}>Delete</Button>
            </Card>
            <hr className={classes.line} />
        </div>
    )
}

export default Post;