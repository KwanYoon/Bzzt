import React from 'react';
import { Card, CardMedia } from '@material-ui/core';
import moment from 'moment';

import useStyles from './postStyles';

// receives post from posts.js and adds logic to the data
const Post = ({ post }) => {
    const classes = useStyles();

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
            </Card>
            <hr className={classes.line} />
        </div>
    )
}

export default Post;