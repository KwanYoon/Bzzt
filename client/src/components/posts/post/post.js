import React from 'react';
import { Card, CardMedia } from '@material-ui/core';
import moment from 'moment';

import useStyles from './postStyles';

// receives post from posts.js and adds logic to the data
const Post = ({ post }) => {
    const classes = useStyles();

    return (
        <Card className={classes.postCard}>
            <CardMedia className={classes.media} image={post.selectedFile} />
            <div className={classes.content}>
                <h1>{post.title}</h1>
                <h1>{post.creator}</h1>
                <h2>{moment(post.createdAt).fromNow()}</h2>
                <h3>{post.message}</h3>
                <h4>{post.tags.map((tag) => `#${tag} `)}</h4>
            </div>
        </Card>
    )
}

export default Post;